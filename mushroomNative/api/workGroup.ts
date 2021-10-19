import {api} from "./base";
import {headers} from "./auth";
import {WorkGroup} from "../types";

export function allWorkGroups(){

    return api.get<WorkGroup[]>('/work-group', {
        headers: headers()
    })
}

export function getWorkGroup(id: number){

    return api.get<WorkGroup>('/work-group/' + id, {
        headers: headers()
    })
}

export function createWorkGroup(data){

    return api.post<WorkGroup>('/work-group', data, {
        headers: headers()
    })
}

export function updateWorkGroup(id: number, data: any){

    return api.patch<WorkGroup>('/work-group/' + id, data, {
        headers: headers()
    })
}

export function removeWorkGroup(id: number){

    return api.delete<WorkGroup>('/work-group/' + id, {
        headers: headers()
    })
}