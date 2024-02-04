import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { UseToastOptions } from '@/@types/toast';

export const useToast = () => {
  return useCallback((message: string, options?: UseToastOptions) => {
    toast(message, {
      type: options?.type ?? 'default',
      autoClose: options?.autoClose ?? 3000,
      position: options?.position ?? 'top-right',
    });
  }, []);
};
