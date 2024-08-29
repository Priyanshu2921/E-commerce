import { useState } from "react"

export function Likebutton() {

    let [IsLiked, setIsLiked] = useState(false);
    let toggelLike = () => {
        setIsLiked(!IsLiked);
    };
    
    return (<div>
        <p onClick={toggelLike}>
            {IsLiked ? (<i className="fa-solid fa-heart"> </i>) : (

                <i className="fa-regular fa-heart"></i>)}
        </p>


    </div>)
}