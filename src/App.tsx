import { Provider } from "./components/ui/provider"

import { 
  Grid, 
  GridItem, 
} from "@chakra-ui/react"

import { useState } from "react"
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import "./App.css"
import Drawer from "./otherComponants/Drawer"
import setLogoColor from "./hooks/setLogoColor"



function App() {
 

  const [drawerOpen, setDrawerOpen] = useState(false)
  const {logoColor, handleMouseEnter, handleMouseLeave, useLogoColor} = setLogoColor("#4d98fa")
  const [darkMode, setDarkMode] = useState({bg: "white", color: "rgb(29, 30, 38)", isEnabled: false})
  return (
    <>
      <Provider>
        <Drawer handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} logoColor={logoColor} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <Grid
          h="100vh"
          templateRows="60px 1fr 100px"
          templateColumns= "1fr"
          gap={0}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Header 
              drawerOpen={drawerOpen} 
              setDrawerOpen={setDrawerOpen} 
              logoColor={logoColor} 
              useLogoColor={useLogoColor} 
              handleMouseEnter={handleMouseEnter} 
              handleMouseLeave={handleMouseLeave}
              darkMode={darkMode}
              setDarkMode={setDarkMode}      
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Content 
              darkMode={darkMode}
             />
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
