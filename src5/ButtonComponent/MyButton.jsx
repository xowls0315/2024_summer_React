const MyButton = (props) => {

    //모양 바꾸고 싶으면 shape 주셈 ㅅㄱ
    const shape = {
        hard: "0px",
        soomth: "5px",
        round: "45px",
    };

    const state = {
        primary: {
            backgroundColor: "#205BF3",
            color: "white",
            border: "none",
        },
        hover: {
            backgroundColor: "#478DF5",
            color: "white",
            border: "none",
        },
        secondary: {
            backgroundColor: "transparent",
            color: "black",
            border: "1px solid #025BF3",
        },
        deactive: {
            backgroundColor: "#979797",
            color: "#E8E8E8",
            border: "none",
        },
    };

    const buttonStyle = {
        padding:"10px 45px",
        fontSize: "32px",
        margin: "30px",
        borderRadius: shape[props.shape],
        ...state[props.state] // ...연산자: 오브젝트 껍데기 벗겨줌
    };


    return <button style={buttonStyle}>Button</button>
};

export default MyButton;