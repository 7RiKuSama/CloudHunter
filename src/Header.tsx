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
    setDarkMode: (mode: {bg: string, color: string, isEnabled: boolean, boxColor: string, boxBg: string}) => void;
    darkMode: {isEnabled: boolean, bg: string, color: string, boxColor: string, boxBg: string};
}

const Header = (props: HeaderProps) => {

    const [isConnected, useIsConnected] = useState(true)
    return <>
        <Provider>
            <header>
                <Box bg="rgb(29, 30, 38)" h="100%" color="white" style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "65px",
                    width: "100%",
                    zIndex: 1000,
                }}>
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
                            <nav>
                                <div className="nav-container">
                                    <Link variant="plain" className="nav-link transitioned">Dashboard</Link>
                                    <Link variant="plain" className="nav-link transitioned">Features</Link>
                                    <Link variant="plain" className="nav-link transitioned">About</Link>
                                    <Link variant="plain" className="nav-link transitioned">Contact</Link>
                                </div>
                            </nav>
                        </HStack>
                        <HStack mr={4}>
                        <IconButton
                            variant="plain"
                            onClick={() =>
                                props.setDarkMode({
                                bg: props.darkMode.isEnabled ? "white" : "rgb(29, 30, 38)",
                                color: props.darkMode.isEnabled ? "black" : "white",
                                boxColor: "white",
                                boxBg: props.darkMode.isEnabled ? "rgb(29, 30, 38)" : "rgb(39, 40, 51)",
                                isEnabled: !props.darkMode.isEnabled,
                                })
                            }
                            >
                            {props.darkMode.isEnabled ? <MdDarkMode color="#4d98fa"/> : <MdOutlineDarkMode color="#4d98fa"/>}
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
            </header>
        </Provider>
    </>
}


export default Header