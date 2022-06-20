import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ban from "../../assets/2.png";
import {
  Spinner,
  HStack,
  Heading,
  Center,
  NativeBaseProvider,
  Radio,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { dataProduct } from "../../redux/action/action";
import authaxios from "../../interceptors/authaxios";

const Store = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [spin, setspin] = useState(true);

  const dispatch = useDispatch();
  const phon = useSelector((state) => state.addData.data);
  console.log(phon);

  // const [date, setDate] = useState(new Date());
  // const [date1, setDate1] = useState(new Date());
  // const [mode, setMode] = useState("date");
  // const [mode1, setMode1] = useState("date");
  // const [show, setShow] = useState(false);
  // const [show1, setShow1] = useState(false);
  const [bday, setbday] = useState("");
  const [ani, setani] = useState("");

  // const bday = moment(new Date(date)).format("DD/MM/YYYY");
  // const ani = moment(new Date(date1)).format("DD/MM/YYYY");

  useEffect(async () => {
    setspin(true);
    await authaxios
      .get("purchase")
      .then((res) => {
        res.data
          .filter((nam) => nam.phone === phon.user)
          .map((itm) => {
            console.log(itm);
            setname(itm.name);
            setphone(itm.phone);
            setemail(itm.email);
            setValue(itm.gender);
            setValue1(itm.age);
            setbday(itm.birthday === "NA" ? "" : itm.birthday);
            setani(itm.anniversary === "NA" ? "" : itm.anniversary);
          });
        setTimeout(() => {
          setspin(false);
        }, 2000);
      })
      .catch((err) => {
        setspin(false);
        console.error(err.message);
      });
  }, []);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setShow(false);
  //   setDate(currentDate);
  // };
  // const onChange1 = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setShow1(false);
  //   setDate1(currentDate);
  // };

  const submit = async () => {
    dispatch(
      dataProduct({
        type: "name",
        val: `${name}`,
      })
    );
    dispatch(
      dataProduct({
        type: "phone",
        val: `${phone}`,
      })
    );
    dispatch(
      dataProduct({
        type: "email",
        val: `${email}`,
      })
    );
    dispatch(
      dataProduct({
        type: "gender",
        val: `${value}`,
      })
    );
    dispatch(
      dataProduct({
        type: "age",
        val: `${value1}`,
      })
    );
    dispatch(
      dataProduct({
        type: "birthday",
        val: bday === "" ? "NA" : bday,
      })
    );
    dispatch(
      dataProduct({
        type: "anniversary",
        val: ani === "" ? "NA" : ani,
      })
    );
    navigation.navigate("about");
  };

  return (
    <NativeBaseProvider>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.ban}>
          <Image source={Ban} style={styles.img} />
        </View>
        <View style={styles.sec}>
          <ScrollView>
            {spin ? (
              <View style={{ marginTop: 200 }}>
                <Center>
                  <HStack space={2} justifyContent="center">
                    <Spinner
                      color="emerald.500"
                      accessibilityLabel="Loading posts"
                      size="lg"
                    />
                    <Heading
                      color="emerald.500"
                      fontSize="lg"
                      style={{ marginTop: 10 }}
                    >
                      Loading
                    </Heading>
                  </HStack>
                </Center>
              </View>
            ) : (
              <Center>
                <Text style={styles.detail}>
                  Please Enter the Below Information To Continue
                </Text>
                <View style={{ width: "70%" }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={(txt) => setname(txt)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={phone}
                    keyboardType="numeric"
                    onChangeText={(txt) => setphone(txt)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Email Id"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={(txt) => setemail(txt)}
                  />
                </View>
                <View style={styles.hole}>
                  <Radio.Group
                    name="myRadioGroup"
                    accessibilityLabel="favorite number"
                    value={value}
                    onChange={(nextValue) => {
                      setValue(nextValue);
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.gender}>Gender</Text>
                      <View style={{ marginRight: 40 }}>
                        <Radio value="Male" my={1}>
                          <Text style={styles.radioText}>Male</Text>
                        </Radio>
                      </View>
                      <View>
                        <Radio value="Female" my={1}>
                          <Text style={styles.radioText}>Female</Text>
                        </Radio>
                      </View>
                    </View>
                  </Radio.Group>
                </View>
                <View style={styles.hole1}>
                  <Radio.Group
                    name="myRadioGroup"
                    accessibilityLabel="favorite number"
                    value={value1}
                    onChange={(nextValue) => {
                      setValue1(nextValue);
                    }}
                  >
                    <View style={{ flexDirection: "row", marginBottom: 20 }}>
                      <Text style={styles.gender}>Age Group</Text>
                      <View style={{ marginRight: 40 }}>
                        <Radio value="Under 25" my={1}>
                          <Text style={styles.radioText}>Under 25</Text>
                        </Radio>
                      </View>
                      <View>
                        <Radio value="25 - 34" my={1}>
                          <Text style={styles.radioText}>25 - 34</Text>
                        </Radio>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ marginRight: 40 }}>
                        <Radio value="35 - 44" my={1}>
                          <Text style={styles.radioText}>35 - 44</Text>
                        </Radio>
                      </View>
                      <View style={{ marginRight: 40 }}>
                        <Radio value="45 - 54" my={1}>
                          <Text style={styles.radioText}>45 - 54</Text>
                        </Radio>
                      </View>
                      <View>
                        <Radio value="55 and above" my={1}>
                          <Text style={styles.radioText}>55 and above</Text>
                        </Radio>
                      </View>
                    </View>
                  </Radio.Group>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "70%",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ width: "40%" }}>
                    <TextInput
                      style={styles.input10}
                      placeholder="Birthday (dd/mm/yyyy)"
                      value={bday}
                      onChangeText={(txt) => setbday(txt)}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={{ width: "40%" }}>
                    <TextInput
                      style={styles.input10}
                      placeholder="Anniversary (dd/mm/yyyy)"
                      value={ani}
                      onChangeText={(txt) => setani(txt)}
                      keyboardType="numeric"
                    />
                  </View>
                  {/*<TouchableOpacity
                style={styles.input2}
                placeholder="Birthday"
                onPress={showDatepicker}
              >
                <Text style={styles.birth}>
                  {dummy ? bday.toString() : "Birthday"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.input2}
                placeholder="Birthday"
                onPress={showDatepicker1}
              >
                <Text style={styles.birth}>
                  {dummy1 ? ani.toString() : "Anniversary"}
                </Text>
              </TouchableOpacity>*/}
                  {name !== "" &&
                  phone !== "" &&
                  email !== "" &&
                  (bday !== "" || ani !== "") &&
                  value !== "" &&
                  value1 !== "" ? (
                    <TouchableOpacity style={styles.button} onPress={submit}>
                      <Text style={styles.submit}>Submit</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity style={styles.button2}>
                      <Text style={styles.submit2}>Submit</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </Center>
            )}
          </ScrollView>
        </View>
      </View>
      {/*{show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode={mode1}
          is24Hour={true}
          onChange={onChange1}
        />
      )}*/}
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  ban: {
    width: "100%",
    height: "45%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  sec: {
    height: "55%",
    width: "100%",
    paddingTop: 50,
  },
  detail: {
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 30,
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
  input10: {
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginRight: 10,
    fontSize: 20,
    paddingBottom: 10,
    marginBottom: 30,
  },
  input2: {
    width: "40%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginRight: 10,
    fontSize: 20,
    paddingBottom: 10,
    marginBottom: 30,
  },
  birth: {
    fontSize: 20,
    color: "gray",
  },
  hole: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 30,
    width: "70%",
  },
  hole1: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 40,
    width: "70%",
  },
  gender: {
    fontSize: 23,
    color: "gray",
    marginRight: 40,
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
    width: 90,
    height: 45,
  },
  submit: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 7,
  },
  button2: {
    backgroundColor: "#80808070",
    width: 90,
    height: 45,
  },
  submit2: {
    color: "gray",
    fontSize: 20,
    textAlign: "center",
    marginTop: 7,
  },
});

export default Store;
