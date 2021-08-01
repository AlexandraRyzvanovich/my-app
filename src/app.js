import "./app.css";
import FirstComponent from "./component/firstComponent";
import FourthComponent from "./component/fourthComponent";
import SecondComponent from "./component/secondComponent";
import ThirdComponent from "./component/thirdComponent";

function App() {
  return (
    <div className="App">
      <header>
        <FirstComponent />
      </header>
      <body>
        <SecondComponent />
        <ThirdComponent />
      </body>
      <footer>
        <FourthComponent />
      </footer>
    </div>
  );
}
export default App;
