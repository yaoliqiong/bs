
let _state={
    userInfo:{
        userID:'',
    }
}


const reducer=(state=_state,action)=>{
   
        console.log(action,4444)
    switch(action.type){
       
        case 'LOGIN':
        // console.log("go")
        // var new_state=123;
            var new_state=Object.assign({},state);

            new_state.userInfo=action.userInfo
        
            
            return new_state;break;


        case 'REGISTER':
            // console.log(state)
            var new_state=Object.assign({},state);

            new_state.userInfo=action.userInfo
            // console.log(state.userInfo,666)
            return new_state;break;
       
        case '0':
            alert("用户名已经存在了");
            return state;break;

        case '1':
            alert('服务器被你玩崩了');
            return state;break;

        default:
            return state;break;
    }
   
}

export default reducer