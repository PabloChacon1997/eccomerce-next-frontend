import { useEffect, useState } from "react";

import { Game } from "@/app/api";
import { GridGames } from "../../Shared";


const gameCtrl = new Game();


export function LatestGames(props) {
  const { title, limit = 9, platformId = null } = props;
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const reponse = await gameCtrl.getLatestPublished({ limit, platformId });
        setGames(reponse.data);
      } catch (error) {
        console.error(error);
      }
    })()
  }, []);
  
  if (!games) return null;

  return (
    <div>
      <h2>{title}</h2>
      <GridGames games={games} />
    </div>
  )
}
