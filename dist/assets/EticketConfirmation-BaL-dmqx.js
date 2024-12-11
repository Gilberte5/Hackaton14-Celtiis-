import{_ as c,c as r,e as s,t as i,g as a,o as d}from"./index-CRX5wCFU.js";const v={data(){return{event:{title:"Festival des Arts et de la Culture",date:"Sam, 16 Déc • 19:00",location:"Cotonou, Bénin",image:"https://via.placeholder.com/300"},ticket:{name:"John Doe",quantity:1,type:"Pass Standard",price:5e3,number:"FAC-2023-12345",qrCode:"https://cdn3.me-qr.com/qr/147345290.png?v=1733768014"}}},methods:{downloadTicket(){alert("Téléchargement en cours...")},shareTicket(){navigator.share?navigator.share({title:`Mon billet - ${this.event.title}`,text:`Voici mon billet pour le ${this.event.title}!`,url:`https://example.com/ticket/${this.ticket.number}`}):alert("Le partage n'est pas pris en charge par votre navigateur.")}},mounted(){const l=document.querySelector(".success-icon");l&&l.animate([{transform:"scale(0.8)"},{transform:"scale(1.1)"},{transform:"scale(1)"}],{duration:600,easing:"ease-out"})}},u={class:"ticket-info"},f={class:"ticket-header"},m={class:"event-basic"},p=["src"],k={class:"event-title"},_={class:"event-details"},h={class:"ticket-body"},b={class:"qr-section"},g={class:"qr-code"},y=["src"],C={class:"ticket-number"},T={class:"info-grid"},q={class:"info-item"},x={class:"info-value"},w={class:"info-item"},B={class:"info-value"},E={class:"info-item"},F={class:"info-value"},N={class:"info-item"},S={class:"info-value"},V={class:"action-buttons"};function A(l,t,D,I,e,n){return d(),r("div",null,[t[11]||(t[11]=s("div",{class:"success-header"},[s("div",{class:"success-icon"},[s("i",{class:"fas fa-check"})]),s("h1",{class:"success-title"},"Réservation confirmée !"),s("p",null,"Votre billet a été envoyé par email")],-1)),s("div",u,[s("div",f,[s("div",m,[s("img",{src:e.event.image,alt:"Event",class:"event-image"},null,8,p),s("div",null,[s("h2",k,i(e.event.title),1),s("div",_,[s("span",null,[t[2]||(t[2]=s("i",{class:"far fa-calendar"},null,-1)),a(" "+i(e.event.date),1)]),s("span",null,[t[3]||(t[3]=s("i",{class:"fas fa-map-marker-alt"},null,-1)),a(" "+i(e.event.location),1)]),s("span",null,[t[4]||(t[4]=s("i",{class:"fas fa-ticket-alt"},null,-1)),a(" "+i(e.ticket.type),1)])])])])]),s("div",h,[s("div",b,[s("div",g,[s("img",{src:e.ticket.qrCode,alt:"QR Code",style:{width:"100%"}},null,8,y)]),s("span",C,"N° TICKET: "+i(e.ticket.number),1)]),s("div",T,[s("div",q,[t[5]||(t[5]=s("div",{class:"info-label"},"Nom",-1)),s("div",x,i(e.ticket.name),1)]),s("div",w,[t[6]||(t[6]=s("div",{class:"info-label"},"Quantité",-1)),s("div",B,i(e.ticket.quantity)+" personne",1)]),s("div",E,[t[7]||(t[7]=s("div",{class:"info-label"},"Type",-1)),s("div",F,i(e.ticket.type),1)]),s("div",N,[t[8]||(t[8]=s("div",{class:"info-label"},"Prix",-1)),s("div",S,i(e.ticket.price)+" FCFA",1)])])])]),s("div",V,[s("button",{class:"action-btn secondary-btn",onClick:t[0]||(t[0]=(...o)=>n.downloadTicket&&n.downloadTicket(...o))},t[9]||(t[9]=[s("i",{class:"fas fa-download"},null,-1),s("span",null,"Télécharger",-1)])),s("button",{class:"action-btn primary-btn",onClick:t[1]||(t[1]=(...o)=>n.shareTicket&&n.shareTicket(...o))},t[10]||(t[10]=[s("i",{class:"fas fa-share-alt"},null,-1),s("span",null,"Partager",-1)]))]),t[12]||(t[12]=s("div",{class:"help-section"},[s("p",{class:"help-text"},"Besoin d'aide avec votre réservation ?"),s("a",{href:"#",class:"help-link"},[s("i",{class:"fas fa-headset"}),s("span",null,"Contacter le support")])],-1))])}const Q=c(v,[["render",A],["__scopeId","data-v-aba20b3c"]]);export{Q as default};