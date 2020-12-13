import { useCallback } from 'react'

export const useError = () => {
  return useCallback( title => {
    if (window.M && title) {
        window.M.toast({ html: title })
    }
  }, [])
}