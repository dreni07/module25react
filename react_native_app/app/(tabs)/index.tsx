import {useState,useEffect} from 'react';

import {Text,View,StyleSheet,Button,TextInput} from 'react-native';


// @ts-ignore
const Home = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  

  const handle = async ({navigation}) => {
    //

    try{
      const response = await fetch('https://dummyjson.com/auth/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({username,password}),
        credentials:'omit'
      });

      const answer = await response.json();

      console.log(answer);

      if(answer?.accessToken){
          console.log("Next Page!");
          navigation.navigate("Main");
      }
    } catch(err){
      console.error(err);
    }
    console.log(username);
    console.log(password);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>FAKE LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        autoCapitalize="none"
        onChangeText={text=>setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Log In" onPress={handle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:20,
    backgroundColor:'#fff'    
  },
  title:{
    fontSize:24,
    marginBottom:20,
    textAlign:'center'
  },
  input:{
    borderWidth:1,
    borderColor:'#aaa',
    padding:10,
    marginVertical:10,
    borderRadius:5
  }
})

export default Home;
