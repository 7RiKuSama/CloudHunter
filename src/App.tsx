import { Provider } from "./components/ui/provider"
import { 
  Grid, 
  GridItem,
  Flex 
} from "@chakra-ui/react"



import { useState } from "react"
import Header from "./components/layouts/Header"
import MainContent from './components/layouts/MainContent'
import "./styles/App.css"
import Drawer from "./components/common/Drawer"
import fetchWeather from "./services/GetCurrentWeater"
import MainContext from "./Contexts/MainContext"
import { lightTheme } from "./theme/themeInstance"
import useAutocompleteLocation from "./services/UseAutocompleLocation"
import useWeatherData from "./services/useWeatherData"






function App() {
 
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [theme, setTheme] = useState(lightTheme)
  const [unit, setUnit] = useState("C")
  const {weather, isLoading} = fetchWeather()
  const {searchText, setSearchText, suggestions} = useAutocompleteLocation()
  const plotData = useWeatherData(weather)
  
  
  
  
  
  
  
  
  
  return (
    <MainContext.Provider value={{weather, isLoading, location, theme, searchText, setSearchText, suggestions, unit, setUnit, plotData}}>
      <div style={{ background: theme.bg }}>
        <Provider>
          <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
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
                theme={theme}
                setTheme={setTheme}      
              />
            </GridItem>
            <GridItem 
              rowSpan={1} 
              colSpan={1}
            >
              <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <MainContent 
                  theme={theme}
                />
              </Flex>
            </GridItem>
          </Grid>
        </Provider>
      </div>
    </MainContext.Provider>
  )
}

export default App
