import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"


import {FaArrowUp, FaFilePdf, FaVideo} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {LuTextSelect} from "react-icons/lu";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import caterpillar_results from "./videos/few_shot_results/caterpillar.mp4"
import mug_handle_results from "./videos/few_shot_results/mug_handle.mp4"
import mug_lip_results from "./videos/few_shot_results/mug_lip.mp4"
import rack_results from "./videos/few_shot_results/rack.mp4"
import screwdriver_results from "./videos/few_shot_results/screwdriver.mp4"

import caterpillar_demos from "./images/demos/caterpillar.png"
import mug_handle_demos from "./images/demos/mug_handle.png"
import mug_lip_demos from "./images/demos/mug_lip.png"
import rack_demos from "./images/demos/rack.png"
import screwdriver_demos from "./images/demos/screwdriver.png"

import blue_mug from "./videos/language_results/carousel/blue_mug.mp4"
import clear_mug from "./videos/language_results/carousel/clear_mug.mp4"
import measuring_beaker from "./videos/language_results/carousel/measuring_beaker.mp4"
import measuring_scoop from "./videos/language_results/carousel/measuring_scoop.mp4"
import screwdriver from "./videos/language_results/carousel/screwdriver.mp4"
import teddy_bear from "./videos/language_results/carousel/teddy_bear.mp4"
import transparent_rack from "./videos/language_results/carousel/transparent_rack.mp4"
import water_jug from "./videos/language_results/carousel/water_jug.mp4"
import wooden_rack from "./videos/language_results/carousel/wooden_rack.mp4"

import lang_results from "./videos/language_results/lang_results.mp4"
import teaser_video from "./videos/teaser.mp4"
import multi_task from  "./videos/multi_task.mp4"
import generalize from  "./videos/different_settings.mp4"
import rollout from "./videos/rollout2.mp4"


const Title: React.FC = ({children}) => {
    // Paper title
    return (
        <h1 className="pb-1 mb-5 sm:mb-4 sm:leading-tight md:leading-tight lg:leading-tight font-bold text-center">{children}</h1>
    )
}

const Venue: React.FC = ({website, children}) => {
    return (
        <div className="flex flex-wrap justify-center text-2xl lg:text-2xl mb-6 sm:mb-5">
            <a className="no-underline" href={website} target="_blank">{children}</a>
        </div>
    )
}

const Abstract: React.FC = ({children}) => {
    return (
        <div>
            <div className="flex justify-center content-center">
                <p className="font-semibold text-2xl sm:text-3xl m-1 sm:m-2">Abstract</p>
            </div>
            <div className="flex justify-center content-center">
                <p className="text-justify font-light text-base sm:text-lg m-1 sm:m-1 max-w-[100%] sm:max-w-[620px]">{
                    children
                }</p>
            </div>
        </div>
    )
}
// 
const Author: React.FC = ({children, website, affiliations, lastAuthor, isCorrespondingAuthor, isProjectLead,isInternship}) => {
    return (
        <span className="text-center inline-block">
            <a href={website} target={"_blank"}
               className="font-normal no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                {children}
            </a>
            { affiliations || isCorrespondingAuthor || isProjectLead  || isInternship  ?
                <sup className={"pl-0.5"}>
                    {affiliations ? affiliations : null}
                    {isCorrespondingAuthor ? <span className="font-bold">*</span> : null}
                    {isProjectLead ? <span className="font-bold">‡</span> : null}
                    {isInternship ? <span className="font-bold">†</span> : null}
                </sup>
                : null}
            {lastAuthor ? null : <>,&nbsp;</>}
        </span>
    )
}

const Affiliation: React.FC = ({children, website, number}) => {
    return (
        <span className={"text-center inline-block mr-4"}>
            <sup className={"mr-0.5"}>{number}</sup>
            <a href={website} target={"_blank"}
               className="font-light no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                    {children}
                </a>
        </span>
    )
}

const ActionLink: React.FC = ({children, url, icon}) => {
    return (
        <span className={"text-center inline-block my-3.5 sm:my-2 mx-2"}>
            <a href={url} target={!url.startsWith("#") ? "_blank" : "_self"}
               className="text-xl no-underline font-normal text-[#009cff] bg-[#f9f9f9] hover:bg-[#f4f4f4] hover:transition-all px-4 py-3 rounded-xl">
                <span className="align-middle inline-flex justify-center mr-0.25">{icon}&nbsp;</span>
                <span>{children}</span>
            </a>
        </span>
    )
}

const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-[90%] format format-md
                       md:format-base
                       lg:max-w-5xl lg:format-lg
                       format-blue dark:format-invert">
            {children}
        </div>
    )
}

const Main: React.FC = ({children}) => {
    return (
        <main className="pt-6 lg:pt-12 bg-white dark:bg-gray-900">
            {children}
        </main>
    )
}


const FewShotResult: React.FC = ({children, id, demos, demos_label, video, hidden}) => {
    // Result for Few-Shot Manipulation with Demos on left, and video on right
    return (
        // add hidden if hide is true
        <div id={id}
             className={"grasp-result flex flex-row flex-wrap justify-items-center items-center mt-6" + (hidden ? " hidden" : "")}>
            <div className="sm:basis-1/3 align-middle items-center sm:pr-5 md:pr-10 pb-4 sm:pb-0">
                <p className="text-center font-medium text-2xl !mt-0 !mb-2">{children}</p>
                <img src={demos} alt={children} className="mx-auto !my-4 max-w-[80%] sm:max-w-[100%]"/>
                <p className="text-center !mt-2 !mb-0">{demos_label}</p>
            </div>
            <div className="sm:basis-2/3">
                <video autoPlay muted playsInline loop alt={children}
                       className="rounded-lg !my-0 !sm:my-0">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}


export const Head: HeadFC = () => <title>GR-MG: Leveraging Partially Annotated Data by Adding Multi-modal
Goal into Transformer</title>

const carouselResponsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    }
};


const CarouselItem: React.FC = ({children, video}) => {
    return (
        <div>
            <video autoPlay muted playsInline loop alt={video}
                   className="carousel-video px-1.5 rounded-xl">
                <source src={video} type="video/mp4"/>
            </video>
            {/*<p className="text-center">{children}</p>*/}
        </div>
    )
}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Main>
                <Article>
                    {/* <Title>
                        <span className="font-extrabold text-transparent bg-clip-text
                            bg-gradient-to-r from-pink-500 via-indigo-600 to-emerald-400">
                            Distilled Feature Fields
                        </span>
                        &nbsp;
                        <span className="text-stone-800">Enable Few-Shot Language-Guided Manipulation</span>
                    </Title> */}
                    <Title>
                        <span className="text-stone-800">GR-MG: Leveraging Partially Annotated Data by Adding Multi-modal
                        Goal into Transformer</span>
                    </Title>

                    <Venue website={""}>
                        <span className="font-normal text-stone-600 hover:text-transparent hover:bg-clip-text
                        hover:bg-gradient-to-r hover:from-pink-500 hover:via-indigo-600 hover:to-emerald-400
                        hover:transition-all">In Submission</span>
                    </Venue>


                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-4">
                        <Author website={""} isInternship={true} affiliations={"1,2"}>Peiyan Li</Author>
                        <Author website={""} affiliations={"3"} isCorrespondingAuthor={true} isProjectLead={true} >Hongtao Wu</Author>
                        <Author website={""} affiliations={"1,2"} isCorrespondingAuthor={true}>Yan Huang</Author>
                        <Author website={""} affiliations={"3"}>Chilam Cheang</Author>
                        <Author website={""} affiliations={"1,2"}>Liang Wang</Author>
                        <Author website={""} affiliations={"3"} lastAuthor={true}>Tao Kong</Author>
                    </div>

                    {/* Affilations */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-1">
                        <Affiliation website={""} number={"1"}>NLPR & MAIS, Institute of
                        Automation, Chinese Academy of Sciences</Affiliation>
                        <Affiliation website={""} number={"2"}>School of Artificial Intelligence, University of Chinese Academy of Sciences</Affiliation>
                        <Affiliation website={""} number={"3"}>ByteDance Research</Affiliation>
                    </div>
                    <div className="flex flex-wrap justify-center text-l lg:text-l space-x-4">
                        <span className="text-stone-600 text-center"><sup className="mr-0.5">†</sup>Work done during internship at Bytedance</span>
                        <span className="text-stone-600 text-center"><sup className="mr-0.5">*</sup>Corresponding author</span>
                        <span className="text-stone-600 text-center"><sup className="mr-0.5">‡</sup>Project lead</span>
                    </div>

                    {/* Action Links */}
                    <p className="flex flex-wrap justify-center">
                        <ActionLink url={""} icon={<FaFilePdf/>}>Paper</ActionLink>
                        {/* <ActionLink url={"#video"} icon={<FaVideo/>}>Video</ActionLink> */}
                        <ActionLink url={""} icon={<AiFillGithub/>}>Code</ActionLink>
                    </p>

                    {/* Abstract */}
                    <Abstract>
                        The robotics community has consistently aimed to
                        achieve generalizable language-conditioned robot manipulation.
                        One primary challenge is that collecting robot trajectories
                        fully annotated with actions and languages is time-consuming
                        and labor-intensive. However, partially-annotated data, such
                        as human activity videos without action labels and robot
                        play data without language labels, are comparatively easier
                        to collect and are thus scalable. Can we leverage these data
                        in policy learning to enhance its capability of generalization?
                        To this end, we present GR-MG, a novel language-conditioned
                        policy that uses multi-modal goals as conditions. In training,
                        GR-MG takes a language instruction and/or a goal-image as
                        the condition. During inference, it only takes the language
                        instruction as inputs and use it to generate the goal image via
                        a diffusion model. This design allows GR-MG to leverage large
                        amounts of partially-annotated data. In addition, we introduce
                        a novel technique to predict task completion progress which
                        significantly improves the goal image generation. We perform
                        extensive experiments in both simulation and the real world. In
                        simulation experiments, GR-MG significantly outperforms all
                        the comparing state-of-the-art methods, improving the success
                        rate of completing 5 tasks in a row from 41.2% to 64.4%. The
                        advantage of GR-MG is further enlarged in the case of data
                        scarcity. In real world experiments, GR-MG surpasses the comparing baseline methods and showcases powerful generalization
                        capability.
                    </Abstract>

                    {/* YouTube Video */}
                    {/* <h2 className="font-semibold border-b-[1px]" id="video">Video with Audio</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PA9rWWVWsc4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen className="rounded-lg"></iframe>
                    </div> */}
                
                    {/* Results */}
                    <h2 className="font-semibold border-b-[1px] !mb-4"> Real videos</h2>
                    {/* Example Rollout */}
                    <h3 id="rollout" className="!mt-4">Example Rollout</h3>
                    <p>  During inference, GR-MG will first generate a goal image, which indicates the potential intermediate state the robot may arrive at to finish the task assigned by the text.
                         A multimodal goal-conditioned policy will then use both the text and the goal image to predict the actions. Since the goal image is generated by a diffusion process,
                        the generation process can be a little time-consuming. Therefore, we will only update the goal image at fixed time steps, 
                        rather than at every time step. Empirically, if the computational burden is not a concern, updating the goal image at every step would likely 
                        result in better final performance.
                    </p>
                    <video autoPlay controls muted playsInline loop alt="Example rollout"
                        className="rounded-lg mx-auto">
                    <source src={rollout} type="video/mp4"/>
                    </video>

                    {/* Multi task Video */}
                    <h3 id="language-guided" className="!mt-4">Multi-task Ability</h3>
                    <p>     GR-MG is a multi-task transformer trained on 29 real tasks.They include pick-and-place tasks such as "pick up the mandarin from the green plate", 
                            articulated object manipulation tasks such as "open/close the drawer", "open/close the oven",
                            fine-grained manipulation tasks such as "press the toaster switch" and extremely challenging pouring tasks
                            such as "pour the black seasoning powder into the red bowl".</p>
                    <video autoPlay controls muted playsInline loop alt="Multi-task ability"
                           className="rounded-lg mx-auto">
                        <source src={multi_task} type="video/mp4"/>
                    </video>

                    {/* Generalization Video */}
                    <h3 id="language-guided" className="!mt-4">Generalization Ability</h3>
                    <p>  GR-MG demonstrate great generalization ability. We test its performance in four different settings including changing locations,
                        adding distractors, manipulating unseen objects and adapting unseen backgrounds.</p>
                    <video autoPlay controls muted playsInline loop alt="Generalization ability"
                        className="rounded-lg mx-auto">
                    <source src={generalize} type="video/mp4"/>
                    </video>



                    {/* cite */}
                    <h2 id="citation" className="border-b-[1px]">Citation</h2>
                    <div className="relative overflow-auto">
                        <pre className="bg-gradient-to-r from-pink-100 via-indigo-100 to-emerald-100 !my-0">
                            <code id="citation-bib" className="font-medium text-slate-800 ">{
                                `@inproceedings{shen2023F3RM,
    title={Distilled Feature Fields Enable Few-Shot Language-Guided Manipulation},
    author={Shen, William and Yang, Ge and Yu, Alan and Wong, Jansen and Kaelbling, Leslie Pack and Isola, Phillip},
    booktitle={7th Annual Conference on Robot Learning},
    year={2023}
}`}
                            </code>
                        </pre>
                        <div className="absolute top-0 right-0">
                            <button className="float-right text-2xl text-indigo-500 bg-white hover:bg-slate-50
                            hover:text-indigo-600 hover:transition-all rounded-full p-2 m-3 invisible md:visible "
                                    onClick={() => {
                                        // Select all text in the code block
                                        let bib = document.getElementById("citation-bib");
                                        let range = document.createRange();
                                        let selection = window.getSelection();

                                        // Check not null
                                        if (bib == null || range == null || selection == null) {
                                            return;
                                        }
                                        range.selectNode(bib);
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }}>
                                <LuTextSelect/>
                            </button>
                        </div>
                    </div>


                {/* teach us how toset scroll video */}
                {/* <div className="my-6 pt-6 pb-4 bg-gradient-to-r from-pink-100/70 via-indigo-100/70 to-emerald-100/70">
                    <div
                        className="mx-auto w-full max-w-[97.5%] lg:max-w-7xl py-2 md:py-4 px-2 md:px-4">
                        <div className="relative pb-8 mb-3">
                            <Carousel responsive={carouselResponsive} infinite={true} showDots={true}
                                      renderDotsOutside={true}
                                      beforeChange={(previousSlide, {currentSlide, onMove}) => {
                                          // play all carousel-video, as the browser doesn't like autoplaying them all
                                          const videos = document.getElementsByClassName("carousel-video");
                                          for (let i = 0; i < videos.length; i++) {
                                              // play if video is paused
                                              if ((videos[i] as HTMLVideoElement).paused) {
                                                  (videos[i] as HTMLVideoElement).play();
                                                  console.log("Started playing video " + (videos[i] as HTMLVideoElement).src);
                                              }
                                          }
                                      }}>
                                <CarouselItem video={clear_mug}>"Clear Mug"</CarouselItem>
                                <CarouselItem video={measuring_scoop}>"Measuring Scoop"</CarouselItem>
                                <CarouselItem video={teddy_bear}>"Teddy Bear"</CarouselItem>
                                <CarouselItem video={blue_mug}>"Blue Mug</CarouselItem>
                                <CarouselItem video={screwdriver}>"Screwdriver"</CarouselItem>
                                <CarouselItem video={water_jug}>"Water Jug</CarouselItem>
                                <CarouselItem video={measuring_beaker}>"Measuring Beaker"</CarouselItem>
                                <CarouselItem video={wooden_rack}>"Wooden Rack</CarouselItem>
                                <CarouselItem video={transparent_rack}>"Transparent Rack"</CarouselItem>
                            </Carousel>
                        </div>
                        <p className="text-center text-lg md:text-xl md:max-w-[85%] mx-auto">
                            We designate novel objects to grasp using <b>open-ended language queries</b>, and achieve
                            this using only ten demonstrations across four object categories.
                        </p>
                    </div>
                
                </div> */}

        
                    {/* teach us how to set up a dropdown menu to select a video */}
                    {/* <h3 className="!mt-4" id="few-shot">Few-Shot Grasping Results</h3>
                    <p>
                        We provide the robot with just two demonstrations for each task, such as grasping a mug by its
                        lip. We show generalization across object poses, shapes, sizes and appearances. Our approach <b>does
                        not</b> make any assumptions about objectness, such as segmentation masks, as we optimize for a
                        gripper pose over the entire scene.
                    </p>
                    <div className="my-4 leading-8">
                        <span className="text-xl mr-1">Show results for </span>
                        <select className="rounded-xl" onChange={(e) => {
                            // Get the target div
                            const selected = e.target.value;
                            const targetDiv = document.getElementById(selected);

                            // div does not exist! Need to define a FewShotResult component
                            if (targetDiv === null) {
                                console.log("div " + selected + " is null! ")
                                return;
                            }

                            // Hide the current div by checking all divs with class grasp-result
                            const divs = document.getElementsByClassName("grasp-result");
                            for (let i = 0; i < divs.length; i++) {
                                // Skip target and hidden divs
                                if (divs[i] === targetDiv || divs[i].classList.contains("hidden")) {
                                    continue;
                                }

                                // Add hidden class to div and reset video
                                divs[i].classList.add("hidden");
                                divs[i].getElementsByTagName("video")[0].currentTime = 0;
                                console.log("Hiding div " + divs[i].id + " and reset video");
                            }

                            // Remove hidden class from target div
                            targetDiv.classList.remove("hidden");
                            console.log("Showing div " + targetDiv.id)
                        }}>
                            <option value="mug_lip">Grasp Mug Lip</option>
                            <option value="mug_handle">Grasp Mug Handle</option>
                            <option value="screwdriver">Grasp Screwdriver</option>
                            <option value="caterpillar">Grasp Caterpillar Ears</option>
                            <option value="rack">Place Cup on Rack</option>
                        </select>
                    </div> */}
                    
                    {/* <FewShotResult id="mug_lip" demos={mug_lip_demos}
                                   demos_label="2 x Demos on a grey and a red mug" video={mug_lip_results}>
                        Grasp Mug Lip
                    </FewShotResult>

                    <FewShotResult id="mug_handle" demos={mug_handle_demos} hidden={true}
                                   demos_label="2 x Demos on a grey mug and a red mug" video={mug_handle_results}>
                        Grasp Mug Handle
                    </FewShotResult>

                    <FewShotResult id="screwdriver" demos={screwdriver_demos} hidden={true}
                                   demos_label="2 x Demos on an orange and a black screwdriver"
                                   video={screwdriver_results}>
                        Grasp Screwdriver
                    </FewShotResult>

                    <FewShotResult id="caterpillar" demos={caterpillar_demos} hidden={true}
                                   demos_label="2 x Demos on Caterpillar's left and right ear"
                                   video={caterpillar_results}>
                        Grasp Caterpillar Ears
                    </FewShotResult>

                    <FewShotResult id="rack" demos={rack_demos} hidden={true}
                                   demos_label="2 x Demos on a dark wooden rack" video={rack_results}>
                        Place Cup on Rack
                    </FewShotResult> */}


                </Article>

                <footer className={"flex flex-col justify-center bg-gray-50 mt-8 py-8"}>
                    {/*click to go back to top*/}
                    <div className="flex justify-center align-middle text-lg">
                        <a role="button" className="text-blue-500" onClick={() => {
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        }}>
                                <span
                                    className="align-text-top inline-flex justify-center mr-0.25"><FaArrowUp/>&nbsp;</span>
                            <span>Back to Top</span>
                        </a>
                    </div>
                    <div className="mt-2.5 text-center">
                        This website template is adopted from   
                        <span className="mr-2"></span>
                        <a href="https://github.com/f3rm/f3rm.github.io" target="_blank" className="text-blue-500">
                            <span
                                className="align-text-top inline-flex justify-center mr-0.25"><AiFillGithub/>&nbsp;</span>
                            <span>Here</span>
                        </a>
                    </div>
                </footer>
            </Main>
        </>
    )
}

export default IndexPage
