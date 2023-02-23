import { Spinner } from '../../../shared/shared-ui/spinner/spinner';
import { Chart } from './chart';

export interface DatasetsOptionProps {
    dataset: number[];
    loading: boolean;
}

export const SqmPriceChart = (props: DatasetsOptionProps) => {

    return <div>
        <Spinner isLoading={props.loading}/>
        <Chart data={props.dataset} chartName={'Bar'}/>
    </div>;
};
