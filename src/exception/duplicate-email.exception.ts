// duplicate-email.exception.ts
import { HttpException, HttpStatus } from '@nestjs/common';

export class DuplicateEmailException extends HttpException {
  constructor() {
    super('Email is already in use', HttpStatus.CONFLICT);
  }
}
