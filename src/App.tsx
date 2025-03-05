import { Provider } from "./components/ui/provider"

import { 
  Grid, 
  GridItem, 
  Button,
  DrawerBackdrop, 
  DrawerBody, 
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerFooter,
  Link,
  VStack,
  IconButton
} from "@chakra-ui/react"

import { useState } from "react"
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { IoCloseSharp } from "react-icons/io5";
import "./App.css"
import Logo from "./Logo"




function App() {
 

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [logoColor, useLogoColor] = useState("white")
  
  const handleMouseEnter = () => {
      useLogoColor("#4dfa7b")
  }

  const handleMouseLeave = () => {
      useLogoColor("white")
  }

  return (
    <>
      <Provider>
        <DrawerRoot key="full" size="full" open={drawerOpen} onOpenChange={(e) => setDrawerOpen(e.open)}>
          <DrawerBackdrop />
          <DrawerContent className="nav-drawer">
              <DrawerHeader>
              <DrawerTitle>
                <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Logo color={logoColor} lHeight="90pt" lWidth="90pt"/>
                </Link>
                <IconButton variant="plain" rounded="full" onClick={() => setDrawerOpen(false)} style={{float: "right"}}>
                  <IoCloseSharp color="white" />
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
                  <Button className="button transitioned" w="100%">Sign In</Button>
              </DrawerFooter>
              <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
        <Grid
          h="100vh"
          templateRows="60px 1fr 100px"
          templateColumns= "1fr"
          gap={0}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Header drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} logoColor={logoColor} useLogoColor={useLogoColor} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Content />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Footer />
          </GridItem>
        </Grid>
      </Provider>
      
    </>
  )
}

export default App
