import Review from "./components/review/Review";
import data from "./components/reviewData/data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main__heading__container">
        <h1>Our Reviews</h1>
        <hr />
      </div>
      <Review data={data} />
    </div>
  );
}

export default App;
