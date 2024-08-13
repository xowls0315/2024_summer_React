import Box from "./BoxComponent/Box";
import Circle from "./Circle/Circle";


function App(){


  // Box 컴포넌트 만들고 [w:100, h:100] 배경색은 blue
  // 클릭을 하면 red -> blue -> red

  return (
    <div>
      <Box></Box>
      <Circle>Hello</Circle>
    </div>
    
  );
};

export default App;
