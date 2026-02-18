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
const INDEX = BASE_URL + "/"

export const ROUTE_MANAGER: RouteManager = {
  baseUrl: BASE_URL,
  indexUrl: INDEX,
  mapper: [
    { path: BASE_URL + "/", title: "Home", element: <HomeView />, hideInSidebar: true },
    { path: BASE_URL + "/banner", title: "Alliance Banner Resource", element: <BannerCalcView /> },
    { path: BASE_URL + "/notice", title: "Alliance Notice Template", element: <AllianceNoticeView /> },
  ],
}
