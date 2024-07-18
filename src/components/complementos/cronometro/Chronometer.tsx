
import React, { useEffect, useState } from 'react';


import { ButtomChronometer } from './buttomChronometer';
import { ChronometerSqueleton } from '../../squeletons/Chronometer/ChronometerSqueleton';
import { useStopwatchDate } from '../../../customHooks/useStopwatchDate';
// Ajusta esta importación

export const Chronometer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { data, loading, error } = useStopwatchDate(9);

  if (loading) return <ChronometerSqueleton />;
  if (error) return <p>Error: {error.message}</p>;

  const employee = data?.employee;
  const stopwatchDate = new Date(employee.stopwatchDate);
  console.log("STOPWATCH", stopwatchDate)
  
  // Calcular la diferencia en milisegundos
  const diffMilliseconds = currentTime.getTime() - stopwatchDate.getTime();

  // Convertir milisegundos a segundos
  const totalSeconds = Math.floor(diffMilliseconds / 1000);
  
  // Calcular horas, minutos y segundos
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Formatear la salida con ceros a la izquierda
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <>
      <div className="mt-4 font-roboto font-bold text-24 text-black1">
        <span>{formattedHours}</span>:<span>{formattedMinutes}</span>:<span>{formattedSeconds}</span>
      </div>

      <ButtomChronometer />
    </>
  );
};





