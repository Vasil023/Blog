import { defineStore } from 'pinia'
import { login, register } from '@/api/login'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
    error: null,
    isLoading: false
  }),

  actions: {
    async register(email, password, role) {
      this.isLoading = true
      try {
        await register(email, password, role)

        // Перевірка помилок  
        if (response.status === 400) {
          this.error = response.response?.data;
          this.isLoading = false;
          return
        }

        this.isLoading = false

      } catch (error) {
        console.log('error', error);
        this.error = error || 'Не вдалося зареєструватися'
      }
    },

    async login(email, password) {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await login(email, password);

        // Перевірка помилок  
        if (response.status === 400) {
          this.error = response.response?.data;
          this.isLoading = false;
          return
        }

        localStorage.setItem('token', response?.token);
        localStorage.setItem('userId', response?.userId);

        this.token = response?.token;
        this.user = response?.email;
        this.isLoading = false;
      } catch (error) {
        console.error('Помилка:', error);
        this.error = 'Виникла помилка з’єднання. Спробуйте ще раз.';
        this.isLoading = false;
      }
    },

    // logout() {
    //   this.token = null
    //   this.user = null
    //   localStorage.removeItem('token')
    // },

    isLoggedIn() {
      return !!this.token
    }

  },
})
