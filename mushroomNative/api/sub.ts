import {api} from "./base";
import {headers} from "./auth";
import {WorkGroup} from "../types";

export function allSubs(){

    return api.get<WorkGroup[]>('/sub', {
        headers: headers()
    })
}

export function sub(groupId: number){

    return api.patch('/sub/' + groupId,{}, {
        headers: headers()
    })
}

export function unsub(groupId: number){

    return api.patch('/sub/unsub/' + groupId,{}, {
        headers: headers()
    })
}