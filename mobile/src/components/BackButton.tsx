import { useNavigation } from '@react-navigation/native'
import {ArrowLeft} from 'phosphor-react-native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from 'tailwindcss/colors'

export function BackButton(props: TouchableOpacityProps){
    const {goBack} = useNavigation()
    function handleGoBack(){
        goBack()
    }
    return (
        <SafeAreaView>
            <TouchableOpacity
                activeOpacity={.7}
                onPress={handleGoBack}
                {...props}
            >
                <ArrowLeft  
                    size={32}
                    color={colors.zinc[400]} 
                />
            </TouchableOpacity>

        </SafeAreaView>
    )
} 