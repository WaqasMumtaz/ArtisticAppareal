const updateUser = (user)=>{
       return {
           type:'UPDATE_USER',
           user
       }
}

const removeUser = ()=>{
        return {
            type:"REMOVE_USER"
        }
}
const updateCity = (city)=>{
    console.log('Action User Data >>', city);
    return {
        type:"UPDATE_CITY",
        city
    }
}

export {
    updateUser,
    removeUser,
    updateCity
}