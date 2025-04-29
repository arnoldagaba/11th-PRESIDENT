import { toast } from "react-toastify";

export const showToast = {
    success: (message: string) => {
        toast.success(message, {
            className: "dark:bg-dark-surface dark:text-white",
        });
    },
    error: (message: string) => {
        toast.error(message, {
            className: "dark:bg-dark-surface dark:text-white",
        });
    },
    info: (message: string) => {
        toast.info(message, {
            className: "dark:bg-dark-surface dark:text-white",
        });
    },
    warning: (message: string) => {
        toast.warning(message, {
            className: "dark:bg-dark-surface dark:text-white",
        });
    },
};
