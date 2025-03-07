import { Provider } from "./components/ui/provider"
import { 
    IconButton, 
    Box, 
    Flex,
    HStack, 
    Link, 
    Avatar, 
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
import Logo from "./Logo"
import "./App.css"

interface HeaderProps {
    setDrawerOpen: (open: boolean) => void;
    drawerOpen: boolean;
    logoColor: string;
    useLogoColor: (color: string) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    setDarkMode: (mode: {bg: string, color: string, isEnabled: boolean}) => void;
    darkMode: {isEnabled: boolean, bg: string, color: string};
}

const Header = (props: HeaderProps) => {

    const [isConnected, useIsConnected] = useState(false)
    return <>
        <Provider>
            <Box bg="rgb(29, 30, 38)" h="100%" color="white">
                <Flex
                    gap={0}
                    alignItems="center"
                    justify="space-between"
                    h={"100%"}
                >
                    <IconButton id="navbar-btn" bg={"none"} ml={2} onClick={() => props.setDrawerOpen(!props.drawerOpen)}>
                        <FaBars color="white" />
                    </IconButton>
                    <HStack>
                        <Link onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} ml={6}>
                            <Logo color={props.logoColor} lHeight="90pt" lWidth="90pt"/>
                        </Link>
                        <div className="nav-container">
                            <Link variant="plain" className="nav-link transitioned">Dashboard</Link>
                            <Link variant="plain" className="nav-link transitioned">Features</Link>
                            <Link variant="plain" className="nav-link transitioned">About</Link>
                            <Link variant="plain" className="nav-link transitioned">Contact</Link>
                        </div>
                    </HStack>
                    <HStack mr={4}>
                    <IconButton
                        variant="plain"
                        onClick={() =>
                            props.setDarkMode({
                            bg: props.darkMode.isEnabled ? "white" : "rgb(29, 30, 38)",
                            color: props.darkMode.isEnabled ? "black" : "white",
                            isEnabled: !props.darkMode.isEnabled,
                            })
                        }
                        >
                        {props.darkMode.isEnabled ? <MdDarkMode /> : <MdOutlineDarkMode />}
                        </IconButton>
                        {!isConnected && 
                            <>
                                <Link className="button transitioned">Sign in</Link>
                            </>
                        }

                        {
                            isConnected && (
                                <>
                                    <Avatar.Root>
                                        <Avatar.Fallback name="ghalem chaouch" />
                                        <Avatar.Image src="https://bit.ly/sage-adebayo" />
                                    </Avatar.Root>
                                </>
                            )
                        }
                    </HStack>
                </Flex>
            </Box>
        </Provider>
    </>
}


export default Header