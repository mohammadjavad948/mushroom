import {api} from "./base";
import {useAuthStore} from "../stores/authStore";
import {User} from "../types";

export function login(data: any){

    return api.post('/auth/login', data);
}

export function info(){

    return api.get<User>('/auth/info', {
        headers: headers()
    });
}

export function headers(){
    return {
        auth: useAuthStore.getState().token
    }
}