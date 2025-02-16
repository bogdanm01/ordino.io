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
import SidebarNavButton from "../Sidebar/SidebarNavButton/SideBarNavButton";

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
            <SidebarNavButton notificationCount={0} active={true}>
              <HiOutlineChartPie size={24} />
              Dashboard
            </SidebarNavButton>
            <SidebarNavButton notificationCount={3}>
              <HiOutlineInformationCircle size={24} />
              Notice Board
            </SidebarNavButton>
            <SidebarNavButton>
              <HiOutlineUserGroup size={24} />
              Community
            </SidebarNavButton>
          </div>
          <div>
            <span className={styles.groupLabel}>
              EMPLOYEES <HiChevronDown />
            </span>
            <SidebarNavButton>
              <HiOutlineUsers size={24} />
              Employees
            </SidebarNavButton>
            <SidebarNavButton>
              <HiOutlineUserAdd size={22} />
              Add Employee
            </SidebarNavButton>
            <SidebarNavButton>
              <HiOutlineCalendarDays size={24} />
              Vacations
            </SidebarNavButton>
          </div>
          <div>
            <span className={styles.groupLabel}>
              PROJECTS AND REPORTS <HiChevronDown />
            </span>
            <SidebarNavButton>
              <HiOutlineBriefcase size={24} scale={24} />
              Projects
            </SidebarNavButton>
            <SidebarNavButton>
              <HiOutlineClipboardCheck size={24} />
              Reports
            </SidebarNavButton>
          </div>
          <div>
            <span className={styles.groupLabel}>
              SETTINGS <HiChevronDown />
            </span>
            <SidebarNavButton>
              <HiOutlineCog6Tooth size={24} />
              Settings
            </SidebarNavButton>
          </div>
        </nav>
      </aside>
      <main></main>
    </div>
  );
}
