import React, { useEffect } from 'react'

const withLogger = WrappedComponent => {
    const WithLoggerComponent = () => {
        useEffect(() => {
            console.log('Log message from higher order component');
        }, []);
        return (
            <>
            <WrappedComponent />
            </>
          )
    };
    return WithLoggerComponent;
}

export default withLogger;