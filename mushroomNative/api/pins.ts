import {api} from "./base";
import {headers} from "./auth";

export function allPins(groupId: number){

    return api.get(`/pins/${groupId}`, {
        headers: headers()
    })
}