import {useAuthStore} from "../../store/authStore";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function AuthWrapper(props: {children: any}){

    const {token} = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (token === ''){
            router.push('/login')
        }
    }, [token])

    return props.children
}