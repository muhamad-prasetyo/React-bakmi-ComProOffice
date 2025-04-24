import axios from 'axios';
import { Outlet, City, MenuItem, Promotion, Booking } from '../types/models';

// Base API URL - change this to your actual API endpoint
const API_BASE_URL = 'https://api.bakmibangka17.com/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Outlets API
export const getOutlets = async (): Promise<Outlet[]> => {
  try {
    const response = await api.get('/outlets');
    return response.data;
  } catch (error) {
    console.error('Error fetching outlets:', error);
    return [];
  }
};

export const getOutletBySlug = async (slug: string): Promise<Outlet | null> => {
  try {
    const response = await api.get(`/outlets/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching outlet with slug ${slug}:`, error);
    return null;
  }
};

// Cities API
export const getCities = async (): Promise<City[]> => {
  try {
    const response = await api.get('/cities');
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};

export const getCityBySlug = async (slug: string): Promise<City | null> => {
  try {
    const response = await api.get(`/cities/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching city with slug ${slug}:`, error);
    return null;
  }
};

// Menu API
export const getMenuItems = async (): Promise<MenuItem[]> => {
  try {
    const response = await api.get('/menu');
    return response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return [];
  }
};

// Promotions API
export const getPromotions = async (): Promise<Promotion[]> => {
  try {
    const response = await api.get('/promotions');
    return response.data;
  } catch (error) {
    console.error('Error fetching promotions:', error);
    return [];
  }
};

// Booking API
export const createBooking = async (bookingData: Omit<Booking, 'id' | 'status'>): Promise<Booking | null> => {
  try {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    return null;
  }
};

export const getBookingById = async (id: string): Promise<Booking | null> => {
  try {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching booking with id ${id}:`, error);
    return null;
  }
};

export default api; 