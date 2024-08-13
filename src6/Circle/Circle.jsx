const Circle = (props) => {
    // 둥글게 만들고, 배경색은 하늘색 옅은색으로 만들고,
    // 글씨는 크게 해주고, 가운데로 배치해주고, 글씨는 props로 받고
    return (
    <div className="w-24 h-24 rounded-full bg-sky-200 flex items-center justify-center text-xl">
        {props.children}
    </div>
    );
};

export default Circle;
