import Navigation from "./Navigation";
import Topbar from "./Topbar";
import Storyboard from "./StoryComponents/Storyboard";

import Feed from "./FeedComponents/Feed";


const Instagram = () => {
    
    const data = [
        {
            image:"story/story.jpg",
            name: "Joshua",
            isPopular: false,
            city: "Tokyo",
            nation: "Japan",
            images: ["feeds/feed.jpg", "feeds/feed2.jpg", "feeds/feed3.jpg"],
            likePeople: [
                "craig_love", "jinseal", "woo", "choi", "kim", "bae", "seo",
            ],
            date: "September 19",
        },
        {
            image:"story/story2.jpg",
            name: "Jinseal",
            isPopular: false,
            city: "Seoul",
            nation: "Korea",
            images: ["feeds/feed4.jpg", "feeds/feed5.jpg", "feeds/feed6.jpg"],
            likePeople: [
                "craig_love", "abc", "biden", "kfc"
            ],
            date: "September 21",
        },
        {
            image:"story/story3.jpg",
            name: "Biden",
            isPopular: true,
            city: "New York",
            nation: "USA",
            images: ["feeds/feed7.jpg", "feeds/feed8.jpg", "feeds/feed9.jpg"],
            likePeople: [
                "Trump", "harrsion", "jaein"
            ],
            date: "September 27",
        },
    ];

    return (
    <div className="w-screen h-screen">
        <div className="w-full h-full max-w-sm m-auto ">
            <Topbar />
            <Storyboard />
            {data.map((v)=> (
                <Feed {...v} />
            ))}
            <Navigation />
        </div>
    </div>

    );
};

export default Instagram;