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
import { Center, NativeBaseProvider, Radio } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import authaxios from "../../interceptors/authaxios";

const Store = ({ navigation }) => {
  const [value, setValue] = useState("M");
  const [value1, setValue1] = useState("1");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [dummy, setdummy] = useState(false);
  const [dummy1, setdummy1] = useState(false);

  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [mode1, setMode1] = useState("date");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const bday = moment(new Date(date)).format("DD/MM/YYYY");
  const ani = moment(new Date(date1)).format("DD/MM/YYYY");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setdummy(true);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow1(false);
    setDate1(currentDate);
    setdummy1(true);
  };

  const showMode1 = (currentMode) => {
    setShow1(true);
    setMode1(currentMode);
  };

  const showDatepicker1 = () => {
    showMode1("date");
  };

  const submit = async () => {
    navigation.navigate("about");
    // await authaxios.post('').then(res => {
    //   console.log(res.data)
    // }).catch(err => console.error(err.message))
  };

  return (
    <NativeBaseProvider>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.ban}>
          <Image source={Ban} style={styles.img} />
        </View>
        <View style={styles.sec}>
          <Center>
            <Text style={styles.detail}>
              Please Enter the Below Information To Continue
            </Text>
            <View style={{ width: "60%" }}>
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
                onChangeText={(txt) => setphone(txt)}
              />
              <TextInput
                style={styles.input}
                placeholder="Email Id"
                value={email}
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
                    <Radio value="M" my={1}>
                      <Text style={styles.radioText}>Male</Text>
                    </Radio>
                  </View>
                  <View>
                    <Radio value="F" my={1}>
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
                    <Radio value="1" my={1}>
                      <Text style={styles.radioText}>Under 25</Text>
                    </Radio>
                  </View>
                  <View>
                    <Radio value="2" my={1}>
                      <Text style={styles.radioText}>25 - 34</Text>
                    </Radio>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginRight: 40 }}>
                    <Radio value="3" my={1}>
                      <Text style={styles.radioText}>35 - 44</Text>
                    </Radio>
                  </View>
                  <View style={{ marginRight: 40 }}>
                    <Radio value="4" my={1}>
                      <Text style={styles.radioText}>45 - 54</Text>
                    </Radio>
                  </View>
                  <View>
                    <Radio value="5" my={1}>
                      <Text style={styles.radioText}>55 and above</Text>
                    </Radio>
                  </View>
                </View>
              </Radio.Group>
            </View>
            <View style={{ flexDirection: "row", width: "60%" }}>
              <TouchableOpacity
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
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={submit}>
                <Text style={styles.submit}>Submit</Text>
              </TouchableOpacity>
            </View>
          </Center>
        </View>
      </View>
      {show && (
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
      )}
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
    width: "60%",
  },
  hole1: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 40,
    width: "60%",
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
});

export default Store;
