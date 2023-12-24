import { $authHost, $host } from ".";

export const getAllCategory = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createCategory = async (name) => {
    const {data} = await $authHost.post('api/category/createVacansy', name)
    return data
}

export const deleteCategory = async (id) => {
    const {data} = await $host.get('api/category/delete/' + id)
    return data
}

export const createReqCategory = async (name) => {
    const {data} = await $authHost.post('api/reqCategory/create', name)
    return data
}

export const getAllCategoryVacansyReq = async () => {
    const {data} = await $host.get('api/category/vacansyReq/')
    return data
}

export const getAllCategoryVacansy = async () => {
    const {data} = await $host.get('api/vacancy/all/category')
    return data
}