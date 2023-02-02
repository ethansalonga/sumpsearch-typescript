import { useState, useEffect, FC } from "react"
import Navbar from "../components/explore/navbar/Navbar"
import Search from "../components/explore/search/Search"
import { ChakraProvider } from "@chakra-ui/react"

type ExploreProps = {
  champions: any[]
  championQuery: string
  setChampionQuery: (champion: string) => void
}

const Explore: FC<ExploreProps> = ({
  champions,
  championQuery,
  setChampionQuery,
}) => {
  const [filteredChampions, setFilteredChampions] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

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
