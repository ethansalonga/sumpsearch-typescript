import { useEffect, useState, FC } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/champion-info/navbar/Navbar"
import Main from "../components/champion-info/main/Main"
import { ChakraProvider } from "@chakra-ui/react"

type ChampionInfoProps = {
  latestVersion: string
}

type Champion = {
  id: string
  image: string
  name: string
  title: string
  tags: string[]
  lore: string
  info: {
    attack: number
    defense: number
    magic: number
    difficulty: number
  }
  allytips: string[]
  enemytips: string[]
  passive: {
    name: string
    description: string
    image: {
      full: string
    }
  }
  spells: {
    id: string
    name: string
    description: string
  }[]
  skins: {
    id: string
    name: string
    num: number
  }[]
}

const ChampionInfo: FC<ChampionInfoProps> = ({ latestVersion }) => {
  const params = useParams()
  const { champ_id } = params

  const [champion, setChampion] = useState<Champion>({
    id: "",
    image: "",
    name: "",
    title: "",
    tags: [],
    lore: "",
    info: {
      attack: 0,
      defense: 0,
      magic: 0,
      difficulty: 0,
    },
    allytips: [],
    enemytips: [],
    passive: {
      name: "",
      description: "",
      image: {
        full: "",
      },
    },
    spells: [
      {
        id: "",
        name: "",
        description: "",
      },
    ],
    skins: [
      {
        id: "",
        name: "",
        num: 0,
      },
    ],
  })

  useEffect(() => {
    if (latestVersion) {
      getChampionInfo()
    }
  }, [latestVersion])

  const getChampionInfo: () => void = async () => {
    const champions = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion/${champ_id}.json`
    )
    const { data } = await champions.json()
    setChampion(Object.values<Champion>(data)[0])
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
