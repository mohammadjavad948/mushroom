import style from '../../styles/main.module.css';
import SideBar from "../sideBar/SideBar";
import HelperPage from "../helperPage/HelperPage";
import {useOtherInfoStore, usePersistableOtherInfo} from "../../store/OtherInfoStore";
import DropComponentHere from "../helperPage/DropHere";
import {componentInfo} from "../ComponentInfo";


export default function MainLayout(props: {children?: any}){

    const {helperPageEnable} = useOtherInfoStore();

    return (
        <div className={style.container}>
            <div style={{direction: 'rtl'}} className={style.DataContainer}>
                {props.children}
            </div>
            {helperPageEnable && (
                <HelperPageRenderer />
            )}
            <SideBar />
        </div>
    )
}

function HelperPageRenderer(){

    const {activePageId} = usePersistableOtherInfo();

    function renderer(id: any){
        return componentInfo[id] || <DropComponentHere />
    }

    return (
        <HelperPage>
            {activePageId !== 'drop' && <Close />}
            <div style={{width: '100%', height: '100%', display: 'flex', direction: 'rtl'}}>
                {renderer(activePageId)}
            </div>
        </HelperPage>
    )
}

function Close(){

    const {setHelperPageActivePage} = usePersistableOtherInfo();

    return (
        <div style={{width: '100%', padding: '5px', direction: 'rtl'}}>
            <span
                style={{fontSize: '14px', cursor: "pointer"}}
                onClick={() => setHelperPageActivePage('drop')}
            >
                بستن
            </span>
        </div>
    )
}