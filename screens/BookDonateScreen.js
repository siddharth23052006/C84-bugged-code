import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity, Alert, Modal, KeyboardAvoidingView, ScrollView, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../Config';
import MyHeader from '../components/MyHeader';

export default class BookDonateScreen extends Component{
  constructor(){
    super();
    this.state = {
      requestedBooksList:[],
    }
    this.requestRef = null;
  }

  getRequestedBooksList = ()=>{
    this.requestRef = db.collection("bookRequests").onSnapshot(snapshot=>{
      var requestedBooksList = snapshot.docs.map(document=>document.data());
      this.setState({requestedBooksList:requestedBooksList});
    });
  }

  componentDidMount(){
    this.getRequestedBooksList();
  }

  componentWillUnmount(){
    this.requestRef = null;
  }

  keyExtractor = (item,index)=>index.toString();

  renderItem = ({item,i})=>{
    return(
      <ListItem
        key = {i}
        bottomDivider
      >
        <ListItem.Content>
          <ListItem.Title style = {{color:'black', fontWeight:'bold'}}>{item.book_name}</ListItem.Title>
          <ListItem.Subtitle style = {{color:'green'}}>{item.reason_for_request}</ListItem.Subtitle>
          <TouchableOpacity
            style = {styles.button}>
              <Text style = {{color:'white'}}>View</Text>
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>
    );
  }
  render(){
    return(
      <View style = {{flex:1}}>
        <MyHeader title = 'Donate Books'/>
        <View style = {{flex:1}}>
          {this.state.requestedBooksList.length === 0?(
            <View style = {styles.subContainer}>
              <Text style = {{fontSize:20}}>No Data Available</Text>
            </View>
          ):(
            <FlatList
              keyExtractor = {this.keyExtractor}
              data = {this.state.requestedBooksList}
              renderItem = {this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 50,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
});
