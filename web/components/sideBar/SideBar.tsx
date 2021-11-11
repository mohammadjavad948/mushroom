import style from './sideBar.module.css';
import SideBarIcon from "./SideBarIcon";
import {MdDashboard, MdLayers} from 'react-icons/md';
import {useRouter} from "next/router";

export default function SideBar(){

    const router = useRouter();

    return (
        <div className={style.container}>
            <SideBarIcon click={() => router.push('/')}>
                <MdDashboard size={25} />
            </SideBarIcon>
            <SideBarIcon click={() => router.push('/workgroup')}>
                <MdLayers size={25} />
            </SideBarIcon>
        </div>
    )
}