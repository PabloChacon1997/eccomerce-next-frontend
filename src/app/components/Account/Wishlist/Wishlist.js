import { WhisList } from "@/app/api";
import { useAuth } from "@/hooks";
import { size } from "lodash";
import { useEffect, useState } from "react";
import { NoResult } from "../../Shared";
import { GridGames } from "./GridGames";

const whislistCtrl = new WhisList();

export function Wishlist() {
  const [wishlist, setWishlist] = useState(null);
  const [reload, setReload] = useState(false);
  const { user } = useAuth();

  const onReload = () => setReload(prevState => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const response = await whislistCtrl.getAll(user.id);
        setWishlist(response.data);
      } catch (error) {
        console.error(error);
      }
    })()
  }, [reload])
  
  return size(wishlist) === 0 ? (
    <NoResult text="No tienes ningun juego en la lista de deseos" />
  ):(
    <GridGames wishlist={wishlist ?? []} onReload={onReload}/>
  );
}
