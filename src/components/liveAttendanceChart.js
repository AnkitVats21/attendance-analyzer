import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const data = [
    {
      name: 'Page A',
      class: 4000,
      global: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      class: 3000,
      global: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      class: 2000,
      global: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      class: 2780,
      global: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      class: 1890,
      global: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      class: 2390,
      global: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      class: 3490,
      global: 4300,
      amt: 2100,
    },
  ];

export default function Example() {
    return <LineChart
      width={720}
      height={300}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
        <Label value="Pages of my website" offset={0} position="top" />
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
        <Legend />
      <Line type="monotone" dataKey="global" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="class" stroke="#82ca9d" />
    </LineChart>
}

