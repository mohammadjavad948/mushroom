import {api} from "./base";
import {headers} from "./auth";

export function allWorkGroups(){

    return api.get('/work-group', {
        headers: headers()
    })
}

export function getWorkGroup(id: number){

    return api.get('/work-group/' + id, {
        headers: headers()
    })
}

export function createWorkGroup(data){

    return api.post('/work-group', data, {
        headers: headers()
    })
}