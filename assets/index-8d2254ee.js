import{j as t}from"./index-5c2c48ca.js";const n=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"});function r({frontMatter:e}){return t.jsx("div",{children:t.jsx("time",{dateTime:e.date,children:n.format(new Date(e.date))})})}export{r as P};
