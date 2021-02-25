import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import ImagePins from "./Components/ImagePins";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Banner />
        <ImagePins />
      </div>
    </Provider>
  );
}

export default App;
