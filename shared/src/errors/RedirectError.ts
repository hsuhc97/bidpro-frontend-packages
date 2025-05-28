export class RedirectError extends Error {
  public url: string;

  constructor(url: string) {
    super("Redirect");
    this.name = "RedirectError";
    this.url = url;
  }
}
