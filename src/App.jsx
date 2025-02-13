import { createRoot } from "react-dom/client";
import Home from "./Home/Home";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Smp from "./Home/smp/smp";

const App = () => {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smp" element={<Smp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
