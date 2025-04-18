import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts" 
import { AreaChartData } from "../../../types/componants"


const AreaChartLayout = ({dataChart} : { dataChart: AreaChartData[] }) => {
    return (
        <>
            <AreaChart
                width={500}
                height={300}
                data={dataChart}
                margin={{
                    top: 40,
                    right: 5,
                    left: 0,
                    bottom: 20,
                }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="url(#colorUv)" fillOpacity={1} />
            </AreaChart>
        </>
    )
}

export default AreaChartLayout