import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ban from "../../assets/zimson1.png";
import { Center, NativeBaseProvider } from "native-base";

const Login = ({ navigation }) => {
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
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("store")}
              >
                <Text style={styles.submit}>Submit</Text>
              </TouchableOpacity>
            </View>
          </Center>
        </NativeBaseProvider>
      </View>
      <View style={styles.foot}>
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
  },
  sec: {
    height: "42%",
    backgroundColor: "white",
    paddingTop: 170,
  },
  foot: {
    height: "8%",
    backgroundColor: "#e84a49",
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
});

export default Login;
