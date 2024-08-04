import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerComponent() {
  const [date, setDate] = React.useState(null)
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center p-40">
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left text-size-14 h-40 ",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-8 h-16 w-16" />
          {date ? format(date, "PPP") : <span className="text-size-14">Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0 border-primary-300">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>
  )
}
