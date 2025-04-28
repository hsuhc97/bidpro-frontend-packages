import React, { createContext, useContext, useState } from 'react';
import { AxiosInstance } from 'axios';
import { ApiClientOptions } from '../types';
import createApiClient from '../client';

type ApiContextType = {
    apiClient?: AxiosInstance;
    updateToken: (newToken?: string) => void;
};

const ApiContext = createContext<ApiContextType>({
    apiClient: undefined,
    updateToken: () => {}
});

export function ApiProvider({ children, options }: { children: React.ReactNode, options: ApiClientOptions }) {
    const [token, setToken] = useState(options.token);
    const apiClient = createApiClient({ ...options, token });

    const updateToken = (newToken?: string) => {
        setToken(newToken);
    };

    return (
        <ApiContext.Provider value={{ apiClient, updateToken }}>
            {children}
        </ApiContext.Provider>
    );
}

export function useApi() {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
}

