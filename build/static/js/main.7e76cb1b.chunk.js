(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,t,a){e.exports=a(392)},221:function(e,t,a){},223:function(e,t,a){},378:function(e,t,a){},386:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(36),c=a.n(i),l=(a(221),a(15)),o=a(16),s=a(18),m=a(17),u=a(19),p=a(405),d=a(397),h=(a(223),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/blog"},"Blog"))))}}]),t}(n.Component)),E=a(407),b=a(401),f=a(408),g=a(402),v=a(404),j=a(393),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.project;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{trigger:r.a.createElement(v.a,null,r.a.createElement(v.a.Content,null,r.a.createElement(v.a.Header,null,e.title),r.a.createElement(v.a.Description,null,r.a.createElement(j.a,{src:e.image})))),closeIcon:!0},r.a.createElement(g.a.Header,null,e.title," - ",e.primaryTech.join(" & ")),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Description,null,r.a.createElement(j.a,{src:e.image}),r.a.createElement("p",null,"Description : ",e.description),r.a.createElement("p",null,r.a.createElement("a",{href:e.link},"Project Demo")),r.a.createElement("p",null,"Technologies Used: ",e.technologies),r.a.createElement("p",null,r.a.createElement("a",{href:e.codeLink},"Code"))))))}}]),t}(n.Component),k=a(399),O=a(406),w=a(114),S=a(400),C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={projects:[{title:"Wildcard",image:"https://i.imgur.com/UPuHZZl.png",link:"https://wildcard-sinatra.herokuapp.com/",description:"A Ruby application that utilizes the Sinatra framework. This web application provides basic functions of a Warehouse Management System. Users can track clients, unique items on a per client basis, inventory levels per item and inbound and outbound transactions, and items on each transaction, for clients. Custom CSS and HTML was used for page formatting.",technologies:"Ruby, Sinatra, CSS, HTML",codeLink:"https://github.com/GabrielValle91/sinatra-project",primaryTech:["Sinatra"]},{title:"Speed",image:"https://i.imgur.com/jLtCSya.jpg",link:"https://speed-tms.herokuapp.com/",description:"A Ruby on Rails application that implements OAuth for user authentication. This web application provides basic functions of a Transportation Management System. Users can track clients, drivers, locations for pickup or delivery, and shipments. Users have the ability to assign items and drivers to shipments, providing a dispatcher the ability to track work for their drivers. Javascript and JQuery were added to provide additional user functionality. Bootstrap framework provided the CSS for this project.",technologies:"Ruby, Rails, Javascript, JQuery, Bootstrap, OAuth",codeLink:"https://github.com/GabrielValle91/rails-project",primaryTech:["Rails","JQuery"]},{title:"PAWS",image:"https://i.imgur.com/UMz13fkm.jpg",link:"https://young-beyond-21632.herokuapp.com/",description:"A React single page application that uses Redux for state management and React Router for navaigation. This web application allows a community to keep track of lost and found pets in an attempt to reunite them with their families. A Rails API is utilized for data storage and Devise provides user authentication.",technologies:"Ruby, Rails API, Devise, React, Redux, React Router, Semantic-UI",codeLink:"https://github.com/GabrielValle91/people-assisting-wandering-strays",primaryTech:["Rails API","React"]}]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.projects.map(function(e,t){return r.a.createElement(y,{key:t,project:e})});return r.a.createElement("div",{className:"project-page"},r.a.createElement(k.a,{className:"down-shifted"},r.a.createElement(O.a,{as:"h2",icon:!0,textAlign:"center",color:"yellow"},r.a.createElement(w.a,{name:"code",circular:!0}),r.a.createElement(O.a.Content,null,"Projects")),r.a.createElement(S.a,{hidden:!0,section:!0}),r.a.createElement(v.a.Group,null,e)))}}]),t}(n.Component),R=a(205),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).dateConvertor=function(e){return new Date(e).toLocaleString("en-US")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.entry;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{href:e.url},r.a.createElement(v.a.Content,null,r.a.createElement(v.a.Header,null,e.title),r.a.createElement(v.a.Description,null,e.description)),r.a.createElement(v.a.Content,{extra:!0},"Published: ",this.dateConvertor(e.published))))}}]),t}(n.Component),N=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).toText=function(e){var t=document.createElement("div");return t.innerHTML=e,e=t.innerText},e.shortenText=function(e,t,a){return e.length>a?e.slice(t,a):e},e.populateDataArray=function(t){for(var a=0;a<t.items.length;a++){var n={title:t.items[a].title,description:e.shortenText(e.toText(t.items[a].description),0,130),content:e.toText(t.items[a].content),published:t.items[a].pubDate,url:t.items[a].link};e.setState({articles:Object(R.a)(e.state.articles).concat([n])})}},e.getBlogEntries=function(){fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gabriel.Valle").then(function(e){return e.json()}).then(function(t){e.populateDataArray(t)})},e.state={articles:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getBlogEntries()}},{key:"render",value:function(){var e=this.state.articles.map(function(e,t){return r.a.createElement(T,{key:t,entry:e})});return r.a.createElement("div",{className:"blog-page"},r.a.createElement(k.a,{className:"down-shifted"},r.a.createElement(O.a,{as:"h2",icon:!0,textAlign:"center",color:"olive"},r.a.createElement(w.a,{name:"medium",circular:!0}),r.a.createElement(O.a.Content,{color:"olive"},"Blog Articles")),r.a.createElement("div",{className:"blog-link"},r.a.createElement("a",{href:"https://medium.com/@Gabriel.Valle"},"Medium page")),r.a.createElement(S.a,{hidden:!0,section:!0}),r.a.createElement(v.a.Group,null,e)))}}]),t}(n.Component),A=a(403),x=function(e){var t=e.listItem;return r.a.createElement(A.a,{bulleted:!0},r.a.createElement(A.a.Item,null,t))},I=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={FrontEnd:["CSS3","HTML5","Javascript"],BackEnd:["Ruby","SQL"],Tools:["Bootstrap","Git","JQuery","React","Ruby on Rails","Semantic UI","Sinatra"],Other:["Critical Thinking","Data Analysis","Problem Solving"]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.FrontEnd.map(function(e,t){return r.a.createElement(x,{key:t,listItem:e})}),t=this.state.BackEnd.map(function(e,t){return r.a.createElement(x,{key:t,listItem:e})}),a=this.state.Tools.map(function(e,t){return r.a.createElement(x,{key:t,listItem:e})}),n=this.state.Other.map(function(e,t){return r.a.createElement(x,{key:t,listItem:e})});return r.a.createElement("div",{className:"skill-section"},r.a.createElement("div",{className:"centered column"},r.a.createElement(S.a,{section:!0}),r.a.createElement("h3",null,"Front-end"),r.a.createElement(S.a,{section:!0}),e),r.a.createElement("div",{className:"centered column"},r.a.createElement(S.a,{section:!0}),r.a.createElement("h3",null,"Back-end"),r.a.createElement(S.a,{section:!0}),t),r.a.createElement("div",{className:"centered column"},r.a.createElement(S.a,{section:!0}),r.a.createElement("h3",null,"Tools"),r.a.createElement(S.a,{section:!0}),a),r.a.createElement("div",{className:"centered column"},r.a.createElement(S.a,{section:!0}),r.a.createElement("h3",null,"Other Skills"),r.a.createElement(S.a,{section:!0}),n))}}]),t}(n.Component),D=(a(378),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"profile-section"},r.a.createElement(j.a,{src:"https://i.imgur.com/DgQekqX.jpg?1",alt:"profile pic",rounded:!0}),r.a.createElement(k.a,{className:"centered"},r.a.createElement("p",null,"I am a full stack web developer with a passion for creating innovative solutions that improve work environments.  With experience in Sinatra, Ruby on Rails, JavaScript, VBA and React and a background in Mathematics, I discovered web development when I recognized a need for effective software at my workplace. I bring strong skills in problem solving and analytics that help companies exceed goals while cutting costs. I\u2019m a lifelong learner and avid gamer."),r.a.createElement("a",{href:"https://github.com/GabrielValle91",className:"profile-links"},r.a.createElement(w.a,{name:"github",link:!0,size:"big"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/gabrielianvalle/",className:"profile-links"},r.a.createElement(w.a,{name:"linkedin",link:!0,size:"big"}))))}}]),t}(n.Component)),B=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(I,null))}}]),t}(n.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement(k.a,{className:"down-shifted"},r.a.createElement(O.a,{as:"h2",icon:!0,textAlign:"center",color:"green"},r.a.createElement(w.a,{name:"address card outline",circular:!0}),r.a.createElement(O.a.Content,null,"About Me")),r.a.createElement(S.a,{hidden:!0,section:!0}),r.a.createElement(B,null)),r.a.createElement("div",{className:"down-shifted"}))}}]),t}(n.Component),M=a(119);a(386);var J=Object(f.a)(function(e){var t=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.TransitionGroup,{className:"transition-group"},r.a.createElement(M.CSSTransition,{key:t.key,timeout:{enter:300,exit:300},classNames:"fade"},r.a.createElement("section",{className:"route-section"},r.a.createElement(E.a,{location:t},r.a.createElement(b.a,{path:"/",exact:!0,component:L}),r.a.createElement(b.a,{path:"/projects",exact:!0,component:C}),r.a.createElement(b.a,{path:"/blog",exact:!0,component:N}))))))}),P=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(J,null)))}}]),t}(n.Component);a(389),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[216,2,1]]]);
//# sourceMappingURL=main.7e76cb1b.chunk.js.map