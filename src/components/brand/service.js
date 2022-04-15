import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Center, NativeBaseProvider, Radio } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Service = ({ setShowModal, setcount, count }) => {
  const [value1, setValue1] = useState("1");
  const fam = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const emo = [0, 1, 2, 3, 4];
  return (
    <NativeBaseProvider>
      <Center>
        {count === 1 ? (
          <View style={styles.sec}>
            <Center>
              <View style={{ width: "70%" }}>
                <Text style={styles.detail}>Receipt Number</Text>
              </View>
              <View style={styles.flex}>
                <TextInput style={styles.input} />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setcount(2)}
                >
                  <Text style={styles.submit}>Next</Text>
                </TouchableOpacity>
              </View>
            </Center>
          </View>
        ) : count === 2 ? (
          <View style={styles.sec1}>
            <Text style={styles.detail}>
              How likely are you to recommend our store to your friends and
              family ?
            </Text>
            <Center>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={value1}
                onChange={(nextValue) => {
                  setValue1(nextValue);
                }}
              >
                <View style={{ flexDirection: "row", marginBottom: 30 }}>
                  {fam.slice(0, 6).map((itm) => (
                    <View style={styles.top1} key={itm}>
                      <Radio value={`${itm}`} size="lg" my={1}>
                        <Text style={styles.rads}>{itm}</Text>
                      </Radio>
                    </View>
                  ))}
                </View>
                <View style={{ flexDirection: "row", marginBottom: 60 }}>
                  {fam.slice(6, 11).map((itm) => (
                    <View style={styles.top1} key={itm}>
                      <Radio value={`${itm}`} size="lg" my={1}>
                        <Text style={styles.rads}>{itm}</Text>
                      </Radio>
                    </View>
                  ))}
                </View>
              </Radio.Group>
            </Center>
            <View style={styles.flex1}>
              <View></View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setcount(3)}
              >
                <Text style={styles.submit}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.sec2}>
            <Center>
              <View>
                <Text style={styles.detail1}>
                  Please rate us on the following parameters
                </Text>
                <Text style={styles.detail1}>Staff interaction quality</Text>
                <View style={{ flexDirection: "row", marginBottom: 20 }}>
                  {emo.map((itm, index) => (
                    <Ionicons
                      key={index}
                      name="happy"
                      size={40}
                      color="gray"
                      style={styles.col}
                    />
                  ))}
                </View>
                <Text style={styles.detail1}>On-time delivery</Text>
                <View style={{ flexDirection: "row", marginBottom: 20 }}>
                  {emo.map((itm, index) => (
                    <Ionicons
                      key={index}
                      name="happy"
                      size={40}
                      color="gray"
                      style={styles.col}
                    />
                  ))}
                </View>
                <Text style={styles.detail1}>Quality of repair job</Text>
                <View style={{ flexDirection: "row", marginBottom: 20 }}>
                  {emo.map((itm, index) => (
                    <Ionicons
                      key={index}
                      name="happy"
                      size={40}
                      color="gray"
                      style={styles.col}
                    />
                  ))}
                </View>
                <View style={styles.flex1}>
                  <View></View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setShowModal(true)}
                  >
                    <Text style={styles.submit}>Next</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Center>
          </View>
        )}
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  sec: {
    backgroundColor: "white",
    paddingTop: 230,
  },
  sec1: {
    backgroundColor: "white",
    paddingTop: 100,
    width: "70%",
  },
  sec2: {
    backgroundColor: "white",
    paddingTop: 80,
    width: "70%",
  },
  detail: {
    fontSize: 25,
    paddingBottom: 50,
    lineHeight: 50,
  },
  detail1: {
    fontSize: 25,
    paddingBottom: 30,
  },
  flex: {
    flexDirection: "row",
  },
  flex1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "55%",
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
    paddingHorizontal: 25,
    fontSize: 20,
  },
  rads: {
    fontSize: 20,
  },
  top1: {
    marginRight: 50,
  },
  col: {
    marginRight: 30,
  },
});

export default Service;
