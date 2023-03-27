import { useEffect, useState } from 'react';
import { useDebounce } from '../../../../shared/hooks/debouncer.hook';

export const SearchInput = ({ onValueChange }: { onValueChange: (value: string) => void }) => {
    const [value, setValue] = useState('');
    const debounce = useDebounce<string>((value) => onValueChange(value));
    const handleOnChange = (event: any) => setValue(event?.target?.value || '');
    useEffect(() => debounce.trigger(value), [value]);

    return <input
        onChange={handleOnChange}
        value={value}
        className={'search-bar-input'}
        placeholder={'Type to search...'}
    />;
};
