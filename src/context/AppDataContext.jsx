import {createContext, useContext,useEffect,useState} from "react";
const AppDataContext=createContext();

export function AppDataProvider({children}){
    const [timeline,setTimeline]=useState([]);
    const [gallery,setgallery]=useState([]);

    useEffect(()=>{
            fetch('/timelineData.json')
            .then(res=>res.json)
            .then(setTimeline);

             fetch('/gallary.json')
            .then(res=>res.json)
            .then(setgallery);

    },[]);
    return(
    <AppDataContext.Provider value={{timeline,gallery}}>
        {children}
        </AppDataContext.Provider>
)
}
export function useAppData(){
    return useContext(AppDataContext);
}
