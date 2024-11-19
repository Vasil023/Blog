import { defineStore } from 'pinia'
import { getAllRecipe, createRecipe, checkItem } from '@/api/recipe'

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    allRecipe: [],
    isLoading: false,
  }),

  actions: {
    async createRecipe({ ...args }) {
      try {
        await createRecipe(args)
      } catch (error) {
        this.error = error.response?.data?.message || 'Не вдалося створити рецепт'
      }
    },

    async checkItem(id, isChecked) {
      try {
        const response = await checkItem(id, isChecked)

        this.allRecipe.forEach((recipe) => {
          if (recipe._id === id) {
            recipe.isChecked = response.recipe.isChecked
          }
        })

      } catch (error) {
        this.error = error.response?.data?.message || 'Не вдалося створити рецепт'
      }
    },

    async getAllRecipe() {
      this.isLoading = true
      try {
        const response = await getAllRecipe()

        this.allRecipe = response.recipes || []

        this.isLoading = false

        this.isLoading = false

      } catch (error) {
        this.error = error.response?.data?.message || 'Не вдалося загрузити рецепти'
        this.isLoading = false
      }
    },
  },

  getters: {
    getCheckedRecipe: (state) => {
      return state.allRecipe.filter((recipe) => recipe.isChecked)
    }
  },
})
