import style from './sideBar.module.css';
import SideBarIcon from "./SideBarIcon";
import {MdDashboard} from 'react-icons/md';

export default function SideBar(){

    return (
        <div className={style.container}>
            <SideBarIcon>
                <MdDashboard size={25} />
            </SideBarIcon>
        </div>
    )
}