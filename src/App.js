import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { DetallePersona } from "./components/DetallePersona";
import { Mailer } from "./components/mailer/Mailer";
import { useAuth0 } from "@auth0/auth0-react";
import { LandingPage } from "./pages/LandingPage";

function App() {
  const { isAuthenticated} = useAuth0();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/detallePersona/:personaId' element={<DetallePersona />} />
        <Route path='/rentar/:personaId' element={<Mailer autentificado={isAuthenticated}/>} />
      </Routes>
    </Router>
  );
}

export default App;
