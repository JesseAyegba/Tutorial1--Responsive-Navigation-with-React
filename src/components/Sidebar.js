import React from "react";
import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import { hideSidebar } from "../store/actions/sidebar";

function Sidebar() {
    const sidebar = useSelector((state) => state.sidebar)
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(hideSidebar())
    }
    return(
        <div className="sidebar" id={ sidebar ? "show-sidebar" : "hide-sidebar" }>
            <ul className="sidebar__links">
                <li className="sidebar__link">
                    Home
                </li>
                <li className="sidebar__link">
                    About
                </li>
                <li className="sidebar__link">
                    Services
                </li>
                <li className="sidebar__link">
                    Contact
                </li>
            </ul>
            <div className="sidebar__cancel">
                <ImCross onClick={ () => handleClick() } />
            </div>
        </div>
    )
}

export default Sidebar;
