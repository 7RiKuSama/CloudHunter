import { 
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerFooter,
    DrawerCloseTrigger,
    IconButton,
    Link,
    VStack,
    Button
  } from "@chakra-ui/react"
import Logo from "../Logo"
import { IoCloseSharp } from "react-icons/io5"

interface DrawerProps {
    drawerOpen: boolean;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    setDrawerOpen: (open: boolean) => void;
    logoColor: string;
}

const Drawer = ({ drawerOpen, setDrawerOpen, handleMouseEnter, handleMouseLeave, logoColor }: DrawerProps) => {
    
    
    
    return (
        <DrawerRoot key="full" size="full" open={drawerOpen} onOpenChange={(e) => setDrawerOpen(e.open)}>
          <DrawerBackdrop />
          <DrawerContent className="nav-drawer">
              <DrawerHeader>
              <DrawerTitle style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Logo color={logoColor} lHeight="90pt" lWidth="90pt"/>
                </Link>
                <IconButton 
                  variant="plain" 
                  rounded="full" 
                  onClick={() => setDrawerOpen(false)}
                  style={{float: "right"}}
                >
                  <IoCloseSharp color={"white"} />
                </IconButton>
              </DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <VStack>
                  <Link variant="plain" className="nav-link transitioned">Dashboard</Link>
                  <Link variant="plain" className="nav-link transitioned">Features</Link>
                  <Link variant="plain" className="nav-link transitioned">About</Link>
                  <Link variant="plain" className="nav-link transitioned">Contact</Link>
                </VStack>
              </DrawerBody>
              <DrawerFooter>
                <Button variant="plain" w={"100%"} p={4} className="button transitioned">Sign in</Button>
              </DrawerFooter>
              <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
    )
}


export default Drawer;

