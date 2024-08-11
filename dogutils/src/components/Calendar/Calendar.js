
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from '../../redux/eventsSlice';

function Calendar() {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.events);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    reminderTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      dispatch(addEvent({
        id: Date.now(),
        ...newEvent,
      }));
      setNewEvent({ title: '', date: '', time: '', reminderTime: '' }); // Сброс формы
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      events.forEach(event => {
        const eventDate = new Date(`${event.date}T${event.time}`);
        const reminderDate = new Date(eventDate.getTime() - (event.reminderTime * 60000)); // Минуты до события

        if (reminderDate <= now && now <= eventDate) {
          alert(`Напоминание: ${event.title}`);
        }
      });
    };

    const intervalId = setInterval(checkReminders, 60000); // Проверка каждую минуту

    return () => clearInterval(intervalId);
  }, [events]);

  return (
    <div>
      <h3>Календарь</h3>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Название события"
          value={newEvent.title}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="time"
          value={newEvent.time}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="reminderTime"
          placeholder="Напоминание за минут"
          value={newEvent.reminderTime}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEvent}>Добавить событие</button>
      </div>
      <div>
        {events.map(event => (
          <div key={event.id}>
            <p>{event.title} - {event.date} {event.time} (напоминание за {event.reminderTime} мин)</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
