
import React from 'react';
import Calendar from '../components/Calendar/Calendar';
import UserSelector from '../components/UserSelector/UserSelector';

function CalendarPage() {
  return (
    <div>
      <h2>Календарь</h2>
      <UserSelector />
      <Calendar />
    </div>
  );
}

export default CalendarPage;
