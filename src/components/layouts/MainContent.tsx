import { Flex, Box, Heading, Link } from "@chakra-ui/react"
import Container from "../common/Container"
import ForcastCards from "../features/ForcastCards"
import WeatherOverviewPanel from "../features/WeatherOverviewPanel"
import { ThemeProps } from "../../types/theme"
import HourlyWeather from "../features/HourlyWeather"
import NewsSection from "../features/NewsSection"

const Content = ({ theme }: ThemeProps) => {
    
    return <>
        
        <Flex h="100%" w="90vw" paddingInline={15} paddingBlock={10} style={{
            color: theme.color,
            backgroundColor: theme.bg,
            justifyContent: "center",
            textAlign: "justify",
        }}>
            <Flex 
                h={"100%"} 
                w={"100%"}
                flexDirection={"column"}
                gap={2}
            >
                <Container>
                    <WeatherOverviewPanel height="850px"></WeatherOverviewPanel>
                </Container>
                <Heading>Weekly Weather</Heading>
                <Container>
                    <ForcastCards/>
                </Container>
                <Heading>Hourly Weather Graph</Heading>
                <Container>
                    <HourlyWeather/>
                </Container>
                <Box>
                    <Link><Heading>News Related to Weather Around the World</Heading></Link>
                    <Flex h={"100%"} w={"100%"} gap={2} flexDirection={{base:"column", lg:"row"}}>
                        <Box w={{base:"100%", lg:"65%"}} h={{lg: "900px"}} >
                            <NewsSection />
                        </Box>
                        <Box w={{base:"100%", lg:"35%"}} h={{lg: "900px"}}>
                            <NewsSection />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    </>
}


export default Content