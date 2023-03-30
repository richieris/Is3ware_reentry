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
  FlatList,
  Keyboard,
} from "react-native";
import TextInput1 from "./textInput";
import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Feather, Entypo } from "@expo/vector-icons";

function admin({ route }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [FirstName, setFn] = useState("");
  const [LastName, setLn] = useState("");
  const [MiddleName, setMn] = useState("");
  const [Ssn, setSsn] = useState("");
  const [street_address1, setStreet] = useState("");

  const [street_address2, setStreet2] = useState("");
  const [postalCode, setPostalcode] = useState(null);
  const [zip, setzip] = useState(null);
  const [geoCordinates, setGeocordinates] = useState(null);
  const [addressid, setAdressid] = useState(null);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [similarUsers, setSimilarUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [setHousing, housing] = useState("");
  const [Gender, setGender] = useState("");
  const [personid, setPersonid] = useState(null);
  const [moniker, setMoniker] = useState("");
  const [dob, setdob] = useState("");
  const [alias_fname, setalias_fn] = useState("");
  const [alias_mname, setalias_mn] = useState("");
  const [alias_lname, setalias_ln] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState(null);
  const [created_at, setcreated_at] = useState(null);
  const [updated_at, setUpdated_at] = useState(null);
  const [eye_color_id, seteye_color_id] = useState(null);
  const [hair_color_id, sethair_color_id] = useState(null);
  const [gender_id, setgender_id] = useState(null);
  const [race_id, setrace_id] = useState(null);
  const [eyeColor, setEyeColor] = useState(null);
  const [hairColor, setHairColor] = useState(null);
  const [race, setRace] = useState(null);
  const [adddatat, setAdddata] = useState({});
  const [edit, setEdit] = useState(false);
  const [edit1, setEdit1] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [edit3, setEdit3] = useState(false);
  const [edit4, setEdit4] = useState(false);
  const [edit5, setEdit5] = useState(false);
  const [edit6, setEdit6] = useState(false);
  const [edit7, setEdit7] = useState(false);
  const [edit8, setEdit8] = useState(false);
  const [edit9, setEdit9] = useState(false);
  const [edit10, setEdit10] = useState(false);
  const [edit11, setEdit11] = useState(false);
    const [edit12, setEdit12] = useState(false);
  const [edit13, setEdit13] = useState(false);
  const [edit14, setEdit14] = useState(false);
  const [edit15, setEdit15] = useState(false);
  const [edit16, setEdit16] = useState(false);
  const [edit17, setEdit17] = useState(false);
  const [edit18, setEdit18] = useState(false);
  const [edit19, setEdit19] = useState(false);
  const [edit20, setEdit20] = useState(false);
  const [edit21, setEdit21] = useState(false);
  const [edit22, setEdit22] = useState(false);
  const [edit23, setEdit23] = useState(false);
  const [edit24, setEdit24] = useState(false);
  const [edit25, setEdit25] = useState(false);
  const [edit26, setEdit26] = useState(false);
  const [edit27, setEdit27] = useState(false);
  const [edit28, setEdit28] = useState(false);
  const [edit29, setEdit29] = useState(false);
  const [edit30, setEdit30] = useState(false);
  const [edit31, setEdit31] = useState(false);
  const [edit32, setEdit32] = useState(false);
  const [edit33, setEdit33] = useState(false);
  const [edit34, setEdit34] = useState(false);
  const [edit35, setEdit35] = useState(false);
  const [edit36, setEdit36] = useState(false);
  const [edit37, setEdit37] = useState(false);
  const [edit38, setEdit38] = useState(false);
  const [edit39, setEdit39] = useState(false);
  const [edit40, setEdit40] = useState(false);
  const [edit41, setEdit41] = useState(false);

  const [number, setNumber] = useState(null);
  const [identification_id, setIdentification_id] = useState(null);
  const [issued_by, setIssued_by] = useState(null);
  const [issued_on, setIssued_on] = useState(null);
  const [expires_on, setExpires_on] = useState(null);
  const [restriction_type, setRestriction_type] = useState(null);
  const [restriction_type_details, setRestriction_type_details] =
    useState(null);
  const [state_id, setState_id] = useState(null);
  const [Affiliation_id, setAffiliationid] = useState(null);
  const [rank, setRank] = useState(null);
  const [Affiliation_type_id, setAffiliationtypeid] = useState(null);
  const [Affiliationgang_id, setAffiliationgang_id] = useState(null);
  const [affiliationsubsetgang_id, setAffiliationsubsetgangid] = useState(null);
  const [org_id, setorg_id] = useState(null);
  const [work_phone_number, setWork_phone_number] = useState(null);
  const [cell_number, setcell_number] = useState(null);
  const [primary_phone_flag, setPrimary_phone_flag] = useState(null);
  const [Email, setEmail] = useState(null);
  const [fax, setFax] = useState(null);
  const [facebook_id, setFacebook] = useState(null);
  const [twitter_id, setTwitter] = useState(null);
  const [skype_id, setSkype] = useState(null);
  const [Education_id, setEduaction_id] = useState(null);
  const [Education_level, setEducation_level] = useState(null);
  const [acquired_on, setAquired_on] = useState(null);
  const [degree_id, setDegree_id] = useState(null);

  let ddata = [];
  const ip = "35.193.45.70";
  const [clicked, setClicked] = useState(false);
  const title = "Admin";
  const email = route.params.paramKey;
  // state = {
  //   FirstName: "",
  // };

  const Usertype = [
    "Driver Services",
    "Housing",
    "Employment",
    "Law Enforcement",
    "Community Service Provider",
    "Entitlement",
  ];

  const handleSearch = (text) => {
    axios
      .get("http://34.70.46.22:3000/search", {
        params: {
          q: text,
        },
      })
      .then((response) => {
        setSimilarUsers(response.data);
        // setFn(response.data[0].firstName);
        console.log(similarUsers);
        console.log(searchTerm);
      })
      .catch((error) => {
        console.error(error);
      });
  };

    const handleSelect = (item) => {
      setPersonid(item.id);
      setSelectedUser(item);
      setFn(item.first_name);
      setMn(item.middle_name);
      setLn(item.last_name);
      setMoniker(item.moniker);
      setdob(item.date_of_birth);
      setalias_fn(item.alias_fname);
      setalias_mn(item.alias_mname);
      setalias_ln(item.alias_lname);
      setHeight(item.height);
      setWeight(item.weight);
      setcreated_at(item.created_at);
      setUpdated_at(item.updated_at);
      seteye_color_id(item.eye_color_id);
      sethair_color_id(item.hair_color_id);
      setgender_id(item.gender_id);
      setrace_id(item.race_id);
      console.log(race_id);
      console.log(item);
      //  addressSet(personid);
      //  eye(eye_color_id);
      //  gennder(gender_id);
      //  hair(hair_color_id);
      //  races(race_id);
      // console.log(selectedUser);
    };

  const addressSet = (personid) => {
    axios
      .get("http://34.70.46.22:3000/address", {
        params: {
          q: personid,
        },
      })
      .then((response) => {
        // setStreet(prevstreet_address1 => ([...prevstreet_address1, ...prevstreet_address1]));
        setStreet(response.data[0].street_address1);
        setStreet2(response.data[0].street_address2);
        setCity(response.data[0].city);
        setzip(response.data[0].zipcode);
        setGeocordinates(response.data[0].geo_coordinates);
        setCountry(response.data[0].country);
        setState(response.data[0].state);
        setPostalcode(response.data[0].postal_code_ext);
        setAdressid(response.data[0].address_type_id);
        //  console.log(streetadd);

        console.log(response.data[0].zipcode);
        console.log(zip);
        // console.log(adddatat);
        // setFn(response.data[0].firstName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    addressSet(personid);
  }, [personid]);
  useEffect(() => {
    console.log(
      street_address1,
      street_address2,
      zip,
      geoCordinates,
      city,
      country,
      postalCode,
      addressid
    );
  }, [
    street_address1,
    street_address2,
    zip,
    geoCordinates,
    city,
    country,
    postalCode,
    addressid,
  ]);

  //  useEffect(() =>  {if (typeof street_address1 !== "undefined") {
  //    console.log("street>", street_address1);
  //  };}, [street_address1]);

  //  useEffect(() => addressSet(personid), [personid]);
  const eye = (eye_color_id) => {
    axios
      .get("http://34.70.46.22:3000/EyeColor", {
        params: {
          q: eye_color_id,
        },
      })
      .then((response) => {
        setEyeColor(response.data[0].color);

        // setFn(response.data[0].firstName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    eye(eye_color_id);
  }, [eye_color_id]);
  useEffect(() => {
    console.log(eyeColor);
  }, [eyeColor]);
  const gennder = (gender_id) => {
    axios
      .get("http://34.70.46.22:3000/gender", {
        params: {
          q: gender_id,
        },
      })
      .then((response) => {
        setGender(response.data[0].type);

        // setFn(response.data[0].firstName);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    gennder(gender_id);
  }, [gender_id]);
  useEffect(() => {
    console.log(Gender);
  }, [Gender]);

  const hair = (hair_color_id) => {
    axios
      .get("http://34.70.46.22:3000/hair", {
        params: {
          q: hair_color_id,
        },
      })
      .then((response) => {
        setHairColor(response.data.color);

        // setFn(response.data[0].firstName);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    hair(hair_color_id);
  }, [hair_color_id]);
  useEffect(() => {
    console.log(hairColor);
  }, [hairColor]);

  const races = (race_id) => {
    axios
      .get("http://34.70.46.22:3000/race", {
        params: {
          q: race_id,
        },
      })
      .then((response) => {
        setRace(response.data[0].type);
        console.log(race);
        // setFn(response.data[0].firstName);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    races(race_id);
  }, [race_id]);
  useEffect(() => {
    console.log(race);
  }, [race]);

  const affiliationTable = (personid) => {
    axios
      .get("http://34.70.46.22:3000/affiliation", {
        params: {
          q: personid,
        },
      })
      .then((response) => {
        setAffiliationid(response.data[0].id);
        setRank(response.data[0].rank);
        setAffiliationtypeid(response.data[0].affiliation_type_id);
        setAffiliationgang_id(response.data[0].affiliationgang_id);
        setAffiliationsubsetgangid(response.data[0].affiliationsubsetgang_id);

        // setFn(response.data[0].firstName);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    affiliationTable(personid);
  }, [personid]);

  const contacts = (personid) => {
    axios
      .get("http://34.70.46.22:3000/contacts", {
        params: {
          q: personid,
        },
      })
      .then((response) => {
        setorg_id(response.data[0].org_id);
        setWork_phone_number(response.data[0].work_phone_number);
        setcell_number(response.data[0].cell_number);
        setPrimary_phone_flag(response.data[0].primary_phone_flag);
        setFax(response.data[0].fax);
        setFacebook(response.data[0].facebook_id);
        setTwitter(response.data[0].twitter_id);
        setSkype(response.data[0].skype_id);
        setEmail(response.data[0].email);

        // setFn(response.data[0].firstName);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    contacts(personid);
  }, [personid]);

  const education = (personid) => {
    axios
      .get("http://34.70.46.22:3000/education", {
        params: {
          q: personid,
        },
      })
      .then((response) => {
        setEduaction_id(response.data[0].id);
        setEducation_level(response.data[0].level);
        setAquired_on(response.data[0].acquired_on);
        setDegree_id(response.data[0].degree_id);
        // setFn(response.data[0].firstName);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    education(personid);
  }, [personid]);

  const identification = (personid) => {
    axios
      .get("http://34.70.46.22:3000/identification", {
        params: {
          q: personid,
        },
      })
      .then((response) => {
        setNumber(response.data[0].number);
        setIdentification_id(response.data[0].identification_id);
        setIssued_by(response.data[0].issued_by);
        setIssued_on(response.data[0].issues_on);
        setExpires_on(response.data[0].expires_on);
        setRestriction_type(response.data[0].restriction_type);
        setRestriction_type_details(response.data[0].restriction_type_details);
        setState_id(response.data[0].state_id);
        // setFn(response.data[0].firstName);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    identification(personid);
  }, [personid]);



  const fetchData = async () => {
    axios
      .get(`http://34.70.46.22:3000/Getusers?email=${email}`, {
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

  const handlePress1 = () => {
    // handle button press here
    axios
      .put(
        `http://34.70.46.22:3000/editFn`,

        {
          id: personid,
          first_name: FirstName,
          timeout: 1000,
        }
      )

      .then((response) => {
        // Do something with the response data
        console.log(personid);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit(false);

    // setText;
  };
  const handlePress2 = () => {
    // handle button press here

    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editMn`, {
        id: personid,
        middle_name: MiddleName,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit1(false);
    // setText;
  };

  const handlePress3 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editLn`, {
        id: personid,
        last_name: LastName,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit2(false);
    // setText;
  };
  const handlePress4 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editMoniker`, {
        id: personid,
        moniker: moniker,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit3(false);
    // setText;
  };
  const handlePress5 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editstreet1`, {
        id: personid,
        street_address1: street_address1,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit4(false);
    // setText;
  };
  const handlePress6 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editstreet2`, {
        id: personid,
        street_address2: street_address2,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit5(false);
    // setText;
  };
  const handlePress7 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editcity`, {
        id: personid,
        city: city,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit6(false);
    // setText;
  };

  const handlePress8 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editstate`, {
        id: personid,
        state: state,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit7(false);
    // setText;
  };
  const handlePress9 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editzip`, {
        id: personid,
        zip: zip,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit8(false);
    // setText;
  };
  const handlePress10 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editgeo`, {
        id: personid,
        geo_coordinates: geoCordinates,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit9(false);
    // setText;
  };

  const handlePress11 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editaddressid`, {
        address_type_id: addressid,
        id: personid,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });

    setEdit10(false);
    // setText;
  };
  const handlePress12 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editpersonid`, {
        firstName: FirstName,
        id: personid,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit11(false);
    // setText;
  };
  const handlePress13 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editeyecolorid`, {
        eye_color_id: eye_color_id,
        id: personid,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });

    setEdit12(false);
    // setText;
  };
  const handlePress14 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editraceid`, {
        race_id: race_id,
        id: personid,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit13(false);
    // setText;
  };
  const handlePress15 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editgenderid`, {
        gender_id: gender_id,
        id: personid,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit14(false);
    // setText;
  };
  const handlePress16 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editnumber`, {
        number: number,
        person_id: personid,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });

    setEdit15(false);
    // setText;
  };
  const handlePress17 = () => {
    // handle button press here
       axios
         .put(`http://34.70.46.22:3000/editidentificationid`, {
           identification_id: identification_id,
           person_id: personid,
           timeout: 1000,
         })

         .then((response) => {
           // Do something with the response data
           console.log(response.data);
         })
         .catch((error) => {
           // Do something with the error
           console.error(error);
           console.log(error.code);
         });
    setEdit16(false);
    // setText;
  };
  const handlePress18 = () => {
    // handle button press here
        axios
          .put(`http://34.70.46.22:3000/editissuedby`, {
            issued_by: issued_by,
            person_id: personid,
            timeout: 1000,
          })

          .then((response) => {
            // Do something with the response data
            console.log(response.data);
          })
          .catch((error) => {
            // Do something with the error
            console.error(error);
            console.log(error.code);
          });
    setEdit17(false);
    // setText;
      
  };
  const handlePress19 = () => {
    // handle button press here
      axios
        .put(`http://34.70.46.22:3000/editexpireson`, {
          expires_on: expires_on,
          person_id: personid,
          timeout: 1000,
        })

        .then((response) => {
          // Do something with the response data
          console.log(response.data);
        })
        .catch((error) => {
          // Do something with the error
          console.error(error);
          console.log(error.code);
        });
    setEdit18(false);
    // setText;
  };
  const handlePress20 = () => {
    // handle button press here
          axios
            .put(`http://34.70.46.22:3000/editRestrictionType`, {
              restriction_type: restriction_type,
              person_id: personid,
              timeout: 1000,
            })

            .then((response) => {
              // Do something with the response data
              console.log(response.data);
            })
            .catch((error) => {
              // Do something with the error
              console.error(error);
              console.log(error.code);
            });
    setEdit19(false);
    // setText;
  };
  const handlePress21 = () => {
    // handle button press here
     axios
       .put(`http://34.70.46.22:3000/editRestrictionTypedetails`, {
         restriction_type_details: restriction_type_details,
         person_id: personid,
         timeout: 1000,
       })

       .then((response) => {
         // Do something with the response data
         console.log(response.data);
       })
       .catch((error) => {
         // Do something with the error
         console.error(error);
         console.log(error.code);
       });
    setEdit20(false);
    // setText;
  };
  const handlePress22 = () => {
    // handle button press here
      axios
        .put(`http://34.70.46.22:3000/editstateid`, {
          state_id: state_id,
          person_id: personid,
          timeout: 1000,
        })

        .then((response) => {
          // Do something with the response data
          console.log(response.data);
        })
        .catch((error) => {
          // Do something with the error
          console.error(error);
          console.log(error.code);
        });
    
    setEdit21(false);
    // setText;
  };
  const handlePress23 = () => {
    // handle button press here
        axios
          .put(`http://34.70.46.22:3000/editaffiliationid`, {
            id: Affiliation_id,
            person_id: personid,
            timeout: 1000,
          })

          .then((response) => {
            // Do something with the response data
            console.log(response.data);
          })
          .catch((error) => {
            // Do something with the error
            console.error(error);
            console.log(error.code);
          });
    setEdit22(false);
    // setText;
  };
  const handlePress24 = () => {
    // handle button press here
       axios
         .put(`http://34.70.46.22:3000/editrank`, {
           rank: rank,
           person_id: personid,
           timeout: 1000,
         })

         .then((response) => {
           // Do something with the response data
           console.log(response.data);
         })
         .catch((error) => {
           // Do something with the error
           console.error(error);
           console.log(error.code);
         });
    setEdit23(false);
    // setText;
  };
  const handlePress25 = () => {
    // handle button press here
      axios
        .put(`http://34.70.46.22:3000/editaffiliationtypeid`, {
          affiliation_type_id: Affiliation_type_id,
          person_id: personid,
          timeout: 1000,
        })

        .then((response) => {
          // Do something with the response data
          console.log(response.data);
        })
        .catch((error) => {
          // Do something with the error
          console.error(error);
          console.log(error.code);
        });
    setEdit24(false);
    // setText;
  };
  const handlePress26 = () => {
    // handle button press here
    axios
      .put(`http://34.70.46.22:3000/editaffiliationgangid`, {
        affiliationsetgang_id: Affiliationgang_id,
        person_id: personid,
        timeout: 1000,
      })

      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
      });
    setEdit25(false);
    // setText;
  };
  const handlePress27 = () => {
    // handle button press here
       axios
         .put(`http://34.70.46.22:3000/editaffiliationsubsetgangid`, {
           affiliationsubsetgang_id: affiliationsubsetgang_id,
           person_id: personid,
           timeout: 1000,
         })

         .then((response) => {
           // Do something with the response data
           console.log(response.data);
         })
         .catch((error) => {
           // Do something with the error
           console.error(error);
           console.log(error.code);
         });
    setEdit26(false);
    // setText;
  };
  const handlePress28 = () => {
    // handle button press here
      axios
        .put(`http://34.70.46.22:3000/editorgid`, {
          org_id: org_id,
          person_id: personid,
          timeout: 1000,
        })

        .then((response) => {
          // Do something with the response data
          console.log(response.data);
        })
        .catch((error) => {
          // Do something with the error
          console.error(error);
          console.log(error.code);
        });
    setEdit27(false);
    // setText;
  };
  const handlePress29 = () => {
    // handle button press here
      axios
        .put(`http://34.70.46.22:3000/editworkph`, {
          work_phone_number: work_phone_number,
          person_id: personid,
          timeout: 1000,
        })

        .then((response) => {
          // Do something with the response data
          console.log(response.data);
        })
        .catch((error) => {
          // Do something with the error
          console.error(error);
          console.log(error.code);
        });
    setEdit28(false);
    // setText;
  };
  const handlePress30 = () => {
    // handle button press here
        axios
          .put(`http://34.70.46.22:3000/editcell`, {
            cell_number_number: cell_number,
            person_id: personid,
            timeout: 1000,
          })

          .then((response) => {
            // Do something with the response data
            console.log(response.data);
          })
          .catch((error) => {
            // Do something with the error
            console.error(error);
            console.log(error.code);
          });
    setEdit29(false);
    // setText;
  };
  
  const handlePress32 = () => {
    // handle button press here
     axios
       .put(`http://34.70.46.22:3000/editprimephflag`, {
         primary_phone_flag: primary_phone_flag,
         person_id: personid,
         timeout: 1000,
       })

       .then((response) => {
         // Do something with the response data
         console.log(response.data);
       })
       .catch((error) => {
         // Do something with the error
         console.error(error);
         console.log(error.code);
       });
    setEdit31(false);
    // setText;
  };
  const handlePress33 = () => {
    // handle button press here
        axios
          .put(`http://34.70.46.22:3000/editemail`, {
            email: Email,
            person_id: personid,
            timeout: 1000,
          })

          .then((response) => {
            // Do something with the response data
            console.log(response.data);
          })
          .catch((error) => {
            // Do something with the error
            console.error(error);
            console.log(error.code);
          });
    setEdit32(false);
    // setText;
  };
  const handlePress34 = () => {
    // handle button press here
       axios
         .put(`http://34.70.46.22:3000/editfax`, {
           fax: fax,
           person_id: personid,
           timeout: 1000,
         })

         .then((response) => {
           // Do something with the response data
           console.log(fax);
           console.log(personid);
         })
         .catch((error) => {
           // Do something with the error
           console.error(error);
           console.log(error.code);
         });
    setEdit33(false);
    // setText;
  };
  const handlePress35 = () => {
    // handle button press here
       axios
         .put(`http://34.70.46.22:3000/editfb`, {
           facebook_id: facebook_id,
           person_id: personid,
           timeout: 1000,
         })

         .then((response) => {
           // Do something with the response data
           console.log(response.data);
         })
         .catch((error) => {
           // Do something with the error
           console.error(error);
           console.log(error.code);
         });
    setEdit34(false);
    // setText;
  };
  const handlePress36 = () => {
    // handle button press here
          axios
            .put(`http://34.70.46.22:3000/edittwitter`, {
              twitter_id: twitter_id,
              person_id: personid,
              timeout: 1000,
            })

            .then((response) => {
              // Do something with the response data
              console.log(response.data);
            })
            .catch((error) => {
              // Do something with the error
              console.error(error);
              console.log(error.code);
            });
    setEdit35(false);
    // setText;
  };
  const handlePress37 = () => {
    // handle button press here
         axios
           .put(`http://34.70.46.22:3000/editskype`, {
             skype_id: skype_id,
             person_id: personid,
             timeout: 1000,
           })

           .then((response) => {
             // Do something with the response data
             console.log(response.data);
           })
           .catch((error) => {
             // Do something with the error
             console.error(error);
             console.log(error.code);
           });
    setEdit36(false);
    // setText;
  };

  const handlePress38 = () => {
    // handle button press here
         axios
           .put(`http://34.70.46.22:3000/editeducationid`, {
             id: Education_id,
             person_id: personid,
             timeout: 1000,
           })

           .then((response) => {
             // Do something with the response data
             console.log(response.data);
           })
           .catch((error) => {
             // Do something with the error
             console.error(error);
             console.log(error.code);
           });
    setEdit37(false);
    // setText;
  };
  const handlePress39 = () => {
    // handle button press here

      axios
        .put(`http://34.70.46.22:3000/editeducationlvl`, {
          level: Education_level,
          person_id: personid,
          timeout: 1000,
        })

        .then((response) => {
          // Do something with the response data
          console.log(response.data);
        })
        .catch((error) => {
          // Do something with the error
          console.error(error);
          console.log(error.code);
        });



    setEdit38(false);
    // setText;
  };
  const handlePress40 = () => {
    // handle button press here
          axios
            .put(`http://34.70.46.22:3000/editacquiredon`, {
              acquired_on: acquired_on,
              person_id: personid,
              timeout: 1000,
            })

            .then((response) => {
              // Do something with the response data
              console.log(response.data);
            })
            .catch((error) => {
              // Do something with the error
              console.error(error);
              console.log(error.code);
            });
    setEdit39(false);
    // setText;
  };
  const handlePress41 = () => {
    // handle button press here
     axios
       .put(`http://34.70.46.22:3000/editdegreeid`, {
         acquired_on: acquired_on,
         person_id: personid,
         timeout: 1000,
       })

       .then((response) => {
         // Do something with the response data
         console.log(response.data);
       })
       .catch((error) => {
         // Do something with the error
         console.error(error);
         console.log(error.code);
       });
    setEdit40(false);
    // setText;
  };
  return (
    <SafeAreaView style={styles.ccontainer}>
      <ScrollView style={styles.scrollView}>
        <StatusBar style="auto" />
        <View style={styles.SearchCcontainer}>
          <View
            style={
              clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
            }
          >
            <Feather
              name="search"
              size={20}
              color="black"
              style={{ marginLeft: 1 }}
            />
            <TextInput
              style={styles.search}
              onChangeText={(text) => {
                handleSearch(text);
                setSearchTerm(text);
              }}
              onFocus={() => {
                setClicked(true);
              }}
              value={searchTerm}
              placeholder="Search for a user"
            />
            {clicked && (
              <Entypo
                name="cross"
                size={20}
                color="black"
                style={{ padding: 1 }}
                onPress={() => {
                  setSearchTerm("");
                }}
              />
            )}
          </View>
          {clicked && (
            <View>
              <Button
                title="Cancel"
                onPress={() => {
                  Keyboard.dismiss();
                  setClicked(false);
                }}
              ></Button>
            </View>
          )}
        </View>
        {similarUsers.length != 0 && searchTerm != "" && (
          <View style={styles.Flt}>
            <FlatList
              data={similarUsers.slice(0, 4)}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: "#DDDDDD",
                    alignItems: "center",
                    padding: 10,
                  }}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.txt}>{item.first_name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={FirstName}
              placeholder={"First Name"}
              editable={edit}
              onChangeText={(FirstName) => setFn(FirstName)}
            />
            {edit ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress1}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={MiddleName}
              placeholder={"Middle Name"}
              editable={edit1}
              onChangeText={(MiddleName) => setMn(MiddleName)}
            />
            {edit1 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress2}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit1(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={LastName}
              placeholder={"Last Name"}
              editable={edit2}
              onChangeText={(LastName) => setLn(LastName)}
            />
            {edit2 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress3}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit2(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={moniker}
              placeholder={"Moniker"}
              editable={edit3}
              onChangeText={(moniker) => setMoniker(moniker)}
            />
            {edit3 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress4}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit3(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={street_address1}
              placeholder={"Street Address 1"}
              editable={edit4}
              onChangeText={(street_address1) => setStreet(street_address1)}
            />
            {edit4 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress5}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={street_address1}
              placeholder={"Street Address 2"}
              editable={edit5}
              onChangeText={(street_address2) => setStreet2(street_address2)}
            />
            {edit5 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress6}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit5(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={city}
              placeholder={"city"}
              editable={edit6}
              onChangeText={(city) => setCity(city)}
            />
            {edit6 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress7}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit6(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={state}
              placeholder={"State"}
              editable={edit7}
              onChangeText={(state) => setState(state)}
            />
            {edit7 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress8}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit7(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={zip}
              placeholder={"zip"}
              editable={edit8}
              onChangeText={(zip) => setzip(zip)}
            />
            {edit8 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress9}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit8(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={geoCordinates}
              placeholder={"GeoCoordinates"}
              editable={edit9}
              onChangeText={(geoCordinates) => setGeocordinates(geoCordinates)}
            />
            {edit9 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress10}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit9(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={addressid}
              placeholder={"Address id is"}
              editable={edit10}
              onChangeText={(addressid) => setAdressid(addressid)}
            />
            {edit10 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress11}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit10(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={personid}
              placeholder={"personid"}
              editable={edit11}
              onChangeText={(person_id) => setPersonid(person_id)}
            />
            {edit11 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress12}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit11(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={eye_color_id}
              placeholder={"eyeColor id"}
              editable={edit12}
              onChangeText={(eye_color_id) => seteye_color_id(eye_color_id)}
            />
            {edit12 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress13}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit12(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={eye_color_id}
              placeholder={"race id"}
              editable={edit13}
              onChangeText={(race_id) => setrace_id(race_id)}
            />
            {edit13 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress14}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit13(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={gender_id}
              placeholder={"gender id"}
              editable={edit14}
              onChangeText={(gender_id) => setgender_id(gender_id)}
            />
            {edit14 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress15}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit14(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={number}
              placeholder={"number"}
              editable={edit15}
              onChangeText={(number) => setNumber(number)}
            />
            {edit15 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress16}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit15(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={identification_id}
              placeholder={"identification id"}
              editable={edit16}
              onChangeText={(identification_id) =>
                setIdentification_id(identification_id)
              }
            />
            {edit16 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress17}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit16(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={issued_by}
              placeholder={"issued by:"}
              editable={edit17}
              onChangeText={(issued_by) => setIssued_by(issued_by)}
            />
            {edit17 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress18}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit17(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={issued_on}
              placeholder={"issued on:"}
              editable={edit18}
              onChangeText={(issued_on) => setIssued_on(issued_on)}
            />
            {edit18 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress19}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit18(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={expires_on}
              placeholder={"expires on:"}
              editable={edit18}
              onChangeText={(expires_on) => setExpires_on(expires_on)}
            />
            {edit19 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress19}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit18(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={restriction_type}
              placeholder={"Restriction Type:"}
              editable={edit19}
              onChangeText={(restriction_type) =>
                setRestriction_type(restriction_type)
              }
            />
            {edit19 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress20}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit19(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={restriction_type_details}
              placeholder={"Restriction Type Details:"}
              editable={edit20}
              onChangeText={(restriction_type_details) =>
                setRestriction_type_details(restriction_type_details)
              }
            />
            {edit20 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress21}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit20(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={state_id}
              placeholder={"State ID:"}
              editable={edit21}
              onChangeText={(state_id) => setState_id(state_id)}
            />
            {edit21 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress22}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit21(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={Affiliation_id}
              placeholder={"Affiliation ID:"}
              editable={edit22}
              onChangeText={(Affiliation_id) =>
                setAffiliationid(Affiliation_id)
              }
            />
            {edit22 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress23}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit22(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={rank}
              placeholder={"Rank:"}
              editable={edit23}
              onChangeText={(rank) => setRank(rank)}
            />
            {edit23 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress24}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit23(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={Affiliation_type_id}
              placeholder={"Affiliation Type id:"}
              editable={edit24}
              onChangeText={(Affiliation_type_id) =>
                setAffiliationtypeid(Affiliation_type_id)
              }
            />
            {edit24 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress25}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit24(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={Affiliationgang_id}
              placeholder={"Affiliation gang id:"}
              editable={edit25}
              onChangeText={(Affiliationgang_id) =>
                setAffiliationgang_id(Affiliationgang_id)
              }
            />
            {edit25 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress26}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit25(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={affiliationsubsetgang_id}
              placeholder={"Affiliation subset gang id:"}
              editable={edit26}
              onChangeText={(affiliationsubsetgang_id) =>
                setAffiliationsubsetgangid(affiliationsubsetgang_id)
              }
            />
            {edit26 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress27}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit26(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={org_id}
              placeholder={"Org id:"}
              editable={edit27}
              onChangeText={(org_id) => setorg_id(org_id)}
            />
            {edit27 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress28}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit27(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={work_phone_number}
              placeholder={"work ph no:"}
              editable={edit29}
              onChangeText={(work_phone_number) =>
                setWork_phone_number(work_phone_number)
              }
            />
            {edit28 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress29}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit28(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={cell_number}
              placeholder={"Cell no:"}
              editable={edit29}
              onChangeText={(cell_number) => setcell_number(cell_number)}
            />
            {edit29 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress30}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit29(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={primary_phone_flag}
              placeholder={"Primary Ph flag:"}
              editable={edit31}
              onChangeText={(primary_phone_flag) =>
                setPrimary_phone_flag(primary_phone_flag)
              }
            />
            {edit31 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress32}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit31(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={Email}
              placeholder={"Email:"}
              editable={edit32}
              onChangeText={(Email) => setEmail(Email)}
            />
            {edit32 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress33}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit32(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={fax}
              placeholder={"Fax:"}
              editable={edit33}
              onChangeText={(fax) => setFax(fax)}
            />
            {edit33 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress34}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit33(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={facebook_id}
              placeholder={"Facebook:"}
              editable={edit34}
              onChangeText={(facebook_id) => setFacebook(facebook_id)}
            />
            {edit34 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress35}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit34(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={twitter_id}
              placeholder={"Twitter:"}
              editable={edit35}
              onChangeText={(twitter_id) => setTwitter(twitter_id)}
            />
            {edit35 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress36}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit35(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={skype_id}
              placeholder={"Skype Id:"}
              editable={edit36}
              onChangeText={(skype_id) => setSkype(skype_id)}
            />
            {edit36 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress37}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit36(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={Education_id}
              placeholder={"Education Id:"}
              editable={edit37}
              onChangeText={(Education_id) => setEduaction_id(Education_id)}
            />
            {edit37 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress38}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit37(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={Education_level}
              placeholder={"Education LVL:"}
              editable={edit38}
              onChangeText={(Education_level) =>
                setEducation_level(Education_level)
              }
            />
            {edit38 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress39}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit38(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={acquired_on}
              placeholder={"Acquired On:"}
              editable={edit39}
              onChangeText={(acquired_on) =>
                setAquired_on(acquired_on)
              }
            />
            {edit39 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress40}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit39(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.Tbox}>
            <TextInput
              style={styles.input2}
              value={degree_id}
              placeholder={"Degree ID:"}
              editable={edit40}
              onChangeText={(degree_id) => setDegree_id(degree_id)}
            />
            {edit40 ? (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePress41}
              >
                <Feather name="save" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setEdit40(true)}
              >
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ccontainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    backgroundColor: "white",
  },
  txt: {
    alignContent: "center",
    fontSize: 20,
  },
  searchContainer: {
    padding: 20,
    backgroundColor: "white",
  },
  SearchCcontainer: {
    marginTop: 15,
    marginBottom: 15,

    alignContent: "center",
    // justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: 60,
    padding: 10,
    borderColor: "grey",
    borderWidth: 1.5,
    borderRadius: 40,
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
    paddingTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
  input2: {
    flex: 1,
    height: 40,
    borderColor: "white",
    borderWidth: 0,
    marginRight: 10,
    padding: 10,
  },
  iconContainer: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  Tbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  picker: {
    backgroundColor: "white",

    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    elevation: 5,
  },
  scrollView: {
    backgroundColor: "white",
    marginTop: 0,
  },
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
    width: "90%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    paddingBottom: 10,
  },
  searchBar__clicked: {
    padding: 5,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#grey",
    borderRadius: 15,
    alignItems: "center",
    // justifyContent: "space-evenly",
  },
  searchBar__unclicked: {
    padding: 5,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#grey",
    borderRadius: 15,
    alignItems: "center",
  },
  flt: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#grey",
    position: "absolute",
    alignItems: "center",
  },
  search: {
    padding: 2,
    backgroundColor: "white",
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5,
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
    backgroundColor: "white",
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
export default admin;
