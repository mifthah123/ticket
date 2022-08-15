import React from "react";
import "./EditForm.css";

function EditForm({ title, desc }) {
  return (
    <div className="edit_container">
      <div className="edit_box">
        <div className="edit_form">
          <p style={{ color: "black" }}></p>
          <form>
            <div>
              <input className="edit_layout" type={"text"} />
            </div>
            <div className="">
              <input className="edit_layout" type={"date"} />
            </div>
            <div>
              <input className="edit_layout" type={"text"} />
            </div>
            <div>
              <input className="edit_layout" type={"text"} />
            </div>
            <button className="edit_button">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
