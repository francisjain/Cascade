import { Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import "./Select.css"


function Select({ Data, hideAllSelect }) {

    const userData = Data
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(userData);
    }, []);

    const handleChange = (e) => {
        const { name, checked } = e.target;
        console.log(e.target);
        if (name === "allSelect") {
            let tempUser = users.map((user) => {
                return { ...user, isChecked: checked };
            });
            setUsers(tempUser);
        } else {
            let tempUser = users.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            setUsers(tempUser);
        }
    };

    return (
        <div className="select__container" style={{ width: "500px" }}  >
            <form className="form__container">
                <h2>Select Users</h2>
                <div className={`form_select ${hideAllSelect && "form_select_none"}`} >
                    <input
                        type="checkbox"
                        name="allSelect"
                        // checked={
                        //   users.filter((user) => user?.isChecked !== true).length < 1
                        // }
                        id="01"
                        checked={!users.some((user) => user?.isChecked !== true)}
                        onChange={handleChange}
                    />
                    <label htmlFor="01">All Select</label>
                </div>
                {users.map((user) => (
                    <div className="user__data"
                        key={user.id}>

                        <label htmlFor={user.id} >
                            <input
                                type="checkbox"
                                name={user.name}
                                checked={user?.isChecked || false}
                                onChange={handleChange}
                                id={user.id}
                            />
                            {user.name}</label>
                    </div>
                ))}
                <Link to='/routhome'><Fab color="primary" sx={{ marginLeft: "85%" }}><HomeIcon /></Fab></Link>
            </form>
        </div>
    );
}

export default Select;
