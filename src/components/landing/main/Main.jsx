import { useNavigate } from "react-router-dom"
import LandingImg from "../../../assets/landing-img.png"
import ArcaneJinxImg from "../../../assets/arcane-jinx.png"
import "./Main.css"

function Main({ championQuery, setChampionQuery }) {
  const navigate = useNavigate()

  const toggleLoading = () => {
    document.querySelector(".btn-search").classList.remove("not-loading")
    document.querySelector(".btn-search").classList += " loading"
  }

  const handleSearch = () => {
    toggleLoading()
    setTimeout(() => {
      navigate("/explore")
    }, [2000])
  }

  return (
    <section
      className="main"
      id="landing-page"
    >
      <div className="content-wrapper flex-col items-center justify-between">
        <div
          className="flex flex-col items-center"
          style={{ zIndex: 10, backgroundColor: "#fff" }}
        >
          <div className="w-full">
            <div className="landing__title--animation">
              <h1 className="landing__title">
                The most popular champion searching platform
              </h1>
            </div>
          </div>
          <div className="w-full">
            <div className="landing__sub-title--animation">
              <h2 className="landing__sub-title">
                Find your main with{" "}
                <span style={{ color: "#00adb5" }}>SumpSearch</span>
              </h2>
            </div>
          </div>
          <div className="w-full">
            <div className="landing__input--animation">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Search by champion name"
                  className="landing__input"
                  value={championQuery}
                  onChange={e => setChampionQuery(e.target.value)}
                  onKeyPress={event => event.key === "Enter" && handleSearch()}
                />
                <button
                  className="btn-search not-loading"
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
                    className="search-icon"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                  <svg
                    data-v-cf78a876=""
                    data-v-2a11e7ca=""
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="spinner"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="loading-icon"
                  >
                    <path
                      data-v-cf78a876=""
                      fill="currentColor"
                      d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
                      className=""
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={LandingImg}
          alt="Arcane Jinx and Vi"
          className="landing__img"
        />
        <img
          src={ArcaneJinxImg}
          alt="Arcane Jinx"
          className="jinx__img"
        />
      </div>
    </section>
  )
}

export default Main
