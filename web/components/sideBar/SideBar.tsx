import style from './sideBar.module.css';
import SideBarIcon from "./SideBarIcon";
import {MdDashboard, MdLayers, MdSettings} from 'react-icons/md';
import {BsLayoutSidebarInsetReverse} from 'react-icons/bs';
import {useRouter} from "next/router";
import {useOtherInfoStore} from "../../store/OtherInfoStore";

const ITEMS: {route: string, icon: any, exact?: boolean, id?: string}[] = [
    {
        route: '/',
        icon: <MdDashboard size={25} />,
        exact: true,
        id: 'dashboard'
    },
    {
        route: '/workgroup',
        icon: <MdLayers size={25} />,
        id: 'workgroups'
    },
    {
        route: '/setting',
        icon: <MdSettings size={25} />,
        id: 'setting'
    }
]

export default function SideBar(){

    const {helperPageEnable, toggleHelperPage} = useOtherInfoStore();
    const router = useRouter();

    return (
        <div className={style.container}>
            {ITEMS.map((el, i) => {
                return (
                    <SideBarIcon
                        key={i}
                        id={el.id}
                        draggable={true}
                        isActive={el.exact ? router.asPath === el.route : router.asPath.startsWith(el.route)}
                        click={() => router.push(el.route)}
                    >
                        {el.icon}
                    </SideBarIcon>
                )
            })}
            <SideBarIcon
                isActive={helperPageEnable}
                click={() => toggleHelperPage()}
            >
                <BsLayoutSidebarInsetReverse size={25}/>
            </SideBarIcon>
        </div>
    )
}