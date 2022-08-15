import React from "react";
import "./CustomerForm.css";
import { Avatar } from "@mui/material";
function CustomerForm({ listData, getElement, showElement }) {
  return (
    <div className="customer_form">
      <div className="setting_form_box">
        {listData

          .reverse()
          .map((value, index) => (
            <div>
              <div className="customer_form_data">
                <div className="customer_details">
                  <div className="customer_data">
                    <div className="customer_details_container">
                      <div className="avatar">
                        <Avatar fontsize="large" />
                      </div>
                      <p className="datas">Name : {value.customerName}</p>
                      <p className="datas">Mobile : {value.customerNumber}</p>
                      <p className="datas">Email : {value.customerEmail}</p>
                    </div>

                    <div className="customer_bottom">
                      <button
                        onClick={getElement}
                        className="customer_edit_button"
                      >
                        Edit
                      </button>
                      <button className="customer_delete_button">delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          .reverse()}
      </div>
      {showElement && (
        <div className="">
          <p>this is my page</p>
        </div>
      )}
    </div>
  );
}
export default CustomerForm;
