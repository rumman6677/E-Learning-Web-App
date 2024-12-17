import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
    let error = useRouteError();
    console.error(error);

    return (
        <div className="text-center text-white bg-red-600 p-6">
            <h1 className="text-4xl">Oops!</h1>
            <p className="text-lg">Sorry, an unexpected error has occurred.</p>
            <p className="text-md">{error.statusText || error.message}</p>
        </div>
    );
}

export default ErrorBoundary;
