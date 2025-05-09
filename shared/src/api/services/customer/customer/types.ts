export type Customer = {
    id: string;
    spaceId: string;
    status: number;
    preferences: Record<string, string>;
    bidCredit: {
        totalLimit: number;
        availableLimit: number;
    }
}

export type CustomerUpdateProfileRequest = {
    name: string;
    email?: string;
}

export type CustomerUpdatePreferenceRequest = {
    preferenceKey: string;
    preferenceValue: string;
}