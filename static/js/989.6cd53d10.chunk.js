"use strict";(globalThis.webpackChunkmovie_search||=[]).push([[726,989],{726(e,i,n){n.r(i),n.d(i,{default:()=>x});var r=n(43),s=n(571),t=n(128),l=n(820);const c=l.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`,o=l.Ay.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`,d=l.Ay.div`
    display: flex;
    flex-direction: column;
`,a=l.Ay.div`
    margin-top: 10px;
    border: 2px solid #a8a8a8;
    border-left: none;
    border-right: none;
    width: 100%;
`;var h=n(579);function x(){const[e,i]=(0,r.useState)(null),n=(0,s.zy)().pathname.split("/")[2];(0,r.useEffect)(()=>{(async()=>{try{const e=await(0,t.BC)(n);e&&i(e)}catch(e){console.log(e)}})()},[n]);const l=(0,s.Zp)();return(0,h.jsx)(h.Fragment,{children:e&&(0,h.jsxs)(c,{children:[(0,h.jsx)("button",{onClick:()=>{l(-1)},children:"\u2b05 Go back"}),(0,h.jsxs)(o,{children:[(0,h.jsx)("img",{src:`https://image.tmdb.org/t/p/w300${e.poster_path}`,alt:`${e.original_title}`}),(0,h.jsxs)(d,{children:[(0,h.jsx)("h2",{children:e.title}),(0,h.jsxs)("p",{children:["User Score: ",Math.round(10*e.vote_average),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:e.overview}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("p",{children:e.genres.map(e=>e.name).join(", ")})]})]}),(0,h.jsxs)(a,{children:[(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.N_,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.N_,{to:"reviews",children:"Reviews"})})]})]}),(0,h.jsx)(s.sv,{})]})})}},989(e,i,n){n.r(i),n.d(i,{default:()=>c});var r=n(43),s=n(128),t=(n(726),n(571)),l=n(579);function c(){const[e,i]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{try{const e=await(0,s.RZ)();i(e.results)}catch(e){console.log(e)}})()},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Trending today"}),(0,l.jsx)("ul",{children:e.map(e=>(0,l.jsx)("div",{children:(0,l.jsx)("li",{children:(0,l.jsx)(t.N_,{to:`/movies/${e.id}`,children:e.original_title})})},e.id))})]})}}}]);
//# sourceMappingURL=989.6cd53d10.chunk.js.map