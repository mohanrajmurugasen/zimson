import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
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

const Login = ({ navigation }) => {
  let [service, setService] = useState("");
  let [value, setvalue] = useState("");
  let [location, setlocation] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    authaxios
      .get("location")
      .then((res) => {
        setlocation(res.data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const submit = async () => {
    navigation.navigate("store");
  };

  return (
    <View>
      <View style={styles.ban}>
        <Image source={Ban} style={styles.img} />
      </View>
      <View style={styles.sec}>
        <Text style={styles.detail}>Enter Your Details</Text>
        <NativeBaseProvider>
          <Center>
            <View style={styles.flex}>
              <TextInput
                style={styles.input}
                placeholder="Email or Mobile Number"
                value={value}
                onChangeText={(txt) => setvalue(txt)}
              />
              <TouchableOpacity style={styles.button} onPress={submit}>
                <Text style={styles.submit}>Submit</Text>
              </TouchableOpacity>
            </View>
          </Center>
        </NativeBaseProvider>
      </View>
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
    paddingTop: 170,
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
    paddingBottom: 70,
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
