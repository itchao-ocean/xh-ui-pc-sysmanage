//public是对axios的工具类封装，定义了http请求方法
import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xhApiUrlPre;
//页面查询
export const page_list = (page,size,params) =>{
    //将params对象数据拼装成key/value串
    let queryString =  querystring.stringify(params);
    return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+"/"+size+"?"+queryString)
}