import {NavigationContainer} from '@react-navigation/native'
import { StackRoutes } from './routes'

export function Routes(){
    return (
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}