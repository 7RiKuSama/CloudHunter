import { Flex } from "@chakra-ui/react"
import Container from "./utilityComponants/Container"
import ForcastCards from "./utilityComponants/ForcastCards"
import Home from "./pages/home/Home"

interface DarkModeProps {
    darkMode: {
        bg: string;
        color: string;
        boxColor: string;
        boxBg: string;
        isEnabled: boolean
    }
}


const Content = ({ darkMode }: DarkModeProps) => {
    
    
    return <>
        
        <Flex h="100%" w="90vw" paddingInline={15} paddingBlock={10} style={{
            color: darkMode.color,
            backgroundColor: darkMode.bg,
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
                    <Home height="850px"></Home>
                </Container>
                <Container>
                    <ForcastCards/>
                </Container>
            </Flex>
        </Flex>
    </>
}


export default Content