import { $authHost } from ".";

export const createReq = async (data) => {
    const {response} = await $authHost.post('api/req/create', data)
    return response
}

export const delVacancyCategory = async (id) => {
    const {res} = await $authHost.get('api/category/delete/vCategory/' + id)
    return res
}