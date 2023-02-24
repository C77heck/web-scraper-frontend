import { Spinner } from '../../../shared/shared-ui/spinner/spinner';
import { Chart } from './chart';

export interface DatasetsOptionProps {
    dataset: number[];
    loading: boolean;
}

export const SqmPriceChart = (props: DatasetsOptionProps) => {
    console.log(props.dataset);
    return <div className={'background-color--light-1'}>
        <Spinner isLoading={props.loading}/>
        <Chart
            title={'Square meter prices'}
            data={props.dataset}
            chartName={'Line'}
            colorIndex={1}
        />
    </div>;
};
