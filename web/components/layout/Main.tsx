import style from '../../styles/main.module.css';
import SideBar from "../sideBar/SideBar";


export default function MainLayout(props: {children?: any}){

    return (
        <div className={style.container}>
            <div style={{direction: 'rtl'}} className={style.DataContainer}>
                {props.children}
            </div>
            <div className={style.smallContainer}>

            </div>
            <SideBar />
        </div>
    )
}