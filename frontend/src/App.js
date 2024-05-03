import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {themeSettings} from "./theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Layout from "./pages/layout";
import Pack from "./pages/Subscriptions";
import Enterprises from "./pages/Entreprises"
import Services from "./pages/Services"
import SubscriptionPalns from "pages/SubscriptionPlan";
import Messages from "pages/Message";
import AddService from "pages/Services/AddService";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app" >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Subscriptions" element={<Pack />} />
              <Route path="/Enterprises" element={<Enterprises />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Services/new" element={<AddService />} />
              <Route path="/SubscriptionsPlans" element={<SubscriptionPalns />} />
              <Route path="/Messages" element={<Messages />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
