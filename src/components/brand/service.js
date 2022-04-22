import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Center, NativeBaseProvider, Radio } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { dataProduct } from "../../../redux/action/action";

const Service = ({ setShowModal, setcount, count }) => {
  const dispatch = useDispatch();
  // const dem = useSelector((state) => state.addData.data);
  const navigation = useNavigation();

  const [values, setValues] = useState("");
  const [value1, setValue1] = useState("0");
  const [emoj, setemoj] = useState({
    one: "",
    two: "",
    three: "",
  });
  const [emojCol, setemojCol] = useState({
    one: 0,
    two: 0,
    three: 0,
  });
  const fam = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const emo = [
    "emoji-flirt",
    "emoji-happy",
    "emoji-neutral",
    "emoji-sad",
    "insert-emoticon",
  ];
  const emo1 = [
    "emoji-flirt",
    "emoji-happy",
    "emoji-neutral",
    "emoji-sad",
    "insert-emoticon",
  ];
  const emo2 = [
    "emoji-flirt",
    "emoji-happy",
    "emoji-neutral",
    "emoji-sad",
    "insert-emoticon",
  ];

  const emotion = (x, y) => {
    if (x === 1) {
      setemojCol((prevstate) => ({
        ...prevstate,
        one: y,
      }));
      if (y === 0) {
        setemoj((prevstate) => ({
          ...prevstate,
          one: "Excellent",
        }));
      } else if (y === 1) {
        setemoj((prevstate) => ({
          ...prevstate,
          one: "Very Good",
        }));
      } else if (y === 2) {
        setemoj((prevstate) => ({
          ...prevstate,
          one: "Good",
        }));
      } else if (y === 3) {
        setemoj((prevstate) => ({
          ...prevstate,
          one: "Bad",
        }));
      } else if (y === 4) {
        setemoj((prevstate) => ({
          ...prevstate,
          one: "Poor",
        }));
      }
    } else if (x === 2) {
      setemojCol((prevstate) => ({
        ...prevstate,
        two: y,
      }));
      if (y === 0) {
        setemoj((prevstate) => ({
          ...prevstate,
          two: "Excellent",
        }));
      } else if (y === 1) {
        setemoj((prevstate) => ({
          ...prevstate,
          two: "Very Good",
        }));
      } else if (y === 2) {
        setemoj((prevstate) => ({
          ...prevstate,
          two: "Good",
        }));
      } else if (y === 3) {
        setemoj((prevstate) => ({
          ...prevstate,
          two: "Bad",
        }));
      } else if (y === 4) {
        setemoj((prevstate) => ({
          ...prevstate,
          two: "Poor",
        }));
      }
    } else if (x === 3) {
      setemojCol((prevstate) => ({
        ...prevstate,
        three: y,
      }));
      if (y === 0) {
        setemoj((prevstate) => ({
          ...prevstate,
          three: "Excellent",
        }));
      } else if (y === 1) {
        setemoj((prevstate) => ({
          ...prevstate,
          three: "Very Good",
        }));
      } else if (y === 2) {
        setemoj((prevstate) => ({
          ...prevstate,
          three: "Good",
        }));
      } else if (y === 3) {
        setemoj((prevstate) => ({
          ...prevstate,
          three: "Bad",
        }));
      } else if (y === 4) {
        setemoj((prevstate) => ({
          ...prevstate,
          three: "Poor",
        }));
      }
    }
  };

  const submitings = () => {
    dispatch(
      dataProduct({
        type: "receiptServ",
        val: values,
      })
    );
    dispatch(
      dataProduct({
        type: "familyServ",
        val: value1,
      })
    );
    dispatch(
      dataProduct({
        type: "qualityServ",
        val: emoj.one,
      })
    );
    dispatch(
      dataProduct({
        type: "deliveryServ",
        val: emoj.two,
      })
    );
    dispatch(
      dataProduct({
        type: "jobServ",
        val: emoj.three,
      })
    );
    setShowModal(true);
    setTimeout(() => {
      navigation.navigate("login");
      setShowModal(false);
    }, 1000);
  };
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
                <TextInput
                  style={styles.input}
                  value={values}
                  onChangeText={(txt) => setValue1(txt)}
                />
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
                  {emo.map((itm, index) =>
                    itm === "insert-emoticon" ? (
                      <MaterialIcons
                        name={itm}
                        style={styles.col}
                        color={emojCol.one === index ? "black" : "gray"}
                        key={index}
                        size={40}
                        onPress={() => emotion(1, index)}
                      />
                    ) : (
                      <Entypo
                        name={itm}
                        style={styles.col}
                        key={index}
                        size={40}
                        color={emojCol.one === index ? "black" : "gray"}
                        onPress={() => emotion(1, index)}
                      />
                    )
                  )}
                </View>
                <Text style={styles.detail1}>On-time delivery</Text>
                <View style={{ flexDirection: "row", marginBottom: 20 }}>
                  {emo1.map((itm, index) =>
                    itm === "insert-emoticon" ? (
                      <MaterialIcons
                        name={itm}
                        style={styles.col}
                        color={emojCol.two === index ? "black" : "gray"}
                        key={index}
                        size={40}
                        onPress={() => emotion(2, index)}
                      />
                    ) : (
                      <Entypo
                        name={itm}
                        style={styles.col}
                        color={emojCol.two === index ? "black" : "gray"}
                        key={index}
                        size={40}
                        onPress={() => emotion(2, index)}
                      />
                    )
                  )}
                </View>
                <Text style={styles.detail1}>Quality of repair job</Text>
                <View style={{ flexDirection: "row", marginBottom: 20 }}>
                  {emo2.map((itm, index) =>
                    itm === "insert-emoticon" ? (
                      <MaterialIcons
                        name={itm}
                        style={styles.col}
                        color={emojCol.three === index ? "black" : "gray"}
                        key={index}
                        size={40}
                        onPress={() => emotion(3, index)}
                      />
                    ) : (
                      <Entypo
                        name={itm}
                        style={styles.col}
                        color={emojCol.three === index ? "black" : "gray"}
                        key={index}
                        size={40}
                        onPress={() => emotion(3, index)}
                      />
                    )
                  )}
                </View>
                <View style={styles.flex1}>
                  <View></View>
                  <TouchableOpacity style={styles.button} onPress={submitings}>
                    <Text style={styles.submit}>Submit</Text>
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
