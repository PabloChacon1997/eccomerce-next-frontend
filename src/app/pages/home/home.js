import { Home } from "@/app/components/Home";
import { Separator } from "@/app/components/Shared";
import { BasicLayout } from "@/app/layouts/BasicLayout";

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastGamePublished />
        <Separator height={100} />
      </BasicLayout>
    </>
  )
}
