import Moment from "moment";
import React, { useState } from "react";
// import EditForm from "./EditForm";
import Menu from "./Menu";
import "./TicketData.css";
import TicketForm from "./TicketForm";

function TicketData() {
  const [showForm, setShowform] = useState(false);
  const [showData, setShowdata] = useState(false);
  const [listData, setlistData] = useState([]);
  const [state, setState] = useState({
    ticketTitle: "",
    ticketDescription: "",
    date: "",
    customerName: "",
  });
  // const myName = "mifthah";

  const { ticketTitle, ticketDescription, date, customerName } = state;

  const handleshow = () => {
    setShowform(showForm ? false : true);
  };
  const handleChange = (ticketTitle) => (e) => {
    setState({
      ...state,
      [ticketTitle]: e.target.value,
    });
  };

  const handleComment = (i) => {
    console.log(i);
    const values = [...listData];
    values[i].showCommentBox = values[i].showCommentBox ? false : true;
    setlistData(values);
  };

  const handleCommentInput = (i, e) => {
    const values = [...listData];
    values[i].comment = e.target.value;
    setlistData(values);
  };

  const handleCommentSubmit = (i) => {
    const values = [...listData];
    values[i].commentClosed = true;
    values[i].showCommentBox = false;
    setlistData(values);
  };

  const showEditForm = (i) => {
    const values = [...listData];
    values[i].showEditForm = true;
    setlistData(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setlistData([
      ...listData,
      {
        ticketTitle,
        ticketDescription,
        date,
        customerName,
        showCommentBox: false,
        comment: "",
        commentClosed: false,
        showEditForm: false,
      },
    ]);

    setShowdata(true);
    setShowform(false);

    setState({
      ticketTitle: "",
      ticketDescription: "",
      date: "",
      customerName: "",
      showCommentBox: false,
      comment: "",
      commentClosed: false,
      showEditForm: false,
    });
  };

  const currentDate = Moment(new Date()).format("YYYY-DD-MM");

  return (
    <div>
      <div className="header">
        <Menu />
      </div>
      <div className="main_page">
        <div className="btn">
          <div>
            <button onClick={handleshow} className="form_button">
              +
            </button>
          </div>
          <div className="data_container">
            {showForm && (
              <div className="ticket_box">
                <form onSubmit={handleSubmit} className="ticket_form">
                  <div>
                    <input
                      value={ticketTitle}
                      onChange={handleChange("ticketTitle")}
                      type={"text"}
                      placeholder={"Ticket title"}
                      className="input_layout"
                    />
                  </div>
                  <div>
                    <input
                      value={ticketDescription}
                      onChange={handleChange("ticketDescription")}
                      type={"text"}
                      placeholder={"Ticket description"}
                      className="input_layout"
                    />
                  </div>
                  <div>
                    <input
                      value={date}
                      onChange={handleChange("date")}
                      type={"date"}
                      min={currentDate}
                      className="input_layout"
                    />
                  </div>
                  <div>
                    <input
                      value={customerName}
                      onChange={handleChange("customerName")}
                      type={"text"}
                      placeholder={"customer name"}
                      className="input_layout"
                    />
                  </div>
                  <button className="create_btn">Create</button>
                </form>
              </div>
            )}
            {showData && (
              <TicketForm
                // name={myName}
                listData={listData}
                handleComment={handleComment}
                handleCommentInput={handleCommentInput}
                handleCommentSubmit={handleCommentSubmit}
                showEditForm={showEditForm}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketData;
