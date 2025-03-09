import { Box } from '@chakra-ui/react'

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <>
            <Box w="100%" p={4} style={{
                backgroundColor: "rgba(54, 56, 71, 0.24)",
                border: "1px solid rgba(248, 249, 255, 0.18)",
                borderRadius: "5px"
            }}>
                {children}
            </Box>
        </>
    )
}

export default Container