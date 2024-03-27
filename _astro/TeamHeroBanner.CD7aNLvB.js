import{j as e}from"./jsx-runtime.BPj4-Rfu.js";import{i as m}from"./jwt.DjKu0S3o.js";import{r as l}from"./index.SSXOyoI7.js";import{C as n}from"./circle-check-big.CVZOTjPY.js";const i=["Create custom roadmaps for your team","Plan, track and document your team's skills and growth","Invite your team members","Get insights on your team's skills and growth"];function t(){window.fireEvent({category:"FeatureClick",action:"Pages / Teams",label:"Create your Team"})}function u(){const[s,r]=l.useState();return l.useEffect(()=>{r(m())},[]),e.jsx("div",{className:"bg-white py-8 lg:py-12",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"flex flex-row items-center justify-start text-left lg:justify-between",children:[e.jsxs("div",{className:"flex flex-grow flex-col",children:[e.jsx("h1",{className:"mb-0.5 text-2xl font-bold sm:mb-2.5 sm:text-4xl lg:mb-4 lg:text-5xl",children:"Roadmaps for Teams"}),e.jsx("p",{className:"mb-4 text-base leading-normal text-gray-600 sm:mb-0 sm:leading-none lg:text-lg",children:"Train, plan and track your team's skills and career growth."}),e.jsx("ul",{className:"mb-4 mt-0 hidden text-sm leading-7 sm:mb-4 sm:mt-4 sm:flex sm:flex-col lg:mb-6 lg:mt-6 lg:text-base lg:leading-8",children:i.map((a,o)=>e.jsxs("li",{children:[e.jsx(n,{className:"hidden h-6 w-6 text-green-500 sm:inline-block"}),e.jsx("span",{className:"ml-0 sm:ml-2",children:a})]},a))}),e.jsxs("div",{className:"flex flex-col items-start gap-2 sm:flex-row sm:items-center",children:[e.jsx("a",{onClick:()=>{t()},href:s?"/team/new":"/signup",className:"flex w-full items-center justify-center rounded-lg border border-transparent bg-purple-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 sm:w-auto sm:text-base",children:"Create your Team"}),!s&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"ml-1 hidden text-base sm:inline",children:["or  ",e.jsx("a",{href:"/login",onClick:()=>{t(),localStorage.setItem("authRedirect","/team/new")},className:"text-purple-600 underline  hover:text-purple-700",children:"Login to your account"})]}),e.jsx("a",{href:"/login",onClick:()=>{t(),localStorage.setItem("authRedirect","/team/new")},className:"flex w-full items-center justify-center rounded-lg border border-purple-600 px-5 py-2 text-base text-sm font-medium text-purple-600 hover:bg-blue-700 sm:hidden sm:text-base",children:"Login to your account"})]})]})]}),e.jsx("img",{alt:"team roadmaps",className:"hidden h-64 md:block lg:h-80",src:"/images/team-promo/hero-img.png"})]})})})}export{u as T,t as f};
