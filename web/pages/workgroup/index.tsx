import MainLayout from "../../components/layout/Main";
import AuthWrapper from "../../components/auth/AuthWrapper";
import MainWorkGroup from "../../components/workgroup/main";

export default function WorkGroup(){

    return (
        <AuthWrapper>
            <MainLayout>
                <MainWorkGroup />
            </MainLayout>
        </AuthWrapper>
    )
}