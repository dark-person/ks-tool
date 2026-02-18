import "@/App.css"

import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router"

import { ThemeProvider } from "@/components/theme-provider"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ROUTE_MANAGER } from "@/route"
import { AppSidebar } from "@/sidebar/app-sidebar"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          <AppSidebar />
          <CoreApp />
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

function CoreApp() {
  const location = useLocation()
  const nagivate = useNavigate()

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink className="cursor-pointer" onClick={() => nagivate(ROUTE_MANAGER.indexUrl)}>
                Kingshot Calc
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{ROUTE_MANAGER.mapper.find((i) => i.path === location.pathname)?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <Routes>
          {ROUTE_MANAGER.mapper.map((item, idx) => (
            <Route key={"route-" + idx} path={item.path} element={item.element} />
          ))}
        </Routes>
      </div>
    </SidebarInset>
  )
}

export default App
