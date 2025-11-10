import CommonPieChart from "../common/pieChart";

const SyllabusCard = () => {
    const chartData = [
        { name: 'Sales', value: 450 },
        { name: 'Marketing', value: 300 },
        { name: 'Support', value: 200 },
        { name: 'Development', value: 150 },
    ];
    const chartColors = ['#094E85', '#EF476F'];
    return (
        <div className="flex flex-row  justify-start items-center h-full gap-3">
            <div className="ml-5">
                <CommonPieChart
                    title="Department Distribution"
                    data={chartData}
                    colors={chartColors}
                    dropdownItems={[
                        { key: '1', label: 'This Quarter' },
                        { key: '2', label: 'Last Quarter' },
                    ]}
                    width={100}
                    height={100}
                    innerRadius="55%"
                    outerRadius="80%"
                />
            </div>
            <div>
                <h1 className="text-lg font-bold">Syllabus</h1>
                <p className="ml-5 text-sm text-gray-500">
                    Completed : 95% <br />
                    Pending : 5%
                </p>
            </div>
        </div>
    )
}

export default SyllabusCard
