import React, {Component} from 'react';
import {Header} from 'react-native-elements';

const MyHeader = props =>{
  return(
  <Header
    centerComponent = {{text:props.title, style:{
      color:'#FF0000', fontSize:20, fontWeight:'bold'
    }}}
    backgroundColor = '#EAF8FE'
  />
  );
}
export default MyHeader;