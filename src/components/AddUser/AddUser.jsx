import React, { useState } from "react";
import { createUser } from "../../redux/actions/users";
import { useDispatch } from "react-redux";
import { states } from "../../constants/states";
import './AddUser.css'
function AddUser() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [emailError, setEmailError] = useState("");
    const [telError, setTelError] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [state, setState] = useState("");
    const [tel, setTel] = useState("");

    const validateEmail = (email) => {
        let re = /\S+@\S+\.\S+/;
        if (re.test(email)) {
            setEmailError("");
            return true;
        } else {
            setEmailError("Enter valid email id");
            return false;
        }
    };

    const validateTel = (tel) => {
        if (/^\d{10}$/.test(tel)) {
            setTelError("");
            return true;
        } else {
            setTelError("Enter a valid phone number (10 digits)");
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email) && validateTel(tel)) {
            // submit data
            dispatch(createUser({ username, email, date, tel, state }));
            alert("User added successfully");
            setEmail("");
            setUsername("");
            setDate("");
            setTel("");
            setState("");
        }
    };

    return (
        <div>
            <h2 className="p-4 text-sm text-black">Add User</h2>
            <div className="w-full h-auto mb-[6rem] min-h-[70vh] p-4 bg-white rounded-2xl flex items-center justify-center">
                <form action="" className="flex flex-col gap-5 w-[80%] lg:w-[50%]">
                    <div className="flex items-center justify-between gap-5 flex-wrap">
                        <label htmlFor="" className="w-[10%]">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="John"
                            className="min-w-[250px] w-[80%] px-2 py-2 rounded-lg outline-none bg-lighter-gray  form-input"
                        />
                    </div>
                    <div className="flex  items-center justify-between gap-5 flex-wrap">
                        <label htmlFor="" className="w-[10%]">Email</label>
                        <div className="flex flex-col form-input w-[80%]">
                            <input
                                type="email"
                                placeholder="john@gmail.com"
                                className={`${emailError && "border-2 border-light-red"
                                    } min-w-[250px] px-3 py-2 rounded-lg outline-none bg-lighter-gray`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError ? (
                                <span className="p-2 text-light-red">{emailError}</span>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-5 flex-wrap">
                        <label htmlFor="" className="w-[10%]">Phone</label>
                        <div className="flex flex-col form-input w-[80%] ">
                            <input
                                type="tel"
                                value={tel}
                                placeholder="1234567890"
                                onChange={(e) => setTel(e.target.value)}
                                className={`${telError && "border-2 border-light-red"
                                    } min-w-[250px] px-3 py-2 rounded-lg outline-none bg-lighter-gray form-input`}
                            />
                            {telError && (
                                <span className="p-2 text-light-red">{telError}</span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-6 flex-wrap">
                        <label htmlFor="" className="w-[10%]">DOB</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="123456789"
                            className="min-w-[250px] w-[80%] px-3 py-2 rounded-lg outline-none bg-lighter-gray form-input"
                        />
                    </div>
                    <div className="flex items-center justify-between gap-5 flex-wrap">
                        <label htmlFor="" className="w-[10%]">State</label>
                        <select
                            name=""
                            id=""
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="min-w-[250px] w-[80%] px-3 py-2 rounded-lg outline-none bg-lighter-gray form-input"
                        >
                            {states &&
                                states.map((state, i) => (
                                    <option key={i} value={state}>
                                        {state}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="flex items-center justify-end gap-5">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="bg-light-blue text-white min-w-[250px] w-[80%] px-3 py-2 rounded-lg outline-none submit"
                        >
                            Create user
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddUser;
