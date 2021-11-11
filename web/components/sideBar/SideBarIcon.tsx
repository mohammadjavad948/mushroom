import style from './sideBarIcon.module.css';

export default function SideBarIcon(props: {children: any, click?: any,isActive: boolean}){

    return (
        <div onClick={props.click} className={`${style.container} ${props.isActive ? style.active : ''}`}>
            {props.children}
        </div>
    )
}