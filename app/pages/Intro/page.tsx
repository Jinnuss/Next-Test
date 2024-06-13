import Header from "@/app/components/Header/header"
import Footer from "@/app/components/Footer/footer"
import Section4Intro from "./components/section4Intro/section4Intro"
import Intro1 from "./components/Intro1/Intro1"
import Intro2 from "./components/Intro2/Intro2"
import Intro3 from "./components/Intro3/Intro3"
export default function Intro() {
    return (
        <>
            <Header />
            <Intro1 />
            <Intro2 />
            <Intro3 />
            <Section4Intro />
            <Footer />
        </>
    )
}