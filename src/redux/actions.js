// import { SEARCH_RESULT } from "./actionTypes"

// export const getSearch = (data) =>({
//    type: SEARCH_RESULT,
//    payload: data
// })

// export const searchData = () =>{
//     return function (dispatch) {
//         fetch(`https://fast-reef-22226.herokuapp.com/data`).then((res)=>{
//             dispatch(getSearch(res.data))
//         }).catch((err)=>{
//             console.log("Error:", err);
//         })
//     }
// }