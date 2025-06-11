import {BASE_URL} from "@env"

// 농작물 이름 조회
export const getCropsNameApi = async () => {
    const data = await fetch(`${BASE_URL}/crops/name`)
    const res = await data.json();
    return res.data
}

// 선택된 농작물 정보 조회
export const getCropsInfoApi = async (name: string) => {
    const data = await fetch(`${BASE_URL}/select/crop?name=${name}`)
    const res = await data.json();
    return res.data
}
