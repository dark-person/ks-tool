import { CheckCircle2, XCircle } from "lucide-react"

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

import type { TroopResultData } from "@/modules/troops/viking/data"

/**
 * Round up given number, and format it to standard format.
 * @param num  number to be format
 * @returns standard format string of given `num`, or empty string if `num` is null
 */
function roundUpAndFormat(num: number): string {
  if (num == null) {
    return ""
  }

  // Roundup first
  return Math.ceil(num).toLocaleString("en-US", { minimumFractionDigits: 0 })
}

type DetailResultDialogContent = {
  data: TroopResultData
}

/** Dialog container to show detail viking troop result.
 *
 * Developer MUST wrap this element with `DialogContent`.
 */
export function DetailResultDialogContent({
  data,
}: Readonly<DetailResultDialogContent>) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Detail Result on Troop Numbers</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>

      <div className="w-full max-w-sm rounded-md border">
        <Table>
          <TableBody>
            <TableRow key={"total-troop-row"}>
              <TableCell className="font-medium">Total Troop to Send</TableCell>
              <TableCell className="flex justify-end">
                {roundUpAndFormat(data.totalTroop)}
              </TableCell>
            </TableRow>

            <TableRow key={"minimum-capacity-row"}>
              <TableCell className="font-medium">
                Minimum Capacity to Send All
              </TableCell>
              <TableCell className="flex justify-end">
                {roundUpAndFormat(data.minimumCapacity)}
              </TableCell>
            </TableRow>

            {data.dataRow.map((item) => (
              <TableRow key={item.label}>
                <TableCell className="font-medium">{item.label}</TableCell>
                <TableCell className="flex justify-end">
                  {item.actualNumber > data.minimumCapacity ? (
                    <CheckCircle2 className="mr-3 h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="mr-3 h-5 w-5 text-red-500" />
                  )}{" "}
                  {roundUpAndFormat(item.actualNumber)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
