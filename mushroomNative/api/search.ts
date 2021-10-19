import {api} from "./base";
import {headers} from "./auth";
import {WorkGroup} from "../types";

export function search(query: string){

    return api.get<WorkGroup[]>('/search', {
        headers: headers(),
        params: {
            q: query
        }
    })
}