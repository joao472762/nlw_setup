import {Root,Indicator,CheckboxProps as ChekcboxPropsRadix} from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { type } from 'os';
import { Check } from 'phosphor-react';

interface CheckboxProps extends ChekcboxPropsRadix {
    title: string,
    variant?: 'primary' | 'secondary' 
}
export function Checkbox({variant='primary',title, ...props}: CheckboxProps){
    return (
        <div className={'flex items-center gap-3 '}>
            <Root
            className='flex items-center gap-3 group'
                {...props} 
            >
                <div
                    className={`
                        w-8 h-8 bg-zinc-900 
                        flex items-center justify-center 
                        border-2 border-zinc-800 rounded-lg
                        radix-state-checked:bg-green-500
                        group-data-[state=checked]:bg-green-500
                        group-data-[state=checked]:border-green-500
                    `}  
                >

                    <Indicator asChild>
                        <Check size={20}/>
                    </Indicator>

                </div>
                <span className={clsx('text-white ', {
                    'text-xl font-semibold group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400' : variant === 'secondary',
                   
                })}>{title}</span>
            </Root>

        </div>
    )
}
