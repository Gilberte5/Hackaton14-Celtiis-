import{_ as p,c as i,e,t as l,d as _,F as c,f,o as n,n as v}from"./index-CRX5wCFU.js";const b={data(){return{profile:{name:"Centre Culturel Béninois",type:"Organisateur Professionnel",verified:!0},stats:[{value:24,label:"Événements"},{value:"15.2K",label:"Participants"},{value:4.8,label:"Note moyenne"}],tabs:["Aperçu","Événements","Analyses","Paramètres"],activeTab:"Aperçu",menuItems:[{title:"Paramètres du compte",items:[{label:"Informations professionnelles",description:"Coordonnées et documents légaux",icon:"fas fa-building",link:"/info-pro"},{label:"Paiements et finances",description:"Méthodes de paiement et transactions",icon:"fas fa-wallet",link:"/finances"},{label:"Sécurité",description:"Mot de passe et authentification",icon:"fas fa-shield-alt",link:"/securite"}]},{title:"Documents",items:[{label:"Document 1",description:"Description du document 1",icon:"fas fa-file",link:"/document1"},{label:"Document 2",description:"Description du document 2",icon:"fas fa-file",link:"/document2"}]}]}},methods:{editProfile(){alert("Édition du profil !")},setActiveTab(d){this.activeTab=d},goToPage(d){alert(`Naviguer vers ${d}`)}}},h={class:"profile-header"},k={class:"profile-content"},g={class:"profile-name"},y={class:"profile-type"},P={key:0,class:"verification-badge"},C={class:"profile-stats"},T={class:"stat-value"},D={class:"stat-label"},A={class:"tabs"},x=["onClick"],B={class:"menu-list"},I={class:"menu-header"},N={class:"menu-title"},M=["onClick"],V={class:"menu-icon"},z={class:"menu-info"},F={class:"menu-label"},O={class:"menu-description"};function S(d,s,w,E,o,u){return n(),i(c,null,[e("div",h,[s[4]||(s[4]=e("div",{class:"header-cover"},null,-1)),e("button",{class:"edit-profile-btn",onClick:s[0]||(s[0]=(...t)=>u.editProfile&&u.editProfile(...t))},s[1]||(s[1]=[e("i",{class:"fas fa-pen"},null,-1),e("span",null,"Modifier",-1)])),e("div",k,[s[3]||(s[3]=e("div",{class:"profile-avatar"},[e("i",{class:"fas fa-user"})],-1)),e("h1",g,l(o.profile.name),1),e("div",y,l(o.profile.type),1),o.profile.verified?(n(),i("div",P,s[2]||(s[2]=[e("i",{class:"fas fa-check-circle"},null,-1),e("span",null,"Vérifié",-1)]))):_("",!0)])]),e("div",C,[(n(!0),i(c,null,f(o.stats,(t,a)=>(n(),i("div",{class:"stat-item",key:a},[e("div",T,l(t.value),1),e("div",D,l(t.label),1)]))),128))]),e("div",A,[(n(!0),i(c,null,f(o.tabs,(t,a)=>(n(),i("div",{class:v(["tab",{active:o.activeTab===t}]),key:a,onClick:r=>u.setActiveTab(t)},l(t),11,x))),128))]),e("div",B,[(n(!0),i(c,null,f(o.menuItems,(t,a)=>(n(),i("div",{class:"menu-card",key:a},[e("div",I,[e("h2",N,l(t.title),1)]),(n(!0),i(c,null,f(t.items,(r,m)=>(n(),i("div",{class:"menu-item",key:m,onClick:K=>u.goToPage(r.link)},[e("div",V,[e("i",{class:v(r.icon)},null,2)]),e("div",z,[e("div",F,l(r.label),1),e("div",O,l(r.description),1)]),s[5]||(s[5]=e("i",{class:"fas fa-chevron-right",style:{color:"var(--gray)"}},null,-1))],8,M))),128))]))),128))])],64)}const j=p(b,[["render",S],["__scopeId","data-v-3965b130"]]);export{j as default};