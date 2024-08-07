import Luckybiky from "./Luckybiky";
import Test from "./Test";
import Box from "./Box"
import GreenBox from "./GreenBox";
import BlueBox from "./BlueBox";
import RedCircle from "./RedCircle";
import YellowCircle from "./YellowCricle";

function App() {

  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  };
  
  //blue 박스 1000개 만들기
  // const blueBoxes = [];
  // for (let i = 0; i < 1000; i++) {
  //   blueBoxes.push(<BlueBox key={i} />);
  // }

  const blueBoxes = Array(1000).fill().map((x)=> {
    return <BlueBox></BlueBox>;
  });

  return (
  <div style={style}>
    {blueBoxes}
  </div>
  );
}

export default App;
