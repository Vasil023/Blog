import axios from "axios";
// import { toast } from "vue3-toastify";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


//TODO: змінити коли буде регестрація
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// apiClient.interceptors.response.use(
//   function (response) {
//     // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
//     // Здесь можете сделать что-нибудь с ответом

//     return response;
//   },
//   function (error) {
//     // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
//     // Здесь можете сделать что-то с ошибкой ответа
//     let message = "";

//     switch (error.response.status) {


//       case 429:
//         message = "Перевищено ліміт запитів спробуйте через 1 хвилину";
//         break;
//       case 404:
//         message = "Щось пішло не так";
//         break;
//       case 500:
//         message = "Помилка сервера";
//         break;
//       default:
//         message = error.message;
//     }

//     toast(message, {
//       theme: "colored",
//       type: "error",
//       position: "top-center",
//       // autoClose: 5000,
//       dangerouslyHTMLString: true,
//     });
//   }
// );

export default apiClient;