interface AppConfig {
  tokenName: string;
  apiUrl: string;
  apiUrlDev: string;
}

export const APP_CONFIG: AppConfig = {
  tokenName: 'access_token',
  apiUrl: 'http://localhost:3010/api',
  apiUrlDev: 'http://localhost:3010/api'
};
