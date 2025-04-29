export interface Donation {
    amount: number;
    paymentMethod: PAYMENT_METHODS;
    donorInfo: DonorInfo;
    timestamp: Date;
}

export type PAYMENT_METHODS = "FLUTTERWAVE" | "MTN" | "AIRTEL";

export interface DonorInfo {
    name: string;
    email: string;
    phone: string;
}

export type DonationTier = {
    amount: number;
    label: string;
};

export interface FlutterWavePaymentData {}

export interface MTNPaymentData {}

export interface AirtelPaymentData {}


export const CURRENCY = {
    code: "UGX",
    symbol: "UGX",
};

export const DONATION_TIERS = [
    { amount: 10000, label: "Basic" },
    { amount: 50000, label: "Silver" },
    { amount: 100000, label: "Gold" },
    { amount: 500000, label: "Platinum" },
];

export const API_ENDPOINTS = {
    FLUTTERWAVE: import.meta.env.VITE_FLUTTERWAVE_API_URL,
    MTN: import.meta.env.VITE_MTN_API_URL,
    AIRTEL: import.meta.env.VITE_AIRTEL_API_URL,
};
