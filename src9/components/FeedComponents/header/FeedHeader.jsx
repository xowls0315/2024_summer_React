import { BsThreeDots } from "react-icons/bs";
import Photo from "../../PhotoComponents/Photo";
import NameLabel from "./NameLabel";
import PlaceLabel from "./PlaceLabel";

const FeedHeader = () => {
    return (
        <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Photo size={"medium"}/>
                    <div className="flex flex-col gap-1">
                        <NameLabel name="Joshua_I" isPopular={true} />
                        <PlaceLabel city={"Tokyo"} nation={"Japan"} />
                    </div>
                </div>
                <div>
                    <BsThreeDots />
                </div>
            </div>
    );

};

export default FeedHeader;