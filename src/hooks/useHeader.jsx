import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";

const useHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [openDialog, setOpenDialog] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
            getUserProfile(tokenResponse);
        },
        onError: (error) => console.log(error),
    });

    const getUserProfile = (tokenInfo) => {
        axios
            .get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenInfo?.access_token}`, {
                headers: {
                    Authorization: `Bearer ${tokenInfo?.access_token}`,
                    Accept: "Application/json",
                },
            })
            .then((resp) => {
                console.log(resp);
                localStorage.setItem("user", JSON.stringify(resp.data));
                setOpenDialog(false);
                window.location.reload();
            });
    };

    return {
        user,
        setOpenMenu,
        openMenu,
        openDialog,
        setOpenDialog,
        login
    }
}

export default useHeader