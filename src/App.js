import { ThemeProvider } from "@ui5/webcomponents-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";

import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import NotFound from "./components/NotFound";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  setTheme("sap_fiori_3_dark");

  return (
   
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="transactions" element={<Transactions />} />
            </Route>
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  
  );
}

export default withAuthenticator(App);
