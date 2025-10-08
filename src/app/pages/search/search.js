"use client"
import { BasicLayout } from "@/app/layouts";
import { useEffect } from "react";

export default function SearchPage() {
  useEffect(() => {
    document.getElementById("search-games").focus();
  }, [])
  
  return (
    <BasicLayout relative isOpenSearch={true}>
      <h2>Estamos en la busqueda</h2>
    </BasicLayout>
  )
}
