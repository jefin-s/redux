import React from "react";
import Cake from "./react-redux/component/Cake";
import store from "./redux/store";
import { Provider } from "react-redux";
import Hookcakecomponent from "./react-redux/component/Hookcakecomponent";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Cake/>
        <Hookcakecomponent/>
      </div>
    </Provider>
  );
};

export default App;
