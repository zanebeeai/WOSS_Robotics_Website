import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import clsx from "clsx";
import {
  isSameDay,
  parseISO,
  startOfMonth,
  endOfMonth,
  addMonths,
  eachDayOfInterval,
  startOfWeek,
  subDays,
} from "date-fns";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";
import { scheduleDates } from "@/lib/lists/ScheduleDates";

export interface ScheduleEvent {
  date: string;
  event: string;
  event_type: string;
}

const getDaysInMonth = (date: Date): Date[] => {
  const firstDay = startOfMonth(date);
  const lastDay = endOfMonth(date);
  return eachDayOfInterval({ start: firstDay, end: lastDay });
};

const SchedulePage = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [maxDate, setMaxDate] = useState<Date>(() => {
    const latestDate = Math.max(
      ...scheduleDates.map((event) => parseISO(event.date).getTime())
    );

    return new Date(latestDate);
  });

  const minDate = new Date();

  const startOfWeekDate = startOfWeek(startOfMonth(currentMonth));

  const daysOfPreviousMonth = eachDayOfInterval({
    start: startOfWeekDate,
    end: subDays(startOfMonth(currentMonth), 1),
  });

  const days = getDaysInMonth(currentMonth);

  const allDays = [...daysOfPreviousMonth, ...days];

  useEffect(() => {
    // Additional logic can be added here if needed
  }, [currentMonth]);

  const isPreviousMonthDisabled =
    currentMonth <= minDate ||
    !scheduleDates.some((event) => {
      const prevMonth = addMonths(currentMonth, -1);
      const prevMonthFirstDay = startOfMonth(prevMonth);
      const prevMonthLastDay = endOfMonth(prevMonth);

      return (
        parseISO(event.date).getTime() >= prevMonthFirstDay.getTime() &&
        parseISO(event.date).getTime() <= prevMonthLastDay.getTime()
      );
    });

  const isNextMonthDisabled =
    currentMonth >= maxDate ||
    !scheduleDates.some((event) => {
      const nextMonth = addMonths(currentMonth, 1);
      const nextMonthFirstDay = startOfMonth(nextMonth);
      const nextMonthLastDay = endOfMonth(nextMonth);

      return (
        parseISO(event.date).getTime() >= nextMonthFirstDay.getTime() &&
        parseISO(event.date).getTime() <= nextMonthLastDay.getTime()
      );
    });

  const goToMonth = (offset: number): void => {
    let newMonth = addMonths(currentMonth, offset);

    if (newMonth < minDate) {
      newMonth = minDate;
    } else if (newMonth > maxDate) {
      newMonth = maxDate;
    }

    setCurrentMonth(newMonth);
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const firstDayOfWeek = startOfWeek(currentMonth);

  return (
    <>
      <Head>
        <title>Schedule [6070: Gryphon Machine]</title>
      </Head>
  
      <Header
        title="Schedule"
        subtitle="📅 View our upcoming and previous events for 6070"
      />
  
      <div className="flex flex-col items-center">
        <div className="flex justify-between md:w-[939px] mb-4 text-2xl">
          <button
            onClick={() => goToMonth(-1)}
            className={clsx("flex items-center text-sm", {
              "opacity-50 cursor-not-allowed": isPreviousMonthDisabled,
            })}
          >
            <FaArrowLeft className="mr-2" /> Previous Month
          </button>
          <span className="font-bold">
            {currentMonth.toLocaleString("default", { month: "long" })}{" "}
            {currentMonth.getFullYear()}
          </span>
          <button
            onClick={() => goToMonth(1)}
            className={clsx("flex items-center text-sm", {
              "opacity-50 cursor-not-allowed": isNextMonthDisabled,
            })}
          >
            Next Month <FaArrowRight className="ml-2" />
          </button>
        </div>
  
        <div className="border-2 border-gray-600 rounded-lg md:w-[939px] px-5 py-4 grid grid-cols-7 text-center gap-2">
          {daysOfWeek.map((dayOfWeek, idx) => (
            <div key={idx} className="text-gray-400">
              {dayOfWeek}
              {allDays
                .filter(day => day.getDay() === (idx + 7) % 7) 
                .map((day, idx) => (
                  <div
                    key={idx}
                    className={clsx("flex flex-col items-center justify-center h-24 bg-[#191919] border border-[#2A2A2A] rounded my-2 relative", {
                      "bg-[#045cd2]": isSameDay(day, new Date()),
                    })}
                  >
                    <span className={clsx("text-gray-400", {
                      "text-white bg-[#045cd2] text-white rounded-full py-1 px-3": isSameDay(day, new Date()),
                    })}>
                      {day.getDate()}
                    </span> 
                    {scheduleDates
                      .filter((event) => isSameDay(parseISO(event.date), day))
                      .map((event, idx) => (
                        <span key={idx} className="text-white text-[12px] mt-2">
                          {event.event}
                        </span>
                      ))}
                    {scheduleDates
                      .filter((event) => isSameDay(parseISO(event.date), day) && event.event_type === "Competition") 
                      .map((event, idx) => (
                        <span
                          key={idx}
                          className="bg-[#d20404] w-4 h-4 rounded-full absolute -top-1.5 -right-1.5" 
                        ></span>
                      ))}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
  
      <Footer />
    </>
  );
};

export default SchedulePage;
