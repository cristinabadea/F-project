/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import MyRouter from "./Router";
import { ContextProvider } from "./Contexts/Context";
import { ImageContextProvider } from "./Contexts/ImageContext";

function App() {
  return (
    <div className="App">
      <ImageContextProvider>
        <ContextProvider>
          <MyRouter></MyRouter>
        </ContextProvider>
      </ImageContextProvider>
    </div>
  );
}

export default App;
