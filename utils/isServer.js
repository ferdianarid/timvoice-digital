export const isServer = () => typeof window === "undefined";
export const currentPage = window.location.pathname