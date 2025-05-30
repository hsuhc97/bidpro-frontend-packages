export type User = {
    id: string;
    status: string;
    name: string;
    email: string;
    currency: string;
    language: string;
    timezone: string;
    creditLimit: {
        creditLimit: number;
        usedCreditLimit: number;
        availableCreditLimit: number;
        deposit: number;
        depositCurrency: string;
    }
}

export type UserUpdateRequest = {
    language?: string;
    timezone?: string;
}

export type CustomerUpdateRequest = {
    name?: string;
    email?: string;
    currency?: string;
}