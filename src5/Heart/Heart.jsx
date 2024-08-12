import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Heart = () => {
    const [isLove, setIsLove] = useState(false);
    const changeLove = () => {
        setIsLove(!isLove);
    };

    return <div onClick={changeLove}>{isLove ? <FaHeart /> : <FaRegHeart />}</div>
}

export default Heart;