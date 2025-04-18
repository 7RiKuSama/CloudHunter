import { Flex } from "@chakra-ui/react"
import Container from "../common/Container"
import ForcastCards from "../features/ForcastCards"
import WeatherOverviewPanel from "../features/WeatherOverviewPanel"
import SearchInput from "../common/SearchInput"
import { ThemeProps } from "../../types/theme"


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
                <SearchInput />
                <Container>
                    <WeatherOverviewPanel height="850px"></WeatherOverviewPanel>
                </Container>
                <Container>
                    <ForcastCards/>
                </Container>
            </Flex>
        </Flex>
    </>
}


export default Content