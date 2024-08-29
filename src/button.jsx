import { useState } from "react";

export default function Counter(){
    let[count,setcount]= useState(0);

    let incCount= () => {
        setcount(count+1);
    }

    let decCount= () => {
        setcount(count-1);
    }

    return(
        <div>
           
            <button onClick={ decCount}>Decrease Count</button>
            <h3>
                Count  {count}
            </h3>
            <button onClick={ incCount}>Increase Count</button>
        </div>
    )
}