import Count from "./Count/Count";
import Heart from "./Heart/Heart";


function App(){

  const sayHello = () => {
    console.log("안녕");
  };

  // Count component 만들고, 클릭하면 알럿으로 숫자 1 나오도록 만들기

  return (
    <div>
      <Heart></Heart>

      <div onClick={sayHello}>아무글</div>
      <Count></Count>
    </div>
    
  );
};

export default App;
