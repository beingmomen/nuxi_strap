import * as vt from 'vue-toastification'
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vt.default)

  return {
    provide: {
      toast: vt.useToast()
    }
  }
});