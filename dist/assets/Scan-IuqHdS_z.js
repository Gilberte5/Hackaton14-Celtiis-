import{_ as u,c as l,e as s,h as f,F as r,f as v,d as k,o as i,t as o}from"./index-CRX5wCFU.js";const h={data(){return{stats:{Validés:234,"En attente":86,Invalides:2},showModal:!1,ticketDetails:{Type:"Pass VIP",Prix:"10,000 FCFA",Nom:"John Doe","ID Ticket":"#12345"}}},methods:{toggleFlash(){alert("Flash toggled!")},openKeyboard(){alert("Clavier ouvert")},openSettings(){alert("Paramètres ouverts")},onQRCodeScan(d){d.valid?(this.stats.Validés++,this.ticketDetails=d.ticket,this.showModal=!0):(this.stats.Invalides++,alert("Ticket invalide"))},cancel(){this.showModal=!1},validateTicket(){alert("Entrée validée"),this.stats["En attente"]--,this.stats.Validés++,this.showModal=!1}},mounted(){setTimeout(()=>{const d={valid:!0,ticket:{Type:"Pass VIP",Prix:"10,000 FCFA",Nom:"John Doe","ID Ticket":"#12345"}};this.onQRCodeScan(d)},2e3)}},m={class:"scanner-header"},b={class:"header-left"},g={class:"scanner-controls"},y={class:"stats-bar"},p={class:"stat-value"},C={class:"stat-label"},F={key:0,class:"result-modal"},_={class:"ticket-details"},T={class:"detail-label"},D={class:"detail-value"},S={class:"result-actions"};function V(d,t,P,I,c,a){return i(),l("div",null,[s("header",m,[s("div",b,[s("button",{onClick:t[0]||(t[0]=(...e)=>a.toggleFlash&&a.toggleFlash(...e)),class:"toggle-flash"},t[5]||(t[5]=[s("i",{class:"fas fa-bolt"},null,-1)])),t[6]||(t[6]=s("div",{class:"event-info"},[s("div",{class:"event-title"},"Festival des Arts"),s("div",{class:"event-date"},"16 Déc • 19:00")],-1))])]),t[10]||(t[10]=f('<main class="scanner-view" data-v-03456d33><div class="scan-overlay" data-v-03456d33><div class="scan-corners top-left" data-v-03456d33></div><div class="scan-corners top-right" data-v-03456d33></div><div class="scan-corners bottom-left" data-v-03456d33></div><div class="scan-corners bottom-right" data-v-03456d33></div><div class="scan-line" data-v-03456d33></div></div><div class="scan-helper" data-v-03456d33>Placez le QR code dans le cadre</div></main>',1)),s("div",g,[s("button",{onClick:t[1]||(t[1]=(...e)=>a.openKeyboard&&a.openKeyboard(...e)),class:"control-btn"},t[7]||(t[7]=[s("i",{class:"fas fa-keyboard"},null,-1)])),s("button",{onClick:t[2]||(t[2]=(...e)=>a.openSettings&&a.openSettings(...e)),class:"control-btn"},t[8]||(t[8]=[s("i",{class:"fas fa-cog"},null,-1)]))]),s("div",y,[(i(!0),l(r,null,v(c.stats,(e,n)=>(i(),l("div",{class:"stat-item",key:n},[s("div",p,o(e),1),s("div",C,o(n),1)]))),128))]),c.showModal?(i(),l("div",F,[t[9]||(t[9]=s("div",{class:"result-header"},[s("div",{class:"result-icon success-icon"},[s("i",{class:"fas fa-check"})]),s("div",null,[s("h2",null,"Ticket valide"),s("p",{style:{color:"var(--gray)"}},"Scan effectué avec succès")])],-1)),s("div",_,[(i(!0),l(r,null,v(c.ticketDetails,(e,n)=>(i(),l("div",{class:"detail-item",key:n},[s("div",T,o(n),1),s("div",D,o(e),1)]))),128))]),s("div",S,[s("button",{onClick:t[3]||(t[3]=(...e)=>a.cancel&&a.cancel(...e)),class:"action-btn secondary-btn"},"Annuler"),s("button",{onClick:t[4]||(t[4]=(...e)=>a.validateTicket&&a.validateTicket(...e)),class:"action-btn primary-btn"},"Valider l'entrée")])])):k("",!0)])}const x=u(h,[["render",V],["__scopeId","data-v-03456d33"]]);export{x as default};
