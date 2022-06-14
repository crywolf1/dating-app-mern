import "./App.css";
import DatingCards from "./components/DatingCards";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
function App() {
  return (
    <div>
      <div className="app">
        <Header />
        <DatingCards />
        <SwipeButtons />
      </div>
    </div>
  );
}

export default App;
