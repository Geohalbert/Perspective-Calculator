import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import styles from '../../styles/routes/HomeViewStyles'
import {inject, observer} from 'mobx-react'
// import GuestSubView from '../theme/GuestSubView'
import { Navigation } from 'react-native-navigation'

@inject ('user')
@observer
export default class GuestView extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Guest',
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