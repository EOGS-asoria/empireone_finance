import{l as n,p as c}from"./app-BKxzFGBx.js";async function a(){try{return await n.get("/api/subject")}catch(t){return t}}async function u(t){try{return await n.get(`/api/subject/${t}`)}catch(e){return e}}async function o(t){try{return await n.post("/api/subject",t)}catch(e){return e}}async function i(t){try{return await n.put(`/api/subject/${t.id}`,t)}catch(e){return e}}async function _(t){try{return await n.delete(`/api/subject/${t}`)}catch(e){return e}}async function d(t){try{return await n.get(`/api/subject_handled/${t}`)}catch(e){return e}}function y(){return async function(t,e){const r=await a();return console.log("res.data.response",r.data.response),t(c.actions.setSubjects(r.data.response)),r}}function p(t){return async function(e,r){const s=await d(t);return e(c.actions.setHandleds(s.data.response)),s}}function j(t){return async function(e,r){const s=await u(t);return e(c.actions.setHandleds(s.data.response)),s}}function f(t){return async function(e,r){return o(t)}}function h(t){return async function(e,r){return i(t)}}function g(t){return async function(e,r){return _(t)}}export{j as a,p as b,g as d,y as g,f as s,h as u};
