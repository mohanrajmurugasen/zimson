import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Radio, NativeBaseProvider, Center } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { dataProduct } from "../../../redux/action/action";
import { useNavigation } from "@react-navigation/native";

function Nonpurchase({ setnonpur, nonpur, setShowModal }) {
  const dispatch = useDispatch();
  // const dem = useSelector((state) => state.addData.data);
  const navigation = useNavigation();
  const fam = [
    "Below 5k",
    "5k - 10k",
    "10k - 20k",
    "20k - 50k",
    "50k - 1L",
    "1L - 5L",
    "5L - 10L",
    "10L - 15L",
  ];

  const [star, setstar] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const [brand, setbrand] = useState("");
  const [reason, setreason] = useState("");
  const [num, setnum] = useState(0);

  const submiting = () => {
    dispatch(
      dataProduct({
        type: "priceNon",
        val: nonpur,
      })
    );
    dispatch(
      dataProduct({
        type: "brandNon",
        val: brand,
      })
    );
    dispatch(
      dataProduct({
        type: "reasonNon",
        val: reason,
      })
    );
    dispatch(
      dataProduct({
        type: "starNon",
        val: num,
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
        <View style={styles.tops}>
          <Text style={styles.one}>Reason for non purchase</Text>
          <Text style={styles.two}>Expected Price Range</Text>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={nonpur}
            onChange={(nextValue) => {
              setnonpur(nextValue);
            }}
          >
            <View style={{ flexDirection: "row", marginBottom: 30 }}>
              {fam.slice(0, 4).map((itm) => (
                <View style={styles.top1} key={itm}>
                  <Radio value={`${itm}`} size="lg" my={1}>
                    <Text style={styles.rads}>{itm}</Text>
                  </Radio>
                </View>
              ))}
            </View>
            <View style={{ flexDirection: "row", marginBottom: 30 }}>
              {fam.slice(4, 8).map((itm) => (
                <View style={styles.top1} key={itm}>
                  <Radio value={`${itm}`} size="lg" my={1}>
                    <Text style={styles.rads}>{itm}</Text>
                  </Radio>
                </View>
              ))}
            </View>
          </Radio.Group>
          <Text style={styles.three}>Expected Brand</Text>
          <TextInput
            style={styles.ins}
            value={brand}
            onChangeText={(txt) => setbrand(txt)}
          />
          <Text style={styles.four}>Other Reasons</Text>
          <TextInput
            style={styles.ins}
            value={reason}
            onChangeText={(txt) => setreason(txt)}
          />
          <Text style={styles.five}>Rate Your Experience</Text>
          <View style={styles.star}>
            <Ionicons
              name="star"
              size={32}
              color={star.one ? "black" : "gray"}
              style={styles.col}
              onPress={() => {
                setnum(1);
                setstar((prevstate) => ({
                  ...prevstate,
                  one: !star.one,
                  two: false,
                  three: false,
                  four: false,
                  five: false,
                }));
              }}
            />
            <Ionicons
              name="star"
              size={32}
              color={star.two ? "black" : "gray"}
              style={styles.col}
              onPress={() => {
                setnum(2);
                setstar((prevstate) => ({
                  ...prevstate,
                  two: !star.two,
                  one: true,
                  three: false,
                  four: false,
                  five: false,
                }));
              }}
            />
            <Ionicons
              name="star"
              size={32}
              color={star.three ? "black" : "gray"}
              style={styles.col}
              onPress={() => {
                setnum(3);
                setstar((prevstate) => ({
                  ...prevstate,
                  three: !star.three,
                  one: true,
                  two: true,
                  four: false,
                  five: false,
                }));
              }}
            />
            <Ionicons
              name="star"
              size={32}
              color={star.four ? "black" : "gray"}
              style={styles.col}
              onPress={() => {
                setnum(4);
                setstar((prevstate) => ({
                  ...prevstate,
                  four: !star.four,
                  one: true,
                  two: true,
                  three: true,
                  five: false,
                }));
              }}
            />
            <Ionicons
              name="star"
              size={32}
              color={star.five ? "black" : "gray"}
              style={styles.col}
              onPress={() => {
                setnum(5);
                setstar((prevstate) => ({
                  ...prevstate,
                  five: !star.five,
                  one: true,
                  two: true,
                  three: true,
                  four: true,
                }));
              }}
            />
          </View>
          <View style={styles.last}>
            <View></View>
            <TouchableOpacity style={styles.button} onPress={submiting}>
              <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Center>
    </NativeBaseProvider>
  );
}

Nonpurchase.propTypes = {
  setShowModal: PropTypes.string,
};

const styles = StyleSheet.create({
  rads: {
    fontSize: 20,
  },
  top1: {
    marginRight: 50,
  },
  star: {
    flexDirection: "row",
  },
  col: {
    marginRight: 8,
  },
  button: {
    backgroundColor: "black",
    width: 100,
  },
  submit: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
  },
  last: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tops: {
    width: "85%",
    paddingTop: 30,
  },
  one: {
    fontSize: 25,
    marginBottom: 15,
  },
  two: {
    fontSize: 25,
    marginBottom: 20,
  },
  three: {
    fontSize: 25,
  },
  four: {
    fontSize: 25,
    marginTop: 20,
  },
  five: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  ins: {
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    height: 30,
    fontSize: 20,
    marginTop: 10,
  },
});

export default Nonpurchase;
