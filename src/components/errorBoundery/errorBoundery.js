import { Component } from "react";
import ErrorMessage from "../errorMessage/errorMessage";

class ErrorBoundery extends Component {
    state = {
        error: false
    }

    // static getDerivedStateFromError(error) {
    //     return {error: true};
    // }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return this.props.children;
    }
}

export default ErrorBoundery;