export default class ServerError extends Error {
  public constructor(message: "TEST_ERROR", info: { info: number });

  public constructor(
    message: string,
    public readonly info: Record<string, unknown> = {}
  ) {
    super(message);
  }
}
