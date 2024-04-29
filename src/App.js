import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginUser } from "./components/LoginUser/LoginUser";
import { InfoUser } from "./components/InfoUser/InfoUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route path="/infoUser" element={<InfoUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
