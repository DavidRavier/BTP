/* 
A faire plus tard: rendre l'intégralité des pages responsives et mettre en place des animations

*/

import Header from "./components/Header";
import Footer from "./components/Footer";
import Location from "./components/Location";
import Advantage from "./components/Advantage";
import Advice from "./components/Advice";
import Agency from "./components/Agency";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="grid min-h-screen flex-col items-center justify-between">
    <Header />
        <Carousel />
        <Advantage  />
        <Location />
        <Advice />
        <Agency />
        <Contact />
        <Footer />
    </main>
  );
}
