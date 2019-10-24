import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {inject, observer} from 'mobx-react'
import styles from '../../styles/routes/LoginViewStyles'
// import MainSubView from '../theme/MainSubView'
import { Navigation } from 'react-native-navigation'

@inject ('user')
@observer
export default class MainView extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Main',
        },
      }
    };
  }

  constructor() {
    super();
    this.state = {
      loading: false,
      collection1: '',
      object1: '',
      collection2: '',
      object2: ''
    }
  }

  
  render() {
    return (
      <View style={styles.container}>
          <Text>HERE WE GO</Text>
          <Text>Select two objects</Text>
          <Text>Object 1:</Text>

          <Text>Object 2:</Text>
          
	    </View>
    );
  }
}