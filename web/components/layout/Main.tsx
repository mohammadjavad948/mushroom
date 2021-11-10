import style from '../../styles/main.module.css';
import SideBar from "../sideBar/SideBar";


export default function MainLayout(props: {children?: any}){

    return (
        <div className={style.container}>
            {props.children}
            <SideBar />
        </div>
    )
}