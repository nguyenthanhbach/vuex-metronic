// in HTTP.js
import axios from 'axios'
import NProgress from 'nprogress'
import Vue from 'vue';

// create a new axios instance
const instance = axios.create({
  //baseURL: '/api',
  timeout: 5000 // request timeout
})

// before a request is made start the nprogress
instance.interceptors.request.use(
  config => {
    NProgress.start()
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }

)

// before a response is returned stop nprogress
instance.interceptors.response.use(
  response => {
    NProgress.done()
    return response
  },
  error => {
   // $('#modal-error').modal();
    Vue.swal({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    });
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default instance
