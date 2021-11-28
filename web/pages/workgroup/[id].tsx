import AuthWrapper from "../../components/auth/AuthWrapper";
import MainLayout from "../../components/layout/Main";
import PageTitle from "../../components/title/PageTitle";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {getWorkGroup} from "../../api/workGroup";
import WorkItem from "../../components/Work/WorkItem";

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

                    <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
                        {data?.data.works?.map((e, i) => {
                            return (
                                <WorkItem key={i}/>
                            )
                        })}
                    </div>
                </div>
            </MainLayout>
        </AuthWrapper>
    )
}