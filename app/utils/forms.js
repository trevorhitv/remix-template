export function pullErrorFromZodParsing(error) {
  return error.errors.reduce((acc, error) => {
    acc[error.path[0]] = error.message;
    return acc;
  }, {});
}
