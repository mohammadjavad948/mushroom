import {api} from "./base";
import {headers} from "./auth";

export function search(query: string){

    return api.get('/search/', {
        headers: headers(),
        params: {
            q: query
        }
    })
}