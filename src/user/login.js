import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
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
import { useDispatch } from "react-redux";
import { dataProduct } from "../../redux/action/action";
import PhoneInput from "react-native-phone-number-input";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import axios from "axios";

const Login = ({ navigation }) => {
  let [service, setService] = useState("");
  let [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [change, setchange] = useState(false);
  const [code, setCode] = useState("");
  let [location, setlocation] = useState([]);
  const dispatch = useDispatch();
  const [random, setrandom] = React.useState(null);

  const phoneInput = useRef(null);

  useEffect(() => {
    authaxios
      .get("location")
      .then((res) => {
        setlocation(res.data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const otps = () => {
    let min = 1000;
    let max = 9999;
    let rand = min + Math.random() * (max - min);
    setrandom(Math.floor(rand));

    setchange(true);
    axios
      .post(
        `https://beyondmobile.org/api/otp.php?authkey=374188As7FNNiJb62284f0dP1&mobile=91${value}&message=Dear customer Use OTP ${Math.floor(
          rand
        )} to login to Lakshmi jewellery customer portal.&sender=LJPSMS&otp=${Math.floor(
          rand
        )}&DLT_TE_ID=1707164681574855347`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error("err.message");
      });
  };

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
    if (Number(random) === Number(code)) {
      navigation.navigate("store");
    } else {
      alert("Enter Valid OTP");
    }
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
                <TouchableOpacity style={styles.button} onPress={otps}>
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
          <Text style={styles.details}>Verify OTP</Text>
          <NativeBaseProvider>
            <Center>
              <View style={styles.flex}>
                <OTPInputView
                  style={{ width: "40%", height: 150, paddingBottom: 50 }}
                  pinCount={4}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={(code) => {
                    setCode(code);
                  }}
                />
              </View>
              {code.length === 4 ? (
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
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "gray",
    color: "black",
    fontSize: 22,
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
  details: {
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 40,
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
