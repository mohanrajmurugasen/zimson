import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ban from "../../assets/3.png";
import { Center, NativeBaseProvider, Radio } from "native-base";

const About = ({ navigation }) => {
  const [value, setValue] = useState("1");
  return (
    <View>
      <View style={styles.ban}>
        <Image source={Ban} style={styles.img} />
      </View>
      <View style={styles.sec}>
        <ScrollView>
          <Text style={styles.detail}>How do know about the store ?</Text>
          <NativeBaseProvider>
            <Center>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={value}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
              >
                <View style={styles.digi}>
                  <Radio value="1" size="lg" my={1}>
                    <Text style={styles.radioText}>Digital Media</Text>
                  </Radio>
                </View>
                <View style={styles.digi}>
                  <Radio value="2" size="lg" my={1}>
                    <Text style={styles.radioText}>Print Media</Text>
                  </Radio>
                </View>
                <View style={styles.digi}>
                  <Radio value="3" size="lg" my={1}>
                    <Text style={styles.radioText}>Social Media</Text>
                  </Radio>
                </View>
                <View style={styles.digi}>
                  <Radio value="4" size="lg" my={1}>
                    <Text style={styles.radioText}>Radio Ad</Text>
                  </Radio>
                </View>
                <View style={styles.digi}>
                  <Radio value="5" size="lg" my={1}>
                    <Text style={styles.radioText}>Family (or) Friends</Text>
                  </Radio>
                </View>
                <View style={styles.digi}>
                  <Radio value="6" size="lg" my={1}>
                    <View style={styles.other}>
                      <Text style={styles.radioText}>Others</Text>
                      <TextInput style={styles.otherInput} />
                    </View>
                  </Radio>
                </View>
              </Radio.Group>
            </Center>
          </NativeBaseProvider>
        </ScrollView>
      </View>
      <View style={styles.foot}>
        <TouchableOpacity style={styles.bot}>
          <Text style={styles.zimson}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bot2}
          onPress={() => navigation.navigate("tabs")}
        >
          <Text style={styles.zimson}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ban: {
    width: "100%",
    height: "40%",
  },
  digi: {
    marginBottom: 35,
  },
  img: {
    height: "100%",
  },
  sec: {
    height: "52%",
    backgroundColor: "white",
    paddingTop: 50,
  },
  foot: {
    height: "8%",
    width: "100%",
    flexDirection: "row",
  },
  bot: {
    backgroundColor: "#dba3c4",
    width: "50%",
  },
  bot2: {
    backgroundColor: "#a88ab0",
    width: "50%",
  },
  detail: {
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 30,
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
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
  },
  radioText: {
    fontSize: 25,
    color: "black",
  },
  otherInput: {
    borderColor: "gray",
    borderWidth: 2,
    width: 170,
    marginLeft: 20,
    fontSize: 20,
    height: 40,
    paddingLeft: 15,
  },
  other: {
    flexDirection: "row",
  },
});

export default About;
