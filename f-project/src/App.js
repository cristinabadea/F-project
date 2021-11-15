import "bootstrap/dist/css/bootstrap.min.css";
import MyRouter from "./Router";
import { ContextProvider } from "./Context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <MyRouter></MyRouter>
      </ContextProvider>
    </div>
  );
}

export default App;

