import { Info } from "@/app/components/Account/Info";
import { BasicLayout } from "@/app/layouts";

export default function AccountPage() {
  return (
    <>
      <BasicLayout isContainer relative>
        <Info />
      </BasicLayout>
    </>
  )
}
