import { api } from '@/libs/axios';
import * as Dialog  from '@radix-ui/react-dialog';
import { Check, X} from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Checkbox } from './Checkbox';


const avaliableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
]

export function NewHabitForm() {
    const [habit,setHabit] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    function updateHabit(habitText: string){
        setHabit(habitText)
    }

    function  handleToogleWeekDay(weekDay: number){
        if(weekDays.includes(weekDay)){
            const weekDaysWithoutOneDay = weekDays.filter(day => day !== weekDay)
            setWeekDays(weekDaysWithoutOneDay)
        }
        else {
            const weekDaysWithMoreOneDay = [...weekDays, weekDay]
            setWeekDays(weekDaysWithMoreOneDay)

        }
    }
    async function createNewHabit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        if(habit.trim() === ''){
            alert('preencha o campo se hábito')
            return
        }
        if(!weekDays.length){
            alert('preencha pelo menos um dia da semana')
            return
        }
        await api.post('/habit', {
            title: habit,
            weekDays
        })
   
        setHabit('')        
    }


    return (
        <form onSubmit={createNewHabit}className='flex flex-col mt-6'>
                <label htmlFor='habit' className='font-semibold'>Qual seu comprometimento?</label>
                <input  id='habit' className={`
                    bg-zinc-800 text-white h-14
                    flex items-center
                    px-4 mt-3
                    rounded-lg border-solid border-2 border-zinc-800
                    placeholder:text-zinc-400
                    
                `} 
                type="text" 
                autoFocus
                value={habit}
                onChange={(event) => updateHabit(event.target.value) }
                placeholder='Exercícios, dormir bem, etc...'
                />

                <section className='mt-4'>
                        <strong className='mb-3'>Qual a recorrência?</strong>
                        <div className={'flex flex-col gap-3 mt-3'}>
                           {avaliableWeekDays.map((day, index) => (
                             <Checkbox 
                                onClick={() => handleToogleWeekDay(Number(index))}  
                                key={day} 
                                title={day}
                            />
                           ))}
                        </div>
                </section>

                <button type='submit' className={`
                    h-14 w-full rounded-lg bg-green-600 mt-6
                    flex items-center justify-center gap-3
                    font-semibold
                `}>
                    <Check size={20} weight='bold'/> Confirmar
                </button>

        </form>

    )

}