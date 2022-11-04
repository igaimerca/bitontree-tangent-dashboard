import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";
import Users from "../components/Users/Users";
import Weather from "../components/Weather/Weather";
import AddUser from "../components/AddUser/AddUser";
import { getUsers } from "../redux/actions/users";
import { useDispatch } from "react-redux";
import './Layout.css'
import MobileNav from "../components/mobileNav/mobileNav";
function Layout({ active }) {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(active);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div className="flex justify-between">
            <SideBar active={activeTab} setActiveTab={setActiveTab} />
            <MobileNav active={activeTab} setActiveTab={setActiveTab} />

            {active === "add-user" ? (
                <div className="flex flex-col w-[80%] md-w-[80%] layout gap-4">
                    <TopBar />
                    <AddUser />
                </div>
            ) : active === "users" ? (
                <div className="flex flex-col w-[80%] md-w-[80%] layout gap-4 overflow-hidden">
                    <TopBar />
                    <Users />
                </div>
            ) : active === "weather" ? (
                <div className="flex flex-col w-[80%] md-w-[80%] layout gap-4">
                    <TopBar />
                    <Weather />
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default Layout;