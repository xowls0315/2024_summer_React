const Test = () => {
    const bird = "새";
    const coffee = ["아아", "라떼", "우유"];

    return <div>
        <h1>{5 > 3 ? "장원영" : "안유진"}</h1>
        <h3>{bird}</h3>
        <span>{coffee.join("!!, ")}</span>
    </div>
}

export default Test;