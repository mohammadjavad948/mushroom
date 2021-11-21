import MainLayout from "../components/layout/Main";
import MainDashboard from "../components/dashboard";
import AuthWrapper from "../components/auth/AuthWrapper";

export default function Main(){

    return (
        <MainLayout>
            <AuthWrapper>
                <MainDashboard />
            </AuthWrapper>
        </MainLayout>
    )
}