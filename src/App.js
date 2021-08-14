import React from 'react';
import { CSSReset, theme, ThemeProvider,useColorMode, IconButton, Tooltip, ChakraProvider } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Create from './components/Create';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <CSSReset />
          <BrowserRouter>
          <ThemeSelector />
          <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/create" component={Create} />
          </Switch>
          </BrowserRouter>
      </ChakraProvider>
    </ThemeProvider>
  );
}

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Tooltip label="Change Theme" placement="auto" hasArrow bg={colorMode === 'light' ? "blue.700" : 'blue.100'}>
        <IconButton onClick={toggleColorMode} 
            position="absolute"
            right={{base:"15px",md:"30px"}}
            top={{base:"15px",md:"30px"}}
            borderRadius="50%"
            icon={colorMode === 'light' ? <MoonIcon  /> : <SunIcon />}
            size="lg"
            colorScheme="blue"
            bg={colorMode === 'light' ? "blue.700" : 'white'} />
    </Tooltip>
  )
}

export default App;
