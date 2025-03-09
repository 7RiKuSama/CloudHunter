import { Provider } from "./components/ui/provider"

import { 
  Grid, 
  GridItem,
  Flex 
} from "@chakra-ui/react"

import { useState } from "react"
import Header from './Header'
import Content from './Content'
import "./App.css"
import Drawer from "./utilityComponants/Drawer"
import setLogoColor from "./hooks/setLogoColor"



function App() {
 

  const [drawerOpen, setDrawerOpen] = useState(false)
  const {logoColor, handleMouseEnter, handleMouseLeave, useLogoColor} = setLogoColor("#4d98fa")
  const [darkMode, setDarkMode] = useState({bg: "white", color: "rgb(29, 30, 38)", isEnabled: false, boxColor: "white", boxBg: "rgb(29, 30, 38)"})
  return (
    <>
      <div style={{ background: darkMode.bg }}>
      <Provider>
        <Drawer handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} logoColor={logoColor} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <Grid
          h="100%"
          templateRows="40px 1fr"
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
          <GridItem 
            rowSpan={1} 
            colSpan={1}
          >
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
              <Content 
                darkMode={darkMode}
              />
            </Flex>
          </GridItem>
        </Grid>
      </Provider>
      </div>
    </>
  )
}

export default App
