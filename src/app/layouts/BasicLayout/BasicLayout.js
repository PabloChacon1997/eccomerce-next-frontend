import { Container } from "semantic-ui-react";
import classNames from "classnames";

import styles from "./BasicLayout.module.scss";
import { TopBar } from "@/app/components/Layout";

export function BasicLayout(props) {
  const { children, isOpenSearch = false, isContainer = false, relative = false } = props;
  return (
    <>
      <TopBar isOpenSearch={isOpenSearch}/>
      <Container fluid>
        <div className={classNames({ [styles.relative]: relative })}>
          {isContainer ? <Container>{children}</Container>: children}
        </div>
      </Container>
      {/* TODO: Footer */}
    </>
  )
}
