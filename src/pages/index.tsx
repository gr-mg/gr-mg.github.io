import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {FaArrowUp, FaFilePdf, FaVideo,FaRobot} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {LuTextSelect} from "react-icons/lu";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


import multi_task from  "./videos/multitask_min.mp4"
import rollout from "./videos/rollout_min.mp4"
import architecture from "./videos/architecture.mp4"

import G_1_1 from "./videos/robust_to_poses/1_1.mp4"  //不能以数字开头命名
// import 1_1 from "./videos/robust_to_poses/1_1.mp4"
import G_1_2 from "./videos/robust_to_poses/1_2.mp4"
import G_1_3 from "./videos/robust_to_poses/1_3.mp4"
import G_1_4 from "./videos/robust_to_poses/1_4.mp4"
import G_1_5 from "./videos/robust_to_poses/1_5.mp4"
import G_1_6 from "./videos/robust_to_poses/1_6.mp4"


import G_2_1 from "./videos/robust_to_distractors/2_1.mp4"
import G_2_2 from "./videos/robust_to_distractors/2_2.mp4"
import G_2_3 from "./videos/robust_to_distractors/2_3.mp4"
import G_2_4 from "./videos/robust_to_distractors/2_4.mp4"
import G_2_5 from "./videos/robust_to_distractors/2_5.mp4"
import G_2_6 from "./videos/robust_to_distractors/2_6.mp4"


import G_3_1 from "./videos/robust_to_backgrounds/3_1.mp4"
import G_3_7 from "./videos/robust_to_backgrounds/3_7.mp4"
import G_3_3 from "./videos/robust_to_backgrounds/3_3.mp4"
import G_3_4 from "./videos/robust_to_backgrounds/3_4.mp4"
import G_3_8 from "./videos/robust_to_backgrounds/3_8.mp4"
import G_3_6 from "./videos/robust_to_backgrounds/3_6.mp4"

import G_4_1 from "./videos/robust_to_unseen_object/4_1.mp4"
import G_4_2 from "./videos/robust_to_unseen_object/4_2.mp4"
import G_4_3 from "./videos/robust_to_unseen_object/4_3.mp4"
import G_4_4 from "./videos/robust_to_unseen_object/4_4.mp4"
import G_4_5 from "./videos/robust_to_unseen_object/4_5.mp4"
import G_4_6 from "./videos/robust_to_unseen_object/4_6.mp4"

// 三个一组作为一个视频组件进行展示

import N_1_1 from "./videos/non_pp_task/1_1.mp4"
import N_1_2 from "./videos/non_pp_task/1_2.mp4"
import N_1_3 from "./videos/non_pp_task/1_3.mp4"
import N_2_1 from "./videos/non_pp_task/2_1.mp4"
import N_2_2 from "./videos/non_pp_task/2_2.mp4"
import N_2_3 from "./videos/non_pp_task/2_3.mp4"
import N_3_1 from "./videos/non_pp_task/3_1.mp4"
import N_3_2 from "./videos/non_pp_task/3_2.mp4"
import N_3_3 from "./videos/non_pp_task/3_3.mp4"

import calvin_result from "./images/results/calvin_update.png"
import real_result from "./images/results/real.png"

const Title: React.FC = ({children}) => {
    // Paper title
    return (
        <h1 className="pb-1 mb-5 sm:mb-4 sm:leading-tight md:leading-tight lg:leading-tight font-bold text-center">{children}</h1>
    )
}

const CalvinImage = () => {
    const containerStyle = {
      textAlign: 'center',  // 使容器内元素居中
      padding: '20px',      // 给容器添加一些内边距
    };
  
    const imageStyle = {
      maxWidth: '100%',     // 图片最大宽度为父容器的100%
      height: 'auto',       // 保持图片比例
      display: 'block',     // 将图片转换为块级元素
      margin: '0 auto',     // 图片水平居中
    };
  
    const captionStyle = {
      marginTop: '10px',    // 让字幕和图片之间有一些间距
    };
  
    return (
      <div style={containerStyle}>
        <img src={calvin_result} alt="Example" style={imageStyle} />
        <p style={captionStyle}>Results on CALVIN ABC->D </p>
      </div>
    );
  };

  const RealImage = () => {
    const containerStyle = {
      textAlign: 'center',  // 使容器内元素居中
      padding: '20px',      // 给容器添加一些内边距
    };
  
    const imageStyle = {
      maxWidth: '100%',     // 图片最大宽度为父容器的100%
      height: 'auto',       // 保持图片比例
      display: 'block',     // 将图片转换为块级元素
      margin: '0 auto',     // 图片水平居中
    };
  
    const captionStyle = {
      marginTop: '10px',    // 让字幕和图片之间有一些间距
    };
  
    return (
      <div style={containerStyle}>
        <img src={real_result} alt="Example" style={imageStyle} />
        <p style={captionStyle}>Success Rates of Real-Robot Experiments.</p>
      </div>
    );
  };
  
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
                <p className="text-justify font-light text-base sm:text-lg m-1 sm:m-1 max-w-[100%] sm:max-w-[700px]">{
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

const Affiliation: React.FC = ({children, number}) => {
    return (
        <span className={"text-center inline-block mr-4"}>
            <sup className={"mr-0.5"}>{number}</sup>
            <a
               className="font-light no-underline text-stone-600">
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


export const Head: HeadFC = () => <title>GR-MG: Leveraging Partially-Annotated Data via Multi-Modal
Goal Conditioned Policy</title>

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
            <p className="text-center">{children}</p>
        </div>
    )
}


// 一个简单的视频显示组件
const VideoGrid = ({ videos }) => {
    return (
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <video width="320" height="240" controls autoPlay muted playsInline loop>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center mx-auto" style={{ marginTop: '-30px' ,fontSize: '20px',marginBottom: '-15px'  }}>
            {video.description}
            </p>
          </div>
        ))}
      </div>
    );
  };

const videosRow1_1 = [
    { src: G_1_1, description: "" },
    { src: G_1_2, description: "" },
    { src: G_1_3, description: "" },
  ];
const videosRow1_2 = [
    { src: G_1_4, description: "" },
    { src: G_1_5, description: "" },
    { src: G_1_6, description: "" },
  ];

const videosRow2_1 = [
    { src: G_2_1, description: "" },
    { src: G_2_2, description: "" },
    { src: G_2_3, description: "" },
  ];
const videosRow2_2 = [
    { src: G_2_4, description: "" },
    { src: G_2_5, description: "" },
    { src: G_2_6, description: "" },
  ];

const videosRow3_1 = [
    { src: G_3_1, description: "pick up the red mug from the rack & place the picked object on the table" },
    { src: G_3_6, description: "pick up the potato from the vegetable basket & place the picked object on the cutting board" },
    { src: G_3_7, description: "pick up the eggplant from the green plate & place the picked object on the red plate" },
  ];
const videosRow3_2 = [
    { src: G_3_3, description: "pick up the red mug from the rack & place the picked object on the table" },
    { src: G_3_4, description: "pick up the potato from the vegetable basket & place the picked object on the cutting board" },
    { src: G_3_8, description: "pick up the eggplant from the green plate & place the picked object on the red plate" },
  ];



const videosRow4_1 = [
    { src: G_4_4, description: "pick up the tiger from the red plate & place the picked object on the green plate" },
    { src: G_4_5, description: "pick up the red apple from the red plate & place the picked object on the green plate" },
    { src: G_4_6, description: "pick up the while bottle from the red plate & place the picked object on the green plate" },
  ];
const videosRow4_2 = [
    { src: G_4_1, description: "pick up the yellow bottle from the vegetable basket & place the picked object on the cutting board" },
    { src: G_4_2, description: "pick up the banana from the vegetable basket & place the picked object on the cutting board" },
    { src: G_4_3, description: "pick up the red apple from the vegetable basket & place the picked object on the cutting board" },
  ];

const videosRowN_1 = [
    { src: N_1_1, description: "push the dragon fruit off the cutting board" },
    { src: N_1_2, description: "rotate the bottle to the left" },
    { src: N_1_3, description: "rotate the bottle to the right" },
  ];

const videosRowN_2 = [
    { src: N_2_1, description: "cap the white mug" },
    { src: N_2_2, description: "uncap the white mug" },
    { src: N_2_3, description: "close the drawer" },
  ];

const videosRowN_3 = [
    { src: N_3_1, description: "stack the bowls" },
    { src: N_3_2, description: "flip cup upright" },
    { src: N_3_3, description: "wipe the cutting board" },
  ];

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Main>
                <Article>
                    <Title>
                        <span className="text-stone-800">GR-MG: Leveraging Partially Annotated Data via Multi-Modal
                        Goal-Conditioned Policy</span>
                    </Title>

                    <Venue website={"https://www.ieee-ras.org/publications/ra-l"}>
                        {/* <span className="font-normal text-stone-600 hover:text-transparent hover:bg-clip-text
                        hover:bg-gradient-to-r hover:from-pink-500 hover:via-indigo-600 hover:to-emerald-400
                        hover:transition-all">In Submission</span> */}
                        <span className="font-normal text-stone-600 hover:underline">IEEE Robotics and Automation Letter (RA-L)
                        </span>
                    </Venue>


                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-4">
                        <Author website={"https://github.com/LPY1219"} isInternship={true} affiliations={"1,2"}>Peiyan Li</Author>
                        <Author website={"https://scholar.google.com/citations?user=7u0TYgIAAAAJ&hl=zh-CN&oi=ao"} affiliations={"3"} isCorrespondingAuthor={true} isProjectLead={true} >Hongtao Wu</Author>
                        <Author website={"https://yanrockhuang.github.io/"} affiliations={"1,2"} isCorrespondingAuthor={true}>Yan Huang</Author>
                        <Author website={""} affiliations={"3"}>Chilam Cheang</Author>
                        <Author website={"https://scholar.google.com/citations?hl=zh-CN&user=8kzzUboAAAAJ&view_op=list_works&sortby=pubdate"} affiliations={"1,2"}>Liang Wang</Author>
                        <Author website={"https://www.taokong.org/"} affiliations={"3"} lastAuthor={true}>Tao Kong</Author>
                    </div>

                    {/* Affilations */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-1">
                        <Affiliation  number={"1"}>NLPR & MAIS, Institute of
                        Automation, Chinese Academy of Sciences</Affiliation>
                        <Affiliation number={"2"}>School of Artificial Intelligence, University of Chinese Academy of Sciences</Affiliation>
                        <Affiliation number={"3"}>ByteDance Research</Affiliation>
                    </div>
                    <div className="flex flex-wrap justify-center text-l lg:text-l space-x-4">
                        <span className="text-stone-600 text-center"><sup className="mr-0.5">†</sup>Work done during internship at Bytedance</span>
                        <span className="text-stone-600 text-center"><sup className="mr-0.5">*</sup>Corresponding author</span>
                        <span className="text-stone-600 text-center"><sup className="mr-0.5">‡</sup>Project lead</span>
                    </div>

                    {/* Action Links */}
                    <p className="flex flex-wrap justify-center">
                        <ActionLink url={"https://arxiv.org/abs/2408.14368"} icon={<FaFilePdf/>}>Paper</ActionLink>
                        {/* <ActionLink url={"#video"} icon={<FaVideo/>}>Video</ActionLink> */}
                        <ActionLink url={"https://drive.google.com/file/d/1MI510mgg7VlITpXbEFQxAxWt1lMFSfQO/view?usp=sharing"} icon={<FaFilePdf/>}>Supplementary</ActionLink>
                        <ActionLink url={"https://github.com/bytedance/GR-MG/tree/main"} icon={<AiFillGithub/>}>Code</ActionLink>
                        <ActionLink url={"https://github.com/bytedance/GR-MG/tree/main?tab=readme-ov-file#checkpoints"} icon={<FaRobot/>}>Checkpoints</ActionLink>
                    </p>

                    {/* Abstract */}
                    <Abstract>
                    The robotics community has consistently aimed to achieve generalizable robot manipulation with flexible natural language instructions. One primary challenge is that obtaining robot trajectories fully annotated with both actions and
                    texts is time-consuming and labor-intensive. However, partially-annotated data, such as human activity videos without action labels and robot trajectories without text labels, are much easier to collect. Can we leverage these data to enhance the
                    generalization capabilities of robots? In this paper, we propose GR-MG, a novel method which supports conditioning on a text instruction and a goal image. During training, GR-MG
                    samples goal images from trajectories and conditions on both the text and the goal image or solely on the image when text is not available. During inference, where only the text is provided, GR-MG generates the goal image via a diffusion-based image-editing model and conditions on both the text
                    and the generated image. This approach enables GR-MG to leverage large amounts of partially-annotated data while still use languages to flexibly specify tasks. To generate accurate goal images, we propose a novel progress-guided goal image generation model which injects task progress information into
                    the generation process. In simulation experiments, GR-MG improves the average number of tasks completed in a row of 5 from 3.35 to 4.04. In real-robot experiments, GR-MG is able to perform 58 different tasks and improves the success rate from 68.7% to 78.1% and 44.4% to 60.6% in simple and generalization settings, respectively. It also outperforms
                    comparing baseline methods in few-shot learning of novel skills.
                    </Abstract>

                    {/* YouTube Video */}
                    {/* <h2 className="font-semibold border-b-[1px]" id="video">Video with Audio</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PA9rWWVWsc4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen className="rounded-lg"></iframe>
                    </div> */}
                    <p> GR-MG is a model designed to support multi-modal goals: a language and a goal image. It consists of two modules: a progress-guided goal image generation model
                         and a multi-modal goal-conditioned policy. The goal image generation model generates a goal image based on the current observation,
                          a language description of the task, and the task progress. The multi-modal goal-conditioned policy takes the generated goal image,
                           the current observation, and the language instruction as inputs to predict the action trajectory, task progress, and future images. 
                           The task progress is subsequently fed into the goal image generation model. The task progress is initialized as zero at the beginning of a rollout.
                    </p>
                    <video autoPlay controls muted playsInline loop alt="model"
                        className="rounded-lg mx-auto" style={{ width: '70%', height: 'auto' }}>
                    <source src={architecture} type="video/mp4"/>
                    </video>
                    {/* Results */}
                    {/* Example Rollout */}
                    <h3 id="rollout" className="!mt-4">Example Rollout</h3>
                    <p>  Below, we show a rollout example below. Specifically, the goal image generation model generates the goal image every n timesteps. 
                        The goal image indicates the state the robot should move towards according to the given language instruction.
                    </p>
                    <video autoPlay controls muted playsInline loop alt="Example Rollout"
                        className="rounded-lg mx-auto" style={{ width: '70%', height: 'auto' }}>
                    <source src={rollout} type="video/mp4"/>
                    </video>

                    {/* Multi task Video */}
                    <h3 id="language-guided" className="!mt-4">Multi-Task Learning Experiments</h3>
                    <p>     GR-MG is able to perform 58 tasks, including both pick-and-place and non-pick-and-place manipulations.
                    </p>
                    <video autoPlay controls muted playsInline loop alt="Multi-task Learning Experiments"
                           className="rounded-lg mx-auto" style={{ width: '70%', height: 'auto' }}>
                        <source src={multi_task} type="video/mp4"/>
                    </video>
                    <p>  Here are a few examples of challenging tasks that go beyond simple pick-and-place operations.</p>
                    <VideoGrid videos={videosRowN_1} />
                    <VideoGrid videos={videosRowN_2}  />
                    <VideoGrid videos={videosRowN_3}  />
                    {/* Generalization Video */}
                    <h3 id="language-guided" className="!mt-4">Generalization Experiments</h3>
                    <p>  GR-MG showcases powerful generalization capability. We evaluate its performance in four different settings including Simple,
                         Unseen Disctractor, Uneen Background, and Unseen Object. Below, we show example rollouts in generalization settings.</p>
{/* teach us how to lay videos */}
                <div className="my-6 pt-6 pb-4 bg-gradient-to-r">
                <p className="text-center md:text-2lg font-bold md:max-w-[85%] mx-auto" style={{fontSize: '26px' , marginTop: '-30px' , marginBottom: '-15px' }}>
                    Robust to Different Object Poses
                </p>
                <VideoGrid videos={videosRow1_1} />
                <p className="text-center mx-auto" style={{ marginTop: '-2px' ,fontSize: '23px',marginBottom: '-15px'  }}>
                press the toaster switch
                </p>
                <VideoGrid videos={videosRow1_2} />
                <p className="text-center mx-auto" style={{ marginTop: '-2px',fontSize: '23px',marginBottom: '-15px'   }}>
                open the oven
                </p>
                </div>

                <div className="my-6 pt-6 pb-4 bg-gradient-to-r">
                <p className="text-center md:text-2lg font-bold md:max-w-[85%] mx-auto" style={{fontSize: '26px' ,marginTop: '-40px' , marginBottom: '-15px'  }}>
                    Robust to Unseen Distractors
                </p>
                <VideoGrid videos={videosRow2_1} />
                <p className="text-center mx-auto" style={{ marginTop: '-2px' ,fontSize: '22px' ,marginBottom: '-15px' }}>
                pick up the mandarin from the green plate & place the picked object on the table
                </p>
                <VideoGrid videos={videosRow2_2} />
                <p className="text-center mx-auto" style={{ marginTop: '-2px' ,fontSize: '22px',marginBottom: '-15px'  }}>
                pick up the red mug from the rack & place the picked object on the table
                </p>
                </div>

                <div className="my-6 pt-6 pb-4 bg-gradient-to-r">
                <p className="text-center text-lg md:text-2lg font-bold md:max-w-[85%] mx-auto" style={{fontSize: '26px' ,marginTop: '-40px' , marginBottom: '-15px'  }}>
                    Robust to Unseen Backgrounds
                </p>
                <VideoGrid videos={videosRow3_1} />
                <VideoGrid videos={videosRow3_2} />
                </div>

                <div className="my-6 pt-6 pb-4 bg-gradient-to-r">
                <p className="text-center text-lg md:text-2lg font-bold md:max-w-[85%] mx-auto" style={{fontSize: '26px' ,marginTop: '-40px' , marginBottom: '-15px'  }}>
                    Robust to Unseen Objects
                </p>
                <VideoGrid videos={videosRow4_1} />
                <VideoGrid videos={videosRow4_2} />
                </div>
                {/* Quantitative Results */}
                <h3 id="language-guided" className="!mt-4">Quantitative Results</h3>
                <p>  We evaluate the performance of GR-MG in a CALVIN benchmark and a real robot. For the CALVIN benchmark, we evaluate GR-MG on the ABC->D challenge. GR-MG outperforms all baselines. The advantage becomes even more pronounced when using only 10% of data with language and action labels. The results are presented in the following table.
                </p>
                <CalvinImage  />
                <p> In real-robot experiments, we evaluate GR-MG in a simple setting as well as four challenging generalization settings. GR-MG consistently outperforms competitive baselines. Results are shown below.
                </p>
                <RealImage  />
                <p> More details about our method and experimental settings can be found in our <a href="https://arxiv.org/abs/2408.14368">paper</a>.
                </p>
{/* teach us how to set scroll video */}       
                {/* <div className="my-6 pt-6 pb-4 bg-gradient-to-r">
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
                                <CarouselItem video={G_4_4}>"pick up the tiger from the red plate & place the picked object on the green plate"</CarouselItem>
                                <CarouselItem video={G_4_5}>"pick up the red apple from the red plate & place the picked object on the green plate"</CarouselItem>
                                <CarouselItem video={G_4_6}>"pick up the while bottle from the red plate & place the picked object on the green plate"</CarouselItem>
                                <CarouselItem video={G_4_1}>"pick up the yellow bottle from the vegetable basket & place the picked object on the cutting board"</CarouselItem>
                                <CarouselItem video={G_4_2}>"pick up the banana from the vegetable basket & place the picked object on the cutting board"</CarouselItem>
                                <CarouselItem video={G_4_3}>"pick up the red apple from the vegetable basket & place the picked object on the cutting board"</CarouselItem>

                            </Carousel>
                        </div>
                        <p className="text-center text-xl md:text-2xl font-bold md:max-w-[85%] mx-auto">
                            GR-MG is robust to unseen objects
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

{/* cite */}
                    <h2 id="citation" className="border-b-[1px]">Citation</h2>
                    <div className="relative overflow-auto">
                        {/* <pre className="bg-gradient-to-r from-pink-100 via-indigo-100 to-emerald-100 !my-0"> */}
                        <pre className="bg-gray-100 !my-0">
                            <code id="citation-bib" className="font-medium text-slate-800 ">{
                                `@article{li2025gr,
  title={GR-MG: Leveraging Partially-Annotated Data Via Multi-Modal Goal-Conditioned Policy},
  author={Li, Peiyan and Wu, Hongtao and Huang, Yan and Cheang, Chilam and Wang, Liang and Kong, Tao},
  journal={IEEE Robotics and Automation Letters},
  year={2025},
  publisher={IEEE}
}`
}
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
