import styles from "./AppLayout.module.css";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default function AppLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Sidebar />
      <main></main>
    </div>
  );
}
