import { capitalize } from '../../../../shared/libs/helpers';
import { TabOptions } from './property-tabs';
import './property-tabs.scss';

export interface TabSelectorProps {
    title: TabOptions;
    activeTab: TabOptions;
    onSelect: (id: TabOptions) => void;
}

export const TabSelector = ({ title, activeTab, onSelect }: TabSelectorProps) => {
    const activeClass = activeTab === title ? 'tab-selector--active' : '';

    return <div
        className={`tab-selector ${activeClass}`}
        onClick={() => onSelect(title)}
    >
        <span>{capitalize(title)}</span>
    </div>;
};
