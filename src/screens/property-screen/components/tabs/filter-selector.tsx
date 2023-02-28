import { capitalize } from '../../../../shared/libs/helpers';
import { ArrowDown, ArrowUp } from '../../../../shared/shared-ui/icons/icons';

export interface FilterSelectorProps {
    title: string;
    value?: number;
    onSelect: (direction: number | undefined) => void;
}

export const FilterSelector = ({ title, value, onSelect }: FilterSelectorProps) => {
    const iconClasses = 'color--grey position-center pt-3';
    const directionIcon = value === 1
        ? <ArrowDown className={iconClasses} width={24}/>
        : <ArrowUp className={iconClasses} width={24}/>;

    const handleOnSelect = () => {
        switch (value) {
            case 1:
                return onSelect(-1);
            case -1:
                return onSelect(undefined);
            default:
                return onSelect(1);
        }
    };

    return <div
        className={'tab-selector'}
        onClick={() => handleOnSelect()}
    >
        <span>{capitalize(title)}</span>
        {!value ? null : directionIcon}
    </div>;
};
