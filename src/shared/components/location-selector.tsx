import React, { useEffect } from 'react';
import { SearchableDropdown } from '../form/searchable.select';
import { useClient } from '../hooks/client.hook';
import { useForm } from '../hooks/form.hook';
import { useInput } from '../hooks/input.hook';
import { OptionProps } from '../shared-ui/abstract.dropdown';

export interface LocationSelectorProps {
    onSelect: (location: string) => void;
}

export const LocationSelector = ({ onSelect }: LocationSelectorProps) => {
    const { get, data } = useClient<{ locations: OptionProps[] }>();
    const { state, handleDataChange } = useInput({ hasError: false, isInFocus: true, errorMessage: '' });
    const { inputHandler, inputState: { inputs } } = useForm({
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

    useEffect(() => onSelect(inputs.location?.value?.value || ''), [inputs.location.value]);

    const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        handleDataChange({ hasError: false, errorMessage: '' });
    };

    const onClickChange = (isChosen: boolean, option: OptionProps) => {
        inputHandler({
            value: isChosen ? '' : option,
            valid: !state.hasError,
            inputName: 'location'
        });
    };

    return <div className={'col-md-40 col-100'}>
        <div className={'w-px-200 position-relative'}>
            <SearchableDropdown
                disabledSearch={true}
                inputClasses={'mb-30'}
                currentValue={''}
                handleChange={handleChange}
                onChange={inputHandler}
                onClickHandler={onClickChange}
                value={inputs.location.value}
                name={'location'}
                options={data?.locations || []}
                validators={[]}
            />
        </div>
    </div>;
};
