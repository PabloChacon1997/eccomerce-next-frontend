"use client"
import { Game } from "@/app/api";
import { Cart } from "@/app/components/Cart";
import { CartLayout } from "@/app/layouts";
import { useCart } from "@/hooks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const gameCtrl = new Game();

export default function CartPage() {
  const params = useSearchParams();
  const currentStep = Number(params.get('step') ?? 1) ;
  const [games, setGames] = useState([])
  const { cart } = useCart();
  useEffect(() => {
    (async() => {
      try {
        const data = [];
        for await (const item of cart) {
          const response = await gameCtrl.getGameById(item?.id ?? '');
          data.push({...response.data, quantity: item.quantity})
        }
        setGames(data);
      } catch (error) {
        console.error(error)
      }
    })()
  }, [cart])
  
  return (
    <>
      <CartLayout>
        { currentStep === 1 && <Cart.StepOne games={games}/> }
        { currentStep === 2 && <Cart.StepTwo games={games}/> }
        { currentStep === 3 && <p>Step Three</p> }
      </CartLayout>
    </>
  )
}
