import MainLayout from "../../components/layout/Main";
import PageTitle from "../../components/title/PageTitle";
import AuthWrapper from "../../components/auth/AuthWrapper";

export default function WorkGroup(){

    return (
        <AuthWrapper>
            <MainLayout>
                <div className="row">
                    <PageTitle title={"گروه"} />
                </div>
            </MainLayout>
        </AuthWrapper>
    )
}