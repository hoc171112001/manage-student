import axios from "axios"

let baseApi = 'http://localhost:3001'
export function login(data){
    return axios.post(baseApi+"/auth/login",data)
    .then(response=>{
        return response.data
    })
}
export function fetchStudent(data){
    const AuthStr = 'Bearer ' + data.token;
    let option = {
        'headers': { 'Authorization': AuthStr }
    }
    return axios.get(`${baseApi}/students?_page=${data._page}&_limit=${data._limit}`,option)
    .then((response) => {
        return {listData:response.data,total:response.headers['x-total-count']}
    })
}