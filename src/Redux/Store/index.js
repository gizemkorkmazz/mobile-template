import { addReducerToList } from "@omegabigdata/apollo-rn-redux-helper/src/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reactotron from "Helpers/Reactotron";
import oneSignalReducer from "Redux/Reducers/OneSignalReducers";

const newReducers = addReducerToList({
  oneSignal: oneSignalReducer,
});

const myStore = __DEV__
  ? createStore(
      newReducers,
      {},
      compose(
        applyMiddleware(thunk),
        Reactotron.createEnhancer(),
      ),
    )
  : createStore(newReducers, {}, applyMiddleware(thunk));

export default myStore;
