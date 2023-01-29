import { NativeStackScreenProps } from "@react-navigation/native-stack";
import dayjs from "dayjs";
import { ScrollView, View,Text } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { ProgessBar } from "../components/ProgressBar";
import { StackRoutesScreenType } from "../routes/routes";

export function Details({route:{params}}: NativeStackScreenProps<StackRoutesScreenType, 'Details'>){
    const {date} =  params
    const dayOfWeek =  dayjs(date).format('dddd')
    const dayAndMounth = dayjs(date).format('DD/MM')
    return (
        <View className="flex-1 bg-background px-8 pt-4">
              <ScrollView 
                contentContainerStyle={{paddingBottom:100}}
                showsVerticalScrollIndicator={false}
            >
                <BackButton/>
                <Text className="text-zinc-400 mt-4 text-base font-semibold ">{dayOfWeek}</Text>
                <Text className="text-white mt-1 text-3xl font-extrabold mb-4">{dayAndMounth}</Text>

                <ProgessBar progress={30}  />

                <View className="mt-6">
                    <Checkbox title="Exercício" checked/>

                </View>
            </ScrollView>
        </View>
    )
}