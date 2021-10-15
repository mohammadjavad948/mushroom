import {api} from "./base";
import {headers} from "./auth";

export function AllWorkGroups(){

    return api.get('/work-group', {
        headers: headers()
    })
}