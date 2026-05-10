import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import {
  DEFAULT_USER_INPUT,
  type UserInput,
} from "@/modules/troops/viking/data"
import { DetailResultDialogContent } from "@/modules/troops/viking/DetailResultDialog"
import InputForm from "@/modules/troops/viking/InputForm"
import SimpleResultTable from "@/modules/troops/viking/StatusTable"
import calcVikingTroop from "@/modules/troops/viking/logic"

// local storage key of browser
const STORAGE_KEY = "viking-troop-storage"

/** View for calculator that analysis which buff to use to send all unwanted troop during viking event */
export default function VikingTroopSendCalcView() {
  // Init state from localStorage
  const [userInput, setUserInput] = useState<UserInput>(() => {
    if (globalThis.window !== undefined) {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    }
    return DEFAULT_USER_INPUT
  })

  // Write to localStorage when updated
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userInput))
  }, [userInput])

  return (
    <div className="mx-auto w-full max-w-5xl p-4">
      <h1 className="mb-8 scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
        Can I send All Infantry & Cavalry?
      </h1>

      <p className="mb-4">
        Check your current capacity is allowed to keep Archer only in your city,
        or any buff is needed.
      </p>

      <div className="md:grid md:grid-cols-3 md:gap-4">
        <Card className="mb-3 md:col-span-2">
          <CardContent className="space-y-6">
            <InputForm input={userInput} setInput={setUserInput} />
          </CardContent>
        </Card>

        <Card className="mb-3">
          <CardContent className="space-y-6">
            <h5>
              <b>TLDR:</b>
            </h5>

            <SimpleResultTable data={calcVikingTroop(userInput)} />

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" type="button">
                  Show Detail Calculation
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md">
                <DetailResultDialogContent data={calcVikingTroop(userInput)} />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>

      <div className="py-5 text-muted-foreground">
        <p className="my-3">
          The formula of troop capacity used in this page is:
        </p>

        <span className="m-2 rounded-sm bg-zinc-900 p-2">
          (Initial Capacity + Pet Skill Capacity) * (1 + Gem Buff Percentage)
        </span>
      </div>
    </div>
  )
}
