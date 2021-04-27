import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    const index = error.path !== undefined ? error.path : 'notFond';
    validationErrors[index] = error.message;
  });

  return validationErrors;
}
