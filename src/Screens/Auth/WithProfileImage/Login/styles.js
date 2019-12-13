import {StyleSheet} from 'react-native';
import Colors from 'Themes/Colors';
import {wp, FontSizeDict} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: wp(10),
  },
  image: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(50),
    alignSelf: 'center',
    margin: wp(5),
  },
  button: {
    backgroundColor: Colors.black,
    margin: wp(3),
  },
  text: {
    fontSize: FontSizeDict.font13,
    color: Colors.white,
  },
  forgotPassword: {
    fontSize: FontSizeDict.font12,
    color: Colors.text.dark.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: wp(5),
  },
  signUp: {
    fontSize: FontSizeDict.font13,
    color: Colors.text.dark.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: wp(3),
  },
  footer: {
    marginTop: wp(8),
  },
});
export default styles;
