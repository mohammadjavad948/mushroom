import {api} from "./base";
import {headers} from "./auth";

export function AllWorkGroups(){

    return api.get('/work-group', {
        headers: headers()
    })
}

export function CreateWorkGroup(data){

    return api.post('/work-group', data, {
        headers: headers()
    })
}