import '../App.css';
import { useState, useEffect } from 'react';
import ChartItem from '../components/ChartItem';

const ChartList = () => {

    const [chartList, setChartList] = useState([]);

    useEffect( () => {
        getChartList();
    }, []);

    const getChartList = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(ChartList => setChartList(ChartList.feed.entry))
    };

    const generateChartList = chartList.map((item, i) => {
        return <ChartItem item={item} index={i}/>
    })

    return (
        <table>
            <tr>
                <th>Chart Position</th>
                <th>Song Title</th>
                <th>Artist(s) name</th>
            </tr>
            {generateChartList}
        </table>
    );
}

export default ChartList;