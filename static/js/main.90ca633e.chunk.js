(this.webpackJsonpvk_game=this.webpackJsonpvk_game||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/glass.3168a39b.png"},101:function(e,t,a){e.exports=a.p+"static/media/paper.532879c5.png"},102:function(e,t,a){e.exports=a.p+"static/media/other.eba8e967.png"},166:function(e,t,a){e.exports=a(275)},257:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);a(167),a(193),a(195),a(196),a(198),a(199),a(200),a(201),a(202),a(203),a(204),a(205),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235);var n=a(0),l=a.n(n),i=a(89),s=a.n(i),c=a(35),r=a.n(c),o=a(90),m=a(91),p=a(105),u=a(104),d=(a(243),a(245),a(246),a(2)),g=a(97),E=a.n(g),h=a(98),f=a.n(h),y=a(99),b=a.n(y),v=a(100),k=a.n(v),w=a(101),C=a.n(w),_=a(102),z=a.n(_),S=(a(256),a(257),function(e){var t=e.src,a=e.name,n=e.description,i=e.kg,s=e.onClose;return l.a.createElement(d.k,{onClick:s},l.a.createElement(d.b,{style:{border:"1px solid  #F66565",backgroundColor:"#C66363"}},l.a.createElement(d.e,{align:"center"},l.a.createElement(d.n,{level:3,weight:"heavy"},"\u041e\u0448\u0438\u0431\u043e\u0447\u043a\u0430"),l.a.createElement(d.a,{src:"https://vkgamewasteapp.000webhostapp.com/"+t,mode:"image",size:56,style:{marginTop:10}}),l.a.createElement("h1",null,a),l.a.createElement("p",{style:{padding:6}},n),l.a.createElement(d.h,null,"-"+i+" \u043a\u0433"))))}),N=a(103),I=a(41),O=a.n(I),x=new N.VKMiniAppAPI,B="https://vkgamewasteapp.000webhostapp.com/",T=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).openImage=function(e){x.showImages([e])},n.put=function(e){if(n.state.disabled){n.setState({disabled:!1,popout:l.a.createElement(d.l,null)});var t=e.currentTarget.dataset.trash;O.a.post(B,JSON.stringify({type:"check_post",trash:t,waste_id:n.state.item.waste_id,url:window.location.href})).then((function(e){console.log(e),"success"==e.data.status?(n.setState({item_className:"vivify popOutBottom duration-550",popout:null}),setTimeout((function(){n.setState({item:e.data.item,disabled:!0})}),400),setTimeout((function(){n.setState({item_className:"vivify popInLeft"})}),550)):(n.setState({item_className:"vivify popOutTop duration-550",popout:null}),setTimeout((function(){n.setState({popout:l.a.createElement(S,{name:n.state.item.name,description:e.data.description,src:n.state.item.img,kg:e.data.kg,onClose:function(){return n.setState({popout:null,disabled:!0,item_className:"vivify popInLeft"})}}),item:e.data.item})}),550))}))}},n.state={activePanel:"game",activeView:"game",activeModal:null,item_className:"",disabled:!0,user:null,item:null},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.post(B,JSON.stringify({type:"get_random_card",url:window.location.href})).then((function(t){e.setState({item:t.data}),console.log(t)})),setInterval((function(){O.a.post(B,JSON.stringify({type:"tick",url:window.location.href})).then((function(t){e.setState({user:t.data}),console.log(t)}))}),1e3)}},{key:"render",value:function(){var e=this,t=this.state,a=(t.activePanel,t.user),n=(t.activeView,t.activeModal,t.item),i=t.popout;return l.a.createElement(d.o,{id:"game",activePanel:"game",header:!1,popout:i},l.a.createElement(d.i,{id:"game"},l.a.createElement(d.j,null,"\u0418\u0433\u0440\u0430"),l.a.createElement(d.f,{header:l.a.createElement(d.g,{mode:"secondary",aside:l.a.createElement(d.d,{mode:"primary"},null==a?l.a.createElement(d.m,{size:"small"}):a.k+" \u043a\u0433/c")},"\u0421\u0447\u0435\u0442"),align:"center",style:{marginBottom:10}},null==a?l.a.createElement(d.m,{size:"medium"}):l.a.createElement(d.n,{level:1,weight:"heavy"},a.mass+" \u043a\u0433")),l.a.createElement("div",{align:"center",style:{marginBottom:10,marginLeft:30,marginRight:30}},l.a.createElement(d.c,{style:{margin:"0 auto",display:"block"}},null==n?l.a.createElement(d.m,{size:"large"}):l.a.createElement(d.b,{size:"l",mode:"outline",className:this.state.item_className,id:"item"},l.a.createElement("div",null,l.a.createElement(d.a,{style:{top:10},src:B+n.img,mode:"image",size:64,onClick:function(){return e.openImage(n.img)}}),l.a.createElement(d.n,{weight:"semibold",level:2,style:{padding:15}},n.name))))),l.a.createElement(d.c,null,l.a.createElement(d.b,{size:"s",onClick:this.put,"data-trash":"plastic",style:{backgroundColor:"#F19356"}},l.a.createElement(d.e,{align:"center"},l.a.createElement(d.a,{src:E.a,style:{top:10}}),l.a.createElement("p",null,"\u041f\u043b\u0430\u0441\u0442\u0438\u043a"))),l.a.createElement(d.b,{size:"s",style:{backgroundColor:"#D1CB73"}},l.a.createElement(d.e,{align:"center",onClick:this.put,"data-trash":"metal"},l.a.createElement(d.a,{src:f.a,style:{top:10}}),l.a.createElement("p",null,"\u041c\u0435\u0442\u0430\u043b\u043b"))),l.a.createElement(d.b,{size:"s",onClick:this.put,"data-trash":"organic",style:{backgroundColor:"#68B1E5"}},l.a.createElement(d.e,{align:"center"},l.a.createElement(d.a,{src:b.a,style:{top:10}}),l.a.createElement("p",null,"\u041e\u0440\u0433\u0430\u043d\u0438\u043a\u0430")))),l.a.createElement(d.c,null,l.a.createElement(d.b,{size:"s",onClick:this.put,"data-trash":"glass",style:{backgroundColor:"#68E5C4"}},l.a.createElement(d.e,{align:"center"},l.a.createElement(d.a,{src:k.a,style:{top:10}}),l.a.createElement("p",null,"\u0421\u0442\u0435\u043a\u043b\u043e"))),l.a.createElement(d.b,{size:"s",onClick:this.put,"data-trash":"paper",style:{backgroundColor:"#BEF264"}},l.a.createElement(d.e,{align:"center"},l.a.createElement(d.a,{src:C.a,style:{top:10}}),l.a.createElement("p",null,"\u0411\u0443\u043c\u0430\u0433\u0430"))),l.a.createElement(d.b,{size:"s",onClick:this.put,"data-trash":"other",style:{backgroundColor:"#84887D"}},l.a.createElement(d.e,{align:"center"},l.a.createElement(d.a,{src:z.a,style:{top:10}}),l.a.createElement("p",null,"\u0414\u0440\u0443\u0433\u043e\u0435"))))))}}]),a}(l.a.Component);r.a.send("VKWebAppInit"),s.a.render(l.a.createElement(T,null),document.getElementById("root"))},97:function(e,t,a){e.exports=a.p+"static/media/plastic.de4a7505.png"},98:function(e,t,a){e.exports=a.p+"static/media/metal.86c04338.png"},99:function(e,t,a){e.exports=a.p+"static/media/bin.303e24db.png"}},[[166,1,2]]]);
//# sourceMappingURL=main.90ca633e.chunk.js.map