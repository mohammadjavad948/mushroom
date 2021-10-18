import {api} from "./base";
import {headers} from "./auth";

export function allSubs(){

    return api.get('/sub', {
        headers: headers()
    })
}

export function sub(groupId: number){

    return api.patch('/sub/' + groupId,{}, {
        headers: headers()
    })
}