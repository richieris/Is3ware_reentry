import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import axios from "axios";
import { NavigationActions } from "react-navigation";
import { Picker } from "@react-native-picker/picker";

import SelectDropdown from "react-native-select-dropdown";

function Signup({ navigation }) {
    const [FirstName, setFn] = useState("");
      const [LastName, setLn] = useState("");
        const [MiddleName, setMn] = useState("");

          const [Ssn, setSsn] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Street, setStreet] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Country, setCountry] = useState("");
  const [Gender, setGender] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShowingResults, setIsShowingResults] = useState(false);
 const [pickerValue,SetPickerValue] = useState("");
  //  const [date, setDate] = useState(new Date());
  //  const [open, setOpen] = useState(false);
  const title = "Signup";


const tyype = ["Driver Services", "Housing", "Employment", "Law Enforcement","Community Service Provider","Entitlement"];
const GenderType = [
  "Male","Female","Non-binary"
];
  const InsertRecord = async () => {
    {if(pickerValue==null){
      Alert.alert("Please select a type");
return;
    }}
    axios
      .post(
        "http://10.160.194.15:3000/Addusers", //10.160.201.119
        {
          type: pickerValue,
          firstName: FirstName,
          middleName: MiddleName,
          lastName: LastName,
          ssn: Ssn,
          gender: Gender,
          email: Email,
          password: Password,
          street_address: Street,
          city: City,
          state: State,
          country: Country,
        },
        { timeout: 2000 }
      )

      .then((response) => {
        // Do something with the response data
        navigation.navigate("Login");
        // console.log(response.data.message);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
        console.log(error.message);
        console.log(error.stack);
        console.log(error.response);
        console.log(error.request);
        console.log(Street);
      });
  };


  async function searchLocation(text) {
    setSearchKeyword(text);
    setStreet(text);
    setCity(text);
    setCountry(text);
    setState(text);

    axios
      .request({
        method: "post",
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${"AIzaSyAU0c0lM0otTV0CBZZU6EnH6bmeOFY0yDo"}&input=${searchKeyword}`,
      })
      .then((response) => {
        console.log(response.data);

        setSearchResults(response.data.predictions);
        setIsShowingResults(true);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }

  return (
    //<SafeAreaView style={styles.container}></SafeAreaView>
    <SafeAreaView style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/icon.png")} /> */}

      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="First Name."
            placeholderTextColor="#000"
            value={FirstName}
            // editable={true}
            onChangeText={(e) => setFn(e)}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="Middle Name."
            placeholderTextColor="#000"
            value={MiddleName}
            // editable={true}
            onChangeText={(e) => setMn(e)}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="Last Name."
            placeholderTextColor="#000"
            value={LastName}
            // editable={true}
            onChangeText={(e) => setLn(e)}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="SSN."
            placeholderTextColor="#000"
            value={Ssn}
            // editable={true}
            secureTextEntry={true}
            onChangeText={(e) => setSsn(e)}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#000"
            value={Email}
            // editable={true}
            onChangeText={(e) => setEmail(e)}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
          />
        </View>

        {/* street */}
        <SafeAreaView style={styles.searchBox2}>
          <TextInput
            style={styles.TextInput}
            placeholder="Street Address"
            placeholderTextColor="#000"
            onChangeText={(text) => searchLocation(text)}
            value={Street}
          />
          {isShowingResults && (
            <FlatList
              // ListFooterComponentStyle={{elevation:0.1, zIndex:3}}
              data={searchResults}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.resultItem}
                    onPress={() => {
                      let a = item.description.split(",");
                      setStreet(a[0]);
                      setCity(a[1]);
                      setState(a[2]);
                      setCountry(a[3]);
                      // setState=a[2];
                      // setCountry=a[3];
                      setSearchKeyword(a[0]);
                      setIsShowingResults(false);
                    }}
                  >
                    <Text>{item.description}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
              style={styles.searchResultsContainer}
            />
          )}
        </SafeAreaView>
        {/* state */}

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="City"
            placeholderTextColor="#000"
            onChangeText={(City) => setCity(City)}
            value={City}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="State"
            placeholderTextColor="#000"
            onChangeText={(State) => setState(State)}
            value={State}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="Country"
            placeholderTextColor="#000"
            onChangeText={(Country) => setCountry(Country)}
            value={Country}
          />
        </View>

        
        <View style={styles.PickerContainer}>
          <SelectDropdown
            data={tyype}
            onSelect={(selectedItem, index) => {
              SetPickerValue(selectedItem);
              console.log(pickerValue);
            }}
            buttonStyle={styles.dropdown}
            defaultButtonText={"Select Industry Type"}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>

        <View style={styles.PickerContainer}>
          <SelectDropdown
            data={GenderType}
            onSelect={(selectedItem, index) => {
              setGender(selectedItem);
            }}
            buttonStyle={styles.dropdown}
            defaultButtonText={"Select Gender"}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>

        <Pressable
          style={styles.loginBtn}
          onPress={() => {
            InsertRecord();
          }}
        >
          <Text style={styles.loginText}>{title}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    width: 320,
    height: 50,
    fontSize: 18,
    borderRadius: 8,
    borderColor: "#aaa",
    color: "#000",
    backgroundColor: "#fff",
    borderColor:"black",
    borderWidth:1,
    paddingLeft: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    backgroundColor: "red",
  },
  PickerContainer: {
    width: 340,
    height: 50,
    fontSize: 18,
    borderRadius: 8,
    borderColor: "#aaa",
    color: "#000",
    backgroundColor: "#fff",

    paddingLeft: 15,
    marginTop: 20,
    marginBottom: 10,
  },

  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  image: {
    marginBottom: 40,
  },
  searchResultsContainer: {
    elevation: 0.1,
    zIndex: 2,
    width: 335,
    height: 130,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    position: "absolute",
    top: 50,
  },
  inputView: {
    // backgroundColor: "#fff",
    borderRadius: 0,
    width: "80%",
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
  },
  resultItem: {
    width: "100%",
    zIndex: 2,
    elevation: 1,
    justifyContent: "center",
    height: 40,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingLeft: 15,
  },
  loginText: {
    height: 50,
    flex: 1,
    padding: 10,
    color: "white",
    alignItems: "center",
  },
  searchBox: {
    width: 340,
    height: 50,
    fontSize: 18,
    borderRadius: 8,
    borderColor: "#aaa",
    color: "#000",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    paddingLeft: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  searchBox2: {
    width: 340,
    height: 50,
    fontSize: 18,
    zIndex: 100,
    borderRadius: 8,
    borderColor: "#aaa",
    color: "#000",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    paddingLeft: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#232629",
  },
});
export default Signup;
