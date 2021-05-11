const Course = (props) => {
    var sectionStyle = {
        backgroundImage: `url(${props.image})`
    };
    return (
        <>
        {props.layout === 'full' ? 
        <div class="grid grid-cols-2 xl:grid-cols-3 gap-5">
            <div class="col-span-2 xl:col-span-1 text-primary-light pb-5 max-h-unset md:max-h-44 lg:max-h-64">
                <img src={props.image} alt="Lesson 1" />
                <h1 class="lesson-title mt-3 font-extrabold leading-tight text-xl xl:text-xl lg:text-3xl text-primary-1 md:text-primary-light">{props.title}</h1>
                <div class="flex pt-5 xl:text-sm lg:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="mr-4">Duration</p>
                    <p class="font-extrabold">2h 00m</p>
                </div>
                <div class="flex pt-4 xl:pt-2 xl:text-sm lg:text-base">
                    <div class="circle bg-green-1"></div>
                    <p class="font-extrabold">Completed 12/01/2021</p>
                </div>
            </div>
            <div class="col-span-2 text-primary-light leading-normal text-sm px-8 border-t boder-primary-light xl:border-t-0">
                <p class="pt-5 xl:pt-3 pb-2 font-extrabold text-base text-primary-1 md:text-primary-light">Course Description</p>
                <p class="pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non metus sed sapien laoreet vehicula. Etiam sagittis ligula sed purus sollicitudin, a aliquet diam cursus. Phasellus a velit nisl. Morbi vulputate ullamcorper est nec laoreet. Aliquam ultricies eget neque a rhoncus. Aenean tempus ante quis lacus scelerisque vehicula. Integer ut convallis sapien, eu bibendum nibh. Vivamus et lectus dolor.</p>
                <p class="pt-3 pb-2 mt-4 font-extrabold  text-primary-1 md:text-primary-light text-base">Course Objective</p>
                <p class="pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non metus sed sapien laoreet vehicula. Etiam sagittis ligula sed purus sollicitudin, a aliquet diam cursus. Phasellus a velit nisl. Morbi vulputate ullamcorper est nec laoreet. Aliquam ultricies eget neque a rhoncus. Aenean tempus ante quis lacus scelerisque vehicula. Integer ut convallis sapien, eu bibendum nibh. Vivamus et lectus dolor.</p>
            </div>
        </div>
        :
        <div class="thumbnail cursor-pointer box-shadow-lg">
            <div class="image xl:h-48 lg:h-32 md:h-44 h-40 bg-center bg-no-repeat" style={sectionStyle}></div>
            <div class="bg-primary-1 py-3 px-5">
                <p class="lesson-title normal-case text-white-1 font-extrabold text-md lg:text-sm mb-0 md:mb-4 lg:mb-3 xl:mb-5 truncate w-full">{props.title}</p>
                <a href="#" class="text-secondary-1 text-left lg:text-right block text-sm hidden md:block">View Course</a>
            </div>
        </div>
        }
        </>
    );
}

export default Course;