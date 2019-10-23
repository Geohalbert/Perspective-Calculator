import { observable, action, computed } from 'mobx';
import {
  Alert
} from 'react-native'
import LocalStorage from '../utils/LocalStorage';
import Theme from '../styles/theme.js'
import USERSERVICE from '../service/user.service'
import autobind from 'autobind-decorator'

@autobind
class UserStore {
  @observable _userId = '';
  @observable _user = {};
  @observable _loggedIn = false;

  constructor() {
  }

  @action
  register(username, password) {
    return USERSERVICE.createUserWithEmailAndPassword(username, password).then((resp)=>{
      if (resp.user) {
        this.user = resp.user
      }
    }).catch((e) => {
      Alert.alert(e.message)
    })
  }

  @action
  login(username, password) {
    return USERSERVICE.signInWithEmailAndPassword(username, password).then((resp) => {
      if (resp.user) {
        this.user = USERSERVICE.userInfo()
        this.loggedIn = true
      }
    }).catch((e) => {
      Alert.alert(e.message)
    })
  }

  @action
  logout() {
    return USERSERVICE.signOut().then((resp) => {
      if (resp) {
        this.user = {}
        this.loggedIn = false
      }
    }).catch((e) => {
      Alert.alert(e.message)
    })
  }

  @computed
  get userId() {
    return this._userId === '' ? false : this._userId
  }

  @computed
  get loggedIn() {
    return this._loggedIn
  }
  set loggedIn(val) {
    this._loggedIn = val
  }

  @computed
  get user() {
    return this._user || {}
  }
  set user(user) {
    this._user = user
  }
}

export default new UserStore()