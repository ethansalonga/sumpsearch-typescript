import { useState, useEffect, useRef } from "react"
import ChampionCard from "./ChampionCard"
import Pagination from "../../common/Pagination"
import { RiArrowDownSLine } from "react-icons/ri"
import "./Search.css"

function Search({
  champions,
  filteredChampions,
  setFilteredChampions,
  loading,
  setLoading,
  currentPage,
  setCurrentPage,
  setChampionQuery,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState("Select role")
  const dropDownRef = useRef(null)

  const roles = [
    { id: "Assassin" },
    { id: "Fighter" },
    { id: "Mage" },
    { id: "Marksman" },
    { id: "Support" },
    { id: "Tank" },
  ]

  // PAGINATION //
  const [champsPerPage] = useState(12)

  const indexOfLastChamp = currentPage * champsPerPage
  const indexOfFirstChamp = indexOfLastChamp - champsPerPage
  const currentChamps = filteredChampions.slice(
    indexOfFirstChamp,
    indexOfLastChamp
  )

  const paginate = pageNumber => setCurrentPage(pageNumber)
  // END PAGINATION //

  useEffect(() => {
    setFilteredChampions(champions)
  }, [])

  const handleViewAll = () => {
    setChampionQuery("")
    setLoading(true)
    setFilteredChampions(champions)
    setSelectedRole("Select role")
    setTimeout(() => {
      setLoading(false)
    }, [500])
  }

  const openHandler = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const selectHandler = id => {
    const selected = roles.find(el => el.id === id)
    setSelectedRole(selected.id)
    setDropdownOpen(false)
    setCurrentPage(1)
    setFilteredChampions(
      champions.filter(champion => champion.tags.includes(id))
    )
  }

  return (
    <section id="search">
      <div
        className="search-progress-bar indeterminate theme-default"
        style={{ position: "absolute", top: "0px", left: "0px", right: "0px" }}
      >
        <div className={`${loading && "progress-bar-track"}`}></div>
        <div className={`${loading && "progress-bar-fill"}`}></div>
        <div className="progress-bar-buffer"></div>
      </div>
      {loading ? (
        <div className="loading-state flex justify-center">
          <svg
            data-v-cf78a876=""
            data-v-ca62299c=""
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="spinner"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="loading-state__icon"
            style={{ fontSize: "30px", color: "#00adb5" }}
          >
            <path
              data-v-cf78a876=""
              fill="currentColor"
              d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
              className=""
            ></path>
          </svg>
        </div>
      ) : (
        <>
          <div
            id="filter"
            className="content-wrapper justify-between"
          >
            <h1 className="search-info">
              <span className="black-text searchInfo__title">
                Search results:
              </span>
              <span className="black-text searchInfo__subtitle">
                Note: Some newer champions may have missing or incorrect data
                from the Data Dragon API
              </span>
              <button
                className={`${
                  champions.length !== filteredChampions.length
                    ? "searchInfo__button"
                    : "searchInfo__button--disabled"
                }`}
                onClick={() => {
                  if (champions.length !== filteredChampions.length) {
                    handleViewAll()
                    setCurrentPage(1)
                  }
                }}
              >
                View all champions
              </button>
            </h1>
            <div
              className={`${
                filteredChampions.length === 1 && "hidden"
              } role-filter flex flex-col`}
            >
              <h2 className="filter__title">
                <span
                  className="black-text"
                  style={{ marginRight: "8px" }}
                >
                  Filter by role:
                </span>
              </h2>
              <div
                className={`${
                  dropdownOpen && "filterDropdown--active"
                } filterDropdown relative`}
                onClick={openHandler}
                ref={dropDownRef}
              >
                <div className="filterDropdown__text">{selectedRole}</div>
                <div className="filterDropdown__arrow">
                  <RiArrowDownSLine />
                </div>
                {dropdownOpen && (
                  <div className="filterDropdown__list">
                    {roles.map(({ id }) => (
                      <div
                        className="filterDropdown__item"
                        key={id}
                        onClick={() => selectHandler(id)}
                      >
                        {id}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div id="champions">
            <div className="content-wrapper championCards">
              {currentChamps.map(champion => (
                <ChampionCard
                  key={champion.id}
                  id={champion.id}
                  image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                  name={champion.name}
                  title={champion.title}
                  attack={champion.info.attack}
                  defense={champion.info.defense}
                  magic={champion.info.magic}
                  difficulty={champion.info.difficulty}
                  roles={champion.tags}
                />
              ))}
              <Pagination
                champsPerPage={champsPerPage}
                totalChamps={filteredChampions.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Search
