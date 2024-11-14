import { defineStore } from 'pinia'
import { getAllRecipe, createRecipe } from '@/api/recipe'

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    allRecipe: [],
  }),

  actions: {

    async createRecipe({ ...args }) {
      try {
        await createRecipe(args)
      } catch (error) {
        this.error = error.response?.data?.message || 'Не вдалося створити рецепт'
      }
    },

    async getAllRecipe() {
      try {
        const response = await getAllRecipe()

        this.allRecipe = response.recipes

      } catch (error) {
        this.error = error.response?.data?.message || 'Не вдалося загрузити рецепти'
      }
    },


  },
})
