import ActionTypes from "../ActionTypes/index";

const INITIAL_STATE = {
  device: null,
};

const oneSignalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_DEVICE_INFO:
      return {
        ...state,
        device: action.data.device,
      };
    default:
      return state;
  }
};

export default oneSignalReducer;
