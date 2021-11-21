import {useQuery} from "react-query";
import {info} from "../../api/auth";

export default function UserInfo(){

    const {data, isLoading} = useQuery(['userInfo'], info)

    return (
        <div className="col-12">
            {data?.data.username}
        </div>
    )
}