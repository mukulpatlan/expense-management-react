import './Chart.css'
import ChartBar from './ChartBar';

const Chart = props => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);
    return <div className="chart">
        {props.dataPoints.map(dataPoints =>
            <ChartBar value={dataPoints.value}
                maxValue={totalMaximum}
                label={dataPoints.label}
                key={dataPoints.label}
            />
        )}
    </div>
}

export default Chart;