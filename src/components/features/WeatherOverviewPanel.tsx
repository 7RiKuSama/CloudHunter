import { Grid, GridItem, Flex, VStack, Text, Box } from "@chakra-ui/react"

import { useContext } from "react"
import MainContext from "../../Contexts/MainContext"
import WeatherStatCard from "../common/weatherCards/WeatherStatCard"
import { FaTemperatureEmpty } from "react-icons/fa6";
import { FaWind } from "react-icons/fa"
import { IoMdWater } from "react-icons/io";
import { TbFileDescription } from "react-icons/tb";
import { IoIosRainy } from "react-icons/io";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import getCountryFlag from "../../services/GetCountryFlag"
import { GiRadiations } from "react-icons/gi";
import { FaWeightHanging } from "react-icons/fa6";






const Home = ({ height }: { height: string }) => {

    const { weather, isLoading, theme } = useContext(MainContext)
    const {flag, isFlagLoading} = getCountryFlag(isLoading? weather.location.country : "")
    
    return (
        <>
            <Flex
                direction={{ base: "column-reverse", md: "column-reverse", lg: "row" }} // Stack vertically on small screens, horizontally on medium screens and above
                alignItems="start"
                height={{base: "fit-content", md: height, lg: "fit-content"}}
                p={2}
                gap={2}
                className="weather-card"
                >
                <Grid
                    w={{base: "100%", lg: "25%"}}
                    templateColumns={{base: "repeat(2, 1fr)", md: "repeat(6, 1fr)", lg: "repeat(2, 1fr)"}}
                    templateRows={{md: "repeat(3, 110px)", lg: "120px repeat(4, 90px)"}}
                    gap={2}
                >
                    <GridItem colSpan={{base: 2, md: 6, lg: 2}}>
                        <VStack mb={5} h={"100%"}>
                            <Text alignSelf={"start"} fontWeight={"bold"} textStyle={"xl"}>Today's Weather</Text>
                            <WeatherStatCard value={`${isLoading && weather.location.name}, ${isLoading && weather.location.country}`} label={"Location"} unit={null} forcast={false}>
                                <img src={isFlagLoading && isLoading? flag : ""} style={{height: "16px"}}/>
                            </WeatherStatCard>
                        </VStack>
                    </GridItem>
                    <GridItem colSpan={{md: 2, lg: 1}}>
                        <WeatherStatCard value={isLoading && weather.current.condition.text} label={"Condition"} unit={null} forcast={false}>
                            <TbFileDescription color={theme.secondColor}/>
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem colSpan={{md: 2, lg: 1}}>
                        <WeatherStatCard value={isLoading && weather.current.temp_c} label={"Temperature"} unit={"C"} forcast={false}>
                            <FaTemperatureEmpty color={theme.secondColor}/>
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.temp_c} label={"Humidity"} unit={"%"} forcast={false}>
                            <IoMdWater color={theme.secondColor} />
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.wind_kph} label={"Wind"} unit={`kph (${isLoading && weather.current.wind_dir})`} forcast={false}>
                            <FaWind color={theme.secondColor} />
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem colSpan={{md: 2, lg: 1}}>
                        <WeatherStatCard value={isLoading && weather.current.precip_mm} label={"Precipitation"} unit={"mm"} forcast={false}>
                            <IoIosRainy color={theme.secondColor} />
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.vis_km} label={"Visibility"} unit={"km"} forcast={false}>
                            <AiOutlineEyeInvisible color={theme.secondColor} />
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem colSpan={{md: 2, lg: 1}}>
                        <WeatherStatCard value={isLoading && weather.current.uv} label={"UV Index"} unit={""} forcast={false}>
                            <GiRadiations color={theme.secondColor} />
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.pressure_mb} label={"Pressure"} unit={"mb"} forcast={false}>
                            <FaWeightHanging color={theme.secondColor} />
                        </WeatherStatCard>
                    </GridItem>
                </Grid>
                <Box h={{base: "250px", md: "100%", lg: "513px"}} w={"100%"}><iframe width="100%" height="100%" src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=wind&product=ecmwf&level=surface&lat=35.717&lon=-0.549&message=true" style={{borderRadius: "5px"}}></iframe></Box>
                </Flex>
        </>
    )
}

export default Home