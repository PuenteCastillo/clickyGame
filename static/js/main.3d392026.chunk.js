(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,a){e.exports=a(87)},58:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(13),s=a.n(r),o=(a(58),a(14)),l=a(16),i=a(21),m=a(22),h=a(24),d=a(23),u=a(25),g=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"carousel-inner fullScreen"},n.a.createElement("div",{className:"carousel-item active slideImg"},n.a.createElement("img",{src:"http://i0.wp.com/cdn-images-1.medium.com/max/1600/1*5DAQEDPv_5opTqr-y6yEag.gif",className:"d-block w-100 slideImg",alt:"..."})),n.a.createElement("div",{className:"carousel-item slideImg"},n.a.createElement("img",{src:"https://img.youtube.com/vi/BhTkoDVgF6s/maxresdefault.jpg",className:"d-block w-100 slideImg",alt:"..."})),n.a.createElement("div",{className:"carousel-item  slideImg"},n.a.createElement("img",{src:"https://wallpapercave.com/wp/gWAwDVv.jpg",className:"d-block w-100 slideImg",alt:"..."}))),n.a.createElement("div",{className:"content"},n.a.createElement("h1",{className:"text-center mt-4 text-dark"}," Clicky Game"),n.a.createElement("h4",{className:"text-center mt-4 "}," This will change the way you React!"),n.a.createElement(o.b,{to:"/GamePage"},n.a.createElement("button",{type:"button",class:"btn btn-outline-dark startBtn mt-4"},"     Start"))))}}]),t}(c.Component),b=a(26);var p=function(e){var t=n.a.createElement("p",null);return e.HightScore>0&&(t=n.a.createElement("p",null," HightScore: ",e.HightScore)),n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-light bg-light"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand",href:"#"},n.a.createElement("img",{src:"/docs/4.3/assets/brand/bootstrap-solid.svg",width:"30",height:"30",class:"d-inline-block align-top",alt:""}),"Clicky Game!!"),n.a.createElement("p",null,"Score: ",e.Score),t)))};var E=function(e){var t=e.gifs.map(function(t){return n.a.createElement("div",{className:"col-md-3 mt-5",onClick:e.thisIsAnEvent},n.a.createElement("img",{className:"clickImg",src:t,name:"search"}))});return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},t)))},v=a(88),f=a(89);var w=function(e){return n.a.createElement("div",null,n.a.createElement(v.a,{show:e.show,onHide:e.smClose},n.a.createElement(v.a.Header,{closeButton:!0},n.a.createElement(v.a.Title,null,"You Loose!")),n.a.createElement(v.a.Body,null,"Your Score : ",e.score),n.a.createElement(v.a.Footer,null,n.a.createElement(f.a,{variant:"secondary",onClick:e.smClose},"Play Again!"),n.a.createElement(o.b,{to:"/clickyGame"},"    ",n.a.createElement(f.a,{variant:"primary"},"Go Home!")))))},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={search:[],gifs:["http://i0.wp.com/cdn-images-1.medium.com/max/1600/1*5DAQEDPv_5opTqr-y6yEag.gif","https://cdn.dribbble.com/users/10958/screenshots/2421804/rudolph.gif","https://cdn.dribbble.com/users/189524/screenshots/2375731/02-cossack_v1-dribbble.gif","https://cdn.dribbble.com/users/1099127/screenshots/3735598/dribbble.gif","https://media0.giphy.com/media/xUOwG3n2WnEIokZ9ew/source.gif","https://cdn.dribbble.com/users/17707/screenshots/2612185/rt-ani.gif","https://i.gifer.com/WyD2.gif","https://cdn.dribbble.com/users/967990/screenshots/3529567/panda_gif.gif","https://cdn.dribbble.com/users/1265589/screenshots/4443637/turtle_dribble.gif","https://cdn.dribbble.com/users/879235/screenshots/2438738/turtle_01.gif","https://i.pinimg.com/originals/39/54/9d/39549d8412a5ca0cfa6da1c8dd4b1da0.gif","https://cdn.dribbble.com/users/722246/screenshots/3450853/sealion_earthday.gif"],show:!1,Score:0,hightScore:0},a.smClose=function(e){a.state.Score>=a.state.hightScore?a.setState({search:[],show:!1,hightScore:a.state.Score,Score:0}):a.setState({search:[],show:!1,Score:0})},a.thisIsAnEvent=function(e){var t=e.target.name,c=a.state.search.slice(),n=a.state.gifs;if(console.log(n),c.indexOf(e.target.src)>=0)console.log("already in arry"),a.setState({show:!0});else{var r,s=a.state.Score+1;!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=e[t];e[t]=e[a],e[a]=c}n=e}(n),console.log("not in arry"),c.push(e.target.src),a.setState((r={},Object(b.a)(r,t,c),Object(b.a)(r,"gifs",n),Object(b.a)(r,"Score",s),r),function(){console.log(a.state.search),console.log("-----------------------------")})}},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(p,{Score:this.state.Score,HightScore:this.state.hightScore}),n.a.createElement(E,{thisIsAnEvent:this.thisIsAnEvent,gifs:this.state.gifs}),n.a.createElement(w,{show:this.state.show,score:this.state.Score,smClose:this.smClose}))}}]),t}(c.Component);var S=function(){return n.a.createElement(o.a,null,n.a.createElement("div",null,n.a.createElement(l.a,{exact:!0,path:"/clickyGame",component:g}),n.a.createElement(l.a,{exact:!0,path:"/",component:g}),n.a.createElement(l.a,{exact:!0,path:"",component:g}),n.a.createElement(l.a,{exact:!0,path:"/clickyGame/GamePage",component:y}),n.a.createElement(l.a,{exact:!0,path:"/GamePage",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.3d392026.chunk.js.map