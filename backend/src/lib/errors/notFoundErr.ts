import { CustomError } from "./customErr";
import { ERROR_CODES, ERROR_MESSAGES } from "../../utils/constants";

const { NOT_FOUND } = ERROR_MESSAGES;

export class NotFountErr extends CustomError {
  statusCode = ERROR_CODES.NOT_FOUND;

  constructor(message: string = NOT_FOUND) {
    super(message);

    Object.setPrototypeOf(this, NotFountErr.prototype);
  }

  serializeError() {
    return [{ message: NOT_FOUND }];
  }
}
