import { useState,createContext,useContext } from "react";

const GlobalData = createContext()
export const GlobalDataProvider =({children})=>{
    const [global, setGlobal] = useState([])
    return(
        <GlobalData.Provider value={[global,setGlobal]}>
            {children}
        </GlobalData.Provider>
    )
}

export const useGlobalData = ()=>useContext(GlobalData)