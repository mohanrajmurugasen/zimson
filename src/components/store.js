import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ban from "../../assets/2.png";
import { Center, NativeBaseProvider, Radio, Stack } from "native-base";

const Store = ({ navigation }) => {
  const [value, setValue] = useState("M");
  const [value2, setValue2] = useState("25");
  return (
    <View>
      <View style={styles.ban}>
        <Image source={Ban} style={styles.img} />
      </View>
      <View style={styles.sec}>
        <Text style={styles.detail}>
          Please Enter the Below Information To Continue
        </Text>
        <NativeBaseProvider>
          <Center>
            <View style={styles.flex}>
              <TextInput style={styles.input} placeholder="Name" />
              <TextInput style={styles.input} placeholder="Phone Number" />
              <TextInput style={styles.input} placeholder="Email Id" />
              <View style={styles.hole}>
                <Text style={styles.gender}>Gender</Text>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value}
                  onChange={(nextValue) => {
                    setValue(nextValue);
                  }}
                >
                  <Stack
                    direction={{
                      base: "column",
                      md: "row",
                    }}
                    alignItems={{
                      base: "flex-start",
                      md: "center",
                    }}
                    space={4}
                    w="75%"
                    maxW="300px"
                  >
                    <Radio value="M" my={1} size="lg" colorScheme="red">
                      <Text style={styles.radioText}>Male</Text>
                    </Radio>
                    <Radio value="F" my={1} size="lg" colorScheme="red">
                      <Text style={styles.radioText}>Female</Text>
                    </Radio>
                  </Stack>
                </Radio.Group>
              </View>
              <View style={styles.hole}>
                <Text style={styles.gender}>Age Group</Text>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value2}
                  onChange={(nextValue) => {
                    setValue2(nextValue);
                  }}
                >
                  <Stack
                    direction={{
                      base: "column",
                      md: "row",
                    }}
                    alignItems={{
                      base: "flex-start",
                      md: "center",
                    }}
                    space={4}
                    w="75%"
                    maxW="300px"
                  >
                    <Radio value="25" my={1} size="lg" colorScheme="red">
                      <Text style={styles.radioText}>Under 25</Text>
                    </Radio>
                    <Radio value="34" my={1} size="lg" colorScheme="red">
                      <Text style={styles.radioText}>25 - 34</Text>
                    </Radio>
                  </Stack>
                  <Stack
                    direction={{
                      base: "column",
                      md: "row",
                    }}
                    alignItems={{
                      base: "flex-start",
                      md: "center",
                    }}
                    space={4}
                    w="75%"
                    maxW="300px"
                    style={{ marginTop: 15 }}
                  >
                    <Radio value="44" my={1} size="lg" colorScheme="red">
                      <Text style={styles.radioText}>35 - 44</Text>
                    </Radio>
                    <Radio value="54" my={1} size="lg" colorScheme="red">
                      <Text style={styles.radioText}>45 - 54</Text>
                    </Radio>
                    <Radio value="55" my={1} size="lg" colorScheme="red">
                      <Text style={styles.radioText}>55 and above</Text>
                    </Radio>
                  </Stack>
                </Radio.Group>
              </View>
              <View style={styles.flex1}>
                <TextInput style={styles.input1} placeholder="Birthday" />
                <TextInput style={styles.input1} placeholder="Aniversary" />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("about")}
                >
                  <Text style={styles.submit}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Center>
        </NativeBaseProvider>
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
    paddingTop: 30,
  },
  detail: {
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 70,
    marginTop: 10,
  },
  flex: {
    width: "50%",
    marginTop: 20,
  },
  input: {
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginRight: 10,
    fontSize: 20,
    paddingBottom: 10,
    marginBottom: 30,
  },
  hole: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 30,
  },
  gender: {
    fontSize: 23,
    color: "gray",
    marginRight: 20,
    marginTop: 0,
  },
  radioText: {
    fontSize: 22,
    color: "gray",
  },
  flex1: {
    flexDirection: "row",
    marginTop: 10,
  },
  input1: {
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
    paddingHorizontal: 20,
    fontSize: 20,
  },
});

export default Store;
