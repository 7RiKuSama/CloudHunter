import NewsArticle from "../common/news/NewsArticle"
import { Box } from "@chakra-ui/react"
const NewsSection = () => {
    const test = [2, 3, 5]    
    
    return(
        <Box h="100%" w={"100%"}>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    {test.map(value => (
                        <NewsArticle 
                            title={"hdadfa aasdf afa daadfa adfa adfa a dffas afa adf afdfadfa"} 
                            publishedAt={new Date().toISOString()} 
                            source={`Example Source${value}`} 
                            url={"https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"} 
                            content="" 
                            description="" 
                            image={`https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg`} 
                        />
                    ))}
                </Box>
            
        </Box>
    )
}

export default NewsSection