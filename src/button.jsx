import { useState } from "react";

export default function counter(){
    let[count,setcount]= useState(0);

    let incCount= () => {
        setcount(count+1);
    }

    return(
        <div>
            <h3>
                Count  {count}
            </h3>

            <button onClick={ incCount}>Increase Count</button>
        </div>
    )
}