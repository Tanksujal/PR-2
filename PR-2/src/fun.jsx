import { useState } from "react"
import CounterFun from "./counterfun"

const Fun  = () => {
    const [cnt,setcnt] = useState(0)
    const Inc = () =>{
        setcnt(cnt + 1)
    }
    const Min = () => {
    
        setcnt(cnt-1)
    }
    const Reset = () => {
    
        setcnt(0)
    }
    return(
        <>
          <CounterFun no={cnt} inc={Inc}min={Min}reset={Reset}/> 
        </>
    )
}
export default Fun