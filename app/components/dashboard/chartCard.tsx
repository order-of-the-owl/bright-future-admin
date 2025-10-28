import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import DropdownMenu from '../common/DropdownMenu';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const ChartCard = () => {
    return (
        <div className='bg-white p-6 rounded-2xl shadow-sm flex flex-col'>
            <div className="flex justify-between">
                <div className="flex flex-row gap-3 align-center justify-center">
                    <h1 className="text-lg font-semibold text-gray-900">Monthly Revenue</h1>
                    <p className="text-green-500 text-sm mt-1">$24,895.00</p>
                </div>

                <DropdownMenu
                    label="All"
                    menuItems={[
                        { key: '1', label: 'This Month' },
                        { key: '2', label: 'Last Month' },
                    ]}
                />
            </div>

            <AreaChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};


export default ChartCard
