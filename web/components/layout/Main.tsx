import style from '../../styles/main.module.css';
import SideBar from "../sideBar/SideBar";


export default function MainLayout(props: {children?: any}){

    return (
        <div className={style.container}>
            <div className={style.DataContainer}>
                {props.children}
            </div>
            <SideBar />
        </div>
    )
}