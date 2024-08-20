import Navigation from "./Navigation";
import Topbar from "./Topbar";
import Storyboard from "./StoryComponents/Storyboard";

import Feed from "./FeedComponents/Feed";


const Instagram = () => {
    return (
    <div className="w-screen h-screen">
        <div className="w-full h-full max-w-sm m-auto ">
            <Topbar />
            <Storyboard friends={10} />
            <Feed/>
            <Feed/>
            <Feed/>
            <Feed/>
            <Feed/>
            <Navigation />

        </div>
    </div>

    );
};

export default Instagram;