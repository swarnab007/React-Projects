import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-black text-xl p-4 rounded-xl mb-4 w-1/4">
        Macbook Le Lo
      </h1>
      <Card productName="Macbook 14 Pro" btnText = "Go through" />
      <Card className="mb-4" productName="Macbook Air 13 Pro" />
    </>
  );
}

export default App;
