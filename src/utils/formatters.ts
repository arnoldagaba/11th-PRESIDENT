export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-UG", {
        style: "currency",
        currency: "UGX",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};

export const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("en-UG", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(date));
};

export const validatePhoneNumber = (phone: string) => {
    // Basic validation for Uganda phone numbers
    const phoneRegex = /^(256|0)(7[0-8]|39)\d{7}$/;
    return phoneRegex.test(phone);
};

export const validateEmail = (email: string) => {
    // Basic validation for email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
