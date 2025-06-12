import {BASE_URL} from "@env"

export const getTotalArticlesApi = async () => {
    const data = await fetch(`${BASE_URL}/articles`)
    const res = await data.json();
    return res.data
}