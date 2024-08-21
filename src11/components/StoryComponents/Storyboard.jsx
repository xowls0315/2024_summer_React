import Story from "./Story";

const Stroyboard = () => {
    const friends = [
        {name: "truthy", image:"story/story.jpg"},
        {name: "donald", image:"story/story2.jpg"},
        {name: "trump", image:"story/story3.jpg"},
        {name: "biden", image:"story/story4.jpg"},
        {name: "harrison", image:"story/story5.jpg"},
        {name: "korea", image:"story/story6.jpg"},
    ];

    return (
        <div className="hide-scrollbar border-b border-zinc-200 flex gap-2 items-center p-1 overflow-x-scroll">
            {friends.map((v)=> (<Story image={v.image} name={v.name} />))}
        </div>
    );
};

export default Stroyboard;