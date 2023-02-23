import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, DoughnutController, Filler, Legend, LinearScale, LineElement, PointElement, RadialLinearScale, Title, Tooltip } from 'chart.js';
import { clone } from 'chart.js/helpers';
import React from 'react';
import { Bar, Bubble, Doughnut, Line, Pie, Radar, Scatter } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement, DoughnutController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface DatasetsProp {
    label: string;
    data: number[];
    borderColor: string | string[];
    backgroundColor: string | string[];
    yAxisID: string;
    borderWidth?: number;
}

export const options: any = {
    animation: false,
    maintainAspectRatio: false,
    legend: { display: true },
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0,
        },
    },
    stacked: false,
    plugins: {
        datalabels: {
            formatter: (val: any, context: any) => `${val}%`,
        },
        tooltip: {
            callbacks: {
                label: (ttItem: any) => `${ttItem.formattedValue}%`
            }
        },
        title: {
            display: false,
            text: '',
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            ticks: {
                stepSize: 2,
                callback: (value: any, index: any, values: any) => {
                    return `${value}%`;
                },
            },
        },
    },
};

interface ChartStateProps {
    data: DatasetsProp;
}

export interface GraphProps {
    data: number[];
    data2?: number[];
    labels?: string[];
    label?: string;
    title?: string;
    colorIndex?: number;
    colorIndex2?: number;
    primaryOptionLabel?: string;
    secondaryOptionLabel?: string;
    chartName: 'Line' | 'Doughnut' | 'Pie' | 'Bar' | 'Radar' | 'Bubble' | 'Scatter';
    doNotDisplayLegend?: boolean;
    customBarColours?: { borderColor: string[], backgroundColor: string[] } | false;
    chartWrapper?: string;
}

export interface ColourInterface {
    borderColor: string;
    backgroundColor: string;
}

export const COLOURS: { baseColours: ColourInterface[] } = {
    baseColours: [
        { borderColor: '#2995F8', backgroundColor: '#2995F8' },
        { borderColor: '#d5d07c', backgroundColor: '#d5d07c' },
    ]
};

export class Chart extends React.Component<GraphProps, ChartStateProps> {
    public colours = COLOURS.baseColours;

    public state = {
        data: {
            label: 'Dataset 1',
            data: [1, 2, 3],
            borderColor: 'rgb(77,177,222)',
            backgroundColor: 'rgba(32,156,238,0.5)',
            yAxisID: 'y',
        }
    };

    public componentDidMount() {
        this.setChartData();
    }

    public componentDidUpdate(prevProps: Readonly<GraphProps>, prevState: Readonly<ChartStateProps>, snapshot?: any) {
        if (prevProps.data !== this.props.data) {
            this.setChartData();
        }
    }

    public setChartData() {
        const colours = this.props?.customBarColours ?? this.props.customBarColours;

        this.setState({
            data: {
                ...this.state.data,
                ...colours,
                data: this.props.data,
                label: this.props?.primaryOptionLabel || '',
                borderWidth: 1,
            }
        });
    }

    public render() {
        const labels = (this.props?.labels || []);
        const secondaryColour = this.colours[this.props?.colorIndex2 || 0];

        const secondOption = { ...clone(this.state.data), ...secondaryColour };
        secondOption.data = this.props.data2 || [];
        secondOption.label = this.props?.secondaryOptionLabel || '';
        const chartDatasets = this.props.data2 ? [this.state.data, secondOption] : [this.state.data];

        const baseColour = this.colours[this.props?.colorIndex || 0];

        const blockOptions = { ...options, ...baseColour };

        if (this.props.doNotDisplayLegend) {
            blockOptions.plugins.legend = { display: false };
            blockOptions.plugins = { ...blockOptions.plugins, legend: { display: false } };
        }

        if (this.props.title) {
            blockOptions.plugins = {
                ...blockOptions.plugins, title: {
                    display: true,
                    align: 'center',
                    text: this.props.title
                }
            };
        }

        const chartWrapper: string = this.props?.chartWrapper || 'min-height-300';

        switch (this.props.chartName) {
            case 'Line':
                return <Line data={{ datasets: chartDatasets, labels: this.props.labels }} options={blockOptions}/>;
            case 'Doughnut':
                return <Doughnut data={{ datasets: chartDatasets, labels: this.props.labels }} options={blockOptions}/>;
            case 'Pie':
                return <Pie data={{ datasets: chartDatasets, labels: this.props.labels }} options={blockOptions}/>;
            case 'Bubble':
                return <Bubble data={{ datasets: chartDatasets, labels: this.props.labels }}/>;
            case 'Scatter':
                return <Scatter data={{ datasets: chartDatasets, labels: this.props.labels }}/>;
            case 'Bar':
                return <div className={chartWrapper}><Bar data={{ labels, datasets: chartDatasets }} options={blockOptions}/></div>;
            case 'Radar':
                return <div className={chartWrapper}><Radar data={{ labels, datasets: chartDatasets }} options={{ plugins: { legend: { position: 'bottom' } } }}/></div>;
            default:
                return <Pie data={{ datasets: chartDatasets, labels: this.props.labels }} options={blockOptions}/>;
        }
    }
}
