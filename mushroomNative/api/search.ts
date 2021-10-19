import {api} from "./base";
import {headers} from "./auth";
import {WorkGroup} from "../types";
import {AxiosResponse} from "axios";

export function search(query: string){

    return api.get<WorkGroup[], AxiosResponse<WorkGroup[]>>('/search', {
        headers: headers(),
        params: {
            q: query
        }
    })
}