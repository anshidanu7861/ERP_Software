export enum RESPONSE_TYPES {
  JSON = "json",
  REDIRECT = "redirect",
  NULL = "null",
}

export enum LOCATIONS {
  COUNTRIES = "countries",
  STATES = "states",
  CITIES = "cities",
  AREAS = "areas",
}

export const ERROR_CODES = {
  INTERNAL_SERVER: 500,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNAUTHORIZED: 401,
};

export const ERROR_MESSAGES = {
  INTERNAL_SERVER: "Internal Server Error",
  INVALID_CREDENTIALS: "Invalid Credentials",
  USER_NOT_FOUND: "User Not Found",
  DUPLICATE_USER: "Duplicate User",
  INVALID_TOKEN: "Invalid Token",
  ACCESS_TOKEN_EXPIRED: "Access Token Expired",
  INVALID_ACCESS_TOKEN: "Invalid Access Token",
  REFRESH_TOKEN_EXPIRED: "Refresh Token Expired",
  INVALID_REFRESH_TOKEN: "Invalid Refresh Token",
  MISSING_AUTHORIZATION_TOKEN: "Authorization header is missing",
  UNAUTHORIZED: "Unauthorized",
  FIELDS_NOT_FOUND: "Fields Not Found",
  INVALID_PASSWORD: "Invalid password credentials",
  INVALID_ID: "Invalid ID",
  NOT_FOUND: "Route not found",
  WENT_WRONG: "Somthing went wrong",
  PRODUCT_NOT_SAVE: "Product not save",
  SUPPLIER_NOT_FOUND: "Supplier not found",
  UPDATE_FAILED: "Not Updated",
  NOT_DELETED: "Not Deleted",
  PRODUCT_NOT_FOUND: "Product not found",
  
};
