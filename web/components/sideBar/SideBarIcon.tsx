import style from './sideBarIcon.module.css';
import {useDrag} from "@use-gesture/react";
import {useSpring, a} from "react-spring";

export default function SideBarIcon(props: {children: any, click?: any,isActive: boolean, draggable?: boolean}){

    const [animation, api] = useSpring(() => {
        return {
            x: 0,
            y: 0
        }
    })

    const bind = useDrag(({movement: [mx, my], down, tap}) => {
        api.start({
            x: down ? mx : 0,
            y: down ? my : 0,
        });

        if (tap){
            props.click();
        }
    }) as any

    return (
        <a.div
            {...bind()}
            style={animation}
            className={`${style.container} ${props.isActive ? style.active : ''}`}
        >
            {props.children}
        </a.div>
    )
}