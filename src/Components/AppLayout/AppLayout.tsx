import { Avatar } from "@mantine/core";
import styles from "./AppLayout.module.css";

import Sidebar from "../Sidebar/Sidebar";

export default function AppLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.headerWrap}>
        <header>
          Dashboard
          <Avatar
            name={"Bogdan Milojevic"}
            color="initials"
            allowedInitialsColors={["blue", "red"]}
          />
        </header>
      </div>
      <Sidebar />
      <main></main>
    </div>
  );
}
