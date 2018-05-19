
// 引入fetch的两个兼容
import 'whatwg-fetch'

import 'es6-promise'

export default function get(url){
    return fetch(url,{
        credentials:'include',
        // 请求头:返回的数据类型
        headers:{
            'Accept':'application/json,text/plain,*/*'
        }
    })
}