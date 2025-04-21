import { useContext } from "react";
import MainContext from "../../Contexts/MainContext";
import { Flex, Link } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { Colors, darkTheme } from "../../theme/themeInstance";
import { Suggestion } from "../../types/weather";

const TypeHead = () => {
    const { theme, suggestions } = useContext(MainContext)
    return (
        <Flex 
            w={"100%"}
            flexDirection={"row"}
            bg= {darkTheme.bg}
            border= {`1px solid ${darkTheme.borderColor}`}
            borderRadius= "10px"
            borderTop={"0px"}
            borderTopRadius={"0px"}
            position={"absolute"}
            top={"40px"}
            left={"0"}
        >
            <ul
                style={{
                    listStyle: "none",
                    fontSize: "0.9rem",
                    width: "100%",
                }}
            >
                {
                    suggestions.map((value: Suggestion) => <li 
                        style={{
                            display: "flex", 
                            alignItems: "center"
                        }}>
                                <Link 
                                    color={darkTheme.secondColor}
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        paddingLeft: "10px",
                                    }}
                                    _hover={{
                                        backgroundColor: theme.isEnabled ? theme.borderColor : Colors.hoverLight,
                                        textDecoration: "none", 
                                        color: Colors.hoverText
                                    }}
                                >
                                    <LuSearch style={{marginRight: ".5em"}}/>
                                    {value.formatted}
                                </Link>
                            </li>)
                }
            </ul>
        </Flex>
    )
}

export default TypeHead;