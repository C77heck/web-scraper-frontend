import React from 'react';
import { capitalize } from '../libs/helpers';
import './property-tabs.scss';

export interface TabSelectorProps {
    title: any;
    activeTab: any;
    onSelect: (id: any) => void;
}

export const TabSelector: React.FC<TabSelectorProps> = ({ title, activeTab, onSelect }) => {
    const activeClass = activeTab === title ? 'tab-selector--active' : '';

    return <div
        className={`tab-selector ${activeClass}`}
        onClick={() => onSelect(title)}
    >
        <span className={'fs-14'}>{capitalize(title)}</span>
    </div>;
};
