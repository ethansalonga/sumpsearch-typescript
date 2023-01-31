import { Progress } from "@chakra-ui/react"
import {
  RiSwordFill,
  RiShieldFill,
  RiScales3Fill,
  RiBookOpenFill,
  RiTeamFill,
} from "react-icons/ri"
import { useNavigate } from "react-router-dom"

function ChampionCard({
  id,
  image,
  name,
  title,
  attack,
  defense,
  magic,
  difficulty,
  roles,
}) {
  const progressBarMultiplier = 10
  const navigate = useNavigate()

  return (
    <div
      className="championCard flex flex-col"
      onClick={() => navigate(`/champion-info/${id}`)}
    >
      <img
        src={image}
        className="championCard__image"
      />
      <div className="championCard__name">
        {name} <span className="championCard__title">{title}</span>
      </div>
      <div className="championCard__stats">
        <div className="stat">
          <p className="stats__text">
            <RiSwordFill
              style={{ marginRight: "4px" }}
              className="stats__icon"
            />
            <span className="stats__textLabel">Attack</span>
          </p>
          <Progress
            value={attack * progressBarMultiplier}
            hasStripe
            height="18px"
            colorScheme="red"
            style={{ flexGrow: "1", borderRadius: "6px" }}
          />
        </div>
        <div className="stat">
          <p className="stats__text">
            <RiShieldFill
              style={{ marginRight: "4px" }}
              className="stats__icon"
            />
            <span className="stats__textLabel">Defense</span>
          </p>
          <Progress
            value={defense * progressBarMultiplier}
            hasStripe
            height="18px"
            colorScheme="green"
            style={{ flexGrow: "1", borderRadius: "6px" }}
          />
        </div>
        <div className="stat">
          <p className="stats__text">
            <RiBookOpenFill
              style={{ marginRight: "4px" }}
              className="stats__icon"
            />
            <span className="stats__textLabel">Magic</span>
          </p>
          <Progress
            value={magic * progressBarMultiplier}
            hasStripe
            height="18px"
            colorScheme="blue"
            style={{ flexGrow: "1", borderRadius: "6px" }}
          />
        </div>
        <div className="stat">
          <p className="stats__text">
            <RiScales3Fill
              style={{ marginRight: "4px" }}
              className="stats__icon"
            />
            <span className="stats__textLabel">Difficulty</span>
          </p>
          <Progress
            value={difficulty * progressBarMultiplier}
            hasStripe
            height="18px"
            colorScheme="purple"
            style={{ flexGrow: "1", borderRadius: "6px" }}
          />
        </div>
      </div>
      <div className="championCard__roles">
        <RiTeamFill style={{ marginRight: "4px" }} />
        <span className="stats__textLabel">Roles: {roles.join(", ")}</span>
      </div>
    </div>
  )
}

export default ChampionCard
