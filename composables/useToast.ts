type ToastType = 'success' | 'error';


export const useToast = (message: string, type: ToastType = 'success') => {
  const { $toast } = useNuxtApp();
  $toast[type](message, {
    timeout: 1000,
  });
  return
}
