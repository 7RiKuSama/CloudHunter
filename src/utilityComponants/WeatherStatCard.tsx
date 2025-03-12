import { Stat, Icon, HStack } from "@chakra-ui/react";
import React from "react";

interface WeatherStatCardProps {
    label: string|null
    value: string|null
    unit:  string|null
    children: React.ReactNode
}


const WeatherStatCard: React.FC<WeatherStatCardProps> = ({ label, value, unit, children }: WeatherStatCardProps) => {
    return (
    <>
        <Stat.Root h={"100%"} borderWidth="1px" borderColor="gray" borderRadius="5px" p={2} width={"100%"}>
            <HStack style={{display: "flex", justifyContent: "space-between", alignItems: "space-betweeen"}}>
                <Stat.Label>{label}</Stat.Label>
                <Icon color="fg.muted" style={{fontSize:"15px"}}>
                    {children}
                </Icon>
            </HStack>
            <Stat.ValueText alignItems="center" fontSize={{base: "14px", sm: "18px"}}>
                {value}
                <Stat.ValueUnit>{unit}</Stat.ValueUnit>
            </Stat.ValueText>
        </Stat.Root>
    </>
    )
}

export default WeatherStatCard





