import Photo from "../../PhotoComponents/Photo";
import LikeByPeople from "./LikeByPeople";

const Like = () => {
    const likePeople = ["craig_love", "jinseal", "woo", "choi", "kim", "bae", "seo"];
    return (
        <div className="flex gap-1">
            <Photo size="small" />
            <LikeByPeople likePeople={likePeople} />
        </div>
    );
};

export default Like;