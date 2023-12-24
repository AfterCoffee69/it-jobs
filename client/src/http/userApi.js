import { $authHost, $host } from ".";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
    const { data } = await $host.post("api/user/registration", { email, password, role: 'USER' })
    localStorage.setItem('token', data.token)
    localStorage.setItem('isAuth', true)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const { data } = await $host.post("api/user/login", { email, password })
    localStorage.setItem('token', data.token)
    localStorage.setItem('isAuth', true)
    return jwtDecode(data.token)
}

export const check = async () => {
    const response = await $authHost.post('api/user/check')
    localStorage.setItem('token', response.data)
    return response
}

export const addAdvice = async (advice) => {
    const response = await $host.post('api/user/advice/create', advice)
    return response
}

export const getAllAdvice = async () => {
    const response = await $authHost.get('api/user/advice/all')
    return response
}

export const delAdvice = async (id) => {
    const response = await $authHost.get('api/user/advice/del/' + id)
    return response
}

export const createOrder = async (orderData) => {
    const response = await $authHost.post('api/user/order/create', orderData)
    return response
}

export const getUserData = async (id) => {
    const response = await $authHost.get('api/user/' + id)
    return response
}

export const addLeetcodeUrl = async (data) => {
    const response = await $authHost.post('api/user/addLeetcode', data)
    return response
}

export const getLeetcodeData = async (name) => {
    const response = await $authHost.get('https://leetcode-stats-api.herokuapp.com/' + name)
    return response
}

export const addUserSkill = async (data) => {
    const response = await $authHost.post('api/user/addUserSkills', data)
    return response
}

export const getAllReq = async () => {
    const response = await $host.get('api/req/getAll')
    return response
}

export const AddVacancy = async (data) => {
    const response = await $authHost.post('api/vacancy/create', data)
    return response
}

export const getAllVacansy = async (name, categoryId) => {
    const data = await $host.get('api/vacancy/getAll', { params: name, categoryId })
    return data 
}

export const getVacancyById = async (id) => {
    const response = await $host.get('api/vacancy/getById/' + id)
    return response
}

export const createRes = async (data) => {
    const response = await $authHost.post('api/user/res/create', data)
    return response
}

export const updateVacancy = async (data) => {
    const response = await $authHost.post('api/vacancy/edit', data)
    return response
}