import "./App.css";
import CakeContainer from "./Container/CakeContainer";
import store from "./redux/cakes/cakeStore";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </div>
  );
}

export default App;
