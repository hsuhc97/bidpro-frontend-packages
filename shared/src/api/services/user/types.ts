export type User = {
    id: string;
    status: string;
    language: string;
    currency: string;
    timezone: string;
    creditLimit: {
        creditLimit: number;
        usedLimit: number;
        availableLimit: number;
        deposit: number;
        depositCurrency: string;
    }
}

export type UserUpdateRequest = {
    email?: string;
    language?: string;
    timezone?: string;
}

export type CustomerUpdateRequest = {
    currency: string;
}