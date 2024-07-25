import { createContext, useState, useContext, useMemo } from "react";
import App from "./App";
import AppDrawer from "./components/AppDrawer";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";

const AppContext = createContext();
export function useApp() {
  return useContext(AppContext);
}

export default function ThemedApp() {
  const [showDrawer, setShowDrawer] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [auth, setAuth] = useState(null);
  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: deepPurple,
        banner: mode === "dark" ? grey[800] : grey[200],
        text: {
          fade: grey[500],
        },
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          showDrawer,
          setShowDrawer,
          showForm,
          setShowForm,
          auth,
          setAuth,
          mode,
          setMode,
        }}
      >
        <App />
        <AppDrawer />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
