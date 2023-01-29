import { api } from '@/libs/axios';
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Checkbox } from './Checkbox';
import {ProgressBar} from './ProgessBar'


interface HabitDayProps {
    date: Date
    completed?: number,
    amount?: number,
}
type HabitDaysProps = {
    id: string
    title: string
    created_at: string
}[]
export function HabitDay({completed=0,amount=0, date}:HabitDayProps){
    const [habitDays, setHabitDays] =  useState<HabitDaysProps>([])

    async function fetchHabitsDays(){
        if(amount <= 0){
            return
        }

        const response = await api(`/day?date=${date}`)
        setHabitDays(response.data)
        console.log(response.data)
    }
    const completePercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0
    
    useEffect(() => {
        fetchHabitsDays()
    },[])
    return (
        <Popover.Root>
            <Popover.Trigger 
                type='button' 
                className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
                    'bg-zinc-900 border-2 border-zinc-800': completePercentage === 0,
                    'bg-violet-900 border-violet-700': completePercentage > 0 && completePercentage < 20,
                    'bg-violet-800 border-violet-600': completePercentage >= 20 && completePercentage < 40,
                    'bg-violet-700 border-violet-500': completePercentage >= 40 && completePercentage < 60,
                    'bg-violet-600 border-violet-500': completePercentage >= 60 && completePercentage < 80,
                    'bg-violet-500 border-violet-400': completePercentage >= 80 
                })}
            />
            <Popover.Portal>
                <Popover.Content className='min-w-[320px] bg-zinc-900 flex flex-col rounded-2xl p-6'>
                    <span>terça-feira</span>
                    <span className='text-3xl font-extrabold leading-tight mt-1'>03/01</span>

                    <ProgressBar progress={completePercentage}/>
                    <section className='flex flex-col gap-3 mt-6'>
                            {
                                habitDays.map(day => (
                                    <Checkbox title='to aqui'/>
                                ))
                            }
                    </section>
                    <Popover.Arrow height={8}  width={8} className='fill-zinc-900'/>
                </Popover.Content>
            </Popover.Portal>

        </Popover.Root>

    )
}