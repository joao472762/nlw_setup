import {View} from 'react-native'
interface ProgressBarProps {
    progress: number;
}

export function ProgessBar({progress}:ProgressBarProps){

    
    return (   
        <View className='w-full h-3 bg-zinc-700 rounded-xl mt-4 overflow-hidden'>
            <View
                aria-valuenow={progress}
                aria-label= 'Progresso de hábitos completado n dia' 
                className='bg-violet-600 h-3  rounded-xl'
                style={{width: `${progress}%`}}
            />

        </View>
    )
}