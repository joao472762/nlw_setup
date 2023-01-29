import { View, Text, ScrollView } from "react-native";

import {NativeStackScreenProps} from '@react-navigation/native-stack'

import { Header } from "../components/Header";
import { daySize, HabitDay } from "../components/HabitDay";
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";
import { StackRoutesScreenType } from "../routes/routes";

export function Home({navigation}: NativeStackScreenProps<StackRoutesScreenType, 'Home'>){
    const weekdays = ['D', 'S' ,'T','Q' , 'Q', 'S' , 'S'  ]
    const datesFromYearStart = generateRangeDatesFromYearStart()

    const minimumSumarySize = 7 * 12
    const amountDaysTofiil = minimumSumarySize - datesFromYearStart.length
    const minimumSumaryArray = Array.from({length:amountDaysTofiil},(_,index) => {
        return index + 1
    })

    function navigateToCreateScreen(){
        navigation.navigate('Create')
    }

    function nandleNavigateToDetailsScreen(date: string){
        navigation.navigate('Details', {date})
    }


    return (
        <View className="flex-1 px-8 bg-background">
            <Header navigateToCreateScreen={navigateToCreateScreen}/>
            <View className="flex-row mt-6">
                {
                    weekdays.map((day, index) => (
                      
                            <Text 
                            className="text-zinc-400 text-xl font-bold text-center mx-1"
                                style={{width: daySize, height: daySize}} 
                                key={`${day}-${index}`}
                            
                            >{day}</Text>

                    ))
                }
                
            </View>
            <ScrollView
                  contentContainerStyle={{paddingBottom: 100}}
                  showsVerticalScrollIndicator={false}
            >
                <View
                
                    className="flex-row flex-wrap"
                >
                    {datesFromYearStart.map(date => (
                        <HabitDay 
                            key={date.toISOString()}
                            onPress={() => nandleNavigateToDetailsScreen(date.toISOString())}
                        />
                    ))}

                    {
                        minimumSumaryArray.length > 0 && (
                        minimumSumaryArray.map(index => (
                            <View 
                                key={index}
                                className={`
                                    opacity-40
                                    rounded-lg border-2 border-solid border-zinc-800 bg-zinc-900 m-1
                                `}
                                style={{width: daySize, height: daySize}} 
                            />
                        ))
                        )
                    }

                </View>

            </ScrollView>

        </View>
    )
}