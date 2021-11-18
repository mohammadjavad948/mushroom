import style from './sideBarIcon.module.css';
import {useDrag} from "@use-gesture/react";
import {useSpring, a, useTransition, config} from "react-spring";
import {useOtherInfoStore} from "../../store/OtherInfoStore";
import {useState} from "react";

export default function SideBarIcon(props: {children: any, click?: any,isActive: boolean, draggable?: boolean, id?: string, label: string}){

    const [hovering, setHover] = useState(false);

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
                setHover(false)
                setDragging(true, props.id || '');
            } else {
                setTimeout(() => {
                    setDragging(false, '');
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
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {props.children}
            <LabelAnimation show={hovering}>
                <Label label={props.label} />
            </LabelAnimation>
        </a.div>
    )
}

function LabelAnimation(props: {show: boolean, children: any}){
    const transitions = useTransition(props.show, {
        from: {
            opacity: 0,
            scale: 0.8
        },
        enter: {
            opacity: 1,
            scale: 1
        },
        leave: {
            opacity: 0,
            scale: 0.8
        },
        config: config.gentle
    } as any) as any;

    return transitions(
            (styles, item) => item && (
                <a.div
                    style={styles}
                    className={style.label}
                >
                    {props.children}
                </a.div>
            )
    )

}

function Label(props: {label: string}){

    return (
        <div>
            {props.label}
        </div>
    )
}