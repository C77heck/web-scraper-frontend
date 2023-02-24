import { Chart, GraphProps } from './chart';

export interface DatasetsOptionProps {
    dataset: number[];
    title?: string;
    colorIndex?: number;
    type?: GraphProps['chartName'];
}

export const ChartDisplay = (props: DatasetsOptionProps) => {
    return <div className={''}>
        <Chart
            colorIndex={props?.colorIndex || 0}
            title={props?.title || ''}
            data={props.dataset}
            labels={props.dataset.map(i => ``)}
            chartName={props?.type || 'Bar'}
        />
    </div>;
};
