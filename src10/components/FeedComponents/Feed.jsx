import FeedHeader from "./header/FeedHeader";
import FeedSnap from "./photo/FeedSnap";
import FeedBottom from "./bottom/FeedBottom";

const Feed = () => {
    const likePeople = ["craig_love", "jinseal", "woo", "choi", "kim", "bae", "seo"];

    return (
        <>
            <FeedHeader />
            <FeedSnap />
            <FeedBottom />
        </>
    );

};

export default Feed;