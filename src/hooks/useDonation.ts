import { useContext } from "react";
import { DonationContext } from "@/contexts/DonationContext";

export const useDonation = () => {
    const context = useContext(DonationContext);
    if (!context) {
        throw new Error("useDonation must be used within a DonationProvider");
    }
    return context;
};
