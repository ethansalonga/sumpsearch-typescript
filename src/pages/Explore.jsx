import { useState, useEffect } from "react"
import Navbar from "../components/explore/navbar/Navbar"
import Search from "../components/explore/search/Search"
import { ChakraProvider } from "@chakra-ui/react"

function Explore({ champions, championQuery, setChampionQuery }) {
  const [filteredChampions, setFilteredChampions] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (championQuery) {
      setFilteredChampions(
        champions.filter(
          champion =>
            champion.id.toLowerCase().includes(championQuery) ||
            champion.name.toLowerCase().includes(championQuery)
        )
      )
    } else {
      setFilteredChampions(champions)
    }
  }, [champions])

  return (
    <ChakraProvider>
      <div className="explore">
        <div className="flex flex-col flex-1">
          <Navbar
            champions={champions}
            championQuery={championQuery}
            setChampionQuery={setChampionQuery}
            setLoading={setLoading}
            setFilteredChampions={setFilteredChampions}
            setCurrentPage={setCurrentPage}
          />
          <Search
            champions={champions}
            filteredChampions={filteredChampions}
            setFilteredChampions={setFilteredChampions}
            loading={loading}
            setLoading={setLoading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setChampionQuery={setChampionQuery}
          />
        </div>
      </div>
    </ChakraProvider>
  )
}

export default Explore
