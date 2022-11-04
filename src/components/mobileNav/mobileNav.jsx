import Logo from "../../assets/icons/logo.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as AddUserIcon } from "../../assets/icons/addUser.svg";
import { ReactComponent as WeatherIcon } from "../../assets/icons/weather.svg";
import { Link } from "react-router-dom";
import './mobileNav.css'
function MobileNav({ active, setActiveTab }) {
  return (
    <div className="MobileNav flex flex-col w-[96%] fixed bottom-0 bg-white text-light-blue bg-bright-blue">
      <ul className="flex flex-row justify-around gap-4 my-3">
        <Link
          to="/add-user"
          onClick={() => setActiveTab("add-user")}
          className={`flex flex-col items-center p-3 gap-2 ${
            active === "add-user"
              ? "text-white bg-light-blue"
              : "text-light-blue"
          } cursor-pointer rounded-2xl`}
        >
          <AddUserIcon fill={active === "add-user" ? "#FFF" : "#A1E0FF"} />
          Add User
        </Link>
        <Link
          to="/users"
          onClick={() => setActiveTab("users")}
          className={`flex flex-col items-center gap-2 p-3 ${
            active === "users" ? "text-white bg-light-blue" : "text-light-blue"
          } cursor-pointer rounded-2xl`}
        >
          <UserIcon fill={active === "users" ? "#FFF" : "#A1E0FF"} /> Users
        </Link>
        <Link
          to="/weather"
          onClick={() => setActiveTab("weather")}
          className={`flex flex-col items-center gap-2 p-3 ${
            active === "weather"
              ? "text-white bg-light-blue"
              : "text-light-blue"
          } cursor-pointer rounded-2xl`}
        >
          <WeatherIcon fill={active === "weather" ? "#FFF" : "#A1E0FF"} />
          Weather
        </Link>
      </ul>
    </div>
  );
}

export default MobileNav;
