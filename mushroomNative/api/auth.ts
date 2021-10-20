import {api} from "./base";
import {useAuthStore} from "../stores/authStore";
import {User} from "../types";
import {AxiosResponse} from "axios";

export function login(data: any){

    return api.post('/auth/login', data);
}

export function info(){

    return api.get<User, AxiosResponse<User>>('/auth/info', {
        headers: headers()
    });
}

export function changePassword(data: any){

    return api.put<User, AxiosResponse<User>>('/auth/password/change', data,{
        headers: headers()
    });
}

export function headers(){
    return {
        auth: useAuthStore.getState().token
    }
}