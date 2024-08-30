import { HttpService } from "./http.service";

const accessToken = localStorage.getItem("access");
const idToken = localStorage.getItem("idToken");

const addEmployee = async (formData) => {
  try {
    const response = await HttpService.post(`/api/add-employee`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const login = async () => {
  try {
    const response = await HttpService.post(`/api/login`, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const addList = async (form) => {
  try {
    const response = await HttpService.post(`/api/add-task`, form, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const removeTask = async (id) => {
  try {
    const response = await HttpService.delete(`/api/remove-task/${id}`, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getAllTask = async () => {
  try {
    const response = await HttpService.get(`/api/getAll-task`, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default { addEmployee, login, addList, removeTask, getAllTask };
