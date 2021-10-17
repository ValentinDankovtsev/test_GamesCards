export const required = (value) => (value ? undefined : "Required");
export const minLength = (minLength) => (value) =>
  value.length < minLength
    ? `Must be ${minLength} characters or more`
    : undefined;
export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
