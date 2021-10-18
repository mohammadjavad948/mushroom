import {api} from "./base";
import {headers} from "./auth";

export default function AllSubs(){

    return api.get('/sub', {
        headers: headers()
    })
}