import { Flex, HStack, DataList, Image } from "@chakra-ui/react"
import WeatherStatCard from "../common/weatherCards/WeatherStatCard";
import MainContext from "../../Contexts/MainContext";
import { useContext } from "react";


const ForcastCard = () => {
    const { weather, isLoading, unit } = useContext(MainContext);

    const forecastDays = weather?.forecast?.forecastday;

    return (
        <>
            <Flex
                h={{ md: "170px", lg: "230px" }}
                p={2}
                gap={2}
            >
                {/* Desktop */}
                <HStack display={{ base: "none", md: "flex" }} w={"100%"}>
                    {isLoading && forecastDays?.map((day: any) => (
                        <WeatherStatCard
                            key={day.date}
                            value={{
                                icon: day.day.condition.icon,
                                temperature: unit === "C"
                                    ? day.day.avgtemp_c.toString().split(".")[0]
                                    : day.day.avgtemp_f.toString().split(".")[0],
                                nightTemp: day.day.mintemp_c.toString().split(".")[0],
                                condition: day.day.condition.text
                            }}
                            label={`${day.date.substring(5).slice(3, 5)}/${day.date.substring(5).slice(0, 2)}`}
                            unit={`°${unit}`}
                            forecast={true}
                        >
                            <></>
                        </WeatherStatCard>
                    ))}
                </HStack>

                {/* Mobile */}
                <HStack display={{ base: "flex", md: "none" }} w={"100%"} p={2}>
                    <DataList.Root orientation="horizontal" divideY="1px" size={"md"} display={"flex"} justifyContent={"space-between"} w={"100%"}>
                        {isLoading && forecastDays?.map((day: any) => (
                            <DataList.Item key={day.date}>
                                <DataList.ItemLabel>{day.date}</DataList.ItemLabel>
                                <DataList.ItemValue>{day.day.avgtemp_c}</DataList.ItemValue>
                                <DataList.ItemValue>
                                    <Image
                                        src={day.day.condition.icon}
                                        h={"30px"}
                                    />
                                </DataList.ItemValue>
                            </DataList.Item>
                        ))}
                    </DataList.Root>
                </HStack>
            </Flex>
        </>
    );
};

export default ForcastCard;
