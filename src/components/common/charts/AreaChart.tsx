import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import { AreaChartData } from "../../../types/componants";
  
  const AreaChartLayout = ({ dataChart }: { dataChart: AreaChartData[] }) => {
    return (
      <div style={{ width: "650px", height: "350px"}}> {/* Explicit height here */}
        <ResponsiveContainer width="100%" height="100%" >
          <AreaChart
            data={dataChart}
            style={{height:"100%", width:"100%"}}
            margin={{
              top: 40,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E90FF" stopOpacity={1} />
                <stop offset="95%" stopColor="#87CEEB" stopOpacity={0} />
              </linearGradient>
            </defs>
  
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#4d98fa"
              fill="url(#colorUv)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };

export default AreaChartLayout