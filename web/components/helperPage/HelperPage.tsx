import {useDrag} from "@use-gesture/react";
import {usePersistableOtherInfo} from "../../store/OtherInfoStore";
import {useSpring, a, config} from "react-spring";
import pageStyle from './HelperPage.module.css';

export default function HelperPage(props: {children: any}){

    const {helperPageWidth, setHelperPageWidth} = usePersistableOtherInfo();

    const [animation, api] = useSpring(() => {
        return {
            x: 0,
            config: config.gentle
        }
    });

    const mainAnimation = useSpring({
        width: helperPageWidth,
        config: config.gentle
    } as any) as any;

    const bind = useDrag(({movement: [mx, my], down}) => {
        api.start({
            x: down ? mx : 0
        });

        if (!down){
            setHelperPageWidth(helperPageWidth + (-1 * mx));
        }
    }) as any;

    return (
        <a.div
            className={pageStyle.container}
            style={{
                width: mainAnimation.width.to((x: any) => `${x}px`),
            }}
        >
            <a.div
                className={pageStyle.smallDraggable}
                style={animation}
                {...bind()}
            />
            {props.children}
        </a.div>
    )
}