import { useState } from 'react'

const Lessons = () => {
    const [lessonName, setLessonName] = useState('Lesson 1: Introduction');
    const [score, setScore] = useState('91');
    const [id, setId] = useState('1');

    const clickLesson = async (name, scoreValue, id) => {
        setScore(scoreValue)
        setLessonName(name)
        setId(id)
    };

    return (
        <div>
            <div class="text-center border border-secondary-1 text-primary-light p-7 text-sm">
                <p class="leading-tight">You have completed <b>{lessonName}</b></p>
                <p>with an overall rating of:</p>
                <p class="text-primary-1 font-extrabold leading-none mt-3 text-4xl">{score}</p>
            </div>
            <p class="text-gray font-extrabold mt-5 text-sm">Lessons</p>
            <div class={id === '1' ? "lessons-card border border-primary-1 text-primary-1 p-5 my-3 xl:my-1 text-sm" : "lessons-card border border-primary-0 text-primary-light hover:text-primary-1 p-5 my-3 xl:my-1 text-sm"}>
                <div class="grid grid-cols-1 xl:grid-cols-3 cursor-pointer" onClick={() => clickLesson('Lesson 1: Introduction', '91%', '1')}> 
                    <div class="col-span-2 mb-4 xl:mb-0">
                        <div class="flex mb-4">
                            <p class="font-extrabold">Lesson 1: Introduction</p>
                            <div class="circle bg-green-1 ml-2"></div>
                        </div>
                        <div class="flex">
                            <p>Completion:<span class="ml-5">91% Passed</span><span class="ml-5">12/22/2020</span></p>
                        </div>
                    </div>
                    <div class="flex">
                        <a href="#" class={id === '1' ? "font-extrabold text-white-1 bg-primary-1 border border-primary-1 py-1 w-full h-8 self-center text-center" : "font-extrabold text-primary-1 border border-primary-1 py-1 w-full h-8 self-center text-center"}>View Lesson</a>
                    </div>
                </div>
            </div>
            <div class={id === '2' ? "lessons-card border border-primary-1 text-primary-1 p-5 my-3 xl:my-1 text-sm" : "lessons-card border border-primary-0 text-primary-light hover:text-primary-1 p-5 my-3 xl:my-1 text-sm"}>
                <div class="grid grid-cols-1 xl:grid-cols-3 cursor-pointer" onClick={() => clickLesson('Lesson 2: Teams', '95%', '2')}>
                    <div class="col-span-2 mb-4 xl:mb-0">
                        <div class="flex mb-4">
                            <p class="font-extrabold truncate">Lesson 2: Teams</p>
                            <div class="circle bg-green-1 ml-2"></div>
                        </div>
                        <div class="flex">
                            <p>Completion:<span class="ml-5">95% Passed</span><span class="ml-5">12/22/2020</span></p>
                        </div>
                    </div>
                    <div class="flex">
                        <a href="#" class={id === '2' ? "font-extrabold text-white-1 bg-primary-1 border border-primary-1 py-1 w-full h-8 self-center text-center" : "font-extrabold text-primary-1 border border-primary-1 py-1 w-full h-8 self-center text-center"}>View Lesson</a>
                    </div>
                </div>
            </div>
            <div class={id === '3' ? "lessons-card border border-primary-1 text-primary-1 p-5 my-3 xl:my-1 text-sm" : "lessons-card border border-primary-0 text-primary-light hover:text-primary-1 p-5 my-3 xl:my-1 text-sm"}>
                <div class="grid grid-cols-1 xl:grid-cols-3 cursor-pointer" onClick={() => clickLesson('Lesson 3: Beskar Management', '92%', '3')}>
                    <div class="col-span-2 mb-4 xl:mb-0">
                        <div class="flex mb-4">
                            <p class="font-extrabold truncate">Lesson 3: Beskar Management</p>
                            <div class="circle bg-green-1 ml-2"></div>
                        </div>
                        <div class="flex">
                            <p>Completion:<span class="ml-5">92% Passed</span><span class="ml-5">12/22/2020</span></p>
                        </div>
                    </div>
                    <div class="flex">
                        <a href="#" class={id === '3' ? "font-extrabold text-white-1 bg-primary-1 border border-primary-1 py-1 w-full h-8 self-center text-center" : "font-extrabold text-primary-1 border border-primary-1 py-1 w-full h-8 self-center text-center"}>View Lesson</a>
                    </div>
                </div>
            </div>
            <div class={id === '4' ? "lessons-card border border-primary-1 text-primary-1 p-5 my-3 xl:my-1 text-sm" : "lessons-card border border-primary-0 text-primary-light hover:text-primary-1 p-5 my-3 xl:my-1 text-sm"}>
                <div class="grid grid-cols-1 xl:grid-cols-3 cursor-pointer" onClick={() => clickLesson('Lesson 4: "this is the Way."', '94%', '4')}>
                    <div class="col-span-2 mb-4 xl:mb-0">
                        <div class="flex mb-4">
                            <p class="font-extrabold truncate">Lesson 4: "this is the Way."</p>
                            <div class="circle bg-green-1 ml-2"></div>
                        </div>
                        <div class="flex">
                            <p>Completion:<span class="ml-5">94% Passed</span><span class="ml-5">12/22/2020</span></p>
                        </div>
                    </div>
                    <div class="flex">
                        <a href="#" class={id === '4' ? "font-extrabold text-white-1 bg-primary-1 border border-primary-1 py-1 w-full h-8 self-center text-center" : "font-extrabold text-primary-1 border border-primary-1 py-1 w-full h-8 self-center text-center"}>View Lesson</a>
                    </div>
                </div>
            </div>
            <div class={id === '5' ? "lessons-card border border-primary-1 text-primary-1 p-5 my-3 xl:my-1 text-sm" : "lessons-card border border-primary-0 text-primary-light hover:text-primary-1 p-5 my-3 xl:my-1 text-sm"}>
                <div class="grid grid-cols-1 xl:grid-cols-3 cursor-pointer" onClick={() => clickLesson('Lesson 5: Mandalorians and the Community', '90%', '5')}>
                    <div class="col-span-2 mb-4 xl:mb-0">
                        <div class="flex mb-4">
                            <p class="font-extrabold truncate">Lesson 5: Mandalorians and the Community</p>
                            <div class="circle bg-green-1 ml-2"></div>
                        </div>
                        <div class="flex">
                            <p>Completion:<span class="ml-5">90% Passed</span><span class="ml-5">12/22/2020</span></p>
                        </div>
                    </div>
                    <div class="flex">
                        <a href="#" class={id === '5' ? "font-extrabold text-white-1 bg-primary-1 border border-primary-1 py-1 w-full h-8 self-center text-center" : "font-extrabold text-primary-1 border border-primary-1 py-1 w-full h-8 self-center text-center"}>View Lesson</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lessons;