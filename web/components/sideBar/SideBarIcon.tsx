import style from './sideBarIcon.module.css';
import {useDrag} from "@use-gesture/react";
import {useSpring, a} from "react-spring";
import {useOtherInfoStore} from "../../store/OtherInfoStore";

export default function SideBarIcon(props: {children: any, click?: any,isActive: boolean, draggable?: boolean}){

    const {setDragging} = useOtherInfoStore();

    const [animation, api] = useSpring(() => {
        return {
            x: 0,
            y: 0,
            pointerEvents: 'auto'
        }
    })

    const bind = useDrag(({movement: [mx, my], down, tap}) => {
        if (props.draggable){

            if (down){
                setDragging(true);
            } else {
                setTimeout(() => {
                    setDragging(false);
                }, 200);
            }

            api.start({
                x: down ? mx : 0,
                y: down ? my : 0,
                pointerEvents: down ? 'none' : 'auto'
            });
        }

        if (tap){
            props.click();
        }
    }, {
        pointer: {
            capture: false
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