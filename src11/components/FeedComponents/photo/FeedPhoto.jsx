const FeedPhoto = (props) => {
    return (
        <div className="snap-center min-w-full">
            <img className="w-full h-full object-cover" src={props.images || "tokyo.jpg"} alt="" />
        </div>
    );
};

export default FeedPhoto;