export class OurError extends Error {
  constructor(message: string, error?: any) {
    super(message);

    this.name = 'OurError';

    if (error) {
      console.error(error);
    }
  }
}

export const ExtractErrorMessage = (
  err: Error,
  defaultMessage = 'Por favor, tente novamente mais tarde.'
) => {
  let msg = err?.message;
  if (!(err instanceof OurError)) {
    console.error(err);
    msg = defaultMessage;
  }
  return msg;
};
