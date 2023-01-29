import { ActivityIndicator, View } from "react-native";
import colors from 'tailwindcss/colors'

export function Loader(){
    const {violet} = colors
    
    return (
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator color={violet[500]} size='large' />
        </View>
    )
}