import PageTitle from "../title/PageTitle";
import UserInfo from "./UserInfo";

export default function MainSetting(){

    return (
        <div className="row">
            <PageTitle title={"تنظیمات"} />
            <UserInfo />
        </div>
    )
}