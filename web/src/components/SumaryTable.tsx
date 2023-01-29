import { useEffect, useState } from "react";
import { HabitDay } from "./HabitDay";
import { GenerateDatesFromYearBeggining } from "@/utils/generate_dates_from_year_beggining";
import { api } from "@/libs/axios";
import dayjs from "dayjs";



type sumaryProps  = {
    
    id: string
    date: string
    completed: number,
    amount: number

}[]

export  function SumaryTable(){
    const [sumary, setSumary]  = useState<sumaryProps>([])



    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'D' ]
    const sumaryDates = GenerateDatesFromYearBeggining()
    
    const minimumSumaryDatesSize =  7  * 18;
    const amountDaysToFill = minimumSumaryDatesSize - sumaryDates.length
    const minimumSumaryArray = Array.from({length: amountDaysToFill}, (_,index) => {
        return index + 1
    })


    async function featchSumary(){
        try {
            const response = await api.get('/summary')
            setSumary(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {featchSumary()}, [])
    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 gap-3">
                {weekDays.map((weekDay, index) => {
                    return (
                        <div key={`${weekDay}- ${index}`} className="w-10 h-10 flex justify-center items-center">
                            <span key={`${weekDay}-${index}`} className="text-zinc-400 text-xl font-bold ">{weekDay}</span>
                        </div>
                    )
                })}
            </div>
            <main className="grid grid-rows-7 grid-flow-col gap-3 ">
                {sumaryDates.map(date =>  {
                    const dayInSumary = sumary.find(day => dayjs(date).isSame(day.date,'day'))
                    console.log(dayInSumary)
                    return (
                        <HabitDay
                            completed={dayInSumary?.completed}
                            amount={dayInSumary?.amount}
                            date={date}
                            key={date.toISOString()}
                        />
                    )
                })}
                {amountDaysToFill > 0 && minimumSumaryArray.map(index => {
                    return (
                        <div key={index}className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"></div>
                    )
                })}

            </main>
        </div>
    )
}