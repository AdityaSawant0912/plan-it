import React from 'react'
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
export default function test() {
  return (
    <>
      <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css" />
      <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </>
  )
}
