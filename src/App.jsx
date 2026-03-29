import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import LegacyIframePage from "./components/LegacyIframePage"
import SiteLayout from "./layouts/SiteLayout"
import LegacyHomePage from "./pages/LegacyHomePage"
import ProgramPage from "./pages/ProgramPage"
import RegisterPage from "./pages/RegisterPage"
import VenuePage from "./pages/VenuePage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LegacyHomePage />} />
        <Route
          path="/speakers.html"
          element={<LegacyIframePage src="/speakers.html" title="RICMH — Speakers" />}
        />
        <Route
          path="/agenda.html"
          element={<LegacyIframePage src="/agenda.html" title="RICMH — Agenda" />}
        />
        <Route
          path="/committee.html"
          element={<LegacyIframePage src="/committee.html" title="RICMH — Committee" />}
        />
        <Route
          path="/partners.html"
          element={<LegacyIframePage src="/partners.html" title="RICMH — Partners" />}
        />
        <Route
          path="/ricmh-legacy-full.html"
          element={<LegacyIframePage src="/ricmh-legacy-full.html" title="RICMH 2026" />}
        />
        <Route element={<SiteLayout />}>
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/speakers" element={<Navigate to="/speakers.html" replace />} />
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
