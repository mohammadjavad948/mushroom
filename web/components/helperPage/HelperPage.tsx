import style from './helperPage.module.css';
import {useDrag} from "@use-gesture/react";
import {useOtherInfoStore} from "../../store/OtherInfoStore";
import {useSpring, a} from "react-spring";

export default function HelperPage(props: {children: any}){

    const [animation, api] = useSpring(() => {
        return {
            x: 0,
        }
    })

    const bind = useDrag(({offset}) => {
        api.start({
            x: offset[0]
        })
    }) as any;

    return (
        <div
            className={style.container}
        >
            <a.div
                className={style.smallDraggable}
                style={animation}
                {...bind()}
            />
            {props.children}
        </div>
    )
}