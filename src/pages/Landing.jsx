import Navbar from "../components/landing/navbar/Navbar"
import Main from "../components/landing/main/Main"

function Landing({ championQuery, setChampionQuery }) {
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
