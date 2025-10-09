"use client"
import { useEffect, useState } from "react";
import { BasicLayout } from "@/app/layouts";
import { Game } from "@/app/components/Game";
import { useParams } from "next/navigation";

import { Game as GameCtrl} from "@/app/api";
import { Separator } from "@/app/components/Shared";

const gameCtrl = new GameCtrl();

export default function GamePage() {
  const { game } = useParams();
  const [videoGame, setVideoGame] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const reponse = await gameCtrl.getBySlug(game);
        setVideoGame(reponse);
        console.log(reponse);
      } catch (error) {
        console.error(error);
      }
    })()
  }, []);
  return (
    <>
      <BasicLayout>
        <Game.HeaderWallpaper image={videoGame?.wallpaper?.url ?? ''}/>
        <Game.Panel gameId={videoGame?.id ?? 0} game={videoGame}/>
        <Separator height={50} />
      </BasicLayout>
    </>
  )
}