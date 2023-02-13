import { capitalize } from '../../../../shared/libs/helpers';
import './property-tabs.scss';

export interface FilterSelectorProps {
    title: string;
    value: number;
    onSelect: (direction: number) => void;
}

export const FilterSelector = ({ title, value, onSelect }: FilterSelectorProps) => {
    // todo need the icon
    const activeClass = value === -1 ? 'tab-selector--active' : '';

    return <div
        className={`tab-selector ${activeClass}`}
        onClick={() => onSelect(value * -1)}
    >
        <span>{capitalize(title)}</span>
    </div>;
};
