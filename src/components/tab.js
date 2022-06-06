import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Ban from "../../assets/5.png";
import Ban2 from "../../assets/6.png";
import Ban3 from "../../assets/7.png";
import Ban4 from "../../assets/9.png";
import Ban5 from "../../assets/10.png";
import {
  Center,
  NativeBaseProvider,
  Radio,
  Modal,
  Box,
  Select,
  CheckIcon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Nonpurchase from "./brand/nonpurchase";
import Service from "./brand/service";
import { useDispatch, useSelector } from "react-redux";
import { dataProduct } from "../../redux/action/action";
import authaxios from "../../interceptors/authaxios";

const Tabs = ({ navigation }) => {
  const dispatch = useDispatch();
  const dem = useSelector((state) => state.addData.data);

  const [tab, settab] = useState(1);
  const items = [
    { num: "Rado" },
    { num: "Tissot" },
    { num: "Seiko" },
    { num: "Casio" },
    { num: "Fossil" },
    { num: "Skagen" },
    { num: "CK" },
    { num: "Hugo Boss" },
    { num: "Emporio Armani" },
    { num: "Armani Xchange" },
    { num: "Michael Cors" },
    { num: "Alba" },
    { num: "Titan" },
    { num: "Timex" },
    { num: "Sonata" },
    { num: "Fastrack" },
    { num: "Zoop" },
    { num: "Wallclocks - Titan, Woodcraft, Seiko" },
    { num: "Perfumes - Titan Skinn" },
    { num: "Wallets - Titan, Fastrack" },
    { num: "Swarovski" },
    { num: "Police" },
    { num: "Tommy" },
    { num: "Kenneth Cole" },
    { num: "Aspen" },
  ];
  const [val, setval] = useState(1);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const fam = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [showModal, setShowModal] = useState(false);
  const [nonpur, setnonpur] = useState("");
  const [count, setcount] = useState(1);
  const [imgVal, setimgVal] = useState("");
  const [nums, setnums] = useState(0);
  const [star, setstar] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });
  const width = Dimensions.get("window").width;

  const submits = () => {
    const item = {
      user: dem.user,
      location: dem.location,
      name: dem.name,
      phone: dem.phone,
      email: dem.email,
      gender: dem.gender,
      age: dem.age,
      birthday: dem.birthday,
      anniversary: dem.anniversary,
      about: dem.about,
      brand: dem.brandPur,
      star: dem.starPur,
      reason: dem.reasonPur,
      family: dem.familyPur,
      rate: dem.ratePur,
      family2: dem.family2Pur,
    };
    authaxios
      .post("purchase", item)
      .then((res) => {
        console.log(res.data);
        setShowModal(true);
        setTimeout(() => {
          navigation.navigate("login");
          setShowModal(false);
        }, 1000);
      })
      .catch((err) => console.error(err.message));
  };

  console.log(nums);

  return (
    <View>
      <View style={styles.ban}>
        <Image
          source={
            tab === 1
              ? Ban
              : tab === 2
              ? Ban2
              : count === 1
              ? Ban3
              : count === 2
              ? Ban4
              : Ban5
          }
          style={styles.img}
        />
      </View>
      <View style={styles.sec}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={tab === 1 ? styles.purchase2 : styles.purchase}
            onPress={() => settab(1)}
          >
            <Text
              style={tab === 1 ? styles.purchaseText2 : styles.purchaseText}
            >
              Purchased
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tab === 2 ? styles.purchase2 : styles.purchase}
            onPress={() => settab(2)}
          >
            <Text
              style={tab === 2 ? styles.purchaseText2 : styles.purchaseText}
            >
              Non Purchased
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tab === 3 ? styles.purchase2 : styles.purchase}
            onPress={() => settab(3)}
          >
            <Text
              style={tab === 3 ? styles.purchaseText2 : styles.purchaseText}
            >
              Services
            </Text>
          </TouchableOpacity>
        </View>
        {tab === 1 ? (
          val === 1 ? (
            <NativeBaseProvider>
              <Center>
                <View
                  style={{
                    width: width - 50,
                    marginTop: 100,
                  }}
                >
                  <Text style={styles.select}>Select Your Brands</Text>
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: "#00c8cb",
                      width: "100%",
                      borderRadius: 6,
                      marginVertical: 20,
                    }}
                  >
                    <Box style={{ width: "100%" }}>
                      <Select
                        selectedValue={imgVal}
                        minWidth="200"
                        accessibilityLabel="Brands"
                        placeholder="Brands"
                        _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        style={{
                          fontSize: 25,
                          height: 70,
                          paddingLeft: 25,
                          paddingBottom: 18,
                          letterSpacing: 1,
                        }}
                        onValueChange={(itemValue) => setimgVal(itemValue)}
                      >
                        {items.map((itm, index) => (
                          <Select.Item
                            key={index}
                            label={itm.num}
                            value={itm.num}
                            style={{ fontSize: 20 }}
                          />
                        ))}
                      </Select>
                    </Box>
                  </View>
                  <Text style={styles.exp}>Rate Your Experience</Text>
                  <View style={styles.star}>
                    <Ionicons
                      name="star"
                      size={32}
                      color={star.one ? "#00c8cb" : "gray"}
                      style={styles.col}
                      onPress={() => {
                        setnums(1);
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
                      color={star.two ? "#00c8cb" : "gray"}
                      style={styles.col}
                      onPress={() => {
                        setnums(2);
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
                      color={star.three ? "#00c8cb" : "gray"}
                      style={styles.col}
                      onPress={() => {
                        setnums(3);
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
                      color={star.four ? "#00c8cb" : "gray"}
                      style={styles.col}
                      onPress={() => {
                        setnums(4);
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
                      color={star.five ? "#00c8cb" : "gray"}
                      style={styles.col}
                      onPress={() => {
                        setnums(5);
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
                    {imgVal !== "" && nums !== 0 ? (
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          dispatch(
                            dataProduct({
                              type: "brandPur",
                              val: `${imgVal}`,
                            })
                          );
                          dispatch(
                            dataProduct({
                              type: "starPur",
                              val: Number(nums),
                            })
                          );
                          if (nums <= 3) {
                            setval(3);
                          } else {
                            setval(2);
                          }
                        }}
                      >
                        <Text style={styles.submit}>Next</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={styles.button2}>
                        <Text style={styles.submit2}>Next</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </Center>
            </NativeBaseProvider>
          ) : val === 2 ? (
            <NativeBaseProvider>
              <Center>
                <View style={styles.all1}>
                  <Text style={styles.select1}>
                    What is the key reason for giving us {nums} stars ?
                  </Text>
                  <Center>
                    <Radio.Group
                      name="myRadioGroup"
                      accessibilityLabel="favorite number"
                      value={value}
                      onChange={(nextValue) => {
                        setValue(nextValue);
                      }}
                    >
                      <View style={styles.top}>
                        <Radio
                          value="Store Team was Excellent"
                          size="lg"
                          my={1}
                        >
                          <Text style={styles.rads}>
                            Store Team was Excellent
                          </Text>
                        </Radio>
                      </View>
                      <View style={styles.top}>
                        <Radio
                          value="Product Range was Excellent"
                          size="lg"
                          my={1}
                        >
                          <Text style={styles.rads}>
                            Product Range was Excellent
                          </Text>
                        </Radio>
                      </View>
                      <View style={styles.top}>
                        <Radio value="Ambientswas Excellent" size="lg" my={1}>
                          <Text style={styles.rads}>Ambientswas Excellent</Text>
                        </Radio>
                      </View>
                      <View style={styles.top}>
                        <Radio
                          value="Other Aspects were Excellent"
                          size="lg"
                          my={1}
                        >
                          <Text style={styles.rads}>
                            Other Aspects were Excellent
                          </Text>
                        </Radio>
                      </View>
                    </Radio.Group>
                  </Center>
                  <Text style={styles.exp1}>
                    How likely are you to recommend our store to your friends
                    and family ?
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
                  <View style={styles.last}>
                    <View></View>
                    {value !== "" && value1 !== "" ? (
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          dispatch(
                            dataProduct({
                              type: "reasonPur",
                              val: `${value}`,
                            })
                          );
                          dispatch(
                            dataProduct({
                              type: "familyPur",
                              val: Number(value1),
                            })
                          );
                          setval(3);
                        }}
                      >
                        <Text style={styles.submit}>Next</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={styles.button2}>
                        <Text style={styles.submit2}>Next</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </Center>
            </NativeBaseProvider>
          ) : (
            <NativeBaseProvider>
              <Center>
                <View style={styles.all1}>
                  <Text style={styles.select1}>
                    Please rate us on the following parameters
                  </Text>
                  <View style={{ marginLeft: "30%" }}>
                    <Radio.Group
                      name="myRadioGroup"
                      accessibilityLabel="favorite number"
                      value={value2}
                      onChange={(nextValue) => {
                        setValue2(nextValue);
                        dispatch(
                          dataProduct({
                            type: "ratePur",
                            val: `${nextValue}`,
                          })
                        );
                      }}
                    >
                      <View style={styles.top}>
                        <Radio value="Store team not friendly" size="lg" my={1}>
                          <Text style={styles.rads}>
                            Store team not friendly
                          </Text>
                        </Radio>
                      </View>
                      <View style={styles.top}>
                        <Radio value="Product range not good" size="lg" my={1}>
                          <Text style={styles.rads}>
                            Product range not good
                          </Text>
                        </Radio>
                      </View>
                      <View style={styles.top}>
                        <Radio value="Others" size="lg" my={1}>
                          <Text style={styles.rads}>Others</Text>
                        </Radio>
                      </View>
                    </Radio.Group>
                  </View>
                  <Text style={styles.exp1}>
                    How likely are you to recommend our store to your friends
                    and family ?
                  </Text>
                  <View style={{ marginLeft: "15%" }}>
                    <Radio.Group
                      name="myRadioGroup"
                      accessibilityLabel="favorite number"
                      value={value3}
                      onChange={(nextValue) => {
                        setValue3(nextValue);
                        dispatch(
                          dataProduct({
                            type: "family2Pur",
                            val: `${nextValue}`,
                          })
                        );
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
                  </View>
                  <View style={styles.last}>
                    <View></View>
                    {value2 !== "" && value3 !== "" ? (
                      <TouchableOpacity style={styles.button} onPress={submits}>
                        <Text style={styles.submit}>Submit</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={styles.button2}>
                        <Text style={styles.submit2}>Submit</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </Center>
            </NativeBaseProvider>
          )
        ) : tab === 2 ? (
          <Nonpurchase
            setnonpur={setnonpur}
            nonpur={nonpur}
            setShowModal={setShowModal}
          />
        ) : (
          <Service
            setShowModal={setShowModal}
            setcount={setcount}
            count={count}
          />
        )}
      </View>
      <NativeBaseProvider>
        <Center>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <View
              style={
                tab === 1
                  ? styles.model
                  : tab === 2
                  ? styles.model1
                  : styles.model2
              }
            >
              <Ionicons
                name="checkmark-circle"
                size={80}
                color="white"
                style={styles.col}
              />
              <Text style={styles.modelText}>Thank you for</Text>
              <Text style={styles.modelText}>
                your {tab === 1 ? "Patronage" : "Feedback"}
              </Text>
            </View>
          </Modal>
        </Center>
      </NativeBaseProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    width: "94%",
    marginTop: 40,
  },
  all1: {
    width: "80%",
    marginTop: 40,
  },
  ban: {
    width: "100%",
    height: "40%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  sec: {
    height: "60%",
    backgroundColor: "white",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  purchaseText: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    padding: 25,
  },
  purchase: {
    backgroundColor: "#00c8cb",
    width: "33%",
  },
  purchaseText2: {
    textAlign: "center",
    fontSize: 25,
    color: "black",
    padding: 25,
  },
  purchase2: {
    backgroundColor: "white",
    width: "34%",
  },
  imgw: {
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
  },
  imgw1: {
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#00c8cb",
  },
  img1: {
    width: 147,
  },
  row: {
    flexDirection: "row",
  },
  select: {
    fontSize: 23,
    color: "black",
    paddingBottom: 20,
  },
  exp: {
    fontSize: 23,
    color: "black",
    paddingBottom: 20,
    marginTop: 20,
  },
  select1: {
    fontSize: 23,
    color: "black",
    paddingBottom: 20,
    textAlign: "center",
  },
  exp1: {
    fontSize: 23,
    color: "black",
    paddingBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "black",
    width: 100,
  },
  submit: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 20,
  },
  button2: {
    backgroundColor: "#80808070",
    width: 100,
  },
  submit2: {
    color: "gray",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 20,
  },
  last: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  star: {
    flexDirection: "row",
  },
  col: {
    marginRight: 8,
  },
  rads: {
    fontSize: 20,
  },
  top: {
    marginBottom: 10,
  },
  top1: {
    marginRight: 50,
  },
  model: {
    backgroundColor: "#00c8cb",
    width: "50%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 0.3,
  },
  modelText: {
    fontSize: 30,
    color: "white",
  },
  model1: {
    backgroundColor: "black",
    width: "50%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 0.3,
  },
  model2: {
    backgroundColor: "#d17a4f",
    width: "50%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 0.3,
  },
});

export default Tabs;
