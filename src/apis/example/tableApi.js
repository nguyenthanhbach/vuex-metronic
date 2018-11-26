import Axios from "axios";
import config from "@source/config/index";
import exampleTableModel from "../../models/example/tableModel";
import request from '@source/util/request'


export class tableExampleApi {
  static getAll(currentPage) {
       
    const form = new FormData();
    form.append('pagination[page]',currentPage)
    form.append('pagination[pages]',35)
    form.append('pagination[perpage]',20)
    form.append('pagination[total]',20)
    
    
    return request({
      url: config.API_URL.GET_LIST_DATA_DEMO,
      method: 'post',
      form
    },function(response){
      let dataModel = new exampleTableModel();
      let data = dataModel.getDataFetchs(response.data.data)
      return {data: data, meta: response.data.meta};
    },function(err){
      console.log(err)
    })
    // console.log(request)
    // return request
  /*
    return Axios({
      
      method: "POST",
      url:
        config.API_URL.GET_LIST_DATA_DEMO,
      headers: {
        "Content-Type": "application/json"
        //'content-type': `multipart/form-data; boundary=${form._boundary}`,
       // 'Content-Type': 'multipart/form-data' 
        // 'Authorization': "bearer " + helper.getToken()
      },
      data: form
    })
      .then(response => {
        let dataModel = new exampleTableModel();
        let data = dataModel.getDataFetchs(response.data.data)
        return {data: data, meta: response.data.meta};
      })
      .catch(error => {
        console.log(error);
        return error.response;
      });
      */
  }
}
