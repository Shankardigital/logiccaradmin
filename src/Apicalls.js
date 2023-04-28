// // import axios from 'axios';

// // const API_URL = 'http://103.186.185.77:5021/api/v1/admin/';

// // export const getAllItems = () => {
// //   return axios.get(`${API_URL}`);
// // };

// // export const getItemById = (itemId) => {
// //   return axios.get(`${API_URL}/items/${itemId}`);
// // };

// // export const createItem = (itemData) => {
// //   return axios.post(`${API_URL}/items`, itemData);
// // };

// // export const updateItem = (itemId, itemData) => {
// //   return axios.put(`${API_URL}/items/${itemId}`, itemData);
// // };

// // export const deleteItem = (itemId) => {
// //   return axios.delete(`${API_URL}/items/${itemId}`);
// // };

// import axios from 'axios';

// const API_URL = 'http://acebattingapi.digitalraiz.co.in/acebatting/adminportal/';

// var gets = localStorage.getItem("authUser");
// var data = JSON.parse(gets);
// var datas = data.token;
// // console.log(datas.id)
// // var datas1 = data.user;
// // console.log(datas1.id)


// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${datas}`,
//   },
// });

// export const getAllItems = () => {
//   return api.get();
// };

// export const getAllItemsdata = (url) => {
//     return axios.post(`${API_URL} + ${url}`, {});
//   };


// export const getItemById = (itemId) => {
//   return api.get(`/items/${itemId}`);
// };

// export const createItem = (itemData) => {
//   return api.post('', itemData);
// };

// export const updateItem = (itemId, itemData) => {
//   return api.put(`/items/${itemId}`, itemData);
// };

// export const deleteItem = (itemId) => {
//   return api.delete(`/items/${itemId}`);
// };
