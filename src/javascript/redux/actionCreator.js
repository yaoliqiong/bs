
import axios from 'axios'
import store from './store'

const actionCreator={

    login(params){

        return (dispatch)=>{
            axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
			    params:params
            }).then((res)=>{
                // console.log(res.data,11111)
                // if(res.data==0||res.data==2){
                    if(res.data==0){
                    alert(res.data)
                }else{
                   dispatch({
                        type:'LOGIN',
                        userInfo:res.data
                    })
                }
                
            })
		
        }
	
    },
    register(params){
        return (dispatch)=>{
            axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
                params:params
            }).then((res)=>{
                switch(res.data){ 
                    case 0:
                    dispatch({
                        type:'0',
                        userInfo:res.data
                    });break;
                    case 1:
                    dispatch({
                        type:'REGISTER',
                        userInfo:res.data
                    });break;
                    case 2:
                    dispatch({
                        type:'2',
                        userInfo:res.data
                    });break;
                    default: break;
                }
            })
        }
    }
    
    

}

export default actionCreator