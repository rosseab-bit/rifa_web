import logo from "./logo.svg";
import "./App.css";
import ContextWebState from "./context/ContextWebState";
import ContextWeb from "./context/ContextWeb";
import HeadWeb from "./head/HeadWeb";
import BodyWeb from "./body/Body";
import FooterWeb from "./footer/FooterWeb";
function App() {
  return (
    <>
    <ContextWebState>
      <div className="App">
	<HeadWeb />
	<BodyWeb />
	<FooterWeb />
     </div>
    </ContextWebState>
    </>
  );
}

export default App;
