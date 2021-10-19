import {api} from "./base";
import {headers} from "./auth";
import {Work} from "../types";

export function getWork(id: number){

    return api.get<Work>('/work/' + id, {
        headers: headers()
    })
}

export function createWork(data){

    return api.post<Work>('/work', data, {
        headers: headers()
    })
}

export function updateWork(id: number, data: any){

    return api.patch<Work>('/work/' + id, data, {
        headers: headers()
    })
}

export function removeWork(id: number){

    return api.delete<Work>('/work/' + id, {
        headers: headers()
    })
}