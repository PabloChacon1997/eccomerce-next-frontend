"use client"
import { Container } from "semantic-ui-react";

import { Separator } from "@/app/components/Shared";
import { Footer } from "@/app/components/Layout";

export function CartLayout(props) {
  const { children } = props;
  return (
    <>
      <p>HeaderCart</p>
      <Separator height={150} />
      <Container>{children}</Container>
      <Separator height={70}/>
      <Footer />
    </>
  )
}
