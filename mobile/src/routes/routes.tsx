import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Create } from '../screens/Create'
import { Details } from '../screens/Details'


export type StackRoutesScreenType = {
    Home: undefined,
    Details: {
        date: string
    },
    Create: undefined
}

const {Navigator,Screen} = createNativeStackNavigator<StackRoutesScreenType>()
export function StackRoutes() {
    return (
        <Navigator 
            initialRouteName='Home'
            screenOptions={{ headerShown: false}}
        >
            <Screen name='Home' component={Home}/>
            <Screen name='Details' component={Details}/>
            <Screen name='Create' component={Create}/>
        </Navigator>
    )
}