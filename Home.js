import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  Button,
  Pressable,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { Component, useState,useEffect } from "react";
import axios from "axios";
import { DrawerLayout } from "react-native-gesture-handler"; 

function Home({ route }) {
   const [FirstName, setFn] = useState("");
   const [LastName, setLn] = useState("");
   const [MiddleName, setMn] = useState("");
   const [Ssn, setSsn] = useState("");
 const [street_address, setStreet] = useState("");
  const [city, setCity] = useState("");
   const [state, setSState] = useState("");
    const [country, setCountry] = useState("");
 const [Gender, setGender] = useState("");
 let ddata = [];
  const [password, setPassword] = useState("");
  const title = "Home";
  const email = route.params.paramKey;
// state = {
//   FirstName: "",
// };
  const fetchData = async () => {
     
          axios
            .get(`http://10.160.194.15:3000/Getusers?email=${email}`, {
              timeout: 1000,
            })

            .then((response) => {
              // Do something with the response data

              ddata = response.data;
              processData(ddata);
            })
            .catch((error) => {
              // Do something with the error
              console.error(error);
              console.log(error.code);
              console.log(error.message);
              console.log(error.stack);
              console.log(error.response);
              console.log(error.request);
              console.log(street_address);
            });
    };



 useEffect(() => {
   fetchData();
 }, []);

const processData = (ddata) => {
  // Do something with the data
setFn(ddata[0].firstName);
setMn(ddata[0].middleName);
setLn(ddata[0].lastName);
setSsn(ddata[0].ssn);
setGender(ddata[0].gender);
setCity(ddata[0].city);

 setStreet(ddata[0].street_address);
setCountry(ddata[0].Country);
console.log(ddata);
};



  return (
    <View style={styles.headerContainer}>
      {/* <Image style={styles.image} source={require("./assets/icon.png")} /> */}
      <StatusBar style="auto" />
      {/* <HamburgerMenu /> */}
      <ImageBackground
        style={styles.headerBackgroundImage}
        blurRadius={10}
        source={require("./assets/avatar.jpg")}
      >
        <View style={styles.headerColumn}>
          <Image
            style={styles.userImage}
            source={require("./assets/avatar.jpg")}
          />
        </View>
      </ImageBackground>

      {/* <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}> */}
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      >
        <Text style={styles.titleText}>
          First Name:
          <Text style={styles.infoText}>{FirstName}</Text>
        </Text>
        <Text style={styles.titleText}>
          Middle Name:
          <Text style={styles.infoText}>{MiddleName}</Text>
        </Text>

        <Text style={styles.titleText}>
          Last Name:
          <Text style={styles.infoText}>{LastName}</Text>
        </Text>
        <Text style={styles.titleText}>
          SSN:
          <Text style={styles.infoText}>{Ssn}</Text>
        </Text>
        <Text style={styles.titleText}>
          Street Name (Moniker):
          <Text style={styles.infoText}>{street_address}</Text>
        </Text>
        <Text style={styles.titleText}>
          DOB:
          <Text style={styles.infoText}>{}</Text>
        </Text>
        <Text style={styles.titleText}>
          Gender:
          <Text style={styles.infoText}>{Gender}</Text>
        </Text>

        <Text style={styles.titleText}>
          Race:
          <Text style={styles.infoText}>{}</Text>
        </Text>
        <Text style={styles.titleText}>
          Race:
          <Text style={styles.infoText}>{}</Text>
        </Text>
      </View>
      {/* </ScrollView>
      </SafeAreaView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  navView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navText: {
    margin: 10,
    fontSize: 15,
    textAlign: "left",
  },
  mainView: {
    flex: 1,
    alignItems: "center",
  },
  mainText: {
    margin: 10,
    fontSize: 15,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {},
  headerBackgroundImage: {
    paddingBottom: 10,
    paddingTop: 45,
  },
  userImage: {
    borderColor: "#FFF",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },

  headerColumn: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: "center",
      },
    }),
  },

  image: {
    marginBottom: 40,
  },
  titleText: {
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 18,
  },
  infoText: {
    fontWeight: "normal",
    paddingTop: 20,
    paddingLeft: 300,
    fontSize: 18,
  },
});
export default Home;
