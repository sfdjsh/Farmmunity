const connectDatabase = require("./db/mysql.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const cropRoutes = require("./route.js");
app.use("/crops", cropRoutes);
app.use("/select", cropRoutes)

app.listen(3000, (req, res) => {
  console.log("Server Running..");
});

app.get("/articles", async (req, res) => {
  const crop = req.query.crop;
  const orderBy = req.query.orderBy;

  const queryOrderBy =
    orderBy === "인기순"
      ? "order by like_cnt desc"
      : "order by a.updated_at desc";

  try {
    const connection = await connectDatabase();
    const [rows] = await connection.query(
      `SELECT 
      a.idx, a.title, a.image, a.category, 
      count(distinct c.idx) as comment_cnt, 
      count(distinct l.idx) as like_cnt 
      from articles a 
      left join comments c on a.idx = c.article_idx 
      left join likes l on a.idx = l.article_idx 
      ${crop !== "전체" ? `where a.category = ?` : ""}
      group by a.idx
      ${queryOrderBy}
      `,
      [crop]
    );
    if (rows.length === 0) {
      res.json({ data: null });
    } else {
      res.json({ data: rows });
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
});

app.get("/article/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const connection = await connectDatabase();
    const [article] = await connection.query(
      `select 
      a.idx, a.title, a.image, a.category, a.content,
      (select count(*) from comments where article_idx = a.idx) as comment_cnt,
      (select count(*) from likes where article_idx = a.idx) as like_cnt
      from articles a
      where idx = ?`,
      [id]
    );
    const [comment] = await connection.query(
      `select * from comments where article_idx = ?`,
      [id]
    );
    if (article.length === 0) {
      res.json({ data: null });
    } else {
      res.json({
        data: {
          article: article[0],
          comment: comment,
        },
      });
    }
  } catch (err) {
    console.error(err);
  }
});

app.get("/login", async (req, res) => {
  const { id, password } = req.body;
  try {
    const connection = await connectDatabase();
    const [user] = await connection.query("select * from users where id = ?", [
      id,
    ]);

    if (!user)
      return res
        .status(401)
        .json({ message: "아이디 또는 비밀번호가 틀렸습니다." });

    console.log(user[0]);

    const passwordMatch = await bcrypt.compare(password, user[0].password);
    if (!passwordMatch)
      return res
        .status(401)
        .json({ message: "아이디 또는 비밀번호가 틀렸습니다" });

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "로그인 성공" });
  } catch (err) {
    console.error(err);
  }
});

app.get("/signup", async (req, res) => {
  const { id, password, nickname, profileImg } = req.body;
  try {
    const connection = await connectDatabase();
    const [checkId] = await connection.query(
      `select * from users where id = ?`,
      [id]
    );

    if (!checkId)
      return res.status(401).json({ message: "아이디를 다시 확인해주세요." });

    const passwordHashed = await bcrypt.hash(password, 10);
    const [user] = await connection.query(
      "insert into users (id, password, nickname, profile_img) values (?, ?, ?, ?)",
      [id, passwordHashed, nickname, profileImg]
    );
    if (user) res.status(201).json({ message: "회원가입 성공" });
  } catch (err) {
    console.error(err);
  }
});
