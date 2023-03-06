import React, { useEffect } from 'react';
import { SearchableDropdown } from '../form/searchable.select';
import { useClient } from '../hooks/client.hook';
import { useForm } from '../hooks/form.hook';
import { useInput } from '../hooks/input.hook';
import { OptionProps } from '../shared-ui/abstract.dropdown';

export interface ValidatorInterface {
    hasError: boolean;
    errorMessage: string;
}

export interface LocationSelector {
    onChange: () => void;
}

export const LocationSelector = (props: any) => {
    const { get, loading, data, error } = useClient<{ locations: OptionProps[] }>();
    const { state, handleDataChange, focusChange } = useInput({ hasError: false, isInFocus: true, errorMessage: '' });
    const { inputHandler, inputState } = useForm({
        inputs: {
            location: {
                value: '',
                valid: true
            }
        },
        isFormValid: true
    });

    useEffect(() => {
        (async () => get({ url: '/location-options' }))();
    }, []);

    const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        handleDataChange({ hasError: false, errorMessage: '' });
    };

    const onClickChange = (isChosen: boolean, option: OptionProps) => {
        inputHandler({
            value: isChosen ? '' : option,
            valid: !state.hasError,
            inputName: props.name
        });
    };

    return <div>
        <SearchableDropdown
            currentValue={''}
            handleChange={handleChange}
            onChange={inputHandler}
            onClickHandler={onClickChange}
            value={{ value: '', title: '' }}
            name={'location'}
            options={data?.locations || []}
            validators={[]}
        />
    </div>;
};
