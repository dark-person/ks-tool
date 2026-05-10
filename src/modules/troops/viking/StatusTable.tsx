import { CheckCircle2, XCircle } from "lucide-react"

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

import type { TroopResultData } from "@/modules/troops/viking/data"

type TroopSimpleResultTableProps = {
  data: TroopResultData
}

/** Simple table to show simple result of viking troop. */
export default function SimpleResultTable({
  data,
}: Readonly<TroopSimpleResultTableProps>) {
  return (
    <div className="w-full max-w-sm rounded-md border">
      <Table>
        <TableBody>
          {data.dataRow.map((item) => (
            <TableRow key={item.label}>
              <TableCell className="font-medium">{item.label}</TableCell>
              <TableCell className="flex justify-end">
                {item.actualNumber > data.minimumCapacity ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
