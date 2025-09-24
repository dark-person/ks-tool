import { useEffect, useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { type BannerResource, calcBanner } from "@/modules/banner/calcBanner"

export default function BannerCalcView() {
  const [builtBanner, setBuiltBanner] = useState<number | undefined>(undefined)
  const [targetBanner, setTargetBanner] = useState<number | undefined>(undefined)

  const [usedResource, setUsedResource] = useState<BannerResource | undefined>(undefined)
  const [requiredResource, setRequiredResource] = useState<BannerResource | undefined>(undefined)

  useEffect(() => {
    if (builtBanner === undefined || isNaN(builtBanner)) {
      setUsedResource(undefined)
      return
    }

    setUsedResource(calcBanner(0, builtBanner))
  }, [builtBanner])

  useEffect(() => {
    if (targetBanner === undefined || builtBanner === undefined) {
      setRequiredResource(undefined)
      return
    }

    if (isNaN(targetBanner)) {
      setRequiredResource(undefined)
      return
    }

    if (targetBanner <= builtBanner) {
      setRequiredResource(undefined)
      return
    }

    setRequiredResource(calcBanner(builtBanner, targetBanner))
  }, [builtBanner, targetBanner])

  function formatNumber(num: number | undefined): string {
    if (num === undefined) {
      return "N/A"
    }

    // To Million
    const divided = num / 1000000
    return divided.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " M"
  }

  return (
    <>
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-8">
        Alliance Banner Resource Calculator
      </h1>
      <div className="flex justify-center-safe">
        <div className="text-left w-md ">
          <Label htmlFor="word" className="my-3 ms-2 inline-block">
            Built Number of Banner
          </Label>
          <Input
            id="built-banner-number"
            value={builtBanner}
            onChange={(e) => setBuiltBanner(e.currentTarget.valueAsNumber)}
            type="number"
            className="disabled:!opacity-100"
          />

          <Label htmlFor="word" className="my-3 ms-2 inline-block">
            Target Number of Banner
          </Label>
          <Input
            id="target-banner-number"
            type="number"
            value={targetBanner}
            onChange={(e) => setTargetBanner(e.currentTarget.valueAsNumber)}
            className="disabled:!opacity-100"
          />
        </div>
      </div>

      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="text-center">Bread</TableHead>
            <TableHead className="text-center">Wood</TableHead>
            <TableHead className="text-center">Stone</TableHead>
            <TableHead className="text-center">Iron</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Used</TableCell>
            <TableCell>{formatNumber(usedResource?.Bread)}</TableCell>
            <TableCell>{formatNumber(usedResource?.Wood)}</TableCell>
            <TableCell>{formatNumber(usedResource?.Stone)}</TableCell>
            <TableCell>{formatNumber(usedResource?.Iron)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Need</TableCell>
            <TableCell>{formatNumber(requiredResource?.Bread)}</TableCell>
            <TableCell>{formatNumber(requiredResource?.Wood)}</TableCell>
            <TableCell>{formatNumber(requiredResource?.Stone)}</TableCell>
            <TableCell>{formatNumber(requiredResource?.Iron)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
