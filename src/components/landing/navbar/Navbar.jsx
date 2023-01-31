import { Link } from "react-router-dom"
import Logo from "../../../assets/sumpsearch-logo.svg"
import "./Navbar.css"

function Navbar() {
  let isModalOpen = false

  const toggleModal = () => {
    if (isModalOpen) {
      isModalOpen = false
      document.querySelector(".close-btn").classList.remove("show")
      setTimeout(() => {
        document.querySelector(".bento-menu").classList.remove("hide-anim-out")
        document.querySelector(".bento-menu").classList += " show-anim-in"
        document.querySelector(".showMenu").classList.remove("active")
      }, [800])
      return
    }
    isModalOpen = true
    document.querySelector(".bento-menu").classList.remove("show-anim-in")
    document.querySelector(".bento-menu").classList += " hide-anim-out"
    document.querySelector(".close-btn").classList += " show"
    document.querySelector(".showMenu").classList += " active"
  }

  const contactAlert = () => {
    alert("This feature has not been implemented for this project.")
  }

  return (
    <header>
      <nav className="navbar content-wrapper justify-between items-center">
        <div className="logo">
          <img
            src={Logo}
            alt=""
            className="logo"
          />
        </div>
        <div className="navlinks justify-between items-center">
          <Link
            to="/"
            className="navlink router-link-active"
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="navlink"
          >
            Explore
          </Link>
          <Link
            to=""
            className="btn-contact"
            onClick={contactAlert}
          >
            Contact
          </Link>
        </div>
        <div
          id="mobile-nav"
          onClick={toggleModal}
        >
          <div className="bento-menu">
            <div className="bento-dot"></div>
            <div className="bento-dot"></div>
            <div className="bento-dot"></div>
            <div className="bento-dot"></div>
            <div className="bento-dot"></div>
            <div className="bento-dot"></div>
            <div className="bento-dot"></div>
            <div className="bento-dot"></div>
            <div className="bento-dot"></div>
          </div>
          <div className="close-btn"></div>
          <div className="showMenu">
            <Link
              to="/"
              className="link router-link-exact-active router-link-active"
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="link"
            >
              Explore
            </Link>
            <Link
              to=""
              className="link router-link-exact-active router-link-active"
              onClick={contactAlert}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
