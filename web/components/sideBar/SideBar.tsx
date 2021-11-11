import style from './sideBar.module.css';
import SideBarIcon from "./SideBarIcon";
import {MdDashboard, MdLayers} from 'react-icons/md';
import {useRouter} from "next/router";

const ITEMS = [
    {
        route: '/',
        icon: <MdDashboard size={25} />,
    },
    {
        route: '/workgroup',
        icon: <MdLayers size={25} />,
    }
]

export default function SideBar(){

    const router = useRouter();

    return (
        <div className={style.container}>
            {ITEMS.map((el, i) => {
                return (
                    <SideBarIcon
                        key={i}
                        isActive={router.asPath.startsWith(el.route)}
                        click={() => router.push(el.route)}
                    >
                        {el.icon}
                    </SideBarIcon>
                )
            })}
        </div>
    )
}