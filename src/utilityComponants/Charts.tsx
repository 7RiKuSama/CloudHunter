import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Tabs, Flex } from "@chakra-ui/react"
import { TiChartArea } from "react-icons/ti";
import { FaMapMarked } from "react-icons/fa";

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
  
const selectedTab = {
    maxHeight: "30px",
    bg: "rgb(63, 64, 78)",
    color: "white",
  }

const Charts = () => {
    
    
    return (
        <> 
            <Flex 
                style={{
                    height: "100%",
                    width: "100%",
                    flexDirection: "column", 
                }}

                display={{base: "none", md: "flex"}}
            >
                <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                        width={500}
                        height={300}
                        data={data}
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
                </ResponsiveContainer>
                <Tabs.Root
                variant="enclosed"
                w="400px"
                ml={55}
                fitted
                defaultValue="tab-1"
                alignSelf="center"
                >
                <Tabs.List
                    p={1} 
                    bg="rgba(58, 58, 58, 0.18)"
                    border="1px solid gray"
                    maxHeight="40px" 
                >
                    <Tabs.Trigger
                    value="tab-1"
                    fontSize="sm"
                    maxHeight="30px"
                    p={0}
                    _selected={selectedTab}
                    >
                    <FaMapMarked />
                    Weather Map
                    </Tabs.Trigger>
                    <Tabs.Trigger
                    value="tab-2"
                    fontSize="sm"
                    maxHeight="30px"
                    _selected={selectedTab}
                    >
                    <TiChartArea />
                    Forcast
                    </Tabs.Trigger>
                    <Tabs.Trigger
                    value="tab-3"
                    fontSize="sm"
                    maxHeight="30px"
                    _selected={selectedTab}
                    >
                    Tab 3
                    </Tabs.Trigger>
                </Tabs.List>
                </Tabs.Root>
            </Flex>
        </>
    )
}

export default Charts