import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import Login from "../pages/login/Login.vue";
import Register from "../pages/register/Register.vue";
import Hospital from "../pages/hospital/Hospital.vue";
import Doctor from "../pages/doctor/SearchDoctor.vue";
import Ambulance from "../pages/ambulance/Ambulance.vue";
import ListDoctor from "../pages/doctor/Doctor.vue";
import DetailDoctor from "../pages/doctor/DetailDoctor.vue";
import Discussion from "../pages/discussion/Discussion.vue";
import DetailDiscussion from "../pages/discussion/DetailDiscussion.vue";
import MedicalRecord from "../pages/medical/Medical_Record.vue";
import "../style.css";
// import Register from "@/pages/register/Register.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/hospital",
    component: Hospital,
  },
  {
    path: "/search-doctor",
    component: Doctor,
  },
  {
    path: "/ambulance",
    component: Ambulance,
  },
  {
    path: "/doctor/search",
    component: ListDoctor,
  },
  {
    path: "/detail/doctor/:id",
    component: DetailDoctor,
  },
  {
    path: "/discussion",
    component: Discussion,
  },
  {
    path: "/detail/discussion/:id",
    component: DetailDiscussion,
  },
  {
    path: "/medical-record",
    component: MedicalRecord,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
