import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

Vue.use(VueResource);

Vue.http.options.crossOrigin = true;
// Vue.http.options.cresentials = true;
Vue.http.options.xhr = {withCredentials:true}
Vue.http.options.emulateJSON = true;

Vue.http.interceptors.push({
  request (request) {
    // 这里对请求体进行处理
    request.headers = request.headers || {}
    return request
  	},
	response (response) {
    return response
	}
});



export const UserResource = Vue.resource(API_ROOT + '{method}');
