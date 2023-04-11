const {apiRequest} =require('.')
// export const RegisterUser=async(payload)=>{
//     const response=await apiRequest({
//         method:'post',
//         url:'/api/users/register',
//         payload
//     })
//     return response;
// }   

//same to

const RegisterUser=async(payload)=>apiRequest('post','/api/users/register',payload)
const LoginUser=async(payload)=>apiRequest('post','/api/users/login',payload)


module.exports={
    RegisterUser,
    LoginUser
}