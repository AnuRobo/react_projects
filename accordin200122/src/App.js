import Accordion from "./components/accordion/Accordion";
import data from "./components/data/data";
import "./App.css";

function App() {
  console.log(data);
  return (
    <div className="container">
      <div className="App">
        <h1>Question and answer about login</h1>
        <div className="accordion__list">
          {data.map((eachItem) => {
            return <Accordion data={eachItem} key={eachItem.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
