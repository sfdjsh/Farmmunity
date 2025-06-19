import {BASE_URL} from "@env"
import { CropOrderByProps } from "../component/article/TotalArticle";

export const getTotalArticlesApi = async ({selectedCrop, orderBy}: CropOrderByProps) => {
    const data = await fetch(`${BASE_URL}/articles?crop=${selectedCrop}&orderBy=${orderBy}`)
    const res = await data.json();
    console.log(res)
    return res.data
}

export const getDetailArticleApi = async (id: number) => {
    const data = await fetch(`${BASE_URL}/article/${id}`)
    const res = await data.json();
    return res.data
}