import { IoSearch } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaRegPlusSquare, FaRegHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Icon from "./Icon";

const Navigation = () => {
    return (
        <footer 
            style= {{ backgroundColor: "#FAFAFA", borderTop: "#AAFAFA" }}className="fixed bottom-0 max-w-sm w-full m-auto flex justify-around items-center">
                <Icon IconComponent={IoSearch} />
                <Icon IconComponent={IoMdHome} />
                <Icon IconComponent={FaRegPlusSquare} />
                <Icon IconComponent={FaRegHeart} />
                <Icon IconComponent={CiHeart} />
            </footer>
    );
};

export default Navigation;