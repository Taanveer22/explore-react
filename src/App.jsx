import "./App.css";
import Card from "./components/cardCom/Card";
import "./components/cardCom/Example";
import Example from "./components/cardCom/Example";

function App() {
  // dynamic props data passing
  // children props data passing
  const data = [
    { id: 1, name: "item 1" },
    { id: 2, name: "item 2" },
    { id: 3, name: "item 3" },
  ];

  return (
    <>
      <h1 className="text-5xl text-center mb-12">
        welcome to explore react card
      </h1>
      <div className="grid grid-cols-3 gap-3 px-12">
        {data.map((dataItem) => {
          // console.log(dataItem);
          // console.log(dataItem.name);
          return <Card key={dataItem.id} title={dataItem.name}></Card>;
        })}
      </div>

      {/* children props syntax */}
      <Example>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        molestias.
      </Example>
    </>
  );
}

export default App;
