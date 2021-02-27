import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity, Alert, Modal, KeyboardAvoidingView, ScrollView} from 'react-native';
import firebase from 'firebase';
import db from '../Config';
import MyHeader from '../components/MyHeader';

export default class BookRequestScreen extends Component{
  constructor(){
    super();
    this.state = {
      userId:firebase.auth().currentUser.email,
      bookName:'',
      reasonForRequest:''
    }
  }
  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }
  addRequest = (bookName, reasonForRequest)=>{
    var userId = this.state.userId;
    var randomRequestId = this.createUniqueId();
    db.collection("bookRequests").add({
      user_id:userId,
      book_name:bookName,
      reason_for_request:reasonForRequest,
      request_id:randomRequestId
    });
    this.setState({bookName:'', reasonForRequest:''});
    return Alert.alert("Book requested successfully");
  }
  render(){
    return(
      <View style = {{flex:1}}>
        <MyHeader title = 'Request Book'/>
        <KeyboardAvoidingView enabled>
          <TextInput
            style = {styles.formTextInput}
            placeholder = "Enter Book Name"
            onChangeText = {text=>{
              this.setState({bookName:text});
            }}
            value = {this.state.bookName}/>
          <TextInput
            style = {[styles.formTextInput,{height:300}]}
            placeholder = "Enter Reason"
            onChangeText = {text=>{
              this.setState({reasonForRequest:text});
            }}
            multiline
            numberOfLines = {5}
            value = {this.state.reasonForRequest}/>
          <TouchableOpacity
            style = {styles.button}
            onPress = {()=>{
              this.addRequest(this.state.bookName, this.state.reasonForRequest);
            }}>
              <Text>SUBMIT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  keyBoardStyle : { 
    flex:1, 
    alignItems:'center', 
    justifyContent:'center' 
  }, 
  formTextInput:{ 
    width:"75%", 
    height:35, 
    alignSelf:'center', 
    borderColor:'#ffab91', 
    borderRadius:10, 
    borderWidth:1, 
    marginTop:20, 
    padding:10, 
  },
  button:{ 
    width:"75%", 
    height:50, 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:10, 
    backgroundColor:"#ff5722", 
    shadowColor: "#000", 
    shadowOffset:{ 
       width: 0, 
       height: 8, 
    }, 
    shadowOpacity: 0.44, 
    shadowRadius: 10.32, 
    elevation: 16, 
    marginTop:20 
    },
  }
) 