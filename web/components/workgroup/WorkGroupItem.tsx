import style from './workGroupItem.module.css';
import {WorkGroup} from "../../types";
import {useRouter} from "next/router";

export default function WorkGroupItem(props: {data: WorkGroup}){

    const router = useRouter();

    function click(){
        router.push('/workgroup/' + props.data.id)
    }

    return (
        <div
            className={style.main}
            style={{borderColor: props.data.color}}
            onClick={click}
        >
            {props.data.name}
        </div>
    )
}