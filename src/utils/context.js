import { inject } from 'vue'

export const useVuePlayer = () => {
    return inject('vue-player')
}