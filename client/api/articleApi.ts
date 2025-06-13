import {BASE_URL} from "@env"

export const getTotalArticlesApi = async (orderBy: string) => {
    const data = await fetch(`${BASE_URL}/articles?orderBy=${orderBy}`)
    const res = await data.json();
    return res.data
}