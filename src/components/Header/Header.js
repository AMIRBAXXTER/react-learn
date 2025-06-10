import HeaderLink from "./HeaderLink/HeaderLink";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="bg-gray-400 p-4 text-center flex justify-between items-center mb-20 sticky z-10 top-0">
      <div className="flex justify-between w-1/3">
        <HeaderLink to="/" end children="home" />
        <HeaderLink to="/users" children="users"/>
        <HeaderLink to="/about" children="about"/>
        <HeaderLink to="/404" children="404"/>
      </div>
      <Link to="/" children={<img className="w-12 h-12" src="/Logo.jpg" alt="logo" />}/>
    </div>
  );
}
