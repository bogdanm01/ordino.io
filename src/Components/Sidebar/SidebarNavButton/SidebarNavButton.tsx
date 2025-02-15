import { ReactNode } from "react";
import styles from "./SideBarNavButton.module.css";

interface SidebarNavButtonProps {
  children: ReactNode;
  notificationCount?: number;
  active?: boolean;
}

export default function SidebarNavButton({
  children,
  notificationCount,
  active = false,
}: SidebarNavButtonProps) {
  return (
    <button className={`${styles.navButton} ${active ? styles.active : ""}`}>
      {children}
      {notificationCount && notificationCount > 0 ? (
        <span>{notificationCount}</span>
      ) : null}
    </button>
  );
}
