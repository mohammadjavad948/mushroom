import {useDrag} from "@use-gesture/react";
import {useOtherInfoStore} from "../../store/OtherInfoStore";
import {useSpring, a} from "react-spring";
import pageStyle from './HelperPage.module.css';

export default function HelperPage(props: {children: any}){

    const [animation, api] = useSpring(() => {
        return {
            x: 0,
        }
    })

    const bind = useDrag(({movement: [mx, my], down}) => {
        api.start({
            x: down ? mx : 0
        })
    }) as any;

    return (
        <div
            className={pageStyle.container}
        >
            <a.div
                className={pageStyle.smallDraggable}
                style={animation}
                {...bind()}
            />
            {props.children}
        </div>
    )
}