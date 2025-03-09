import { Stat, Grid, GridItem, Flex, Image, HStack, Text } from "@chakra-ui/react"

const Home = ({ height }: { height: string }) => {
    return (
        <>
            <Flex
                direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on medium screens and above
                alignItems="start"
                height={height}
                gap={6}
                p={1}
                className="weather-card"
                >
                <Grid
                    w={{ base: "100%", md: "35%" }} // Full width on small screens, 35% width on medium screens and above
                    templateColumns="repeat(2, 1fr)"
                    templateRows="1fr 1fr 1fr"
                    gap={2}
                >
                    <GridItem colSpan={2}>
                    <HStack>
                        <Stat.Root borderWidth="1px" borderColor="gray" borderRadius="5px" p={2}>
                            <Stat.Label>City</Stat.Label>
                            <Stat.ValueText>New York</Stat.ValueText>
                        </Stat.Root>
                    </HStack>
                    </GridItem>
                    <GridItem>
                        <Stat.Root borderWidth="1px" borderColor="gray" borderRadius="5px" p={2}>
                            <Stat.Label>Condition</Stat.Label>
                            <Stat.ValueText alignItems="center">
                                <Image src="../../public/sun.png" height="30px" /> Sunny
                            </Stat.ValueText>
                        </Stat.Root>
                    </GridItem>
                    <GridItem>
                        <Stat.Root borderWidth="1px" borderColor="gray" borderRadius="5px" p={2}>
                            <Stat.Label>Temperature</Stat.Label>
                                <Stat.ValueText>
                                    22
                                    <Stat.ValueUnit>°C</Stat.ValueUnit>
                                </Stat.ValueText>
                        </Stat.Root>
                    </GridItem>
                    <GridItem>
                        <Stat.Root borderWidth="1px" borderColor="gray" borderRadius="5px" p={2}>
                            <Stat.Label>Humidity</Stat.Label>
                                <Stat.ValueText>
                                    75
                                    <Stat.ValueUnit>%</Stat.ValueUnit>
                                </Stat.ValueText>
                        </Stat.Root>
                    </GridItem>
                    <GridItem>
                        <Stat.Root borderWidth="1px" borderColor="gray" borderRadius="5px" p={2}>
                            <Stat.Label>Wind</Stat.Label>
                                <Stat.ValueText>
                                    13
                                    <Stat.ValueUnit>km/h</Stat.ValueUnit>
                                </Stat.ValueText>
                        </Stat.Root>
                    </GridItem>
                </Grid>
                    <Text flex={{ base: "1", md: "1" }}> {/* Adjust flex behavior for responsiveness */}
                        hello world
                    </Text>
                </Flex>
        </>
    )
}

export default Home