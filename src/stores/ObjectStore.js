import {
    observable,
    action,
    computed
  } from 'mobx';
  import {
    Alert
  } from 'react-native'
  import LocalStorage from '../utils/LocalStorage';
  import OBJSERVICE from '../service/object.service';
  import autobind from 'autobind-decorator'
  
  @autobind
  class ObjectStore {
    @observable _defaultCollections= {};
  
  
    @action
    getCollections() {
      return OBJSERVICE.getDefs().then((resp) => {
        if (resp) {
          this.defColl = resp
        }
      }).catch((e) => {
        Alert.alert(e.message)
      })
    }
  
    @computed
    get defColl() {
      return this._defaultCollections
    }
    set defColl(colls) {
      this._defaultCollections = colls
    }
  }
  
  export default new ObjStore()