import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import styles from '../../styles/routes/HomeViewStyles'
import {inject, observer} from 'mobx-react'
// import MainSubView from '../theme/MainSubView'
import { Navigation } from 'react-native-navigation'

@inject ('user')
@observer
export default class View extends Component {
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
    }
  }

  
  render() {
    return (
      <View style={styles.container}>
          <Text>HERE WE GO</Text>
	    </View>
    );
  }
}