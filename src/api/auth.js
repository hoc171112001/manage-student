import axios from "axios"

let baseApi = 'http://localhost:3001'
export function login(data){
    return axios.post(baseApi+"/auth/login",data)
    .then(response=>{
        return response.data
    })
}