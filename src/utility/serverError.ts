export default class ServerError extends Error {
  public statusCode: number;
  public details: Record<string, unknown>;

  public constructor(message: string, statusCode: number, details: Record<string, unknown> = {}) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}
