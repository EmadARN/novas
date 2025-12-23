import {
  API_CORE_URL,
  API_PACKAGE_URL,
  API_TEXTBOOK_URL,
  API_PAYMENT_URL,
  API_EXAM_URL,
} from "./api";
import createAxiosInstance from "./axios";

export const coreHttp = createAxiosInstance(API_CORE_URL);
export const packageHttp = createAxiosInstance(API_PACKAGE_URL);
export const textbookHttp = createAxiosInstance(API_TEXTBOOK_URL);
export const paymentHttp = createAxiosInstance(API_PAYMENT_URL);
export const examHttp = createAxiosInstance(API_EXAM_URL);
