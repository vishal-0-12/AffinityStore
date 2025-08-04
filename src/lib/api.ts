const API_BASE_URL = 'http://localhost:3001/api';

export interface Company {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postal_code?: string;
  phone?: string;
  fax?: string;
  email?: string;
  website?: string;
  business_description?: string;
  industry?: string;
  established_year?: number;
  employee_count?: string;
  annual_revenue?: string;
  logo_url?: string;
  membership_type: string;
  membership_since: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  company_id: number;
  full_name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  count?: number;
  error?: string;
}

class ApiClient {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Company endpoints
  async getCompanies(filters?: {
    state?: string;
    search?: string;
    alphabet?: string;
    industry?: string;
  }): Promise<ApiResponse<Company[]>> {
    const params = new URLSearchParams();
    
    if (filters?.state) params.append('state', filters.state);
    if (filters?.search) params.append('search', filters.search);
    if (filters?.alphabet) params.append('alphabet', filters.alphabet);
    if (filters?.industry) params.append('industry', filters.industry);

    const queryString = params.toString();
    const endpoint = `/companies${queryString ? `?${queryString}` : ''}`;
    
    return this.request<Company[]>(endpoint);
  }

  async getCompanyById(id: number): Promise<ApiResponse<Company>> {
    return this.request<Company>(`/companies/${id}`);
  }

  async createCompany(company: Omit<Company, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResponse<Company>> {
    return this.request<Company>('/companies', {
      method: 'POST',
      body: JSON.stringify(company),
    });
  }

  async updateCompany(id: number, company: Partial<Company>): Promise<ApiResponse<Company>> {
    return this.request<Company>(`/companies/${id}`, {
      method: 'PUT',
      body: JSON.stringify(company),
    });
  }

  async deleteCompany(id: number): Promise<ApiResponse<void>> {
    return this.request<void>(`/companies/${id}`, {
      method: 'DELETE',
    });
  }

  async getStates(): Promise<ApiResponse<string[]>> {
    return this.request<string[]>('/companies/states');
  }

  async getIndustries(): Promise<ApiResponse<string[]>> {
    return this.request<string[]>('/companies/industries');
  }

  async getStats(): Promise<ApiResponse<{
    totalCompanies: number;
    totalStates: number;
    totalIndustries: number;
  }>> {
    return this.request('/companies/stats');
  }

  // Contact endpoints
  async sendContactMessage(message: ContactMessage): Promise<ApiResponse<ContactMessage>> {
    return this.request<ContactMessage>('/contact', {
      method: 'POST',
      body: JSON.stringify(message),
    });
  }

  async getContactMessages(): Promise<ApiResponse<ContactMessage[]>> {
    return this.request<ContactMessage[]>('/contact');
  }

  async getContactMessagesByCompany(companyId: number): Promise<ApiResponse<ContactMessage[]>> {
    return this.request<ContactMessage[]>(`/contact/company/${companyId}`);
  }

  // Health check
  async healthCheck(): Promise<ApiResponse<{ message: string; timestamp: string }>> {
    return this.request('/health');
  }
}

export const apiClient = new ApiClient();