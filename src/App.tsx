import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { SiteShell } from "./components/layout/SiteShell";
import { AboutPage } from "./pages/AboutPage";
import { BeforeAfterPage } from "./pages/BeforeAfterPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PlanPage } from "./pages/PlanPage";
import { ProcessPage } from "./pages/ProcessPage";
import { ProjectPage } from "./pages/ProjectPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { ServiceAreaPage } from "./pages/ServiceAreaPage";
import { ServiceAreasPage } from "./pages/ServiceAreasPage";
import { ServiceSuburbPage } from "./pages/ServiceSuburbPage";
import { ServicePage } from "./pages/ServicePage";
import { ServiceTypeHubPage } from "./pages/ServiceTypeHubPage";
import { ShowroomPage } from "./pages/ShowroomPage";

function RenovationRoute() {
  const { serviceId } = useParams();
  return <ServicePage key={serviceId} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteShell />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
          <Route path="renovations/:serviceId" element={<RenovationRoute />} />
          <Route path="before-and-after" element={<BeforeAfterPage />} />
          <Route path="showroom" element={<ShowroomPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="service-areas" element={<ServiceAreasPage />} />
          <Route path="service-areas/:suburb" element={<ServiceSuburbPage />} />
          <Route path="bathroom-renovations" element={<ServiceTypeHubPage service="bathroom" />} />
          <Route path="house-renovations" element={<ServiceTypeHubPage service="home" />} />
          <Route path="kitchen-renovations" element={<ServiceTypeHubPage service="kitchen" />} />
          <Route path="bathroom-renovations/:suburb" element={<ServiceAreaPage />} />
          <Route path="kitchen-renovations/:suburb" element={<ServiceAreaPage />} />
          <Route path="home-renovations/:suburb" element={<ServiceAreaPage />} />
          <Route path="house-renovations/:suburb" element={<ServiceAreaPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="plan-your-renovation" element={<PlanPage />} />
          <Route path="privacy" element={<LegalPage kind="privacy" />} />
          <Route path="terms" element={<LegalPage kind="terms" />} />

          <Route path="gallery" element={<Navigate to="/projects" replace />} />
          <Route path="company-profile" element={<Navigate to="/about" replace />} />
          <Route path="contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="testimonials" element={<Navigate to="/reviews" replace />} />
          <Route path="quote" element={<Navigate to="/plan-your-renovation" replace />} />
          <Route path="privacypolicy" element={<Navigate to="/privacy" replace />} />
          <Route path="service-area" element={<Navigate to="/service-areas" replace />} />
          <Route path="services" element={<Navigate to="/renovations/full-home" replace />} />
          <Route path="services/bathroom" element={<Navigate to="/renovations/bathrooms" replace />} />
          <Route path="services/kitchen" element={<Navigate to="/renovations/kitchens" replace />} />
          <Route path="services/laundry" element={<Navigate to="/renovations/laundries" replace />} />
          <Route path="services/decking" element={<Navigate to="/renovations/decking" replace />} />
          <Route path="services/before-and-after" element={<Navigate to="/before-and-after" replace />} />
          <Route path="services/showroom" element={<Navigate to="/showroom" replace />} />
          <Route path="services/misc" element={<Navigate to="/renovations/full-home" replace />} />
          <Route path="kitchen-renovation-:suburb" element={<LegacyKitchenRedirect />} />
          <Route path="bathroom-renovations-:suburb" element={<LegacyBathroomRedirect />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function LegacyKitchenRedirect() {
  const { suburb } = useParams();
  return <Navigate to={`/kitchen-renovations/${suburb ?? ""}`} replace />;
}

function LegacyBathroomRedirect() {
  const { suburb } = useParams();
  return <Navigate to={`/bathroom-renovations/${suburb ?? ""}`} replace />;
}
