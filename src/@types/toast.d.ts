export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default'
export interface UseToastOptions {
  autoClose?: number
  position?: ToastOptions['position']
  type?: ToastType
}
