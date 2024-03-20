import { useState, useEffect } from "react";

function useDebounce (value, delay){
    const [deDebounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);
        return () => {
            clearTimeout(handler);
        }// eslint-disable-next-line
    }, [value]);
    return deDebounceValue;
}

export default useDebounce