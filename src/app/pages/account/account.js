"use client"
import { Tab } from "semantic-ui-react";
import { BasicLayout } from "@/app/layouts";
import styles from './account.module.scss'
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
import { Settings, Info } from "@/app/components/Account";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  if (!user) {
    router.push("/");
    return null;
  }
  const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis pedidos...</p>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Lista de deseos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis lista de deseos...</p>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis direcciones...</p>
        </Tab.Pane>
      )
    },
    {
      menuItem: {
        icon: "settings",
        content: "Ajustes"
      },
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm />
        </Tab.Pane>
      )
    },
    {
      menuItem: {
        icon: "logout",
        content: "",
        onClick: logout
      }
    }
  ];
  return (
    <>
      <BasicLayout isContainer relative>
        <Info />
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} className={styles.tabs}/>
      </BasicLayout>
    </>
  )
}
