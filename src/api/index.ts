import axios from "axios"

const eazisolsUsersInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_USER_BASE_URL,
});

export default eazisolsUsersInstance;

export const eazisolsProductsInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_USER_BASE_URL,
});

