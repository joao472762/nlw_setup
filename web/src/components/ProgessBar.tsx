interface ProgressBarProps {
    progress: number;
}

export function ProgressBar({progress}:ProgressBarProps){
    console.log(Math.round(Math.random() * 5))
    
    return (   
        <div className='w-full h-3 bg-zinc-700 rounded-xl mt-4 overflow-hidden'>
            <div
                role='progressbar'
                aria-valuenow={progress}
                aria-label= 'Progresso de hábitos completado n dia' 
                className='bg-violet-600 h-3  rounded-xl'
                style={{width: `${progress}%`}}
            />

        </div>
    )
}