import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./pages/AddUser";
import Weather from "./pages/Weather";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="*" element={<AddUser />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/users" element={<Users />} />
          <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
