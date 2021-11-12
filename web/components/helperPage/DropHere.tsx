import style from './HelperPage.module.css';
import {useSpring, a} from "react-spring";
import {useOtherInfoStore} from "../../store/OtherInfoStore";

export default function DropComponentHere(){

    const {isDragging} = useOtherInfoStore();

    const animation = useSpring({
        backgroundColor: !isDragging ? 'rgba(255, 255, 255, 0)' : 'rgba(21, 255, 255, 0.43)',
    } as any) as any;

    function mouseUp(e: any){
        e.preventDefault();

        if (isDragging){
            console.log('drop!')
        }
    }

    return (
        <a.div
            onMouseUpCapture={mouseUp}
            className={style.dropHere}
            style={animation}
        >
            <h3>
                صفحه را اینجا بیاندازید
            </h3>
        </a.div>
    )
}