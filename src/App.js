import "./App.css";
import TicketData from "./TicketData";

import CustomerData from "./CustomerData";
import { Routes, Route } from "react-router-dom";
import Ticket from "./Ticket";
import Settings from "./Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TicketData />} />
        <Route path="/customer" element={<CustomerData />} />
        <Route path="/tickets" element={<Ticket />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

      {/* <TicketData /> */}
    </div>
  );
}

export default App;
