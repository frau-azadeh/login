"use client"
import React from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { Calendar } from "react-multi-date-picker"

export default function Example() {
  return (
    <div style={{ direction: "rtl" }}>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    <div style={{direction:"ltr"}}>
      <Calendar
              calendar={persian}
              locale={persian_fa}
            />
    </div>
    </div>
  )
}