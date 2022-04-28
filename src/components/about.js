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
import { useDispatch } from "react-redux";
import { dataProduct } from "../../redux/action/action";

const About = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [other, setother] = useState("");

  const dispatch = useDispatch();

  const submit = async () => {
    if (value !== "") {
      if (value === "Others") {
        dispatch(
          dataProduct({
            type: "about",
            val: `${other}`,
          })
        );
      } else {
        dispatch(
          dataProduct({
            type: "about",
            val: `${value}`,
          })
        );
      }

      navigation.navigate("tabs");
    } else {
      alert("Please choose atleast one field");
    }
  };
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
                  <Radio value="Digital Media" size="lg" my={1}>
                    <Text style={styles.radioText}>Digital Media</Text>
                  </Radio>
                </View>
                <View style={styles.digi}>
                  <Radio value="Print Media" size="lg" my={1}>
                    <Text style={styles.radioText}>Print Media</Text>
                  </Radio>
                </View>
                <View style={styles.digi}>
                  <Radio value="Social Media" size="lg" my={1}>
                    <Text style={styles.radioText}>Social Media</Text>
                  </Radio>
                </View>
                <View style={styles.digi}>
                  <Radio value="Radio Ad" size="lg" my={1}>
                    <Text style={styles.radioText}>Radio Ad</Text>
                  </Radio>
                </View>
                <View style={styles.digi}>
                  <Radio value="Family or Friends" size="lg" my={1}>
                    <Text style={styles.radioText}>Family (or) Friends</Text>
                  </Radio>
                </View>
                <View style={styles.digi}>
                  <Radio value="Other" size="lg" my={1}>
                    <View style={styles.other}>
                      <Text style={styles.radioText}>Others</Text>
                      <TextInput
                        style={styles.otherInput}
                        value={other}
                        onChangeText={(txt) => setother(txt)}
                      />
                    </View>
                  </Radio>
                </View>
              </Radio.Group>
            </Center>
          </NativeBaseProvider>
        </ScrollView>
      </View>
      <View style={styles.foot}>
        <TouchableOpacity style={styles.bot} onPress={() => navigation.pop()}>
          <Text style={styles.zimson}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bot2} onPress={submit}>
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
    width: "100%",
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
