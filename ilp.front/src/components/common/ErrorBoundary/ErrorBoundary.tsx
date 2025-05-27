import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorProps {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorProps, State> {
    constructor(props: ErrorProps){
        super(props);
        this.state = { hasError: false };
    }

    static getDeriveredStateFromError(_: Error): State{
        return {hasError: true};
    }

    componenrDidCatch(error: Error, errorInfo: ErrorInfo){
        console.log("Uncaught error:", error, errorInfo);
    }

    render(): ReactNode {
        if(this.state.hasError)
            return <h1>Something went wrong.</h1>

        return this.props.children;
    }
}