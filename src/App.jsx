import { createRoot } from "react-dom/client";
import Home from "./Home/Home";
import "./App.scss"

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);