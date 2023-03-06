import { useCallback, useReducer } from 'react';

const inputReducer = (state: any, action: any): any => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                hasError: action.hasError,
                errorMessage: action.errorMessage
            };
        case 'FOCUS_CHANGE':
            return {
                ...state,
                focus: action.value,
            };
        default:
            return state;
    }
};

export interface DataChangeParams {
    errorMessage: string;
    hasError: boolean;
}

export const useInput = (data: any) => {
    const [state, dispatch] = useReducer(inputReducer, data);

    const handleDataChange = useCallback(({ hasError, errorMessage }: DataChangeParams) => {
        dispatch({ hasError, errorMessage, type: 'CHANGE' });
    }, []);

    const focusChange = useCallback(({ value }: { value?: string | number }) => {
        dispatch({ value, type: 'FOCUS_CHANGE' });
    }, []);

    return { state, handleDataChange, focusChange };
};
