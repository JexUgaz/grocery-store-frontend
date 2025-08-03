const { BACKEND_API_URL: backendApiUrl = "no-endpoint" } = process.env;

export class Config {
  static readonly backendApiUrl: string = backendApiUrl;
}
