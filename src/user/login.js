import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Ban from "../../assets/zimson1.png";
import {
  Center,
  NativeBaseProvider,
  Select,
  Box,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "native-base";
import authaxios from "../../interceptors/authaxios";
import { useDispatch, useSelector } from "react-redux";
import { dataProduct } from "../../redux/action/action";
import PhoneInput from "react-native-phone-number-input";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const Login = ({ navigation }) => {
  let [service, setService] = useState("");
  let [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [change, setchange] = useState(false);
  const [code, setCode] = useState("");
  let [location, setlocation] = useState([]);
  const dispatch = useDispatch();
  // const dem = useSelector((state) => state.addData.data);

  const phoneInput = useRef(null);

  useEffect(() => {
    authaxios
      .get("location")
      .then((res) => {
        setlocation(res.data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const submit = async () => {
    dispatch(
      dataProduct({
        type: "user",
        val: `${value}`,
      })
    );
    dispatch(
      dataProduct({
        type: "location",
        val: `${service}`,
      })
    );
    navigation.navigate("store");
  };

  return (
    <View>
      <View style={styles.ban}>
        <Image source={Ban} style={styles.img} />
      </View>
      {!change ? (
        <View style={styles.sec}>
          <Text style={styles.detail}>Enter Mobile Number</Text>
          <NativeBaseProvider>
            <Center>
              <View style={styles.flex}>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={value}
                  defaultCode="IN"
                  layout="first"
                  onChangeText={(text) => {
                    setValue(text);
                  }}
                  onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                  }}
                  withDarkTheme
                  withShadow
                  autoFocus
                  containerStyle={styles.phoneContainer}
                  textContainerStyle={styles.textInput}
                />
              </View>
              {value !== "" && service !== "" ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setchange(true)}
                >
                  <Text style={styles.submit}>Next</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.button2}>
                  <Text style={styles.submit2}>Next</Text>
                </TouchableOpacity>
              )}
            </Center>
          </NativeBaseProvider>
        </View>
      ) : (
        <View style={styles.sec}>
          <Text style={styles.detail}>Verify OTP</Text>
          <NativeBaseProvider>
            <Center>
              <View style={styles.flex}>
                <OTPInputView
                  style={{ width: "80%", height: 200 }}
                  pinCount={4}
                  // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                  // onCodeChanged = {code => { this.setState({code})}}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={(code) => {
                    console.log(`Code is ${code}, you are good to go!`);
                  }}
                />
              </View>
              {value !== "" && service !== "" ? (
                <TouchableOpacity style={styles.button} onPress={submit}>
                  <Text style={styles.submit}>Submit</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.button2}>
                  <Text style={styles.submit2}>Submit</Text>
                </TouchableOpacity>
              )}
            </Center>
          </NativeBaseProvider>
        </View>
      )}
      <View style={styles.foot}>
        <View style={{ width: 330 }}>
          <NativeBaseProvider>
            <Box w="3/4" maxW="300" style={{ marginTop: 19 }}>
              <Select
                selectedValue={service}
                minWidth="200"
                accessibilityLabel="Choose Location"
                placeholder="Choose Location"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  height: 43,
                  fontSize: 18,
                  paddingLeft: 15,
                  marginBottom: 0,
                }}
                dropdownOpenIcon={
                  <View style={styles.pads}>
                    <ChevronUpIcon size="5" style={styles.boxIcon} />
                  </View>
                }
                dropdownCloseIcon={
                  <View style={styles.pads}>
                    <ChevronDownIcon size="5" style={styles.boxIcon} />
                  </View>
                }
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                {location.map((itm) => (
                  <Select.Item label={itm.name} value={itm.name} key={itm.id} />
                ))}
              </Select>
            </Box>
          </NativeBaseProvider>
        </View>
        <Text style={styles.zimson}>Zimson since 1948</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  phoneContainer: {
    width: "65%",
    height: 60,
    marginBottom: 50,
  },
  textInput: {
    paddingVertical: 0,
  },
  ban: {
    width: "100%",
    height: "50%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  sec: {
    height: "42%",
    backgroundColor: "white",
    paddingTop: 130,
  },
  foot: {
    height: "8%",
    backgroundColor: "#e84a49",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  detail: {
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 50,
  },
  flex: {
    flexDirection: "row",
  },
  input: {
    width: "40%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginRight: 10,
    fontSize: 20,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "black",
  },
  submit: {
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 20,
  },
  button2: {
    backgroundColor: "#80808070",
  },
  submit2: {
    color: "gray",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 20,
  },
  zimson: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 35,
  },
  boxIcon: {
    height: 43,
    color: "#c7c2c2",
    width: 20,
  },
  pads: {
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});

export default Login;
