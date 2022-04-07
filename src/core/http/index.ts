import axios from 'axios';
import { API_URL } from '../constants';

const handleErrorMessage = (error) => {
  if (error?.response) {
    return JSON.stringify(error.response.data) || 'Неизвестная ошибка';
  }

  if (error.request) {
    return 'Не удалось отправить запрос';
  }

  return 'Ошибка на клиенте';
};

const $request = axios.create({
  baseURL: API_URL,
});

$request.interceptors.response.use(
  (res) => res.data,
  (err) => {
    throw new Error(handleErrorMessage(err));
  },
);

export { $request };
