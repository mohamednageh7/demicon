import React, { useMemo, createContext } from "react";
import './App.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersView from "./pages/UsersView";

export const AppContext = createContext<any>([]);

function App() {
  const theme = useMemo(
    () => createTheme(),
    []
  );

  const value = useMemo(() => [],[]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={value}>
          <Router>
            <Routes>
              <Route path='/' element={<UsersView />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
