import { Provider } from "./components/ui/provider"
import { Box } from "@chakra-ui/react"
interface DarkModeProps {
    darkMode: {
        bg: string;
        color: string;
    }
}


const Content = ({ darkMode}: DarkModeProps) => {
    return <>
        <Provider>
            <Box bg={darkMode.bg} h="100%" w="100%" p={4}>
                <Box style={{border: "1px solid black"}}>hello world</Box>
            </Box>
        </Provider>
    </>
}


export default Content