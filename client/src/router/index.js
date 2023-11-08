import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import PayrollView from "../views/PayrollView.vue";
import SelfServiceView from "../views/SelfServiceView.vue";
// import UserRegistrationView from "../views/UserRegistrationView.vue";
import RecruitmentView from "../views/RecruitmentView.vue";
import PersonnelView from "../views/PersonnelView.vue";
import ReportsView from "../views/ReportsView.vue";
import AttendanceView from "../views/AttendanceView.vue";
import LibrariesView from "../views/LibrariesView.vue";
import AccessControlView from "../views/AccessControlView.vue";

// Recruitment Router
import PublishingView from "../views/RecPublishment/RecPublishingView.vue";
import ApplicantsView from "../views/RecPublishment/ApplicantsView.vue";
import JobLibrariesView from "../views/RecPublishment/JobLibrariesView.vue";
import EmployeeTrainingsView from "../views/RecPublishment/EmployeeTrainingsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/hrmis",
      redirect: "/hrmis/login",
    }, // Redirect to login by default
    {
      path: "/hrmis/login",
      component: () => import("@/components/Login.vue"),
    },
    {
      path: "/hrmis/registration",
      component: () => import("@/components/Registration.vue"),
    },
    {
      path: "/hrmis/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/hrmis/payroll",
      name: "payroll",
      component: PayrollView,
    },
    {
      path: "/hrmis/selfservice",
      name: "selfservice",
      component: SelfServiceView,
    },
    {
      path: "/hrmis/recruitment",
      name: "recruitment",
      component: RecruitmentView,
    },
    {
      path: "/hrmis/personnel",
      name: "personnel",
      component: PersonnelView,
    },
    {
      path: "/hrmis/reports",
      name: "reports",
      component: ReportsView,
    },
    {
      path: "/hrmis/attendance",
      name: "attendance",
      component: AttendanceView,
    },
    {
      path: "/hrmis/libraries",
      name: "libraries",
      component: LibrariesView,
    },
    {
      path: "/hrmis/accesscontrol",
      name: "accesscontrol",
      component: AccessControlView,
    },
    // Recruitment
    {
      path: "/hrmis/recruitment/publishing",
      name: "publishing",
      component: PublishingView,
    },
    {
      path: "/hrmis/recruitment/applicants",
      name: "applicants",
      component: ApplicantsView,
    },
    {
      path: "/hrmis/recruitment/employeetrainings",
      name: "employeetrainings",
      component: EmployeeTrainingsView,
    },
  ],
});

export default router;
