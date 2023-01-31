import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/sumpsearch-logo.svg"
import "./Navbar.css"

function Navbar({
  champions,
  championQuery,
  setChampionQuery,
  setLoading,
  setFilteredChampions,
  setCurrentPage,
}) {
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

  const handleSearch = () => {
    setCurrentPage(1)
    setLoading(true)
    setTimeout(() => {
      setFilteredChampions(
        champions.filter(
          champion =>
            champion.id.toLowerCase().includes(championQuery) ||
            champion.name.toLowerCase().includes(championQuery)
        )
      )
      setLoading(false)
    }, [2000])
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    )

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowDimensions
  }

  const { height, width } = useWindowDimensions()

  return (
    <div className="explore__navbar flex flex-col">
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
      <div
        className="content-wrapper flex-col items-center"
        style={{ marginTop: "40px" }}
      >
        <h1 className="explore__title">Browse champions</h1>
        <div className="explore__input-wrapper">
          <input
            type="text"
            placeholder={`${
              width < 375 ? "Search by name" : "Search by champion name"
            }`}
            className="explore__input"
            value={championQuery}
            onChange={e => setChampionQuery(e.target.value)}
            onKeyPress={event => event.key === "Enter" && handleSearch()}
          />
          <div
            className="search-wrapper flex items-center justify-center"
            onClick={handleSearch}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="explore__search-icon"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Navbar
