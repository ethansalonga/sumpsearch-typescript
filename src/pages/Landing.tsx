import { FC } from "react"
import Navbar from "../components/landing/navbar/Navbar"
import Main from "../components/landing/main/Main"

type LandingProps = {
  championQuery: string,
  setChampionQuery: (champion: string) => void
}

const Landing: FC<LandingProps> = ({ championQuery, setChampionQuery }) => {
  return (
    <div className="landing flex flex-col">
      <Navbar />
      <Main
        championQuery={championQuery}
        setChampionQuery={setChampionQuery}
      />
    </div>
  )
}

export default Landing
