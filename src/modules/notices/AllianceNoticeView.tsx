import { useEffect, useState } from "react"

import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ALLIANCE_NOTICE_OPTS } from "@/modules/notices/notice-options"

// local storage key of browser
const STORAGE_KEY = "alliance-notice-generate-storage"

/** View to generate alliance notice. */
export default function AllianceNoticeView() {
  // Init state from localStorage
  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    if (globalThis.window !== undefined) {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  const [generatedText, setGeneratedText] = useState("")
  const [copied, setCopied] = useState(false)

  // Update text generated when checkbox changed, and write to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedIds))

    const text = ALLIANCE_NOTICE_OPTS.filter((opt) => selectedIds.includes(opt.id))
      .map((opt) => opt.text)
      .join("\n\n")
    setGeneratedText(text)
    setCopied(false) // Reset copy state
  }, [selectedIds])

  // copy to clipboard function
  const copyToClipboard = async () => {
    if (!generatedText) {
      return
    }

    try {
      await navigator.clipboard.writeText(generatedText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Copy failed", err)
    }
  }

  const toggleOption = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="p-4 w-full max-w-2xl mx-auto">
      <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance mb-8">
        Alliance Notice Generator (Opinionated)
      </h1>

      <Card>
        <CardContent className="space-y-6">
          {/* Checkbox list with responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ALLIANCE_NOTICE_OPTS.filter((option) => !option.expired).map((option) => (
              <div key={option.id} className="flex items-center space-x-3 space-y-0">
                <Checkbox
                  id={option.id}
                  checked={selectedIds.includes(option.id)}
                  onCheckedChange={() => toggleOption(option.id)}
                />
                <Label htmlFor={option.id} className="text-sm font-medium leading-none cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          {/* Area for generated text */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="result">Generated (Length : {generatedText.length})</Label>
              <span className={generatedText.length <= 250 ? "invisible" : "text-red-500"}>
                WARNING: Exceed 250 Characters.
              </span>

              {/* Copy icon for mobile */}
              <Button
                variant="ghost"
                size="icon"
                onClick={copyToClipboard}
                disabled={!generatedText}
                className="sm:hidden h-8 w-8">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>

            <div className="relative">
              <Textarea
                id="result"
                value={generatedText}
                readOnly
                className="min-h-[180px] font-mono text-sm p-4 bg-muted/50"
              />
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              disabled={!generatedText}
              className="hidden sm:flex items-center gap-2">
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied ? "Text Copied" : "Copy Text"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
