import { Flex, Text, HStack, DataList, Image } from "@chakra-ui/react"
import WeatherStatCard from "./WeatherStatCard"
import { FaWeightHanging } from "react-icons/fa6";

const ForcastCard = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
    return (
        <>
            <Text fontWeight={"bold"} textStyle={"xl"} ml={2} mt={2}>Forcast Weather</Text>
            <Flex
            h={{md: "fit-content", lg: "140px"}}
            p={2}
            gap={2}
            >
                <HStack display={{base: "none", md: "flex"}} w={"100%"}>
                    {days.map((day) => {
                        return (
                            <WeatherStatCard value={{icon: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png", temperature: "45"}} label={day} unit={"°C"} forcast={true}>
                                <FaWeightHanging></FaWeightHanging>
                            </WeatherStatCard>
                        )
                    })}
                </HStack>
                <HStack display={{base: "block", md: "none"}} w={"100%"} p={2}>
                    <DataList.Root orientation="horizontal" divideY="1px" size={"md"}>
                        {days.map((day) => (
                        <DataList.Item key={day} pt="4" display={"flex"}>
                            <DataList.ItemLabel>{day}</DataList.ItemLabel>
                            <DataList.ItemValue>45</DataList.ItemValue>

                            <DataList.ItemValue><Image src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" h={"30px"}/></DataList.ItemValue>
                        </DataList.Item>
                        ))}
                    </DataList.Root>
                </HStack>
            </Flex>
        </>
    )
}

export default ForcastCard