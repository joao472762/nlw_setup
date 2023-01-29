export type weekDayType = 'D' | 'S' | 'T' | 'Q'

interface WeekLabelProps {
    weekDay: weekDayType
}

export function WeekLabel({weekDay}: WeekLabelProps){
    return (
        <span className="text-zinc-400 text-xl font-bold ">{weekDay}</span>
      
    )
}