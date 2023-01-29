import { View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { StackRoutesScreenType } from "../routes/routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BackButton } from "../components/BackButton";
import { Check } from "phosphor-react-native";
import colors from "tailwindcss/colors";
import { Checkbox } from "../components/Checkbox";
import { useState } from "react";

export function Create({}: NativeStackScreenProps<StackRoutesScreenType, 'Create'>){
    const [weekDays, setWeekDays] = useState<number[]>([])
    const avaliableWeekdays = [0,1,2,3,4,5,6] as const
    const longDays = {
        0: 'Domingo',
        1: 'Segunda-feira',
        2: 'Terça-feira',
        3: 'Quarta-feira',
        4: 'Quinta-feira',
        5: 'Sexta-feira',
        6: 'Sábado',
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
  
    return (
        <View className="flex-1 bg-background px-8 pt-4">
            <ScrollView 
                contentContainerStyle={{paddingBottom:100}}
                showsVerticalScrollIndicator={false}
            >
                <BackButton/>

                <Text className="text-white mt-4 text-3xl font-extrabold ">Criar hábito</Text>
                <Text className="text-white font-semibold text-base mt-6 ">
                    Qual seu comprometimento?
                </Text>

                <TextInput
                    className={`
                        h-12 w-full mt-3 px-4 justify-center bg-zinc-900
                        border-2 rounded-lg border-zinc-800
                        focus:border-2 focus:border-green-600 
                        
                    `}
                    placeholder='Exercícios, dormir bem, etc...'
                    placeholderTextColor={colors.zinc[400]}
                />


                <Text className="text-white font-semibold text-base mt-4 mb-3 ">
                    Qual a recorrência?
                </Text>
                <View>
                    {
                        avaliableWeekdays.map(weekday => (
                            <Checkbox
                                checked={weekDays.includes(weekday)}
                                key={weekday}
                                onPress={() => handleToogleWeekDay(weekday)}
                                title={longDays[weekday]}
                            />
                        ))
                    }
                </View>
                <TouchableOpacity
                    className="bg-green-600 rounded-lg h-[52px] justify-center items-center flex-row mt-6"
                    activeOpacity={.7}
                >
                    <Check color={colors.white} weight='bold' size={20  }/>
                    <Text className="text-white font-semibold text-base ml-3 ">
                        Confirmar
                    </Text>
                </TouchableOpacity>
            </ScrollView>
               

        </View>
    )
}