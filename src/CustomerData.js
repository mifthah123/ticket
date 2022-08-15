import React, { useState } from "react";
import Menu from "./Menu";
import "./CustomerData.css";
import CustomerForm from "./CustomerForm";

function CustomerData() {
  const [showElement, setShowElement] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showData, setShowdata] = useState(false);
  const [listData, setlistData] = useState([]);
  const [state, setState] = useState({
    customerName: "",
    customerNumber: "",
    customerEmail: "",
  });

  const { customerName, customerNumber, customerEmail } = state;

  const settingClick = () => {
    setShowForm(showForm ? false : true);
  };

  const handleChange = (customerName) => (e) => {
    setState({
      ...state,
      [customerName]: e.target.value,
    });
  };

  const getElement = () => {
    setShowElement(showElement ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setlistData([
      ...listData,
      {
        showElement: false,
        customerName,
        customerNumber,
        customerEmail,
      },
    ]);

    setShowdata(true);
    setShowForm(false);

    setState({
      showElement: false,
      customerName: "",
      customerNumber: "",
      customerEmail: "",
    });
  };

  return (
    <div className="customer_page">
      <div className="header">
        <Menu />
        <p>CUSTOMER</p>
      </div>

      <div className="button_container">
        <button onClick={settingClick} className="customer_button">
          +
        </button>
      </div>
      {showForm && (
        <div className="customer_data_box">
          <div className="customer_data_container">
            <div className="customer_data_box">
              <form onSubmit={handleSubmit} className="customer_data_form">
                <div>
                  <input
                    value={customerName}
                    onChange={handleChange("customerName")}
                    type={"text"}
                    placeholder={"Customer Name"}
                    className="customer_input"
                  />
                </div>
                <div>
                  <input
                    value={customerNumber}
                    type={"tel"}
                    placeholder={"customer contact number"}
                    className="customer_input"
                    onChange={handleChange("customerNumber")}
                  />
                </div>
                <div>
                  <input
                    value={customerEmail}
                    type={"email"}
                    placeholder={"Email id"}
                    className="customer_input"
                    onChange={handleChange("customerEmail")}
                  />
                </div>
                <div className="bottom_data">
                  <button className="customer_create">create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showData && <CustomerForm listData={listData} getElement={getElement} />}
    </div>
  );
}

export default CustomerData;
