import {api} from "./base";
import {useAuthStore} from "../stores/authStore";

export function login(data: any){

    return api.post('/auth/login', data);
}

export function info(){

    return api.get('/auth/info', {
        headers: headers()
    });
}

export function headers(){
    return {
        auth: useAuthStore.getState().token
    }
}