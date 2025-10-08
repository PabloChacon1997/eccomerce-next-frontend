"use client"
import { Game, Platform } from "@/app/api";
import { GridGames, Separator } from "@/app/components/Shared";
import { BasicLayout } from "@/app/layouts";
import { size } from "lodash";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

const platformCtrl = new Platform();
const gameCtrl = new Game();

export default  function PlatformPage({ searchParams }) {
  const params = useParams();
  const page = searchParams?.page ?? 1;
  const [games, setGames] = useState([]);
  const [platform, setPlatform] = useState(null);
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    (async () => {
      try {
        const responsePlatform = await platformCtrl.getBySlug(params?.platform);
        const reponseGames = await gameCtrl.getGamesByPlatform(params?.platform, page);
        setPlatform(responsePlatform);
        setGames(reponseGames.data);
        setPagination(reponseGames.meta);
      } catch (error) {
        console.error(error);
      }
    })()
  }, []);

  const hasProducts = size(games) > 0;

  return (
    <>
      <BasicLayout relative>
        <Container>
          <Separator height={50} />
          <h2>{platform?.title ?? ''}</h2>
          {hasProducts ? (
            <>
              <GridGames games={games} />
            </>
          ):(
            <p>Sin resultados</p>
          )}
          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  )
}
