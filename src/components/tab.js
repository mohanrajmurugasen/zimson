import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ban from "../../assets/5.png";
import Ban2 from "../../assets/6.png";
import Ban3 from "../../assets/7.png";
import Ban4 from "../../assets/9.png";
import Ban5 from "../../assets/10.png";
import one from "../../assets/img/1.gif";
import two from "../../assets/img/2.gif";
import three from "../../assets/img/3.gif";
import four from "../../assets/img/4.gif";
import five from "../../assets/img/5.gif";
import six from "../../assets/img/6.gif";
import seven from "../../assets/img/7.gif";
import eight from "../../assets/img/8.gif";
import nine from "../../assets/img/9.gif";
import ten from "../../assets/img/10.gif";
import eleven from "../../assets/img/11.gif";
import twell from "../../assets/img/12.gif";
import thertin from "../../assets/img/13.gif";
import fourtin from "../../assets/img/14.gif";
import fiftin from "../../assets/img/15.png";
import { Center, NativeBaseProvider, Radio, Modal } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Nonpurchase from "./brand/nonpurchase";
import Service from "./brand/service";

const Tabs = () => {
  const [tab, settab] = useState(1);
  const imgs = [
    { val: one, num: 1 },
    { val: two, num: 2 },
    { val: three, num: 3 },
    { val: four, num: 4 },
    { val: five, num: 5 },
    { val: six, num: 6 },
    { val: seven, num: 7 },
    { val: eight, num: 8 },
    { val: nine, num: 9 },
    { val: ten, num: 10 },
    { val: eleven, num: 11 },
    { val: twell, num: 12 },
    { val: thertin, num: 13 },
    { val: fourtin, num: 14 },
    { val: fiftin, num: 15 },
  ];
  const [val, setval] = useState(1);
  const [value, setValue] = useState("1");
  const [value1, setValue1] = useState("1");
  const fam = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [showModal, setShowModal] = useState(false);
  const [nonpur, setnonpur] = useState("1");
  const [count, setcount] = useState(1);
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
                <View style={styles.all}>
                  <Text style={styles.select}>Select Your Brand</Text>
                  <View style={styles.row}>
                    {imgs.slice(0, 5).map((itm, index) => (
                      <View key={index} style={styles.imgw}>
                        <Image source={itm.val} style={styles.img1} />
                      </View>
                    ))}
                  </View>
                  <View style={styles.row}>
                    {imgs.slice(5, 10).map((itm, index) => (
                      <View key={index} style={styles.imgw}>
                        <Image source={itm.val} style={styles.img1} />
                      </View>
                    ))}
                  </View>
                  <View style={styles.row}>
                    {imgs.slice(10, 15).map((itm, index) => (
                      <View key={index} style={styles.imgw}>
                        <Image source={itm.val} style={styles.img1} />
                      </View>
                    ))}
                  </View>
                  <Text style={styles.exp}>Rate Your Experience</Text>
                  <View style={styles.star}>
                    <Ionicons
                      name="star"
                      size={32}
                      color="#00c8cb"
                      style={styles.col}
                    />
                    <Ionicons
                      name="star"
                      size={32}
                      color="#00c8cb"
                      style={styles.col}
                    />
                    <Ionicons
                      name="star"
                      size={32}
                      color="#00c8cb"
                      style={styles.col}
                    />
                    <Ionicons
                      name="star"
                      size={32}
                      color="#00c8cb"
                      style={styles.col}
                    />
                    <Ionicons
                      name="star"
                      size={32}
                      color="gray"
                      style={styles.col}
                    />
                  </View>
                  <View style={styles.last}>
                    <View></View>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setval(2)}
                    >
                      <Text style={styles.submit}>Next</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Center>
            </NativeBaseProvider>
          ) : val === 2 ? (
            <NativeBaseProvider>
              <Center>
                <View style={styles.all}>
                  <Text style={styles.select}>
                    What is the key reason for giving us four stars ?
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
                        <Radio value="1" size="lg" my={1}>
                          <Text style={styles.rads}>
                            Store Team was Excellent
                          </Text>
                        </Radio>
                      </View>
                      <View style={styles.top}>
                        <Radio value="2" size="lg" my={1}>
                          <Text style={styles.rads}>
                            Product Range was Excellent
                          </Text>
                        </Radio>
                      </View>
                      <View style={styles.top}>
                        <Radio value="3" size="lg" my={1}>
                          <Text style={styles.rads}>Ambientswas Excellent</Text>
                        </Radio>
                      </View>
                      <View style={styles.top}>
                        <Radio value="4" size="lg" my={1}>
                          <Text style={styles.rads}>
                            Other Aspects were Excellent
                          </Text>
                        </Radio>
                      </View>
                    </Radio.Group>
                  </Center>
                  <Text style={styles.exp}>
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
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setval(3)}
                    >
                      <Text style={styles.submit}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Center>
            </NativeBaseProvider>
          ) : (
            <NativeBaseProvider>
              <Center>
                <View style={styles.all}>
                  <Text style={styles.select}>
                    Please rate us on the following parameters
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
                        <Radio value="1" size="lg" my={1}>
                          <Text style={styles.rads}>
                            Store Team not friendly
                          </Text>
                        </Radio>
                      </View>
                      <View style={styles.top}>
                        <Radio value="2" size="lg" my={1}>
                          <Text style={styles.rads}>
                            Product Range not good
                          </Text>
                        </Radio>
                      </View>
                      <View style={styles.top}>
                        <Radio value="3" size="lg" my={1}>
                          <Text style={styles.rads}>Others</Text>
                        </Radio>
                      </View>
                    </Radio.Group>
                  </Center>
                  <Text style={styles.exp}>
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
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setShowModal(true)}
                    >
                      <Text style={styles.submit}>Submit</Text>
                    </TouchableOpacity>
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
  ban: {
    width: "100%",
    height: "40%",
  },
  img: {
    height: "100%",
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
  },
  img1: {
    width: 167,
  },
  row: {
    flexDirection: "row",
  },
  select: {
    fontSize: 23,
    color: "black",
    paddingBottom: 20,
    textAlign: "center",
  },
  exp: {
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
    paddingVertical: 10,
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
