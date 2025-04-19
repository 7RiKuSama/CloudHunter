import { Input, Box, InputGroup, CloseButton } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { useContext, useRef } from "react"
import MainContext from "../../Contexts/MainContext"
import { Colors } from "../../theme/themeInstance"


const SearchInput = () => {

    const { theme, searchText, setSearchText } = useContext(MainContext)
    const inputRef = useRef<HTMLInputElement | null>(null)
    return (
    <>
        <InputGroup>
            <>
                {/* Icon with proper spacing */}
                <Box 
                    position="absolute" 
                    left="10px" 
                    top="50%" 
                    transform="translateY(-50%)" 
                    zIndex={3}
                    color="gray.500"
                    pointerEvents="none"
                >
                    <LuSearch size={16} color={theme.secondColor}/>
                </Box>
                <Box 
                    position="absolute" 
                    right="10px" 
                    top="50%" 
                    transform="translateY(-50%)" 
                    zIndex={3}
                    color="gray.500"
                >
                    {
                        searchText ? (
                            <CloseButton
                                size="xs"
                                color={Colors.danger}
                                onClick={() => {
                                setSearchText("")
                                inputRef.current?.focus()
                                }}
                                me="-2"
                            />
                            ) : undefined
                    }
                </Box>
                <Input
                    ref={inputRef} 
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                    bg={theme.boxBg}
                    value={searchText}
                    border={`1px solid ${theme.borderColor}`}
                    borderRadius="5px"
                    pl="40px" // Adjust based on icon size + desired spacing
                    placeholder="Search for a location..."
                    _placeholder={{color: theme.borderColor}}
                    style={searchText? {borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"} : undefined}
                />
            </>
        </InputGroup>
    </>
    )
}

export default SearchInput