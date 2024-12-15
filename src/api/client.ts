import { APP_CONFIG } from '@/config/constants';

interface FetchOptions extends RequestInit {
  timeout?: number;
}

class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any
  ) {
    super(message);
    this.name = 'APIError';
  }
}

const fetchWithTimeout = async (
  url: string,
  options: FetchOptions = {}
) => {
  const { timeout = APP_CONFIG.api.timeout, ...fetchOptions } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      throw new APIError(response.statusText, response.status, data);
    }

    return response;
  } finally {
    clearTimeout(id);
  }
};

export const api = {
  async get<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    const response = await fetchWithTimeout(`${APP_CONFIG.api.baseUrl}${endpoint}`, {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    return response.json();
  },

  async post<T>(endpoint: string, data: any, options: FetchOptions = {}): Promise<T> {
    const response = await fetchWithTimeout(`${APP_CONFIG.api.baseUrl}${endpoint}`, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async put<T>(endpoint: string, data: any, options: FetchOptions = {}): Promise<T> {
    const response = await fetchWithTimeout(`${APP_CONFIG.api.baseUrl}${endpoint}`, {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async delete<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    const response = await fetchWithTimeout(`${APP_CONFIG.api.baseUrl}${endpoint}`, {
      ...options,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    return response.json();
  },
}; 