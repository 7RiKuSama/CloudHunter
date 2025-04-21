import { Box, Image, Heading, Text } from "@chakra-ui/react"
import { NewsArticleProps } from "../../../types/weather"
import MainContext from "../../../Contexts/MainContext"
import { useContext } from "react"
const NewsArticle = (article: NewsArticleProps) => {
    const {theme} = useContext(MainContext)
    return(
        <Box 
            w={"100%"} 
            h={{base: "fit-content", lg: "300px"}} 
            borderRadius={"5px"} 
            display={"flex"} 
            flexDirection={"row"}
            p={2}
            marginBottom={0}
            _hover={{
                background: theme.boxBg,
                color: theme.boxColor,
                transition: "ease-in-out .5s"
            }}

        >
            <Image src={article.image} width={{base: "50%", sm: "40%", lg: "50%"}} h={{base: "60%", sm: "40%", lg: "100%"}} borderRadius={"5px"} mr={2}/>
            <Box width={"80%"} display={"flex"} flexDirection={"column"}>
                <Heading as="h3">{article.title}</Heading>
                <Text mb={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, laborum excepturi quidem explicabo at reprehenderit aperiam saepe suscipit omnis illo.</Text>
                <Text mb={2}>Source: {article.source}</Text>
                <Text display={{base: "none", md: "block"}}>Published at: {article.publishedAt}</Text>
                

            </Box>
        </Box>
    )
}

export default NewsArticle 