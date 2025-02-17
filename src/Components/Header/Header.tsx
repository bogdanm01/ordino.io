import { Avatar } from "@mantine/core";

import styles from "./Header.module.css";

function Header() {
  return (
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
  );
}

export default Header;
