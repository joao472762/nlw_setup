import Image from 'next/image'
import LogoImage from '../assets/logo.svg'
import { Inter } from '@next/font/google'
import { Plus, X } from 'phosphor-react'
import { NewHabitForm } from './NewHabitForm'
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
    return (
        <header className='flex justify-between w-full max-w-[45rem] items-center mx-auto'>
            <Image src={LogoImage} alt=''/>
      
            <Dialog.Root >
                <Dialog.Trigger  type='button' className={
                    `
                        border-purple-500 border-solid border px-4 h-[3.25rem] 
                        flex gap-x-3 items-center 
                        rounded-lg font-bold
                        cursor-pointer
                        hover:border-violet-400
                    `

                }>
                    <Plus weight='bold' size={20} className='text-purple-500'/>Novo hábito
                </Dialog.Trigger>


                <Dialog.Portal>
                    <Dialog.Overlay className=' w-screen h-screen bg-black/80 fixed inset-0 flex'/>
                    <Dialog.Content className={`
                        bg-zinc-900 w-screen max-w-md rounded-2xl p-10 text-white font-sans 
                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`
                    }>
                        <Dialog.Close aria-label='Fechar' asChild className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200'>
                            <X  size={24}/>
                        </Dialog.Close>

                        <Dialog.Title className='text-3xl font-extrabold'>Criar hábito</Dialog.Title>
                        <NewHabitForm/>
                    
                    </Dialog.Content>
                </Dialog.Portal>

            </Dialog.Root>
        </header>
    )
}