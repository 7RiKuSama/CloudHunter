import { Stat, Grid, GridItem, Flex, Image, VStack, Text } from "@chakra-ui/react"
import Charts from "../../utilityComponants/Charts"
import { useContext } from "react"
import WeatherContext from "../../Contexts/WeatherContext"
import WeatherStatCard from "../../utilityComponants/WeatherStatCard"
import { FaTemperatureEmpty } from "react-icons/fa6";
import { FaWind } from "react-icons/fa"
import { IoMdWater } from "react-icons/io";
import { TbFileDescription } from "react-icons/tb";
import { IoIosRainy } from "react-icons/io";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import getCountryFlag from "../../api/GetCountryFlag"
import { GiRadiations } from "react-icons/gi";
import { FaWeightHanging } from "react-icons/fa6";





const Home = ({ height }: { height: string }) => {

    const { weather, isLoading } = useContext(WeatherContext)
    const {flag, isFlagLoading} = getCountryFlag(isLoading? weather.location.country : "")
    
    return (
        <>
            <Flex
                direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on medium screens and above
                alignItems="start"
                height={{base: "fit-content", md: height}}
                gap={2}
                p={1}
                className="weather-card"
                >
                <Grid
                    w={{ base: "100%", md: "25%" }} // Full width on small screens, 35% width on medium screens and above
                    templateColumns="repeat(2, 1fr)"
                    templateRows="120px 90px 90px 90px 90px"
                    gap={2}
                    h={"100%"}
                >
                    <GridItem colSpan={2}>
                        <VStack mb={5} h={"100%"}>
                            <Text alignSelf={"start"} fontWeight={"bold"} textStyle={"xl"}>Today's Weather</Text>
                            <WeatherStatCard value={`${isLoading && weather.location.name}, ${isLoading && weather.location.country}`} label={"Location"} unit={null}>
                                <img src={isFlagLoading && isLoading? flag : ""} style={{height: "16px"}}/>
                            </WeatherStatCard>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.condition.text} label={"Condition"} unit={null}>
                            <TbFileDescription />
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.temp_c} label={"Temperature"} unit={"C"}>
                            <FaTemperatureEmpty/>
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.temp_c} label={"Humidity"} unit={"%"}>
                            <IoMdWater />
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.wind_kph} label={"Wind"} unit={`kph (${isLoading && weather.current.wind_dir})`}>
                            <FaWind />
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.precip_mm} label={"Precipitation"} unit={"mm"}>
                            <IoIosRainy />
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.vis_km} label={"Visibility"} unit={"km"}>
                            <AiOutlineEyeInvisible />
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.uv} label={"UV Index"} unit={""}>
                            <GiRadiations />
                        </WeatherStatCard>
                    </GridItem>
                    <GridItem>
                        <WeatherStatCard value={isLoading && weather.current.pressure_mb} label={"Pressure"} unit={"mb"}>
                            <FaWeightHanging />
                        </WeatherStatCard>
                    </GridItem>
                </Grid>
                <iframe width="95%" height="100%" style={{marginLeft: "30px", borderRadius: "5px"}} src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=wind&product=ecmwf&level=surface&lat=35.717&lon=-0.549&message=true"></iframe>
                </Flex>
        </>
    )
}

export default Home