import "./App.css";
import Generator from "./components/Generator";

function App() {
  return (
    <div className="App text-white bg-gray-400 w-full h-screen flex flex-col">
      <div className="m-auto text-center space-y-4">
        <h1 className="text-4xl font-bold">Generate Your Lotto Numbers</h1>
        <Generator></Generator>
      </div>
    </div>
  );
}

export default App;
