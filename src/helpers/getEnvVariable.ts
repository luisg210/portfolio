
export const getEnvVariable = () => {
    const URL = import.meta.env.VITE_BACKEND_URL;

    return URL;
} 