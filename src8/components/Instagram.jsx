import Navigation from "./Navigation";
import Topbar from "./Topbar";
import StoryPhoto from "./PhotoComponents/StoryPhoto";
import Story from "./Story";
import Storyboard from "./Storyboard";


const Instagram = () => {
    return (
    <div className="w-screen h-screen">
        <div className="w-full h-full max-w-sm m-auto ">
            <Topbar />
            <Storyboard friends={10} />

            <Navigation />

        </div>
    </div>

    );
};

export default Instagram;