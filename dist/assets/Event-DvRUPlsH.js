import{H as y,T as _,C as h,E as C,a as g,F as f,B as k}from"./BottomNav-DeAfPTnX.js";import{_ as B,c as b,e,t as w,a as r,b as c,d as p,r as t,o as i}from"./index-CRX5wCFU.js";import"./02-xKVNMGKw.js";import"./01-x8eA4-cI.js";import"./fallbackDestinations-BfdhModJ.js";const E={components:{Header:y,TypeSwitcher:_,Categories:h,EventCard:C,TourismCard:g,FloatingChat:f,BottomNav:k},data(){return{activeType:"events"}},computed:{pageTitle(){return this.activeType==="events"?"Liste des événements":"Liste des tourismes disponibles"}},methods:{updateActiveType(n){this.activeType=n},goBack(){window.history.length>1?history.back():this.$router.push("/")}}},A={id:"app"},F={class:"header"},N={class:"header-left"},S={class:"header-title"};function x(n,s,V,H,o,a){const d=t("TypeSwitcher"),l=t("Categories"),m=t("EventCard"),v=t("TourismCard"),T=t("FloatingChat");return i(),b("div",A,[e("header",F,[e("div",N,[e("button",{class:"back-button",onClick:s[0]||(s[0]=(...u)=>a.goBack&&a.goBack(...u))},s[1]||(s[1]=[e("i",{class:"fas fa-arrow-left"},null,-1)])),e("h1",S,w(a.pageTitle),1)])]),r(d,{activeType:o.activeType,onUpdateActiveType:a.updateActiveType},null,8,["activeType","onUpdateActiveType"]),r(l,{activeType:o.activeType},null,8,["activeType"]),o.activeType==="events"?(i(),c(m,{key:0})):p("",!0),o.activeType==="tourism"?(i(),c(v,{key:1})):p("",!0),r(T)])}const z=B(E,[["render",x]]);export{z as default};
