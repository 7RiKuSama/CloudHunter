import { Box } from "@chakra-ui/react"
interface DarkModeProps {
    darkMode: {
        bg: string;
        color: string;
        isEnabled: boolean
    }
}


const Content = ({ darkMode}: DarkModeProps) => {
    return <>
        
        <Box h="100%" w="100%" p={4} style={{
            color: darkMode.color,
            backgroundColor: darkMode.bg
        }}>
            <Box style={{border: "1px solid black"}}>hello world</Box>
        </Box>
       
    </>
}


export default Content