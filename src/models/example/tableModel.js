import { isArray } from "util";

export default class exampleTableModel {
  construct() {}
  getDataFetchs(objs) {
    let datas = [];
    if (isArray(objs)) {
      objs.map((val, index) => {
        val['selected'] = false;
        datas.push(val);
      });
    } else {
      Object.values(objs).map((val, index) => {
        val['selected'] = false;
        datas.push(val);
      });
    }

    return datas;
  }
}
