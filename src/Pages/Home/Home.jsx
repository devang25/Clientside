import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import NavbarLinks from "../../components/navbarLinks/NavbarLinks";
import TopPicks from "../../components/TopPicks/TopPicks";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Header/>
        <TopPicks/>
        <Footer/>
    </>
  )
}
