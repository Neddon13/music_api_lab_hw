import '../App.css';

const ChartItem = ( { item, index } ) => {
    return (
        <tr>
            <td className="chart-position">{index + 1}</td>
            <td className="track-name">{item['im:name'].label}</td>
            <td className="artist-name">{item['im:artist'].label}</td>
        </tr>
    )
}

export default ChartItem;