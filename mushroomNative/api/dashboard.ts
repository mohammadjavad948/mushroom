import {api} from "./base";
import {headers} from "./auth";


export function dashboard(){

    return api.get('/', {
        headers: headers()
    })
}