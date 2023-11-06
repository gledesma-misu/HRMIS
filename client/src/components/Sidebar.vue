<template>
  <sidebar-menu
    v-model:collapsed="collapsed"
    :menu="menu"
    :theme="selectedTheme"
    :show-one-child="true"
    @update:collapsed="onToggleCollapse"
    @item-click="onItemClick"
  />

  <div
    v-if="isOnMobile && !collapsed"
    class="sidebar-overlay"
    @click="collapsed = true"
  />
  <div id="demo" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
    <!-- <Header /> -->
    <div class="demo">
      <slot></slot>
    </div>
  </div>
</template>
  
<script>
import { h } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Header from "./Header/Header.vue";

const separator = h("hr", {
  style: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    margin: "20px",
  },
});

const faIcon = (props) => {
  return {
    element: h("div", [h(FontAwesomeIcon, { size: "lg", ...props })]),
  };
};

export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          header: "CWC-HRMIS",
          hiddenOnCollapse: true,
        },
        {
          href: "/hrmis/dashboard",
          title: "Dashboard",
          icon: faIcon({ icon: "fa-solid fa-tv" }),
        },
        {
          href: "/hrmis/payroll",
          title: "Payroll",
          icon: faIcon({ icon: "fa-solid fa-money-check-dollar" }),
        },
        {
          title: "Recruitment",
          icon: faIcon({ icon: "fa-solid fa-folder-open" }),
          child: [
            {
              href: "/hrmis/recruitment/publishing",
              title: "Recruitment Publishing",
              icon: faIcon({ icon: "fa-solid fa-file-alt", size: "sm" }),
            },
            {
              href: "/hrmis/recruitment/applicants",
              title: "Applicants",
              icon: faIcon({ icon: "fa-solid fa-file-alt", size: "sm" }),
            },
            {
              title: "Job Libraries",
              icon: faIcon({ icon: "fa-solid fa-file-alt", size: "sm" }),
              child: [
                { title: "Application Status",icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" }) },
                { title: "Educational Attainment",icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" })  },
                { title: "Eligibility Requirement" ,icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" }) },
                { title: "Experience Levels" ,icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" }) },
                { title: "Training Requirements",icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" }) },
                { title: "Position Details" ,icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" }) },
                { title: "Fund Source" ,icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" }) },
                { title: "Positions" ,icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" }) },
                { title: "Parenthetical Title" ,icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" }) },
                {title: "Position Type",icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" }) },
                { title: "Position Levels" ,icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" }) },
                { title: "Service Record" ,icon: faIcon({ icon: "fa-solid fa-circle-dot", size: "2xs" }) },
              ],
            },
            {
              href: "/hrmis/recruitment/applicants",
              title: "Employee Trainings",
              icon: faIcon({ icon: "fa-solid fa-file-alt", size: "sm" }),
            },
          ],
        },
        {
          title: "Personnel",
          icon: faIcon({ icon: "fa-solid fa-person-chalkboard" }),
          child: [
            {
              title: "Employee Appointment",
              icon: faIcon({ icon: "fa-solid fa-file-alt", size: "sm" }),
            },
            {
              title: "Compensation",
              icon: faIcon({ icon: "fa-solid fa-file-alt", size: "sm" }),
              child: [
                {
                  title: "Service Record",
                },
              ],
            },
            {
              title: "Other Generations",
              icon: faIcon({ icon: "fa-solid fa-file-alt", size: "sm" }),
              child: [
                { title: "Pre-Payroll(Daily)" },
                { title: "Re-populate DTR" },
              ],
            },
            {
              title: "Leave Card",
              icon: faIcon({ icon: "fa-solid fa-file-alt", size: "sm" }),
            },
            {
              title: "Service Card",
              icon: faIcon({ icon: "fa-solid fa-file-alt", size: "sm" }),
            },
            {
              title: "Records Management",
              icon: faIcon({ icon: "fa-solid fa-file-alt", size: "sm" }),
              child: [
                { title: "Digitized Files" },
                { title: "Secured Files" },
                { title: "User Management" },
                { title: "Audit Trail" },
              ],
            },
          ],
        },
        {
          href: "",
          title: "Reports",
          icon: faIcon({ icon: "fa-solid fa-print" }),
          child: [
            { title: "Summary of present employee" },
            { title: "(OBSU)" },
            { title: "Attendance" },
          ],
        },
        {
          href: "",
          title: "Attendance",
          icon: faIcon({ icon: "fa-solid fa-circle-check" }),
        },
        {
          href: "",
          title: "Download Manual",
          icon: faIcon({ icon: "fa-solid fa-book" }),
        },
        {
          href: "",
          title: "Libraries",
          icon: faIcon({ icon: "fa-solid fa-address-card" }),
          child: [
            {
              title: "Agency Libraries",
              child: [{ title: "Agency Details" }, { title: "Directorate" }],
            },
            {
              title: "Compensation Libraries",
              child: [
                { title: "PPA" },
                { title: "Salary Step Incremenrts" },
                { title: "Deductions(Permanent)" },
                { title: "Salary Step Increments" },
              ],
            },
            {
              title: "Personal Libraries",
              child: [
                { title: "Sex" },
                { title: "Training Types" },
                { title: "Relationships" },
                { title: "Info Questions" },
                { title: "Education Levels" },
                { title: "Civil Status" },
              ],
            },
            {
              title: "Attendance Libraries",
              child: [
                { title: "Holidays" },
                { title: "Holiday Type" },
                { title: "Country List" },
                { title: "Training Categories" },
                { title: "Trainings" },
                { title: "Leave Types" },
                { title: "Shifts" },
                { title: "Deductions" },
                { title: "Pagibig Matrix" },
                { title: "Earnings" },
                { title: "Flag Ceremony Library" },
                { title: "Calendar Month" },
                { title: "Calendar Year" },
              ],
            },
            {
              title: "Location Libraries",
              child: [
                { title: "Regions" },
                { title: "Provinces" },
                { title: "Cities" },
                { title: "Barangay" },
              ],
            },
            {
              title: "Personnel Libraries",
              child: [
                { title: "Employee Special Leave" },
                { title: "Biometric Raw Dump" },
              ],
            },
            { title: "COE Purpose" },
            { title: "Document Type" },
          ],
        },
        {
          href: "",
          title: "Access Controls",
          icon: faIcon({ icon: "fa-solid fa-user-lock" }),
          child: [
            { title: "Users" },
            { title: "Access Levels" },
            { title: "Audit Trail" },
          ],
        },
        {
          href: "",
          title: "Change Password",
          icon: faIcon({ icon: "fa-solid fa-cog" }),
        },
        {
          href: "/hrmis",
          title: "Logout",
          icon: faIcon({ icon: "fa-solid fa-right-to-bracket" }),
        },
      ],
      collapsed: false,
      themes: [
        {
          name: "Default theme",
          input: "",
        },
        {
          name: "White theme",
          input: "white-theme",
        },
      ],
      selectedTheme: "white-theme",
      isOnMobile: false,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  components: {
    Header,
  },
  methods: {
    onToggleCollapse(collapsed) {
      console.log("onToggleCollapse");
    },
    onItemClick(event, item) {
      console.log("onItemClick");
    },
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    },
  },
};
</script>
  
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 28px;
  background-color: #f2f4f7;
  color: #000000;
}

#demo {
  padding-left: 280px;
  transition: 0.5s ease;
}

#demo.collapsed {
  padding-left: 65px;
}

#demo.onmobile {
  padding-left: 65px;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.demo {
  padding: 20px;
}

.container {
  max-width: 900px;
}
</style>
  