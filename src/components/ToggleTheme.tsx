import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface ThemeToggleProps {
    isScrolled: boolean;
}

const ThemeToggle = ({ isScrolled }: ThemeToggleProps) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-lg transition-colors ${
                isScrolled
                    ? "text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-surface"
                    : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-500" />
            ) : (
                <Moon className="h-6 w-6" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
