import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Support from "@/components/Support";
import Content from "@/components/Content";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { SiteDataProvider } from "@/sanity/SiteDataProvider";
import { getSiteData } from "@/sanity/siteData";

export default async function Home() {
  const data = await getSiteData();

  return (
    <SiteDataProvider data={data}>
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Journey />
        <Support />
        <Content />
        <BlogPreview />
        <Contact />
        <Footer />
        <Chatbot />
      </main>
    </SiteDataProvider>
  );
}
