import{_ as p,c as d,e,w as i,v as t,d as f,o as g}from"./index-CRX5wCFU.js";const m={data(){return{organizer:{name:"",logo:null,logoPreview:"",description:"",website:"",function:"",location:"",country:""}}},methods:{goBack(){window.history.length>1?history.back():this.$router.push("/")},handleLogoChange(a){const o=a.target.files[0];if(o){const n=new FileReader;n.onload=u=>{this.organizer.logoPreview=u.target.result,this.organizer.logo=o},n.readAsDataURL(o)}},saveOrganizer(){console.log("Organisateur sauvegardé :",this.organizer),alert("Profil modifié avec succès !")}}},v={class:"header"},b={class:"header-left"},c={class:"form-section"},z={class:"form-group"},w={class:"form-group"},y=["src"],k={class:"form-group"},x={class:"form-group"},P={class:"form-group"},L={class:"form-group"},V={class:"form-group"},C={class:"bottom-bar"};function O(a,o,n,u,r,s){return g(),d("div",null,[e("header",v,[e("div",b,[e("button",{class:"back-button",onClick:o[0]||(o[0]=(...l)=>s.goBack&&s.goBack(...l))},o[9]||(o[9]=[e("i",{class:"fas fa-arrow-left"},null,-1)])),o[10]||(o[10]=e("div",null,[e("h1",{class:"header-title"},"Modification du Profil de l'Organisateur")],-1))])]),e("div",c,[o[18]||(o[18]=e("h2",{class:"section-title"},"Modifier les informations",-1)),e("div",z,[o[11]||(o[11]=e("label",{class:"form-label"},"Nom de l'organisation",-1)),i(e("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>r.organizer.name=l),type:"text",class:"form-input",placeholder:"Nom de l'organisation"},null,512),[[t,r.organizer.name]])]),e("div",w,[o[12]||(o[12]=e("label",{class:"form-label"},"Logo",-1)),e("input",{type:"file",class:"form-input",onChange:o[2]||(o[2]=(...l)=>s.handleLogoChange&&s.handleLogoChange(...l))},null,32),r.organizer.logoPreview?(g(),d("img",{key:0,src:r.organizer.logoPreview,alt:"Logo",class:"logo-preview"},null,8,y)):f("",!0)]),e("div",k,[o[13]||(o[13]=e("label",{class:"form-label"},"Description",-1)),i(e("textarea",{"onUpdate:modelValue":o[3]||(o[3]=l=>r.organizer.description=l),class:"form-input",rows:"4",placeholder:"Décrivez l'organisation..."},null,512),[[t,r.organizer.description]])]),e("div",x,[o[14]||(o[14]=e("label",{class:"form-label"},"Site Web (optionnel)",-1)),i(e("input",{"onUpdate:modelValue":o[4]||(o[4]=l=>r.organizer.website=l),type:"url",class:"form-input",placeholder:"https://votresite.com"},null,512),[[t,r.organizer.website]])]),e("div",P,[o[15]||(o[15]=e("label",{class:"form-label"},"Fonction",-1)),i(e("input",{"onUpdate:modelValue":o[5]||(o[5]=l=>r.organizer.function=l),type:"text",class:"form-input",placeholder:"Ex: Organisateur Principal"},null,512),[[t,r.organizer.function]])]),e("div",L,[o[16]||(o[16]=e("label",{class:"form-label"},"Lieu",-1)),i(e("input",{"onUpdate:modelValue":o[6]||(o[6]=l=>r.organizer.location=l),type:"text",class:"form-input",placeholder:"Lieu de l'organisation"},null,512),[[t,r.organizer.location]])]),e("div",V,[o[17]||(o[17]=e("label",{class:"form-label"},"Pays",-1)),i(e("input",{"onUpdate:modelValue":o[7]||(o[7]=l=>r.organizer.country=l),type:"text",class:"form-input",placeholder:"Pays"},null,512),[[t,r.organizer.country]])]),e("div",C,[e("button",{onClick:o[8]||(o[8]=(...l)=>s.saveOrganizer&&s.saveOrganizer(...l)),class:"action-button publish-button"},"Sauvegarder les modifications")])])])}const h=p(m,[["render",O],["__scopeId","data-v-27a64df3"]]);export{h as default};