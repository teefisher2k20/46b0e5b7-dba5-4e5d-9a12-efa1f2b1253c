import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export interface GenerateRequest {
  prompt: string;
  category?: string;
}

export interface GenerateResponse {
  status: string;
  plan: Record<string, any>;
  results: Record<string, any>;
}

export const generateTask = async (request: GenerateRequest): Promise<GenerateResponse> => {
  const response = await axios.post<GenerateResponse>(`${API_BASE_URL}/generate`, request);
  return response.data;
};
