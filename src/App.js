import "./App.css";
import AboutReact from "./components/AboutReact/AboutReact";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h2>Dream Watch</h2>
        <p>Choose 4 Watch</p>
      </div>
      <Products />
      <AboutReact />
    </div>
  );
}

export default App;
