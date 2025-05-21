export class RedirectError extends Error {
  public url: string;
  
  constructor(url: string) {
    super('Redirect');
    this.name = 'RedirectError';
    this.url = url;
  }
}

export class UnauthorizedError extends Error {
  constructor() {
    super('Unauthorized');
    this.name = 'UnauthorizedError';
  }
}
