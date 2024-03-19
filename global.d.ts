export{}

declare global {
    interface Window {
        ipcRenderer: any;
    }
}
declare module '@tanstack/react-router' {
    interface Register {
      router: typeof router
    }
  }
  