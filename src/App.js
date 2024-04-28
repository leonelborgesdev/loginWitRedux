import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginUser } from "./store/slices/Usuario";

function App() {
  return;
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginUser />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
