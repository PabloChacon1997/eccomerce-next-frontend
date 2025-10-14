import { WhisList } from "@/app/api";
import { useAuth } from "@/hooks";
import { useEffect, useState } from "react";

const whislistCtrl = new WhisList();

export function Wishlist() {
  const [wishlist, setWishlist] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    (async () => {
      try {
        const response = await whislistCtrl.getAll(user.id);
        setWishlist(response);
      } catch (error) {
        console.error(error);
      }
    })()
  }, [])
  
  return (
    <div>
      <h2>Wishlist</h2>
    </div>
  )
}
