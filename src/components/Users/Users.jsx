import { useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "../../assets/icons/search.svg";
import AvatarIcon from "../../assets/icons/avatar.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import Moment from "react-moment";
import './Users.css'

function Users() {
    const users = useSelector((state) => state?.users);
    const [searchUsers, setSearchUsers] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleFilterUsers = () => {
        let searchResults = users?.filter((user) => user?.username?.toLowerCase().includes(searchUsers?.toLowerCase()));
        setFilteredUsers(searchResults);
    }

    return (
        <div>
            <h2 className="p-4 text-sm text-black">Users</h2>
            <div className="w-full mb-[6rem] min-h-[70vh] p-6 rounded-2xl bg-white flex flex-col gap-5 overflow-y-scroll overflow-x-hidden">
                <p>Search</p>
                <div className="relative min-w-[310px] w-[45%]">
                    <input
                        type="text"
                        value={searchUsers}
                        onKeyUp={handleFilterUsers}
                        onChange={(e) => setSearchUsers(e.target.value)}
                        placeholder="Search user by name . . . "
                        className="w-full py-2 pl-3 pr-6 rounded-lg outline-none bg-lighter-gray"
                    />
                    <img
                        src={SearchIcon}
                        className="absolute top-[25%] right-[7px]"
                        alt=""
                    />
                </div>
                <div className="cards-container">
                    <p>Card View</p>
                    <div className="flex flex-wrap gap-3 my-3 cards">
                        {!users || users.length <= 0 ? (
                            <div className="shadow-md w-[99%] md:w-[25%] rounded-md flex gap-5 items-center justify-center px-10 py-6 bg-white">
                                <span className="text-sm">
                                    No user created yet!
                                </span>
                            </div>
                        ) : searchUsers && filteredUsers && filteredUsers?.length ? (
                            filteredUsers?.map((user, index) => (
                                <div key={index} className="shadow-md min-w-fit w-[22%] card rounded-md flex gap-5 items-center justify-center px-10 py-6 bg-white">
                                    <img src={AvatarIcon} alt="" />
                                    <span className="text-sm">
                                        {user?.username} <br />
                                        <Moment format="MM/DD/YYYY">{user?.date}</Moment> <br /> {user?.state}
                                    </span>
                                </div>
                            ))
                        ) : (
                            users?.map((user, index) => (
                                <div key={index} className="shadow-md min-w-fit  md:w-[45%] lg:w-[22%] card rounded-md flex gap-5 items-center justify-center px-10 py-6 bg-white">
                                    <img src={AvatarIcon} alt="" />
                                    <span className="text-sm">
                                        {user?.username} <br />
                                        <Moment format="MM/DD/YYYY">{user?.date}</Moment> <br /> {user?.state}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="list-container">
                    <p>List View</p>

                    <table className="min-w-full leading-normal">
                        <tbody>
                            {!users || users.length <= 0 ? (
                                <tr>
                                    <td className="flex items-center gap-4 px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <p className="whitespace-no-wrap text-zinc-500">
                                        No user created yet!
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm text-right bg-white border-b border-gray-200">
                                        <button
                                            type="button"
                                            className="inline-block text-gray-500 hover:text-gray-700"
                                        >
                                            <img src={MenuIcon} alt="" />
                                        </button>
                                    </td>
                                </tr>
                            ) : searchUsers && filteredUsers && filteredUsers?.length ? (
                                filteredUsers?.map((user, index) => (
                                    <tr key={index}>
                                        <td className="flex items-center gap-4 px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <img src={AvatarIcon} className="w-[25px]" alt="" />
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {user?.username} -{" "}
                                                <Moment format="MM/DD/YYYY">{user?.date}</Moment>{" "}
                                                - {user?.state}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm text-right bg-white border-b border-gray-200">
                                            <button
                                                type="button"
                                                className="inline-block text-gray-500 hover:text-gray-700"
                                            >
                                                <img src={MenuIcon} alt="" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                users?.map((user, index) => (
                                    <tr key={index}>
                                        <td className="flex items-center gap-4 px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <img src={AvatarIcon} className="w-[25px]" alt="" />
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {user?.username} -{" "}
                                                <Moment format="MM/DD/YYYY">{user?.date}</Moment>{" "}
                                                - {user?.state}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm text-right bg-white border-b border-gray-200">
                                            <button
                                                type="button"
                                                className="inline-block text-gray-500 hover:text-gray-700"
                                            >
                                                <img src={MenuIcon} alt="" />
                                            </button>
                                        </td>
                                    </tr>
                                ))

                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Users;
