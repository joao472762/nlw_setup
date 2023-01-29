import { Plus } from "phosphor-react-native"
import { TouchableOpacity, Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import LogoImage from '../assets/Logo.svg'
import colors from 'tailwindcss/colors'

interface HeaderProps {
    navigateToCreateScreen: () => void
}
export function Header({navigateToCreateScreen}: HeaderProps){
    function handleNavigateToCreateScreen(){
        navigateToCreateScreen()
    }
    const {violet} = colors
    return (
        <SafeAreaView  className="justify-between items-center flex-row pt-10">
            <LogoImage/>
            <TouchableOpacity  className={
                `   border border-violet-500 border-solid rounded-lg
                    h-11 px-4 items-center flex-row 

                `}
                onPress={handleNavigateToCreateScreen}
            >
                <Plus  size={20} color={violet[500]}/> 
                <Text className="text-white font-semibold ml-3">Novo</Text>

            </TouchableOpacity>
        </SafeAreaView>
    )
}