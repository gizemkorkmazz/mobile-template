import ActionTypes from "../ActionTypes/index";

const setDeviceInfo = device => dispatch => {
  dispatch({
    type: ActionTypes.SET_DEVICE_INFO,
    data: { device },
  });
};
export default setDeviceInfo;
