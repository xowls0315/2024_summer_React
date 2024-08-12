const Circle = (props) => {

    const circleStyle={width:"100px", height:"100px", backgroundColor: props.backgroundColor, borderRadius:"9999px"};

    return <div style={circleStyle}>
    </div>
};

export default Circle;