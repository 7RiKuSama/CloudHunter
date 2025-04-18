import { ResponsiveContainer } from "recharts"
import { Tabs, Flex } from "@chakra-ui/react"
import { TiChartArea } from "react-icons/ti";
import { FaMapMarked } from "react-icons/fa";

const selectedTab = {
    maxHeight: "30px",
    bg: "rgb(63, 64, 78)",
    color: "white",
  }

const Chart = () => {
    return (
        <Flex 
            style={{
                height: "100%",
                width: "100%",
                flexDirection: "column", 
            }}

            display={{base: "none", md: "flex"}}
        >
            <ResponsiveContainer width="100%" height="100%">
                    <></>
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
    )
}

export default Chart