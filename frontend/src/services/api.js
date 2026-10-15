import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('srijan_admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

function unwrap(promise) {
  return promise
    .then((res) => res.data)
    .catch((err) => {
      const message =
        err.response?.data?.message || err.message || 'Something went wrong. Please try again.';
      const details = err.response?.data?.details || null;
      const status = err.response?.status || 0;
      throw { message, details, status };
    });
}

export const servicesApi = {
  list: () => unwrap(api.get('/services')),
  getBySlug: (slug) => unwrap(api.get(`/services/${slug}`)),
};

export const industriesApi = {
  list: () => unwrap(api.get('/industries')),
  getBySlug: (slug) => unwrap(api.get(`/industries/${slug}`)),
};

export const portfolioApi = {
  list: () => unwrap(api.get('/portfolio')),
  getBySlug: (slug) => unwrap(api.get(`/portfolio/${slug}`)),
};

export const contactApi = {
  submit: (payload) => unwrap(api.post('/contact', payload)),
};

export const careersApi = {
  submit: (payload) => unwrap(api.post('/careers', payload)),
};

export const faqsApi = {
  list: () => unwrap(api.get('/faqs')),
};

export const authApi = {
  login: (payload) => unwrap(api.post('/auth/login', payload)),
  me: () => unwrap(api.get('/auth/me')),
};

export const adminApi = {
  getStats: () => unwrap(api.get('/admin/stats')),
  listLeads: (status) => unwrap(api.get('/admin/leads', { params: status ? { status } : {} })),
  getLead: (id) => unwrap(api.get(`/admin/leads/${id}`)),
  updateLeadStatus: (id, status) => unwrap(api.patch(`/admin/leads/${id}`, { status })),
  deleteLead: (id) => unwrap(api.delete(`/admin/leads/${id}`)),
};

export default api;
