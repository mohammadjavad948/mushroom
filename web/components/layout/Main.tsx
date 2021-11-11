import style from '../../styles/main.module.css';
import SideBar from "../sideBar/SideBar";
import HelperPage from "../helperPage/HelperPage";
import {useOtherInfoStore} from "../../store/OtherInfoStore";


export default function MainLayout(props: {children?: any}){

    const {helperPageEnable} = useOtherInfoStore();

    return (
        <div className={style.container}>
            <div style={{direction: 'rtl'}} className={style.DataContainer}>
                {props.children}
            </div>
            {helperPageEnable && (
                <HelperPage>
                    hmm
                </HelperPage>
            )}
            <SideBar />
        </div>
    )
}