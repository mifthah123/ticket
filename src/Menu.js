import React, { useState } from "react";
import "./Menu.css";
import {} from "@mui/material";
import { MenuSharp } from "@mui/icons-material";

function Menu() {
  const [menuForm, setMenuform] = useState(false);
  const handleShow = () => {
    setMenuform(menuForm ? false : true);
  };
  return (
    <div className="menu_container">
      <div className="menu_icon" onClick={() => handleShow()}>
        <MenuSharp className="menu_bar" fontSize="large" />
      </div>
      {menuForm && (
        <div className="menu_form_container">
          <div className="menu_form">
            <div className="menu_input">
              <p>
                <a id="GFG" href="/">
                  Dashboard
                </a>
              </p>
            </div>

            <div className="menu_input">
              <a id="GFG" href="/customer">
                <p>Customer</p>
              </a>
            </div>
            <div className="menu_input">
              <a id="GFG" href="/tickets">
                <p>Tickets</p>
              </a>
            </div>
            <div className="menu_input">
              <div className="menu_input">
                <a id="GFG" href="/settings">
                  <p>Settings</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
