import { useState } from "react";

  // Box 컴포넌트 만들고 [w:100, h:100] 배경색은 blue
  // 클릭을 하면 red -> blue -> red
const Box = (props) => {

    const [color, setColor] = useState("blue");
    const boxStyle={backgroundColor: color};


    const changeColor = () => {
        if (color == "blue") {
            setColor("red");
        } else if (color == "red") {
            setColor("blue");
        }
    }


    return <div className="w-24 h-80" onClick={changeColor} style={boxStyle}>
    </div>
};

export default Box;