import { Link } from "react-router-dom"
import Logo from "../../../assets/sumpsearch-logo.svg"
import "./Navbar.css"

function Navbar() {
  let isModalOpen: boolean = false

  const toggleModal: () => void = () => {
    if (isModalOpen) {
      isModalOpen = false
      document!.querySelector(".close-btn")!.classList.remove("show")
      setTimeout(() => {
        document!
          .querySelector(".bento-menu")!
          .classList.remove("hide-anim-out")
        document!.querySelector(".bento-menu")!.classList.add("show-anim-in")
        document!.querySelector(".showMenu")!.classList.remove("active")
      }, 800)
      return
    }
    isModalOpen = true
    document!.querySelector(".bento-menu")!.classList.remove("show-anim-in")
    document!.querySelector(".bento-menu")!.classList.add("hide-anim-out")
    document!.querySelector(".close-btn")!.classList.add("show")
    document!.querySelector(".showMenu")!.classList.add("active")
  }

  const contactAlert: () => void = () => {
    alert("This feature has not been implemented for this project.")
  }

  return (
    <div className="championInfo__navbar flex flex-col">
      <div className="explore__content-wrapper justify-between items-center">
        <div className="explore__logo">
          <img
            src={Logo}
            alt=""
            className="explore__logo"
          />
        </div>
        <div className="navlinks justify-between items-center">
          <Link
            to="/"
            className="explore__navlink"
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="explore__navlink"
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
            <div className="explore__bento-dot"></div>
            <div className="explore__bento-dot"></div>
            <div className="explore__bento-dot"></div>
            <div className="explore__bento-dot"></div>
            <div className="explore__bento-dot"></div>
            <div className="explore__bento-dot"></div>
            <div className="explore__bento-dot"></div>
            <div className="explore__bento-dot"></div>
            <div className="explore__bento-dot"></div>
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
              Explore Champions
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
      </div>
    </div>
  )
}

export default Navbar
