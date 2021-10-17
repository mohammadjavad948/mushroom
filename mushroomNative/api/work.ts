import {api} from "./base";
import {headers} from "./auth";

export function getWork(id: number){

    return api.get('/work/' + id, {
        headers: headers()
    })
}

export function createWork(data){

    return api.post('/work', data, {
        headers: headers()
    })
}

export function updateWork(id: number, data: any){

    return api.patch('/work/' + id, data, {
        headers: headers()
    })
}

export function removeWork(id: number){

    return api.delete('/work/' + id, {
        headers: headers()
    })
}