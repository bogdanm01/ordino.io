import { Title, Avatar } from "@mantine/core";
import styles from "./AppLayout.module.css";
import {
  HiRocketLaunch,
  HiOutlineChartPie,
  HiOutlineInformationCircle,
  HiOutlineUsers,
  HiOutlineCalendarDays,
  HiOutlineBriefcase,
  HiOutlineCog6Tooth,
  HiOutlineUserGroup,
  HiChevronDown,
} from "react-icons/hi2";
import { HiOutlineClipboardCheck, HiOutlineUserAdd } from "react-icons/hi";

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
      <aside>
        <span className={styles.logo}>
          <div className={styles.logoImg}>
            <HiRocketLaunch size={26} />
          </div>
          <Title className={styles.title} order={2}>
            ordino.io
          </Title>
        </span>
        <nav>
          <div>
            <span className={styles.groupLabel}>
              OVERVIEW <HiChevronDown />
            </span>
            <button className={`${styles.navButton} ${styles.active}`}>
              <HiOutlineChartPie size={24} />
              Dashboard
            </button>
            <button className={styles.navButton}>
              <HiOutlineInformationCircle size={24} />
              Notice Board
              <span>3</span>
            </button>
            <button className={styles.navButton}>
              <HiOutlineUserGroup size={24} />
              Community
            </button>
          </div>
          <div>
            <span className={styles.groupLabel}>
              EMPLOYEES <HiChevronDown />
            </span>
            <button className={styles.navButton}>
              <HiOutlineUsers size={24} />
              Employees
            </button>
            <button className={styles.navButton}>
              <HiOutlineUserAdd size={22} />
              Add Employee
            </button>
            <button className={styles.navButton}>
              <HiOutlineCalendarDays size={24} />
              Vacations
            </button>
          </div>
          <div>
            <span className={styles.groupLabel}>
              PROJECTS AND REPORTS <HiChevronDown />
            </span>
            <button className={styles.navButton}>
              <HiOutlineBriefcase size={24} scale={24} />
              Projects
            </button>
            <button className={styles.navButton}>
              <HiOutlineClipboardCheck size={24} />
              Reports
            </button>
          </div>
          <div>
            <span className={styles.groupLabel}>
              SETTINGS <HiChevronDown />
            </span>
            <button className={styles.navButton}>
              <HiOutlineCog6Tooth size={24} />
              Settings
            </button>
          </div>
        </nav>
      </aside>
      <main></main>
    </div>
  );
}
