//public是对axios的工具类封装，定义了http请求方法
import http from './../../../base/api/public'

let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xhApiUrlPre;

export const page_list = (page,size) =>{
    return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+"/"+size)
}