import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import useSWR from 'swr'

const fetcher = async () => {
  const response = await fetch('api/hello')
  const data = await response.json()
  return data
}
export default function LiveAttendanceChart() {

  const { data, err } = useSWR('liv', fetcher)
  if (err) return "<>errr</>"
  if(!data) return 'loading'

  return <LineChart
    width={720}
    height={300}
    data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
  >
    {/* <Label value="Pages of my website" offset={0} position="top" /> */}
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
}
