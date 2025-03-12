import { Box } from "@chakra-ui/react"
import Container from "./utilityComponants/Container"
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
        
        <Box h="100%" w="90vw" paddingInline={15} paddingBlock={10} style={{
            color: darkMode.color,
            backgroundColor: darkMode.bg,
            display: "flex",
            justifyContent: "center",
            textAlign: "justify",
        }}>
            <Box 
                h={"100%"} 
                w={"100%"}
            >
                <Container>
                    <Home height="750px"></Home>
                </Container>
            </Box>
        </Box>
    </>
}


export default Content