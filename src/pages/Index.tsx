// Index.tsx
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Repertoire = lazy(() => import("@/components/Repertoire"));
const Projects = lazy(() => import("@/components/Projects"));
const Skills = lazy(() => import("@/components/Skills"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => (
  <>
    <Header />
    <main id="main-content">
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Repertoire />
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
    </main>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </>
);

export default Index;
