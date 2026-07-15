import HeroSection from "../../components/sections/HeroSection";
import FeaturedPostsSection from "../../components/sections/FeaturedPostsSection";
import CategorySection from "../../components/sections/CategorySection";
import CallToActionSection from "../../components/sections/CallToActionSection";
import LatestPostsSection from "../../components/sections/LatestPostsSection";
import NewsletterSection from "../../components/sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <br />
      <br />
      <br />
      <section id="blog-hero" className="blog-hero section">
        <HeroSection />
      </section>

      <FeaturedPostsSection />
      <CategorySection />
      <CallToActionSection />
      <LatestPostsSection />
      <NewsletterSection />
    </>
  );
}