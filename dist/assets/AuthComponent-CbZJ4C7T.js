import{_ as d,c as s,e as n,t as l,d as u,o as a}from"./index-CRX5wCFU.js";async function p(){const t="https://pub-za.appcubecloud.com/baas/auth/v1.0/oauth2/token",e=new URLSearchParams;e.append("grant_type","client_credentials"),e.append("client_id","6e4e70085092b692f0ca5c375043d8ff"),e.append("client_secret","f42b2f4e9fc3786939db3b0687b9b2846ec3d3fb3561f5ff");try{const o=await fetch(t,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e});return console.log("Request sent. Note: No response available in no-cors mode."),null}catch(o){throw console.error("Erreur lors de l'authentification:",o),o}}const f={data(){return{token:null,errorMessage:null}},methods:{async authenticate(){try{const t=await p();this.token=t.access_token}catch(t){this.errorMessage=t.message}}}},h={key:0},m={key:1};function b(t,e,o,k,r,c){return a(),s("div",null,[e[3]||(e[3]=n("h1",null,"Authentification",-1)),n("button",{onClick:e[0]||(e[0]=(...i)=>c.authenticate&&c.authenticate(...i))},"Obtenir Token"),r.token?(a(),s("div",h,[e[1]||(e[1]=n("h2",null,"Token obtenu :",-1)),n("p",null,l(r.token),1)])):u("",!0),r.errorMessage?(a(),s("div",m,[e[2]||(e[2]=n("h2",null,"Erreur :",-1)),n("p",null,l(r.errorMessage),1)])):u("",!0)])}const y=d(f,[["render",b],["__scopeId","data-v-6d677238"]]);export{y as default};
