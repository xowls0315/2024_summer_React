const Diary = (props) => {
    return (
        <span>
            <span className="font-semibold">{props.name || "Unnamed"}</span> The game in Jpaan was amazing and I want to share some photos
        </span>
    );
};

export default Diary;