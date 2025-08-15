import Footer from "./footer";
import DestinationGallery from "./gallery";
import Navbar from "./navbar";
import NewsletterSection from "./newwletter";
import PackageCard from "./package";
import Images from "./slider";
import Testimonials from "./testimonials";
import TopDestination from "./top";

function Home() {
  return (
    <>
          <Navbar />
          <Images />
          
          <PackageCard />
          <TopDestination />
          
          <DestinationGallery />
          <NewsletterSection/>
          <Testimonials />
          <Footer/>
    </>
  );
}

export default Home;
