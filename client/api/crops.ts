// 농작물 이름 조회
const getCropsNameApi = async () => {
    const data = await fetch("http://10.0.2.2:3000/crops/name")
    const res = await data.json();
    return res.data
}

export default getCropsNameApi