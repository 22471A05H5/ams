// Web3Forms Configuration
// Replace this value with your actual Web3Forms access key

export const WEB3FORMS_CONFIG = {
  ACCESS_KEY: '3ac9e607-ed37-4520-a111-f125eac2cf82', // Your Web3Forms access key
  API_URL: 'https://api.web3forms.com/submit',
};

// Form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
