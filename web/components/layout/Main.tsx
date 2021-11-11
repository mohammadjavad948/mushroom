import style from '../../styles/main.module.css';
import SideBar from "../sideBar/SideBar";
import HelperPage from "../helperPage/HelperPage";
import {useMediaQuery} from "@react-hook/media-query";


export default function MainLayout(props: {children?: any}){

    const match = useMediaQuery('only screen and (min-width: 601px)')

    return (
        <div className={style.container}>
            <div style={{direction: 'rtl'}} className={style.DataContainer}>
                {props.children}
            </div>
            {match && (
                <HelperPage>
                    hmm
                </HelperPage>
            )}
            <SideBar />
        </div>
    )
}