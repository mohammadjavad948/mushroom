import MainLayout from "../components/layout/Main";
import AuthWrapper from "../components/auth/AuthWrapper";
import MainSetting from "../components/setting/Setting";

export default function Setting(){

    return (
        <MainLayout>
            <AuthWrapper>
                <MainSetting />
            </AuthWrapper>
        </MainLayout>
    )
}