import Welcome from "./components/Welcome";
import { testService } from "./services/api";
import Search from "./components/Search";

function App() {

  return (
    <>
      <div>
        <h1>Github user search</h1>
        <p>Welcome, the App is set up correctly!</p>
        <Welcome />
        <testService />
        <Search />
      </div>
    </>
  );
}




export default App;


