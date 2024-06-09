import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Section1 from "./components/Section1/section1";
import Section2 from "./components/Section2/section2";
import Section3 from "./components/Section3/section3";
import Section4 from "./components/Section4/section4";
import Section5 from "./components/Section5/section5";
import Section6 from "./components/Section6/section6";
import Section7 from "./components/Section7/section7";
import Section8 from "./components/Section8/section8";
import '../app/assets/scss/body.scss';
export default function Home() {
  return (
    <div className="body">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
}
