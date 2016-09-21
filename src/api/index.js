import { UserResource } from './resources.js'
import Vue from 'vue'

export default{
  login: function (data) {
      return UserResource.save({method:'User_Login'},data)
    },
}
