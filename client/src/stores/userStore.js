import { defineStore } from 'pinia'
import { login, register } from '@/api/login'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
    error: null,
  }),

  actions: {
    async register(email, password, role) {

      try {
        const response = await register(email, password, role)

        // Якщо реєстрація успішна, зберігаємо токен
        this.token = response.data.token
        this.user = { email } // Можна зберігати більше даних, якщо треба

        localStorage.setItem('token', this.token) // Зберігаємо токен в localStorage
      } catch (error) {
        this.error = error.response?.data?.message || 'Не вдалося зареєструватися'
      }
    },

    async login(email, password) {
      try {
        const response = await login(email, password)

        // Якщо логін успішний, зберігаємо токен
        this.token = response.token
        this.user = response.email

        // Зберегти токен та userId у localStorage
        localStorage.setItem('token', response.token)
        localStorage.setItem('userId', response.userId)
      } catch (error) {
        this.error = error.response?.data?.message || 'Не вдалося увійти'
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
