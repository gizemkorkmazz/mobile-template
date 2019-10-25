import store from "Redux/Store";
import reactotron from "reactotron-react-native";
import { Platform } from "react-native";

const unparseMobilePhone = parsedMobilePhone => {
  if (!parsedMobilePhone) {
    return null;
  }
  const phoneNumberArray =
    parsedMobilePhone.slice(3, 6) +
    parsedMobilePhone.slice(8, 11) +
    parsedMobilePhone.slice(12, 14) +
    parsedMobilePhone.slice(15, 17);
  return phoneNumberArray;
};

const unparseTckn = parsedTckn => {
  if (!parsedTckn) {
    return null;
  }
  const tckn = parsedTckn.split("-").join("");
  return tckn;
};

const unparseConfirmationCode = parsedCode => {
  if (!parsedCode) {
    return null;
  }
  const code = parsedCode.split("-").join("");
  return code;
};

const isDev = () => __DEV__;

const printLog = (logName, log) => {
  if (__DEV__) {
    reactotron.log(logName || "Log", log);
  }
};

const isAndroid = () => Platform.OS === "android";

const callAction = func => store.dispatch(func);

const callReducerWithType = type => store.dispatch({ type });

const formatPoint = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

export default {
  unparseMobilePhone,
  unparseTckn,
  unparseConfirmationCode,
  isDev,
  isAndroid,
  printLog,
  callAction,
  formatPoint,
  callReducerWithType,
};
