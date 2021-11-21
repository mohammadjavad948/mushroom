import {useQuery} from "react-query";
import {info} from "../../api/auth";
import Button from "../form/Button";
import {useAuthStore} from "../../store/authStore";

export default function UserInfo(){

    const {logout} = useAuthStore();
    const {data} = useQuery(['userInfo'], info)

    return (
        <div className="col-12">
            <div className="pb-2">
                اطلاعات حساب کاربری:
            </div>
            <div>
                {data?.data.username}
            </div>
            <div>
                {data?.data.isVerified ? 'تایید شده' : 'تایید نشده'}
            </div>
            <div>
                ساخته شده در
                {new Date(data?.data.createdAt || '').toLocaleDateString('fa')}
            </div>
            <div>
                <Button onClick={() => logout()}>
                    خروج
                </Button>
            </div>
        </div>
    )
}