import { Stat, Icon, HStack, Box, Text } from "@chakra-ui/react";
import React from "react";

interface WeatherStatCardProps {
    label: string|null
    value: string|number|{icon: string, temperature: string}|null
    unit:  string|null
    forcast: boolean
    children: React.ReactNode|null
}


const WeatherStatCard: React.FC<WeatherStatCardProps> = ({ label, value, unit, forcast, children }: WeatherStatCardProps) => {
    return (
    <>
        <Stat.Root h={"100%"} borderWidth="1px" borderColor="gray" borderRadius="5px" p={2} width={"100%"} display="flex" gap={forcast ? 5 : undefined}>
            {!forcast && 
                <HStack style={{display: "flex", justifyContent: "space-between", alignItems: "space-betweeen"}}>
                    <Stat.Label>{label}</Stat.Label>
                    <Icon color="fg.muted" style={{fontSize:"15px"}}>
                        {children}
                    </Icon>
                </HStack>
            }
            {forcast && 
                <HStack style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Stat.Label>{label}</Stat.Label>
                    {value && typeof value === 'object' && value.icon && (
                        <img src={value.icon} style={{height: "30px"}} />
                    )}
                </HStack>
            }
            <Stat.ValueText 
                fontSize={{base: "14px", sm: "25px"}}
                style={forcast? {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "ceneter",
                    alignSelf: "center",
                }: {

                }}
            >
                {typeof value !== 'object' && (typeof value === 'string' || typeof value === 'number') ? (
                    <>
                        {value} <Stat.ValueUnit>{unit}</Stat.ValueUnit>
                    </>
                ) : null}
                
                {
                    forcast && typeof value === 'object' && value !== null ? 
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <Box display={"flex"} flexDirection={"row"}>
                                <Text fontSize={{lg: "50px"}}>{value.temperature}</Text>
                                <Stat.ValueUnit>{unit}</Stat.ValueUnit>
                            </Box>
                        </Box>
                    : null
                }
            </Stat.ValueText>
        </Stat.Root>
    </>
    )
}

export default WeatherStatCard





