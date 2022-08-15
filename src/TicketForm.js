import Moment from "moment";
import React, { useState } from "react";
import EditForm from "./EditForm";
import "./TicketForm.css";

function TicketForm({
  showEditForm,
  // name,

  listData,
  handleComment,
  handleCommentInput,
  handleCommentSubmit,
}) {
  return (
    <div className="ticket_form">
      <div className="data_box">
        {listData
          .reverse()
          .map((value, index) => (
            <div>
              <div className="ticketdata">
                <div className="date_container">
                  <p className="date month">
                    {Moment(value.date).format("MMMM")}
                  </p>
                  <p className="date day">{Moment(value.date).format("DD")}</p>
                  <p className="date year">
                    {Moment(value.date).format("YYYY")}
                  </p>
                </div>
                <div className="details_container">
                  <p className="title">{value.ticketTitle}</p>
                  <p className="description">{value.ticketDescription}</p>
                  <div className="container_bottom">
                    {value.commentClosed === false ? (
                      <a
                        id="GFG"
                        href="#"
                        className="comment"
                        onClick={() => handleComment(index)}
                      >
                        Comment
                      </a>
                    ) : (
                      <p>Closed</p>
                    )}
                    <button
                      className="edit"
                      onClick={() => showEditForm(index)}
                    >
                      Edit
                    </button>
                    <p className="cust_name">{value.customerName}</p>
                  </div>
                </div>
              </div>
              {value.showCommentBox && (
                <div className="comment_box" style={{ display: "flex" }}>
                  <input
                    className=""
                    placeholder="Comment"
                    style={{
                      width: "100%",
                      padding: 10,
                      borderRadius: 5,
                      border: "none",
                      backgroundColor: "lightgray",
                    }}
                    value={value.comment}
                    onChange={(e) => handleCommentInput(index, e)}
                  />
                  <button
                    className="add_button"
                    type="button"
                    onClick={() => handleCommentSubmit(index)}
                  >
                    Add
                  </button>
                </div>
              )}
              {value.showEditForm && (
                <EditForm
                  title={value.ticketTitle}
                  desc={value.ticketDescription}
                />
              )}
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default TicketForm;
