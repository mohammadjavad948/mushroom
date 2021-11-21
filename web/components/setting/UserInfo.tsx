import {useQuery} from "react-query";
import {info} from "../../api/auth";

export default function UserInfo(){

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
        </div>
    )
}