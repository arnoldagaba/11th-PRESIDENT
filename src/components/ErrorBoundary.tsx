import { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("Error caught by boundary:", error, errorInfo);
    }

    render(): ReactNode {
        const { hasError } = this.state;

        if (hasError) {
            return (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                    <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
                        <div className="text-4xl mb-4">😕</div>
                        <h1 className="text-2xl font-bold text-rotaract-navy mb-4">
                            Oops! Something went wrong
                        </h1>
                        <p className="text-gray-600 mb-6">
                            We're sorry for the inconvenience. Please try
                            refreshing the page or contact support if the
                            problem persists.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-rotaract-blue text-white px-6 py-2 rounded-lg hover:bg-rotaract-navy transition-colors"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
