import { apiConnector } from '../apiconnector';
import { endpoints } from '../api';

export const adminRegister = async (email, password) => {
  console.log("signup api run successfully  "  ,endpoints.Admin_Register);
    return apiConnector('POST', endpoints.Admin_Register, { email, password });
};
export const createEvents = async (events) => {
  console.log("Create events api run successfully  "  , endpoints.CREATE_EVENT_API);
    return apiConnector('POST', endpoints.CREATE_EVENT_API, {events});
};

  