const initState = {
    users: [
        { id: 1, name: 'Truong' },
        {id:2,name:'Van'}
    ]
}



const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            console.log("run into delete user", action);
            return {
                ...state,users
            };
          // code block
         
        case 'ADD_USER':
            let id = Math.floor(Math.random() * 1000)
            let user = { id: id, name: `random - ${id}` }
            console.log("run into add user", action);
            return {
                ...state,users:[...state.users,user]
            }
            break;
            
         
        default:
          // code block
      }
    return state;
}

export default rootReducer;