import AuthWrapper from "../../components/auth/AuthWrapper";
import MainLayout from "../../components/layout/Main";
import PageTitle from "../../components/title/PageTitle";
import {useRouter} from "next/router";
import {useQuery} from "react-query";

export default function WorkGroup(){

    const router = useRouter();

    const {} = useQuery(['workgroups'])

    return (
        <AuthWrapper>
            <MainLayout>
                <div className="d-flex" style={{flexWrap: 'wrap'}}>
                    <PageTitle title={"hmm"} />
                </div>
            </MainLayout>
        </AuthWrapper>
    )
}