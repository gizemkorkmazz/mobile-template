import {StyleSheet} from 'react-native';
import Colors from 'Themes/Colors';
import {wp, FontSizeDict} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    padding: wp(5),
    paddingBottom: wp(11),
    borderWidth: wp(0.2),
    borderRadius: wp(3),
    borderColor: Colors.border,
    borderBottomWidth: 0,
    shadowColor: Colors.background.transparent,
    shadowOffset: {width: 5, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(50),
    alignSelf: 'center',
    margin: wp(5),
  },
  button: {
    backgroundColor: Colors.black,
    width: wp(30),
    position: 'absolute',
    bottom: -wp(5),
    alignSelf: 'center',
  },
  text: {
    fontSize: FontSizeDict.font13,
    color: Colors.white,
  },
  forgotPassword: {
    fontSize: FontSizeDict.font12,
    color: Colors.text.light.thirnary,
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
});

export default styles;
