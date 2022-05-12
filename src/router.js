import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/home-page";
import Transactions from "./pages/transactions-page";
import TransactionDetails from "./pages/transaction-details";
import NotFound from "./pages/404-page";

const routes = [
  {
    path: "/",
    name: "overview-route",
    component: HomePage,
  },
  {
    path: "/transactions-page",
    name: "transaction-route",
    component: Transactions,
  },
  {
    path: "/transactions-page/:id",
    name: "transaction-details-route",
    component: TransactionDetails,
  },
  {
    path: "/ts",
    redirect: "/transactions-page",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
