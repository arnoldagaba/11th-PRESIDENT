import { useState } from "react";
import { useDonation } from "./useDonation";
import {
    initializeFlutterwave,
    initializeMTNPayment,
    initializeAirtelPayment,
} from "@/services/paymentServices";
import { DonorInfo, PAYMENT_METHODS } from "@/types";

export const usePayment = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);
    const { addDonation } = useDonation();

    const processPayment = async (
        amount: number,
        paymentMethod: PAYMENT_METHODS,
        donorInfo: DonorInfo
    ) => {
        setIsProcessing(true);
        setError(null);

        try {
            let paymentResponse;

            switch (paymentMethod) {
                case "FLUTTERWAVE":
                    paymentResponse = await initializeFlutterwave({
                        amount,
                        email: donorInfo.email,
                        name: donorInfo.name,
                    });
                    break;

                case "MTN":
                    paymentResponse = await initializeMTNPayment({
                        amount,
                        phone: donorInfo.phone,
                    });
                    break;

                case "AIRTEL":
                    paymentResponse = await initializeAirtelPayment({
                        amount,
                        phone: donorInfo.phone,
                    });
                    break;

                default:
                    throw new Error("Invalid payment method");
            }

            if (paymentResponse.success) {
                await addDonation(amount, paymentMethod, donorInfo);
                return paymentResponse;
            } else {
                throw new Error(paymentResponse.message);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.message);
            throw err;
        } finally {
            setIsProcessing(false);
        }
    };

    return {
        processPayment,
        isProcessing,
        error,
    };
};
