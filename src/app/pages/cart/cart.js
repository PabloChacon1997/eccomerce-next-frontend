"use client"
import { Game } from "@/app/api";
import { CartLayout } from "@/app/layouts";
import { useCart } from "@/hooks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const gameCtrl = new Game();

export default function CartPage() {
  const params = useSearchParams();
  const currentStep = Number(params.get('step')) ?? 1;
  const [games, setGames] = useState(null)
  const { cart } = useCart();
  useEffect(() => {
    (async() => {
      try {
        const data = [];
        for await (const item of cart) {
          const response = await gameCtrl.getGameById(item?.id ?? '');
          data.push({...response.data, quantity: item.quantity})
        }
        console.log(data);
        setGames(data);
      } catch (error) {
        console.error(error)
      }
    })()
  }, [cart])
  
  return (
    <>
      <CartLayout>
        { currentStep === 1 && <p>Step One</p> }
        { currentStep === 2 && <p>Step Two</p> }
        { currentStep === 3 && <p>Step Three</p> }
      </CartLayout>
    </>
  )
}
