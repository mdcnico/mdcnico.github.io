import{b as t}from"../chunks/CXHjsjdU.js";import{L as l}from"../chunks/D00tRNWb.js";const n=async()=>{const e=o=>o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");return{projects:[{title:"Morpion",image:"/images/premannee/morpion.jpg",link:`/premannee/projects/${e("Morpion")}`,description:"Description for Morpion",content:"Detailed content about Morpion goes here."},{title:"Jeu de Nim",image:"/images/premannee/jeu_de_nim.jpg",link:`/premannee/projects/${e("Jeu de Nim")}`,description:"Description for Jeu de Nim",content:"Detailed content about Jeu de Nim goes here."},{title:"Horloge",image:"/images/premannee/horloge.png",link:`/premannee/projects/${e("Horloge")}`,description:"Description for Horloge",content:"Detailed content about Horloge goes here."},{title:"Bdd Agricole",image:"/images/premannee/bdd_cereals.png",link:`/premannee/projects/${e("Bdd Agricole")}`,description:"Description for Projet 4",content:"Detailed content about Projet 4 goes here."},{title:"Sites Web",image:"/images/premannee/siteweb.jpg",link:`/premannee/projects/${e("Sites Web")}`,description:"Description for Projet 5",content:"Detailed content about Projet 5 goes here."}].map(o=>({...o,link:`${t}/premannee/projects/${e(o.title)}`}))}},p=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{l as component,p as universal};
