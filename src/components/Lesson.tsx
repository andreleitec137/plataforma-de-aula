import { format, isPast } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
interface LessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE ' • ' d ' de ' MMMM ' • '  k'h'mm", {
        locale: ptBr
    })

    return(
        <a href="{props.slug}">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            <div className="rounded border border-gray-500 p-4 mt-2 ">
                <header className="flex items-center justify-between">
                
              {isLessonAvailable ? (
                  <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                    <CheckCircle size={20}/>
                    Conteúdo Liberado
                  </span>
              ):(
                <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                    <Lock size={20}/>
                    Em Breve
                </span>
              )}

                <span className="text-xs py-[0.125rem] px-2 rounded border font-bold border-green-300 text-white">
                    {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}