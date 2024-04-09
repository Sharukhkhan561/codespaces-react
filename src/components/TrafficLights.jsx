import { useEffect, useState } from "react";


const TrafficLights=()=>{
    const lights={
        red:"red",
        green:"green",
        yellow:"yellow"
    }
    const [active, setActive]= useState(lights.red)

    useEffect(()=>{
             switch (active) {
                case lights.red:
                    setTimeout(() => {
                        setActive(lights.green)
                    }, 4000);
                    
                    break;
                    case lights.green:
                    setTimeout(() => {
                        setActive(lights.yellow)
                    }, 3000);
                    
                    break;
             
                case lights.yellow:
                    setTimeout(() => {
                        setActive(lights.red)
                    }, 1000);
                    
             }
    },[active])
    return(
        <div className="wrapper">
            <div className=" light green"
            style={active!==lights.green?{opacity:0.3}:null}
            >A</div>
            <div className="light yellow"
            style={active!==lights.yellow?{opacity:0.3}:null}
            >B</div>
            <div className="light red"
            style={active!==lights.red?{opacity:0.3}:null}
            >C</div>
        </div>
    )
}
export default TrafficLights;