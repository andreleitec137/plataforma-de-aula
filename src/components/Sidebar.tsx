import { useState } from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";


export function Sidebar(){
    const {data} = useGetLessonsQuery();
    const [isNavOpen, setIsNavOpen] = useState(false);

    return(

        <><nav>
            <section className="MOBILE-MENU flex lg:hidden">
                <div
                    className="HAMBURGER-ICON space-y-2"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>

                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                        className="absolute top-0 right-0 px-4 py-4"
                        onClick={() => setIsNavOpen(false)}
                    >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-8">
                    {data?.lessons.map(lesson => {
                        return (
                            <Lesson
                                key={lesson.id}
                                title={lesson.title}
                                slug={lesson.slug}
                                availableAt={new Date(lesson.availableAt)}
                                type={lesson.lessonType} />
                        );
                    })}
                </div>
                </div>
            </section>
        </nav>
        
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 hidden lg:block">
                <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block ">Cronograma de Aulas</span>

                <div className="flex flex-col gap-8">
                    {data?.lessons.map(lesson => {
                        return (
                            <Lesson
                                key={lesson.id}
                                title={lesson.title}
                                slug={lesson.slug}
                                availableAt={new Date(lesson.availableAt)}
                                type={lesson.lessonType} />
                        );
                    })}
                </div>
            </aside></>

        

        
    )
    
}