import { capitalize } from '../../../../shared/libs/helpers';
import { ArrowDown, ArrowUp } from '../../../../shared/shared-ui/icons/icons';
import './property-tabs.scss';

export interface FilterSelectorProps {
    title: string;
    value: number;
    onSelect: (direction: number) => void;
}

export const FilterSelector = ({ title, value, onSelect }: FilterSelectorProps) => {
    const iconClasses = 'color--grey position-center pt-3';
    const directionIcon = value === -1
        ? <ArrowDown className={iconClasses} width={24}/>
        : <ArrowUp className={iconClasses} width={24}/>;

    return <div
        className={'tab-selector'}
        onClick={() => onSelect(value * -1)}
    >
        <span>{capitalize(title)}</span>
        {directionIcon}
    </div>;
};
