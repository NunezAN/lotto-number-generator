import "./App.css";
import Generator from "./components/Generator";

function App() {
  return (
    <div className="App text-white bg-slate-500 w-full h-screen flex flex-col">
      <div className="m-auto text-center space-y-4">
        <h1 className="text-4xl font-bold">Generate Your Lotto Numbers</h1>
        <h2 className="text-md font-bold">
          Click on generate for your desired lotto ticket to start
        </h2>
        <Generator></Generator>
      </div>
    </div>
  );
}

export default App;
