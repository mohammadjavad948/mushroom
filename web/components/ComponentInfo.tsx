import MainWorkGroup from "./workgroup/main";
import MainDashboard from "./dashboard";

export const componentInfo = [
    {
        id: 'dashboard',
        component: <MainDashboard />
    },
    {
        id: 'workgroups',
        component: <MainWorkGroup />
    }
]