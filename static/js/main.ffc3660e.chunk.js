(this.webpackJsonpvk_game=this.webpackJsonpvk_game||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/plastic.de4a7505.png"},103:function(e,t,a){e.exports=a.p+"static/media/metal.86c04338.png"},104:function(e,t,a){e.exports=a.p+"static/media/bin.303e24db.png"},105:function(e,t,a){e.exports=a.p+"static/media/glass.3168a39b.png"},106:function(e,t,a){e.exports=a.p+"static/media/paper.532879c5.png"},107:function(e,t,a){e.exports=a.p+"static/media/other.eba8e967.png"},169:function(e,t,a){e.exports=a(278)},260:function(e,t,a){},278:function(e,t,a){"use strict";a.r(t);a(170),a(196),a(198),a(199),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238);var n=a(0),l=a.n(n),i=a(90),r=a.n(i),s=a(35),c=a.n(s),o=a(91),m=a(92),p=a(111),u=a(110),d=(a(246),a(248),a(249),a(4)),g=a(102),E=a.n(g),h=a(103),f=a.n(h),y=a(104),v=a.n(y),k=a(105),b=a.n(k),w=a(106),C=a.n(w),_=a(107),x=a.n(_),S=(a(259),a(260),a(108)),z=a.n(S),T=function(e){var t=e.src,a=e.name,n=e.description,i=e.kg,r=e.onClose,s=e.share;return l.a.createElement(d.m,{onClick:r},l.a.createElement(d.c,{style:{border:"1px solid  #F66565",backgroundColor:"#C66363"}},l.a.createElement(d.g,{align:"center"},l.a.createElement(d.e,{before:l.a.createElement(d.f,{mode:"prominent"},"!"),asideContent:l.a.createElement(z.a,{fill:"#37200A",onClick:r})},l.a.createElement(d.p,{level:3,weight:"heavy"},"\u041e\u0448\u0438\u0431\u043e\u0447\u043a\u0430")),l.a.createElement(d.a,{src:"https://vkgamewasteapp.000webhostapp.com/"+t,mode:"image",size:56,style:{marginTop:10}}),l.a.createElement("h1",null,a),l.a.createElement("span",{style:{padding:6}},n),l.a.createElement(d.b,{style:{margin:10},onClick:s},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438"),l.a.createElement(d.j,null,"-"+i+" \u043a\u0433"))))},N=a(109),I=a(41),O=a.n(I),B=new N.VKMiniAppAPI,j="https://vkgamewasteapp.000webhostapp.com/",A=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).openImage=function(e){B.showImages([e])},n.put=function(e){if(n.state.disabled){n.setState({disabled:!1,popout:l.a.createElement(d.n,null)});var t=e.currentTarget.dataset.trash;O.a.post(j,JSON.stringify({type:"check_post",trash:t,waste_id:n.state.item.waste_id,url:window.location.href})).then((function(e){console.log(e),"success"==e.data.status?(n.setState({item_className:"vivify popOutBottom duration-550",popout:null}),setTimeout((function(){n.setState({item:e.data.item,disabled:!0})}),400),setTimeout((function(){n.setState({item_className:"vivify popInLeft"})}),550)):(n.setState({item_className:"vivify popOutTop duration-550",popout:null}),setTimeout((function(){n.setState({popout:l.a.createElement(T,{name:n.state.item.name,description:e.data.description,src:n.state.item.img,kg:e.data.kg,onClose:function(){return n.setState({popout:null,disabled:!0,item_className:"vivify popInLeft"})},share:function(){return n.share(e.data)}}),item:e.data.item})}),550))}))}},n.share=function(e){var t=document.createElement("canvas");t.width=1080,t.height=900;var a=t.getContext("2d");a.font="55pt Calibri",a.fillStyle="#000",a.textAlign="center",n.wrapText(a,e.description,510,100,1e3,70);var l=t.toDataURL();B.showStoryBox({background_type:"image",url:"https://klike.net/uploads/posts/2019-11/1572778685_5.jpg",stickers:[{sticker_type:"renderable",sticker:{content_type:"image",url:j+n.state.item.img,transform:{translation_x:.45,translation_y:.12}}},{sticker_type:"renderable",sticker:{content_type:"image",blob:l,transform:{gravity:"center_bottom"}}}]})},n.state={activePanel:"game",activeView:"game",activeModal:null,item_className:"",disabled:!1,user:null,item:null},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.post(j,JSON.stringify({type:"get_random_card",url:window.location.href})).then((function(t){e.setState({item:t.data,disabled:!0}),console.log(t)})),setInterval((function(){O.a.post(j,JSON.stringify({type:"tick",url:window.location.href})).then((function(t){e.setState({user:t.data})}))}),1e3)}},{key:"wrapText",value:function(e,t,a,n,l,i){for(var r=t.split(" "),s=r.length,c="",o=0;o<s;o++){var m=c+r[o]+" ";e.measureText(m).width>l?(e.fillText(c,a,n),c=r[o]+" ",n+=i):c=m}e.fillText(c,a,n)}},{key:"render",value:function(){var e=this,t=this.state,a=(t.activePanel,t.user),n=(t.activeView,t.activeModal,t.item),i=t.popout;return l.a.createElement(d.q,{id:"game",activePanel:"game",header:!1,popout:i},l.a.createElement(d.k,{id:"game"},l.a.createElement(d.l,null,"\u0418\u0433\u0440\u0430"),l.a.createElement(d.h,{header:l.a.createElement(d.i,{mode:"secondary",aside:l.a.createElement(d.f,{mode:"primary"},null==a?l.a.createElement(d.o,{size:"small"}):a.k+" \u043a\u0433/c")},"\u0421\u0447\u0435\u0442"),align:"center",style:{marginBottom:10}},null==a?l.a.createElement(d.o,{size:"medium"}):l.a.createElement(d.p,{level:1,weight:"heavy"},a.mass+" \u043a\u0433")),l.a.createElement("div",{align:"center",style:{marginBottom:10,marginLeft:30,marginRight:30}},l.a.createElement(d.d,{style:{margin:"0 auto",display:"block"}},null==n?l.a.createElement(d.o,{size:"large"}):l.a.createElement(d.c,{size:"l",mode:"outline",className:this.state.item_className,id:"item"},l.a.createElement("div",null,l.a.createElement(d.a,{style:{top:10},src:j+n.img,mode:"image",size:64,onClick:function(){return e.openImage(j+n.img)}}),l.a.createElement(d.p,{weight:"semibold",level:2,style:{padding:15}},n.name))))),l.a.createElement(d.d,null,l.a.createElement(d.c,{size:"s",onClick:this.put,"data-trash":"plastic",style:{backgroundColor:"#F19356"}},l.a.createElement(d.g,{align:"center"},l.a.createElement(d.a,{src:E.a,style:{top:10}}),l.a.createElement("p",null,"\u041f\u043b\u0430\u0441\u0442\u0438\u043a"))),l.a.createElement(d.c,{size:"s",style:{backgroundColor:"#D1CB73"}},l.a.createElement(d.g,{align:"center",onClick:this.put,"data-trash":"metal"},l.a.createElement(d.a,{src:f.a,style:{top:10}}),l.a.createElement("p",null,"\u041c\u0435\u0442\u0430\u043b\u043b"))),l.a.createElement(d.c,{size:"s",onClick:this.put,"data-trash":"organic",style:{backgroundColor:"#68B1E5"}},l.a.createElement(d.g,{align:"center"},l.a.createElement(d.a,{src:v.a,style:{top:10}}),l.a.createElement("p",null,"\u041e\u0440\u0433\u0430\u043d\u0438\u043a\u0430")))),l.a.createElement(d.d,null,l.a.createElement(d.c,{size:"s",onClick:this.put,"data-trash":"glass",style:{backgroundColor:"#68E5C4"}},l.a.createElement(d.g,{align:"center"},l.a.createElement(d.a,{src:b.a,style:{top:10}}),l.a.createElement("p",null,"\u0421\u0442\u0435\u043a\u043b\u043e"))),l.a.createElement(d.c,{size:"s",onClick:this.put,"data-trash":"paper",style:{backgroundColor:"#BEF264"}},l.a.createElement(d.g,{align:"center"},l.a.createElement(d.a,{src:C.a,style:{top:10}}),l.a.createElement("p",null,"\u0411\u0443\u043c\u0430\u0433\u0430"))),l.a.createElement(d.c,{size:"s",onClick:this.put,"data-trash":"other",style:{backgroundColor:"#84887D"}},l.a.createElement(d.g,{align:"center"},l.a.createElement(d.a,{src:x.a,style:{top:10}}),l.a.createElement("p",null,"\u0414\u0440\u0443\u0433\u043e\u0435"))))))}}]),a}(l.a.Component);c.a.send("VKWebAppInit"),r.a.render(l.a.createElement(A,null),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.ffc3660e.chunk.js.map