import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/champion-info/navbar/Navbar"
import Main from "../components/champion-info/main/Main"
import { ChakraProvider } from "@chakra-ui/react"

function ChampionInfo({ latestVersion }) {
  const params = useParams()
  const { champ_id } = params

  const [champion, setChampion] = useState()

  useEffect(() => {
    if (latestVersion) {
      getChampionInfo()
    }
  }, [latestVersion])

  const getChampionInfo = async () => {
    const champions = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion/${champ_id}.json`
    )
    const { data } = await champions.json()
    setChampion(Object.values(data)[0])
  }

  return (
    <ChakraProvider>
      <div className="championInfo">
        <div className="flex flex-col flex-1">
          <Navbar />
          <Main champion={champion} />
        </div>
      </div>
    </ChakraProvider>
  )
}

export default ChampionInfo
