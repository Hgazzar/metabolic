import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import SiteLayout from "./layouts/SiteLayout"
import LegacyHomePage from "./pages/LegacyHomePage"
import ProgramPage from "./pages/ProgramPage"
import SpeakersPage from "./pages/SpeakersPage"
import RegisterPage from "./pages/RegisterPage"
import VenuePage from "./pages/VenuePage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LegacyHomePage />} />
        <Route element={<SiteLayout />}>
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/venue" element={<VenuePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
