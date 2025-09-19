import Welcome from "./components/Welcome";
import { testService } from "./services/api";

function App() {

  return (
    <>
      <div>
        <h1>Github user search</h1>
        <p>Welcome, the App is set up correctly!</p>
        <Welcome />
        <testService />
      </div>
    </>
  );
}




export default App;


