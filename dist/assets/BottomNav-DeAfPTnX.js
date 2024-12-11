import{_ as p,o as i,c as n,e,t as d,n as u,F as m,f as v,d as $,r as y,g as h,a as k,p as b,w as x,v as A,q as T}from"./index-CRX5wCFU.js";import{i as M,a as E}from"./02-xKVNMGKw.js";import{i as F}from"./01-x8eA4-cI.js";import{f as w}from"./fallbackDestinations-BfdhModJ.js";const I="/assets/logo-D-Iz7kyN.png",q={name:"FloatingChat",data(){return{location:"Chargement...",imageSrc:I}},mounted(){this.getLocation()},methods:{getLocation(){fetch("http://ip-api.com/json").then(o=>o.json()).then(o=>{o.city?this.location=o.city:this.location="Localisation indisponible"}).catch(()=>{this.location="Erreur lors de la récupération de la localisation"})}}},L={class:"app-header"},S={class:"top-bar"},D={class:"app-name"},N=["src"],z={class:"location-info"},B={class:"city-name"};function G(o,s,c,f,r,a){return i(),n("div",null,[e("header",L,[e("div",S,[e("div",D,[e("img",{src:r.imageSrc,alt:"Logo",class:"logo"},null,8,N)]),e("div",z,[s[0]||(s[0]=e("i",{class:"fa fa-map-marker-alt"},null,-1)),e("span",B,d(r.location),1)])]),s[1]||(s[1]=e("div",{class:"search-bar"},[e("i",{class:"fa fa-search search-icon"}),e("input",{type:"text",class:"search-input",placeholder:"Rechercher..."})],-1))])])}const we=p(q,[["render",G],["__scopeId","data-v-04cb2d33"]]),O={name:"TypeSwitcher",props:{activeType:String},methods:{updateType(o){this.$emit("updateActiveType",o)}}},V={class:"type-switcher"};function P(o,s,c,f,r,a){return i(),n("div",V,[e("div",{class:u(["type-option",{active:c.activeType==="events"}]),onClick:s[0]||(s[0]=t=>a.updateType("events"))}," Événements ",2),e("div",{class:u(["type-option",{active:c.activeType==="tourism"}]),onClick:s[1]||(s[1]=t=>a.updateType("tourism"))}," Tourisme ",2)])}const Ie=p(O,[["render",P]]),H={name:"Categories",props:{activeType:String},data(){return{eventCategories:[{id:1,name:"Hackathons",icon:"fas fa-code"},{id:2,name:"Conférences IA",icon:"fas fa-brain"},{id:3,name:"Entrepreneuriat Numérique",icon:"fas fa-lightbulb"},{id:4,name:"Semaine du Numérique",icon:"fas fa-laptop"},{id:5,name:"Expositions Technologiques",icon:"fas fa-robot"}],tourismCategories:[{id:1,name:"Monuments Historiques",icon:"fas fa-landmark"},{id:2,name:"Parcs Nationaux",icon:"fas fa-tree"},{id:3,name:"Villages Touristiques",icon:"fas fa-home"},{id:4,name:"Plages et Bord de Mer",icon:"fas fa-umbrella-beach"},{id:5,name:"Sites Culturels",icon:"fas fa-theater-masks"},{id:6,name:"Marchés Locaux",icon:"fas fa-shopping-basket"},{id:7,name:"Forêts Sacrées",icon:"fas fa-leaf"},{id:8,name:"Musées",icon:"fas fa-university"},{id:9,name:"Fleuves et Lacs",icon:"fas fa-water"},{id:10,name:"Festivals et Célébrations",icon:"fas fa-music"},{id:11,name:"Cérémonies Guélédé",icon:"fas fa-mask"},{id:12,name:"Festival des Masques de Porto-Novo",icon:"fas fa-theater-masks"},{id:13,name:"WeLovEya",icon:"fas fa-heartbeat"},{id:14,name:"Fête de la Gaani",icon:"fas fa-drum"}]}}},j={class:"categories-container"},U={key:0,class:"categories"},K={key:1,class:"categories"};function R(o,s,c,f,r,a){return i(),n("div",j,[c.activeType==="events"?(i(),n("div",U,[(i(!0),n(m,null,v(r.eventCategories,t=>(i(),n("div",{class:"category-chip",key:t.id},[e("i",{class:u(t.icon)},null,2),e("span",null,d(t.name),1)]))),128))])):$("",!0),c.activeType==="tourism"?(i(),n("div",K,[(i(!0),n(m,null,v(r.tourismCategories,t=>(i(),n("div",{class:"category-chip",key:t.id},[e("i",{class:u(t.icon)},null,2),e("span",null,d(t.name),1)]))),128))])):$("",!0)])}const qe=p(H,[["render",R]]),Q=[{id:1,title:"Festival de Ouidah",date:"Samedi, 16 Décembre 2023 à 14:00",description:"Un événement culturel unique célébrant la diversité au Bénin.",image:M,tags:["Culture","Musique"],organizer:{name:"Groupe Ariya",role:"Organisateur Principal",avatar:"https://via.placeholder.com/60x60?text=GA"}},{id:2,title:"Marché des Arts Africains",date:"Dimanche, 17 Décembre 2023 à 10:00",description:"Explorez les œuvres d'artistes talentueux du Bénin.",image:F,tags:["Art","Marché"],organizer:{name:"Groupe Ariya",role:"Organisateur Principal",avatar:"https://via.placeholder.com/60x60?text=GA"}},{id:3,title:"Conférence Tech Cotonou",date:"Lundi, 18 Décembre 2023 à 09:00",description:"Une conférence réunissant les meilleurs experts technologiques.",image:E,tags:["Technologie","Conférence"],organizer:{name:"Groupe Ariya",role:"Organisateur Principal",avatar:"https://via.placeholder.com/60x60?text=GA"}}],W={name:"EventList",data(){return{events:Q}}},J={class:"container-fluid p-3"},X={class:"row"},Y={class:"event-card"},Z={class:"image-container"},ee=["src","alt"],se={class:"event-content"},te={class:"event-title"},ae={class:"event-date"},ie={class:"tag-container"};function ne(o,s,c,f,r,a){const t=y("router-link");return i(),n("div",null,[e("div",J,[e("div",X,[(i(!0),n(m,null,v(r.events,(l,g)=>(i(),n("div",{key:g,class:"col-md-3 mb-4"},[e("div",Y,[e("div",Z,[e("img",{src:l.image,alt:"Image de "+l.title,class:"responsive-image"},null,8,ee)]),e("div",se,[e("h2",te,d(l.title),1),e("div",ae,[s[0]||(s[0]=e("i",{class:"far fa-calendar"},null,-1)),h(" "+d(l.date),1)]),e("div",ie,[(i(!0),n(m,null,v(l.tags,(_,C)=>(i(),n("span",{key:C,class:"tag"},d(_),1))),128))]),k(t,{class:"ticket-button text-center",to:{name:"EventDetail",params:{id:l.id}}},{default:b(()=>s[1]||(s[1]=[h(" Réserver mon ticket ")])),_:2},1032,["to"])])])]))),128))])])])}const Le=p(W,[["render",ne],["__scopeId","data-v-9e5a13ba"]]),oe={name:"TourismList",data(){return{destinations:w}}},re={class:"container-fluid p-3"},le={class:"row"},ce={class:"event-card"},de={class:"image-container"},ue=["src"],me={class:"event-content"},ve={class:"event-title"},pe={class:"event-date"},fe={class:"tag-container"};function he(o,s,c,f,r,a){const t=y("router-link");return i(),n("div",null,[e("div",re,[e("div",le,[(i(!0),n(m,null,v(r.destinations,(l,g)=>(i(),n("div",{key:g,class:"col-md-3 mb-4"},[e("div",ce,[e("div",de,[e("img",{src:l.gallery[0],alt:"Image de la destination",class:"responsive-image"},null,8,ue)]),e("div",me,[e("h2",ve,d(l.name),1),e("div",pe,[s[0]||(s[0]=e("i",{class:"fas fa-map-marker-alt"},null,-1)),h(" "+d(l.location),1)]),e("div",fe,[(i(!0),n(m,null,v(l.tags,(_,C)=>(i(),n("span",{key:C,class:"tag"},d(_),1))),128))]),k(t,{class:"ticket-button text-center",to:{name:"TourismDetail",params:{id:l.id}}},{default:b(()=>s[1]||(s[1]=[h(" En savoir plus ")])),_:2},1032,["to"])])])]))),128))])])])}const Se=p(oe,[["render",he],["__scopeId","data-v-d2782f2e"]]),ge={name:"FloatingChat",data(){return{isChatOpen:!1,userMessage:"",recommendations:[]}},methods:{toggleChat(){this.isChatOpen=!this.isChatOpen},sendMessage(){this.userMessage.trim()!==""&&(this.recommendations.push(`Vous avez demandé : "${this.userMessage}"`),this.userMessage="",setTimeout(()=>{this.recommendations.push("Voici une recommandation basée sur votre requête. 😊")},1e3))}}},_e={key:0,class:"chat-window"},Ce={class:"chat-header"},$e={class:"chat-body"},ye={class:"chat-footer"};function ke(o,s,c,f,r,a){return i(),n("div",null,[e("div",{class:"floating-chat",onClick:s[0]||(s[0]=(...t)=>a.toggleChat&&a.toggleChat(...t))},s[5]||(s[5]=[e("i",{class:"fas fa-robot fa-2x"},null,-1)])),r.isChatOpen?(i(),n("div",_e,[e("div",Ce,[s[6]||(s[6]=e("span",null,"Assistant",-1)),e("button",{class:"close-button btn btn-light",onClick:s[1]||(s[1]=(...t)=>a.toggleChat&&a.toggleChat(...t))},"×")]),e("div",$e,[s[7]||(s[7]=e("div",{class:"message user"}," Bonjour ! Que cherchez-vous ? 😊 ",-1)),(i(!0),n(m,null,v(r.recommendations,(t,l)=>(i(),n("div",{key:l,class:"message bot"},d(t),1))),128))]),e("div",ye,[x(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=t=>r.userMessage=t),placeholder:"Entrez un message...",onKeyup:s[3]||(s[3]=T((...t)=>a.sendMessage&&a.sendMessage(...t),["enter"]))},null,544),[[A,r.userMessage]]),e("button",{onClick:s[4]||(s[4]=(...t)=>a.sendMessage&&a.sendMessage(...t))},s[8]||(s[8]=[e("i",{class:"fas fa-paper-plane","aria-hidden":"true"},null,-1)]))])])):$("",!0)])}const De=p(ge,[["render",ke],["__scopeId","data-v-6760bd4a"]]),be={data(){return{activeItem:"home"}},methods:{setActive(o){this.activeItem=o},isActive(o){return this.activeItem===o}}},xe={class:"bottom-nav"};function Ae(o,s,c,f,r,a){return i(),n("nav",xe,[e("a",{href:"/",class:u(["nav-item",{active:a.isActive("home")}]),onClick:s[0]||(s[0]=t=>a.setActive("home"))},s[4]||(s[4]=[e("i",{class:"fas fa-home"},null,-1),e("span",null,"Accueil",-1)]),2),e("a",{href:"/favoris",class:u(["nav-item",{active:a.isActive("favoris")}]),onClick:s[1]||(s[1]=t=>a.setActive("favoris"))},s[5]||(s[5]=[e("i",{class:"far fa-heart"},null,-1),e("span",null,"Favoris",-1)]),2),e("a",{href:"/help",class:u(["nav-item",{active:a.isActive("help")}]),onClick:s[2]||(s[2]=t=>a.setActive("help"))},s[6]||(s[6]=[e("i",{class:"fa fa-comments"},null,-1),e("span",null,"Aides",-1)]),2),e("a",{href:"/profile",class:u(["nav-item",{active:a.isActive("profile")}]),onClick:s[3]||(s[3]=t=>a.setActive("profile"))},s[7]||(s[7]=[e("i",{class:"fa fa-user"},null,-1),e("span",null,"Mon Compte",-1)]),2)])}const Ne=p(be,[["render",Ae],["__scopeId","data-v-8f5e6441"]]);export{Ne as B,qe as C,Le as E,De as F,we as H,Ie as T,Se as a};
