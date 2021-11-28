import AuthWrapper from "../../components/auth/AuthWrapper";
import MainLayout from "../../components/layout/Main";
import PageTitle from "../../components/title/PageTitle";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {getWorkGroup} from "../../api/workGroup";

export default function WorkGroup(){

    const router = useRouter();

    const {data, isLoading} = useQuery(
        ['workgroups', {id: router.query.id}],
        () => getWorkGroup(router.query.id as number)
    )

    return (
        <AuthWrapper>
            <MainLayout>
                <div className="d-flex" style={{flexWrap: 'wrap'}}>
                    <PageTitle title={isLoading ? "loading..." : data?.data.name} />
                </div>
            </MainLayout>
        </AuthWrapper>
    )
}