import style from './workGroupItem.module.css';
import {WorkGroup} from "../../types";

export default function WorkGroupItem(props: {data: WorkGroup}){

    return (
        <div className={style.main} style={{borderColor: props.data.color}}>
            {props.data.name}
        </div>
    )
}