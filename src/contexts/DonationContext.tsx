import { createContext, useState, ReactNode } from "react";
import { Donation, DonorInfo, PAYMENT_METHODS } from "@/types";

interface DonationContextProps {
    totalDonations: number;
    recentDonations: Donation[];
    addDonation: (
        amount: number,
        paymentMethod: PAYMENT_METHODS,
        donorInfo: DonorInfo
    ) => void;
    isLoading: boolean;
}

const DonationContext = createContext<DonationContextProps | undefined>(
    undefined
);

interface DonationProviderProps {
    children: ReactNode;
}

const DonationProvider = ({ children }: DonationProviderProps) => {
    const [totalDonations, setTotalDonations] = useState(0);
    const [recentDonations, setRecentDonations] = useState<Donation[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const addDonation = async (
        amount: number,
        paymentMethod: PAYMENT_METHODS,
        donorInfo: DonorInfo
    ) => {
        setIsLoading(true);
        try {
            // TODO: Implement API call to save donation
            setTotalDonations((prev) => prev + amount);
            setRecentDonations((prev) => [
                ...prev,
                { amount, paymentMethod, donorInfo, timestamp: new Date() },
            ]);
        } catch (error) {
            console.error("Failed to process donation:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <DonationContext.Provider
            value={{
                totalDonations,
                recentDonations,
                addDonation,
                isLoading,
            }}
        >
            {children}
        </DonationContext.Provider>
    );
};

export { DonationContext, DonationProvider };
