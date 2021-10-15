import {api} from "./base";

export function login(data: any){

    return api.post('/auth/login', data);
}