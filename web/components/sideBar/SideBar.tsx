import style from './sideBar.module.css';
import SideBarIcon from "./SideBarIcon";
import {MdDashboard, MdLayers, MdSettings} from 'react-icons/md';
import {BsLayoutSidebarInsetReverse} from 'react-icons/bs';
import {useRouter} from "next/router";
import {useOtherInfoStore} from "../../store/OtherInfoStore";

const ITEMS: {route: string, icon: any, exact?: boolean, id?: string, label: string}[] = [
    {
        route: '/',
        icon: <MdDashboard size={25} />,
        exact: true,
        id: 'dashboard',
        label: 'داشبورد'
    },
    {
        route: '/workgroup',
        icon: <MdLayers size={25} />,
        id: 'workgroups',
        label: 'گروه'
    },
    {
        route: '/setting',
        icon: <MdSettings size={25} />,
        id: 'setting',
        label: 'تنظیمات'
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
                        label={el.label}
                        draggable={true}
                        isActive={el.exact ? router.asPath === el.route : router.asPath.startsWith(el.route)}
                        click={() => router.push(el.route)}
                    >
                        {el.icon}
                    </SideBarIcon>
                )
            })}
            <SideBarIcon
                label={'صفحه کمکی'}
                isActive={helperPageEnable}
                click={() => toggleHelperPage()}
            >
                <BsLayoutSidebarInsetReverse size={25}/>
            </SideBarIcon>
        </div>
    )
}