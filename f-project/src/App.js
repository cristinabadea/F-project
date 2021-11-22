/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import MyRouter from "./Router";
import { ContextProvider } from "./Contexts/Context";
import ImageContextProvider from "./Contexts/ImageContext";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <ImageContextProvider>
          <MyRouter></MyRouter>
        </ImageContextProvider>
      </ContextProvider>
    </div>
  );
}

export default App;
