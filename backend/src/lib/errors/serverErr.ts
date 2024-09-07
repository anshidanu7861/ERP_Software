import { CustomError } from "./customErr";
import { ERROR_CODES, ERROR_MESSAGES } from "../../utils/constants";

export class InternalServerErr extends CustomError {
  statusCode = ERROR_CODES.INTERNAL_SERVER;

  constructor(message: string = ERROR_MESSAGES.INTERNAL_SERVER) {
    super(message);

    Object.setPrototypeOf(this, InternalServerErr.prototype);
  }

  serializeError() {
    return [{ message: this.message }];
  }
}
