import { api } from '../client';

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignUpData {
  name: string;
  surname: string;
  email: string;
  password: string;
  birthday: string;
  location: string;
  nationality: string;
  telegram?: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return api.post<AuthResponse>('/auth/login', credentials);
  },

  async signup(data: SignUpData): Promise<AuthResponse> {
    return api.post<AuthResponse>('/auth/signup', data);
  },

  async logout(): Promise<void> {
    return api.post('/auth/logout', {});
  },

  async refreshToken(): Promise<{ token: string }> {
    return api.post('/auth/refresh', {});
  },
}; 