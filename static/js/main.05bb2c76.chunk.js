(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{105:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(15),i=a(0),r=a.n(i),n=a(3),o=a(9),l=a(98),d=(a(105),a(4)),A=a(49),j=a.n(A),h=a(87),b=a(22),m=a.p+"static/media/contact.d0709220.svg",p=a(97),x=a(38),u=(a(206),a(93)),v=a.n(u);var O=e=>{const t=b.a().shape({name:b.b().min(3,"At least three characters").max(20,"At most twenty characters").required("Name is Required"),email:b.b().min(6,"At least three characters").max(40,"At most twenty characters").email("Must Be A Valid Email").required("Email is Required"),phone:b.b().min(10,"Phone Must Be 10 Characters").max(10,"At most 10 characters").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Use a valid phone number").required("Phone is Required"),message:b.b().min(10,"At least ten characters").max(200,"At most two hundred characters").required("Message is Required")}),a=Object(p.a)({initialValues:{name:"",email:"",phone:"",message:""},validationSchema:t,onSubmit:function(){var e=Object(h.a)(j.a.mark((function e(t,{resetForm:a}){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:"POST",url:"https://formspree.io/f/mleoabrb",data:t,crossdomain:!0,headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,v()(s);case 5:x.b.info("Message Sent"),a(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),x.b.error("Could Not Send Message");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}()});return Object(s.jsxs)("div",{className:"home__contact",children:[Object(s.jsxs)("div",{className:"home__contact__inner",children:[Object(s.jsx)("img",{src:m,alt:""}),Object(s.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact Me"}),Object(s.jsxs)("div",{className:"form__group",children:[Object(s.jsx)("input",{type:"text",name:"name",value:a.values.name,onChange:a.handleChange}),Object(s.jsx)("label",{children:a.errors.name?a.errors.name:"Name"})]}),Object(s.jsxs)("div",{className:"form__group",children:[Object(s.jsx)("input",{type:"text",name:"email",value:a.values.email,onChange:a.handleChange}),Object(s.jsx)("label",{children:a.errors.email?a.errors.email:"Email"})]}),Object(s.jsxs)("div",{className:"form__group",children:[Object(s.jsx)("input",{type:"text",name:"phone",value:a.values.phone,onChange:a.handleChange}),Object(s.jsx)("label",{children:a.errors.phone?a.errors.phone:"Phone"})]}),Object(s.jsxs)("div",{className:"form__group",children:[Object(s.jsx)("textarea",{name:"message",id:"",cols:"30",rows:"10",value:a.values.message,onChange:a.handleChange}),Object(s.jsx)("label",{children:a.errors.message?a.errors.message:"Message"})]}),Object(s.jsx)("button",{className:"btn btn__primary",children:"Send Message"})]})]}),Object(s.jsx)(x.a,{})]})},g=a(7);var _=e=>{const t=r.a.useState(!1),a=Object(g.a)(t,2),c=a[0],i=a[1],o=r.a.useState(!1),l=Object(g.a)(o,2),A=l[0],j=l[1],h=Object(d.f)();return Object(s.jsx)("div",{className:"nav__container ".concat(c?"active":null),children:Object(s.jsxs)("div",{className:"nav__inner ".concat(c?"active":null),children:[Object(s.jsx)("h3",{className:"nav__logo",onClick:e=>{e.preventDefault(),h.push("/")},children:"Jeremy Barber"}),Object(s.jsx)("div",{className:"bars__container",onClick:e=>{e.preventDefault(),j(!A),i(!c)},children:Object(s.jsx)("div",{className:"bars ".concat(A?"active":null)})}),Object(s.jsxs)("ul",{className:"nav__items ".concat(c?"active":null),children:[Object(s.jsx)("li",{className:"nav__item",children:Object(s.jsx)(n.b,{to:"/",children:"Home"})}),Object(s.jsx)("li",{className:"nav__item",children:Object(s.jsx)(n.b,{to:"/about",children:"About"})}),Object(s.jsx)("li",{className:"nav__item",children:Object(s.jsx)(n.b,{to:"/clients",children:"Clients"})}),Object(s.jsx)("li",{className:"nav__item",children:Object(s.jsx)(n.b,{to:"/services",children:"Services"})}),Object(s.jsx)("li",{className:"nav__item",children:Object(s.jsx)(n.b,{to:"projects",children:"Projects"})}),Object(s.jsx)("li",{className:"nav__item",children:Object(s.jsx)(n.b,{to:{pathname:"/",state:"contact"},children:"Contact"})})]})]})})};var w=e=>(r.a.useEffect((()=>{window.scrollTo({top:0,behavior:"smooth"})})),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"layout__container",children:Object(s.jsxs)("div",{className:"layout__container__inner",children:[Object(s.jsx)(_,{}),e.children]})})})),B=a(94),N=a.n(B);var P=e=>Object(s.jsxs)("div",{className:"footer__container",children:[Object(s.jsx)("p",{children:"\xa9 2021 Jeremy Barber"}),Object(s.jsxs)("div",{className:"footer__social",children:[Object(s.jsx)("a",{href:"https://linkedin.com/in/barber-jeremy",target:"_blank",children:Object(s.jsx)("i",{className:"fab fa-2x fa-linkedin"})}),Object(s.jsx)("a",{href:"https://github.com/onlytruejeremy",target:"_blank",children:Object(s.jsx)("i",{className:"fab fa-2x fa-github"})})]})]});var f=Object(d.g)((e=>{const t=r.a.useRef();return r.a.useEffect((()=>{"contact"===e.location.state&&setTimeout((()=>{t.current.scrollIntoView({behavior:"smooth"})}),200)})),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(w,{children:Object(s.jsxs)("div",{className:"home__container",children:[Object(s.jsx)("div",{className:"hero__container",children:Object(s.jsxs)("div",{className:"hero__tab",children:[Object(s.jsx)("h3",{children:"Full Stack Development"}),Object(s.jsx)("h1",{children:Object(s.jsx)(N.a,{strings:["Have an Idea?","Let's build it!"],typeSpeed:60,loop:!0})})]})}),Object(s.jsxs)("div",{className:"home__cards",children:[Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h2",{className:"card__title",children:"Services"}),Object(s.jsx)("p",{className:"card__paragraph",children:"I have the skills and tools at the ready to build fully responive and immersive applications designed for either internal or external customers."}),Object(s.jsx)(n.b,{to:"/services",className:"btn btn__primary",children:"Learn More"})]}),Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h2",{className:"card__title",children:"Projects"}),Object(s.jsx)("p",{className:"card__paragraph",children:"Take a look at some of the projects I've put together to that demonstrate my constant drive to learn and innovate using new technology."}),Object(s.jsx)(n.b,{to:"/projects",className:"btn btn__primary",children:"View Projects"})]}),Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h2",{className:"card__title",children:"Clients"}),Object(s.jsx)("p",{className:"card__paragraph",children:"Each project, website and application I create is designed to meet the desired end state a client has in mind. Behind the development of all successful projects stands rock solid communication."}),Object(s.jsx)(n.b,{to:"/clients",className:"btn btn__primary",children:"View Clients"})]})]}),Object(s.jsx)("div",{className:"home__about",children:Object(s.jsxs)("div",{className:"home__about__inner",children:[Object(s.jsx)("h1",{className:"section__title",children:"About"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Welcome to my site, I'm a full stack developer ready to work with you to build out a project, site or service. Click the link below to get a bit more information about my experience and how I can help you."}),Object(s.jsx)("br",{}),Object(s.jsx)(n.b,{to:"/about",className:"btn btn__primary",children:"Learn More"})]})}),Object(s.jsxs)("div",{ref:t,children:[Object(s.jsx)(O,{}),Object(s.jsx)(P,{})]})]})}),Object(s.jsx)("section",{})]})}));var y=a.p+"static/media/githubpic.3c5d8e95.PNG",E=a.p+"static/media/JeremyB2021.5e1eb914.pdf";var Q=e=>{Object(d.f)();const t=r.a.useState(!1),a=Object(g.a)(t,2),c=a[0],i=a[1];return r.a.useEffect((()=>{setTimeout((()=>{i(!0)}),1e3)})),Object(s.jsxs)(w,{children:[Object(s.jsxs)("div",{class:"about__container",children:[Object(s.jsxs)("div",{class:"about__top",children:[Object(s.jsx)("h1",{class:"section__title__alt",children:"ABOUT"}),Object(s.jsx)("div",{class:"section__paragraph",children:"My goal is to create a positive impact by bringing ideas and concepts to life. I am constantly building projects in order to explore and better understand new technologies. My passion is revealed in the way I work with others, the projects I build, and the results I produce."})]}),Object(s.jsxs)("div",{class:"about__bottom wrapme",children:[Object(s.jsx)("div",{className:"about__bottom__left ".concat(c?"active":""," shadow"),children:Object(s.jsx)("img",{src:y,alt:""})}),Object(s.jsxs)("div",{class:"about__bottom__right",children:[Object(s.jsx)("h2",{children:"Full Stack Developer"}),Object(s.jsx)("p",{children:"I have a background in IT, sales and intelligence operations. While deliberating over what I wanted to pursue in technology I came across web development and I started tinkering. After working on a team of developers, building out applications and sites, I realized that development is where I should have been."}),Object(s.jsx)("p",{children:"Now I have experience in developing RESTful APIs, databases, responsive websites and full stack applications. Using my knowledge and experience, I can help you tackle your next challenge."}),Object(s.jsx)("p",{children:"You can find more information about what I am capable of and my experience in the services section of my site."}),Object(s.jsxs)("div",{class:"three__btn",children:[Object(s.jsx)(n.b,{class:"btn shadow btn__primary",onClick:e=>{e.preventDefault(),window.open(E)},children:"Resume"}),Object(s.jsx)(n.b,{to:{pathname:"/",state:"contact"},className:"btn shadow btn__primary",children:"Contact"}),Object(s.jsx)(n.b,{to:"/services",className:"btn shadow btn__primary",children:"Services"})]})]})]})]}),Object(s.jsx)(P,{})]})};var I=e=>Object(s.jsxs)("div",{className:"service__card",children:[Object(s.jsx)("div",{className:"service__card__body",style:{backgroundImage:"url(".concat(e.data.imgUrl,")")},children:Object(s.jsxs)("div",{className:"card__body__inner",children:[Object(s.jsx)("h2",{className:"card__body__inner__hidden",children:e.data.title}),Object(s.jsx)("p",{className:"card__body__inner__hidden",children:e.data.paragraph}),Object(s.jsxs)("p",{className:"card__body__inner__hidden",children:["Tech: ",e.data.tech]})]})}),Object(s.jsx)("div",{className:"service__card__footer",children:Object(s.jsx)(n.b,{to:{pathname:"/",state:"contact"},className:"btn btn__primary",children:"Contact"})})]});var U=e=>Object(s.jsxs)(w,{children:[Object(s.jsxs)("div",{className:"services__container",children:[Object(s.jsx)("h1",{className:"section__title__alt",children:"Services"}),Object(s.jsx)("p",{children:"From developing, creating and implementing first or third party APIs to building a custom website, I create effective systems that are flexible, intuitive, and responsive. I'll help you expand your business while enhancing your customer experience."}),Object(s.jsx)("div",{className:"services__cards",children:[{id:1,title:"Front End",paragraph:"We'll work together to produce an experience your customers will love.",tech:"HTML5, CSS3, Bootstrap,\n              JavaScript, jQuery, ReactJS, Formik,\n              Yup, Axios\n              ",imgUrl:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{id:2,title:"Middle Tier",paragraph:"I'm ready to build a RESTful API from scratch or extend an existing one.",tech:"NodeJS, ExpressJS, Joi, JWT, BCRYPT, CORS, Helmet\n              ",imgUrl:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Back End",paragraph:"I've got experience using document-based databases and relational ones.",tech:"MongoDB, FireBase, MSSQL, MySQL\n              ",imgUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}].map((e=>Object(s.jsx)(I,{data:e})))})]}),Object(s.jsx)(P,{})]}),F=a(99);var S=e=>{let t=e.data,a=t.id,c=t.projectTitle,i=t.projectTech,r=t.projectAbout,n=t.projectImages,o=t.codeUrl,l=t.viewUrl,d=t.host,A=Object(F.a)(e,["data"]);return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("div",{className:"project__header",children:Object(s.jsx)("img",{src:n[0],alt:"",onClick:()=>{A.openGallery(a)}})}),Object(s.jsxs)("div",{className:"project__body",children:[Object(s.jsx)("h2",{children:c}),Object(s.jsxs)("p",{children:["About: ",r]}),Object(s.jsxs)("p",{children:["Tech: ",i]}),Object(s.jsxs)("p",{children:["Host: ",d]}),Object(s.jsxs)("div",{className:"actions__container",children:[Object(s.jsx)("div",{children:Object(s.jsx)("a",{className:"btn btn__primary",target:"_blank",href:l,children:"View"})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{className:"btn btn__primary",target:"_blank",href:o,children:"Code"})})]})]})]})};var M=[{id:1,projectTitle:"Mr. Electronics",projectTech:"ReactJS, FireBase, Stripe API, Cloud Functions, React Context API, localstorage",projectAbout:"Mr. Electronics is an ecommerce application. Users can register, sign-in and view the latest products. They can also view products by category. Once a user has added the items they wish to purchase to the cart they can check out using stripe.",projectImages:[a.p+"static/media/ecomm1.addd0aba.PNG",a.p+"static/media/ecomm2.5c5b1c44.PNG",a.p+"static/media/ecomm3.29b4520c.PNG"],codeUrl:"https://github.com/onlytruejeremy/mr-electronics",viewUrl:"https://mr-electronics.web.app/",host:"FireBase (Fast Loading)"},{id:2,projectTitle:"Favorite Movies",projectTech:"ReactJS, FireBase, React Bootstrap, The Movie Database API",projectAbout:"Favorite movies is a movie directory application. Users can register, sign-on, comment and add their movies to their favorites.",projectImages:[a.p+"static/media/movies1.df81b3ad.PNG",a.p+"static/media/movies2.d6d88c77.PNG",a.p+"static/media/movies3.5c3f18a9.PNG"],codeUrl:"https://github.com/onlytruejeremy/nothingbutmovies",viewUrl:"https://movies-c4251.web.app/",host:"FireBase (Fast Loading)"},{id:3,projectTitle:"QuickSocial",projectTech:"ReactJS, MySQL, NodeJS, JWT, BCRYPT, Reddit API, React Context API",projectAbout:"QuickSocial is a simple social media application where users can make posts with or without images, add friends and view the news.",projectImages:[a.p+"static/media/social1.ab931a08.PNG",a.p+"static/media/social2.f66cd2d2.PNG",a.p+"static/media/social3.bc5e402b.PNG"],codeUrl:"https://codesandbox.io/s/blissful-cray-nosi2",viewUrl:"https://nosi2-3000.sse.codesandbox.io/",host:"Codesandbox (Slow Loading)"}],k=a(95);a(237);var C=e=>{const t=r.a.useState(0),a=Object(g.a)(t,2),c=a[0],i=a[1],n=r.a.useState(!1),o=Object(g.a)(n,2),l=o[0],d=o[1],A=r.a.useState([]),j=Object(g.a)(A,2),h=j[0],b=j[1];return r.a.useEffect((()=>{var t;let a;d(e.open),a=M.filter((t=>t.id==e.imagesId)),b(null===(t=a[0])||void 0===t?void 0:t.projectImages)}),[e]),Object(s.jsx)(s.Fragment,{children:l&&h&&Object(s.jsx)(k.a,{mainSrc:h[c],nextSrc:h[(c+1)%h.length],prevSrc:h[(c+h.length-1)%h.length],onCloseRequest:()=>d(!1),onMovePrevRequest:()=>i((c+h.length-1)%h.length),onMoveNextRequest:()=>i((c+1)%h.length)})})};var G=e=>{const t=r.a.useState(!1),a=Object(g.a)(t,2),c=a[0],i=a[1],n=r.a.useState(),o=Object(g.a)(n,2),l=o[0],d=o[1],A=r.a.useState(0),j=Object(g.a)(A,2),h=j[0],b=j[1],m=e=>{i(!0),d(e),b(h+1)};return Object(s.jsxs)(w,{children:[Object(s.jsxs)("div",{className:"projects__container",children:[Object(s.jsx)("h1",{className:"section__title__alt",children:"Projects"}),Object(s.jsx)("p",{children:"Go ahead and check out some of my work. Reach out to me and let me know what you think, I'm constantly learning and always seeking feedback."}),Object(s.jsx)("div",{className:"project__cards",children:M.map((e=>Object(s.jsx)(S,{data:e,openGallery:m})))}),Object(s.jsx)(P,{})]}),Object(s.jsx)(C,{open:c,imagesId:l,clicked:h})]})},D=a.p+"static/media/kraken.8a243d76.jpg";var R=e=>{const t=[{title:"Kraken Koders",imgUrl:D,about:"A veteran owned small business focused on graphic design, web development and 3d modeling. A place where creativity comes together and new experiences are born."},{title:"WebMall",imgUrl:"data:image/jpeg;base64,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",about:"An innovative eCommerce platform that allows brands to live-stream\n          sales events, and engage with real customers all on one dynamic and\n          easy portal. No other platform allows vendors to both live-stream and\n          conduct eCommerce simultaneously. This will drive sales and engagement\n          for brands and customers alike."}];return Object(s.jsxs)(w,{children:[Object(s.jsxs)("div",{className:"clients__container",children:[Object(s.jsx)("h1",{className:"section__title__alt",children:"Clients"}),Object(s.jsx)("p",{children:"No matter if you're a startup or a large corporation, I've got the skills necessary to build out that application or new feature."}),Object(s.jsx)("div",{className:"clients",children:t.map(((e,t)=>Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"client",id:t,style:{backgroundImage:"url(".concat(e.imgUrl,")")},children:Object(s.jsx)("p",{className:"client__about",children:e.about})})})))})]}),Object(s.jsx)(P,{})]})};var T=()=>{const e=[{path:"/",component:f},{path:"/about",component:Q},{path:"/services",component:U},{path:"/projects",component:G},{path:"/clients",component:R}];return Object(s.jsxs)(d.c,{children:[e.map(((e,t)=>Object(s.jsx)(d.a,{path:e.path,component:e.component,exact:!0}))),Object(s.jsx)(d.a,{to:"",render:e=>Object(s.jsx)(f,Object(l.a)({},e))})]})};const H=Object(o.a)(),J=document.getElementById("root");Object(c.render)(Object(s.jsx)(n.a,{history:H,children:Object(s.jsx)(T,{})}),J)}},[[238,1,2]]]);
//# sourceMappingURL=main.05bb2c76.chunk.js.map