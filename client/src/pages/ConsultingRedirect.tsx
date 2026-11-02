import { useEffect } from "react";
const CONSULTING_URL = "https://www.patientcentriccare.ai/consulting";
export default function ConsultingRedirect() {
  useEffect(() => { window.location.replace(CONSULTING_URL); }, []);
  return <main className="container py-16"><h1>Consulting services have moved</h1><p><a href={CONSULTING_URL}>Explore Andy Squire’s healthcare AI consulting services</a>.</p></main>;
}
