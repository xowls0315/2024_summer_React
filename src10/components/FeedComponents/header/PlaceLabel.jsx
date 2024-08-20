const PlaceLabel = (props) => {
    return <span className="text-xs">{props.city || "City"}, {props.nation || "Nation"}</span>
    


};

export default PlaceLabel;