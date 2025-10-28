'use client';
import React from 'react';
import { Pie, PieChart, Sector, SectorProps, Tooltip, Cell } from 'recharts';
import { TooltipIndex } from 'recharts/types/state/tooltipSlice';
import DataTable, { DataType } from '../common/DataTable';
import DropdownMenu from '../common/DropdownMenu';

type Coordinate = {
  x: number;
  y: number;
};

type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: any;
};

type PieSectorDataItem = React.SVGProps<SVGPathElement> & Partial<SectorProps> & PieSectorData;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const total = pieData.reduce((sum, item) => sum + item.value, 0);

const tableData: DataType[] = pieData.map((item, i) => ({
  key: i + 1,
  name: item.name,
  value: item.value,
  percent: ((item.value / total) * 100).toFixed(1) + '%',
  color: COLORS[i % COLORS.length],
}));

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}: PieSectorDataItem) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={(outerRadius ?? 0) + 6} outerRadius={(outerRadius ?? 0) + 10} fill={fill} />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Value: ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${((percent ?? 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function CustomActiveShapePieChart({
  isAnimationActive = true,
  defaultIndex = undefined,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}) {
  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm '>
        <div className="flex justify-between">
                <div className="flex flex-row gap-3 align-center justify-center">
                    <h1 className="text-lg font-semibold text-gray-900">Overview</h1>
                </div>

                <DropdownMenu
                    label="All"
                    menuItems={[
                        { key: '1', label: 'This Month' },
                        { key: '2', label: 'Last Month' },
                    ]}
                />
            </div>
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center">
        <PieChart
          style={{ width: '100%', maxWidth: '480px', aspectRatio: 1 }}
          margin={{ top: 50, right: 100, bottom: 0, left: 100 }}
        >
          <Pie
            activeShape={renderActiveShape}
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius="150%"
            outerRadius="230%"
            dataKey="value"
            isAnimationActive={isAnimationActive}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className='hidden md:block mt-10'>
        <DataTable data={tableData} />
      </div>
    </div>
    </div>
  );
}
