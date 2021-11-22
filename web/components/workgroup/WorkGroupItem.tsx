import style from './workGroupItem.module.css';
import {WorkGroup} from "../../types";

export default function WorkGroupItem(props: {data: WorkGroup}){

    return (
        <div className={style.main}>
            {props.data.name}
        </div>
    )
}