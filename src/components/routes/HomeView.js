import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react'
import { Navigation } from 'react-native-navigation'
import LinearGradient from 'react-native-linear-gradient'
import Button from '../theme/ButtonView'
import { Icons, Images } from '../../styles/theme'
import styles from '../../styles/routes/HomeViewStyles'

@inject('appState')
@inject('user')
@observer
export default class HomeView extends Component {
  static options() {
    return {
      _statusBar: {
        backgroundColor: 'transparent',
        style: 'light-content',
        drawBehind: true,
      },
      topBar: {
        title: {
          text: 'Perspective Calculator',
        },
        largeTitle: {
          visible: true,
        },
        drawBehind: true,
        visible: true,
        animate: true,
      }
    };
  }

  render() {
    return (
      <View style={styles.bar}>
        <LinearGradient
          colors={['#fff', '#7d0e7d', '#000000']}
          locations={[0.15, 0.48, 1]}
          style={styles.root}
        >
          <Image source={Images.logo}/> 
          <Text>{this.props.user.userId}</Text>
          {/* <Button title='Switch to tab based app' onPress={this.onClickSwitchToTabs} /> */}
          <Button title='Register' onPress={this.onClickPush('App.Register')} />
          <Button title='Login' onPress={this.onClickPush('App.Login')} />
          <Button title='Continue to Main screen' onPress={this.onClickPush('App.Main')} />
          <Button title='Show Modal' onPress={this.showModal} />
          <Text style={styles.footer}>{`this.props.user.loggedIn = ${this.props.user.loggedIn}`}</Text>
          <Text style={styles.footer}>{`this.props.user.user = ${this.props.user.user}`}</Text>{this.props.text ? (<Text style={styles.footer}>{this.props.text}</Text>) : false}
        </LinearGradient>
      </View>
    );
  }

  onClickSwitchToTabs = () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BottomTabs',
          children: [
            {
              stack: {
                id: 'TAB1_ID',
                children: [
                  {
                    component: {
                      name: 'App.Home',
                      passProps: {
                        text: 'This is tab 1',
                        myFunction: () => 'Hello from a function!',
                      },
                      options: {
                        bottomTab: {
                          text: 'Tab 1',
                          icon: Icons.one,
                          selectedIcon: Icons.oneSelected,
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'App.Home',
                      passProps: {
                        text: 'This is tab 2',
                      }
                    },
                  }
                ],
                options: {
                  bottomTab: {
                    text: 'Tab 2',
                    icon: Icons.two,
                    selectedIcon: Icons.twoSelected,
                  }
                }
              }
            },
            {
              component: {
                name: 'App.Home',
                passProps: {
                  text: 'This is tab 3',
                  myFunction: () => 'Hello from a function!',
                },
                options: {
                  topBar: {
                    visible: true,
                    animate: false,
                  },
                  bottomTab: {
                    text: 'Tab 3',
                    icon: Icons.three,
                    selectedIcon: Icons.threeSelected,
                  }
                }
              }
            }
          ],
          options: {
            bottomTabs: {
              titleDisplayMode: 'alwaysShow',
            }
          }
        }
      }
    });
  }

  onClickPush = (link) => async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: link,
      }
    });
  }

  showModal = async () => {
    await Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'App.Home',
            }
          }
        ]
      }
    });
  }
}