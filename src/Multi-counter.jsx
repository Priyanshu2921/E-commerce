import { useState } from "react";

export  function MultiCounter(){
    let [moves,setmoves] = useState({blue : 0 , red : 0 , yellow : 0 , green : 0 });

    let updateblue = () => {
        setmoves({...moves,blue: moves.blue +1});
    };
    let updateyellow = () => {
        setmoves({...moves,yellow: moves.yellow +1});
    };let updatered = () => {
        setmoves({...moves,red: moves.red +1});
    };let updategreen = () => {
        setmoves({...moves,green: moves.green +1});
    };
    return(
        <div>
            <p>Counter is ready</p>
            <div> < div className="Counter">
                <p>blue moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateblue}>+1</button>
                </div>
                <p></p>
                < div className="Counter">
                <p>yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow" , textDecorationColor: "black"}} onClick={updateyellow}>+1</button>
                </div>

                < div className="Counter">
                <p>red moves = {moves.red}</p>
                <button style={{backgroundColor: "red" }} onClick={updatered}>+1</button>
                </div>< div className="Counter">
                <p>green moves = {moves.green}</p>
                <button style={{backgroundColor: "green" }} onClick={updategreen}>+1</button>
                </div>
            </div>
        </div>
    )
}

