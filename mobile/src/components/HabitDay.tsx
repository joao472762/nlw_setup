import { styled } from "nativewind";
import { View, TouchableOpacity,Dimensions,TouchableOpacityProps } from "react-native";

const weekDays = 7
const screenHorizontalPadding = (32 * 2) /5

export const dayMarginBetween = 8
export const daySize = (Dimensions.get('screen').width / weekDays) - (screenHorizontalPadding + 5)

interface  HabitDayProps extends TouchableOpacityProps {
    
}
export function HabitDay(props:HabitDayProps ) {


    return (
       
        <TouchableOpacity 
       
        className={`
            rounded-lg border-2 border-solid border-zinc-800 bg-zinc-900 m-1
        `}
        activeOpacity={.7}
        style={{width: daySize, height: daySize}} 
        {...props}       
    >
            
        </TouchableOpacity>
    )
}