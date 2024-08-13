import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {

    return <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
        <ProfileImage src="https://i.namu.wiki/i/7nKpwX1vgEmcGjUhoy1sxiQ6dXEUhQXeVergBDYhjNB1GSy0NOA0pUHtyxyO6ua4oXUA6ilPIMBL8nG3EXz5Nvf25t_kD3-rCNaM5yviOZTbLY2Wz-lb79l7GYecXbyGWyRf6J0g9cqZuxwNL0Lp1g.webp"></ProfileImage>
        <ProfileInfo name="장원영" date="August 8th"></ProfileInfo>
    </div>
};

export default Profile;