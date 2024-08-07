const Box = () => {

    //1. css를 js화 할 때는 중괄호 2개 필요
    const boxStyle = {width:"100px", height:"100px", border: "solid black 1px"}
    const boxStyle2 = {width:"100px", height:"100px", backgroundColor:"blue", margin: "30px"}
    const circleStyle1 = { width: "100px", height: "100px", backgroundColor:"red", borderRadius: "50%", margin: "30px" }; 
    const circleStyle2 = { width: "100px", height: "100px", backgroundColor:"yellow", borderRadius: "50%", margin: "30px" };

    // 초록박스, 파란박스, 빨간색원, 노랑색원 컴포넌트 만들고 화면에 출력하기

    return <div style={boxStyle}>
    </div>
};

export default Box;