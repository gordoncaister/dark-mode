import {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage"

export const useDarkMode = () => {
    const [dark, setDark] = useLocalStorage('darkMode', false)
    useEffect(()=>{
        if (dark){
            document.body.className = "dark-mode";
        } else {
            document.body.className = "";
        }
    },[dark])
    return [dark, setDark];
}

