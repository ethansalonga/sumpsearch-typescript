import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Explore from "./pages/Explore"
import ChampionInfo from "./pages/ChampionInfo"
import "./App.css"

function App() {
  const [championQuery, setChampionQuery] = useState<string>("")
  const [latestVersion, setLatestVersion] = useState<string>("")
  const [champions, setChampions] = useState<any[]>([])

  useEffect(() => {
    getLatestVersion()
  }, [])

  useEffect(() => {
    if (latestVersion) {
      getChampions()
    }
  }, [latestVersion])

  const getLatestVersion: () => void = async () => {
    const version = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    )

    setLatestVersion((await version.json())[0])
  }

  const getChampions: () => void  = async () => {
    const champions = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
    )
    const { data } = await champions.json()
    setChampions(Object.values(data))
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                championQuery={championQuery}
                setChampionQuery={setChampionQuery}
              />
            }
          />
          <Route
            path="/explore"
            element={
              <Explore
                champions={champions}
                championQuery={championQuery}
                setChampionQuery={setChampionQuery}
              />
            }
          />
          <Route
            path="/champion-info/:champ_id"
            element={<ChampionInfo latestVersion={latestVersion} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
