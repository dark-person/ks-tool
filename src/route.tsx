import HomeView from "@/HomeView"
import BannerCalcView from "@/modules/banner/BannerCalcView"
import AllianceNoticeView from "@/modules/notices/AllianceNoticeView"

type RouteItem = {
  path: string
  title: string
  element: React.ReactNode
  hideInSidebar?: boolean
}

type RouteManager = {
  baseUrl: string
  indexUrl: string
  mapper: RouteItem[]
}

const BASE_URL = "/ks-tool"

export const ROUTE_MANAGER: RouteManager = {
  baseUrl: BASE_URL,
  indexUrl: "/",
  mapper: [
    { path: "/", title: "Home", element: <HomeView />, hideInSidebar: true },
    { path: "/banner", title: "Alliance Banner Resource", element: <BannerCalcView /> },
    { path: "/notice", title: "Alliance Notice Template", element: <AllianceNoticeView /> },
  ],
}
