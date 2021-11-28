import style from './workItem.module.css';
import {Work} from "../../types";

export default function WorkItem(props: {data: Work}){

    return (
        <div className={style.container}>
            <div className={style.title}>
                {props.data.title}
            </div>
            <div>
                {props.data.description}
            </div>
        </div>
    )
}