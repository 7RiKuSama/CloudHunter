import { Stat, Grid, GridItem, Flex, Image, VStack, Text } from "@chakra-ui/react"
import Charts from "../../utilityComponants/Charts"


const Home = ({ height }: { height: string }) => {
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
                    templateRows="120px 90px 90px 90px"
                    gap={2}
                    h={"100%"}
                >
                    <GridItem colSpan={2}>
                        <VStack mb={5} h={"100%"}>
                            <Text alignSelf={"start"} fontWeight={"bold"} textStyle={"xl"}>Today's Weather</Text>
                            <Stat.Root borderWidth="1px" size="md" borderColor="gray" borderRadius="5px" p={2} width={"100%"}>
                                <Stat.Label>City</Stat.Label>
                                <Stat.ValueText fontSize={{base: "14px", sm: "18px"}}>New York</Stat.ValueText>
                            </Stat.Root>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <Stat.Root h={"100%"} borderWidth="1px" borderColor="gray" borderRadius="5px" p={2}>
                            <Stat.Label>Condition</Stat.Label>
                            <Stat.ValueText alignItems="center" fontSize={{base: "11px", sm: "12px"}}>
                                <Image src="../../public/sun.png" height="25px" /> Sunny
                            </Stat.ValueText>
                        </Stat.Root>
                    </GridItem>
                    <GridItem>
                        <Stat.Root h={"100%"} borderWidth="1px" borderColor="gray" borderRadius="5px" p={2}>
                            <Stat.Label>Temperature</Stat.Label>
                                <Stat.ValueText fontSize={{base: "14px", sm: "20px"}}>
                                    22
                                    <Stat.ValueUnit>°C</Stat.ValueUnit>
                                </Stat.ValueText>
                        </Stat.Root>
                    </GridItem>
                    <GridItem>
                        <Stat.Root h={"100%"} borderWidth="1px" borderColor="gray" borderRadius="5px" p={2}>
                            <Stat.Label>Humidity</Stat.Label>
                                <Stat.ValueText fontSize={{base: "14px", sm: "18px"}}>
                                    75
                                    <Stat.ValueUnit>%</Stat.ValueUnit>
                                </Stat.ValueText>
                        </Stat.Root>
                    </GridItem>
                    <GridItem>
                        <Stat.Root h={"100%"} borderWidth="1px" borderColor="gray" borderRadius="5px" p={2}>
                            <Stat.Label>Wind</Stat.Label>
                                <Stat.ValueText fontSize={{base: "14px", sm: "18px"}}>
                                    13
                                    <Stat.ValueUnit>km/h</Stat.ValueUnit>
                                </Stat.ValueText>
                        </Stat.Root>
                    </GridItem>
                    <GridItem>
                        <Stat.Root h={"100%"} borderWidth="1px" borderColor="gray" borderRadius="5px" p={2}>
                            <Stat.Label>Wind</Stat.Label>
                                <Stat.ValueText fontSize={{base: "14px", sm: "18px"}}>
                                    13
                                    <Stat.ValueUnit>km/h</Stat.ValueUnit>
                                </Stat.ValueText>
                        </Stat.Root>
                    </GridItem>
                    <GridItem>
                        <Stat.Root h={"100%"} borderWidth="1px" borderColor="gray" borderRadius="5px" p={2}>
                            <Stat.Label>Wind</Stat.Label>
                                <Stat.ValueText fontSize={{base: "14px", sm: "18px"}}>
                                    13
                                    <Stat.ValueUnit>km/h</Stat.ValueUnit>
                                </Stat.ValueText>
                        </Stat.Root>
                    </GridItem>
                </Grid>
                <Charts />
                </Flex>
        </>
    )
}

export default Home