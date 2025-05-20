export type User = {
    id: string;
    language: string;
    currency: string;
    timezone: string;
    quota: {
        total: number;
        used: number;
        available: number;
        deposit: number;
        currency: string;
    }
}

export type ProfileUpdateRequest = {
    mobileNo: string;
    firstName: string;
    email?: string;
    currency: string;
    language: string;
    timezone: string;
}