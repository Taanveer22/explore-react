import "./App.css";
import Card from "./components/cardCom/Card";

function App() {
  // title data passing by props
  let titleOne = "my title no. 1";
  let titleTwo = "my title no. 2";
  let titleThree = "my title no. 3";
  // views data passing by props
  let viewsOne = "100k";
  let viewsTwo = "200k";
  let viewsThree = "300k";
  // buy now button data passing by props
  let buyOne = "BUY NOW 1";
  let buyTwo = "BUY NOW 2";
  let buyThree = "BUY NOW 3";

  return (
    <>
      <h1 className="text-5xl text-center mb-12">
        welcome to explore react card
      </h1>
      <div className="grid grid-cols-3 gap-3 px-12">
        <Card title={titleOne} views={viewsOne} buy={buyOne}></Card>
        <Card title={titleTwo} views={viewsTwo} buy={buyTwo}></Card>
        <Card title={titleThree} views={viewsThree} buy={buyThree}></Card>
      </div>
    </>
  );
}

export default App;
