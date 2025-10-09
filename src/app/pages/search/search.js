"use client"
import { Game } from "@/app/api";
import { GridGames, NoResult, Pagination, Separator } from "@/app/components/Shared";
import { BasicLayout } from "@/app/layouts";
import { size } from "lodash";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

const gameCtrl = new Game();

export default function SearchPage({searchParams}) {
  const { s, page = 1 } = searchParams;
  const [games, setGames] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    document.getElementById("search-games").focus();
  }, [])
  useEffect(() => {
    (async () => {
      try {
        const reponse = await gameCtrl.searchGames(s, page);
        setGames(reponse.data)
        setPagination(reponse.meta.pagination)
        setSearchText(s);
      } catch (error) {
        console.error(error);
      }
    })()
  }, [s])

  const hasResult = size(games) > 0;
  
  return (
    <BasicLayout relative isOpenSearch={true}>
      <Container>
        <Separator height={30} />
        <h2>Buscando: { searchText }</h2>
        {hasResult ? (
          <>
            <GridGames games={games} />
            <Separator height={30} />
            <Pagination currentPage={pagination?.page ?? 0} totalPages={pagination?.pageCount ?? 0} />
          </>
        ):(
          <NoResult text="No se han encontrado resultados" />
        )}
        <Separator height={100} />
      </Container>
    </BasicLayout>
  )
}
