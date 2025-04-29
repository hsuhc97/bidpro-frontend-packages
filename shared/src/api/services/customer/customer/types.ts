export type Customer = {
    id: string;
    status: number;
}

export type CustomerUpdateProfileRequest = {
    name: string;
    email?: string;
}
