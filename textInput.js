// import React, { useState } from "react";
// import { View, TextInput, Button } from "react-native";
// import { Feather } from "@expo/vector-icons";

// function TextInput1() {
//   const [text, setText] = useState("");
//   const [edit, setEdit] = useState(false);

//   const handlePress = () => {
//     setEdit(false);
//     // Do something with the text
//   };

//   return (
//     <View style={{ flexDirection: "row" }}>
//       <TextInput
//         style={{ flex: 1 }}
//         value={text}
//         editable={edit}
//         onChangeText={(newText) => setText(newText)}
//       />
//       {edit ? (
//         <Feather.Button
//           name="save"
//           size={24}
//           color="black"
//           onPress={handlePress}
//         />
//       ) : (
//         <Feather.Button
//           name="edit-2"
//           size={24}
//           color="black"
//           onPress={() => setEdit(true)}
//         />
//       )}
//       <Button title="Submit" onPress={handlePress} />
//     </View>
//   );
// }

// export default TextInput1;
