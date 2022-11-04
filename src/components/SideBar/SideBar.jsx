import Logo from "../../assets/icons/logo.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as AddUserIcon } from "../../assets/icons/addUser.svg";
import { ReactComponent as WeatherIcon } from "../../assets/icons/weather.svg";
import { Link } from "react-router-dom";
function SideBar({ active, setActiveTab }) {
  return (
    <div className="hidden md:inline-block flex flex-col gap-4 w-[18%] md-w-[18%] bg-white max-h-[90vh] rounded-2xl md:p-4 text-light-blue">
      <img src={Logo} className='image' alt="" />
      <div className="w-full h-[2px] bg-light-blue"></div>
      <ul className="flex flex-col gap-4 my-3">
        <Link
          to="/add-user"
          onClick={() => setActiveTab("add-user")}
          className={`flex flex-wrap md:justify-center lg:justify-start gap-2 p-3 ${
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
          className={`flex flex-wrap md:justify-center lg:justify-start gap-2 p-3 ${
            active === "users" ? "text-white bg-light-blue" : "text-light-blue"
          } cursor-pointer rounded-2xl`}
        >
          <UserIcon fill={active === "users" ? "#FFF" : "#A1E0FF"} /> Users
        </Link>
        <Link
          to="/weather"
          onClick={() => setActiveTab("weather")}
          className={`flex flex-wrap md:justify-center lg:justify-start gap-2 p-3 ${
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

export default SideBar;