
import MyButton from "./ButtonComponent/MyButton";


function App() {

  const stateArray = ["primary", "hover", "secondary", "deactive"];
  const shpaeArray = ["round", "soomth", "hard"];

  return (
    <div>
      {stateArray.map((v)=>{
        return shpaeArray.map((x)=> {
          return <MyButton shape={x} state={v}></MyButton>
        })
      })}
    </div>
    
  )
};

export default App;
