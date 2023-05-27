type ToastType = 'success' | 'error';


export const useToast = (message: string, type: ToastType = 'success') => {
  console.warn('message', message);
  const { $toast } = useNuxtApp();
  $toast[type](message, {
    timeout: 1000,
  });
  return
}
