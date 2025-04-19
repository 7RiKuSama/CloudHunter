import { useContext } from "react";
import MainContext from "../../Contexts/MainContext";
import { Flex, Link } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { Colors } from "../../theme/themeInstance";
import { Suggestion } from "../../types/weather";

const TypeHead = () => {
    const { theme, suggestions } = useContext(MainContext)
    return (
        <Flex 
            w={"100%"}
            flexDirection={"row"}
            bg= {theme.boxBg}
            border= {`1px solid ${theme.borderColor}`}
            borderRadius= "5px"
            borderTop={"0px"}
            borderTopRadius={"0px"}

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
                                    color={theme.secondColor}
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