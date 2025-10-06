import { Home } from "@/app/components/Home";
import { Separator } from "@/app/components/Shared";
import { BasicLayout } from "@/app/layouts/BasicLayout";
import { Container } from "semantic-ui-react";

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastGamePublished />
        <Separator height={100} />
        <Container>
          <Home.LatestGames title='Ultimos lanzamientos'/>
        </Container>
      </BasicLayout>
    </>
  )
}
