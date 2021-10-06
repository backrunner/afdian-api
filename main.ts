class AfdianApi {
  private token: string;
  constructor(opts: AfdianApiOpts) {
    const { token } = opts;
    this.token = token;
  }
}
