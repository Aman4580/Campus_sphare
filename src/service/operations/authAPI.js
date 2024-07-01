import { apiConnector } from '../apiconnector';
import { endpoints } from '../api';

export const adminRegister = async (email, password) => {
  console.log("signup api run successfully  "  ,endpoints.Admin_Register);
    return apiConnector('POST', endpoints.Admin_Register, { email, password });
};
export const login = async (username, password) => {
  console.log("Login api run successfully  "  , endpoints.LOGIN_API);
    return apiConnector('POST', endpoints.LOGIN_API, { username, password });
};

  