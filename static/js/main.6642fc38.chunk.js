(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/bomb.e4a2809d.png"},113:function(e,t,a){e.exports=a.p+"static/media/waste.f8b25493.png"},114:function(e,t,a){e.exports=a.p+"static/media/sort.15eb27f1.png"},115:function(e,t,a){e.exports=a.p+"static/media/conveer.3d372761.png"},116:function(e,t,a){e.exports=a.p+"static/media/apple.32447e79.png"},172:function(e,t,a){e.exports=a(282)},264:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);a(173),a(199),a(201),a(202),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241);var n=a(0),l=a.n(n),i=a(99),r=a.n(i),c=a(29),s=a.n(c),o=a(120),m=a(100),d=a(101),p=a(121),g=a(119),u=(a(249),a(251),a(252),a(3)),h=a(58),E=a.n(h),v=a(59),y=a.n(v),w=a(60),b=a.n(w),f=a(61),k=a.n(f),C=a(62),_=a.n(C),x=a(63),T=a.n(x),z=a(112),S=a.n(z),B=a(113),N=a.n(B),O=a(114),I=a.n(O),j=a(115),M=a.n(j),D=a(116),P=a.n(D),A=(a(263),a(264),a(117)),F=a.n(A),J=a(36),L=a.n(J),U=function(e){var t=e.src,a=e.name,n=e.description,i=e.kg,r=e.onClose,c=e.share;return l.a.createElement(u.r,{onClick:r},l.a.createElement(u.c,{style:{border:"1px solid  #F66565",backgroundColor:"#C66363"}},l.a.createElement(u.h,{align:"center"},l.a.createElement(u.e,{before:l.a.createElement(u.g,{mode:"prominent"},"!"),asideContent:l.a.createElement(L.a,{fill:"#37200A",onClick:r})},l.a.createElement(u.v,{level:3,weight:"heavy"},"\u041e\u0448\u0438\u0431\u043e\u0447\u043a\u0430")),l.a.createElement(u.a,{src:"https://api-waste.hhos.ru/"+t,mode:"image",size:56,style:{marginTop:10}}),l.a.createElement("h1",null,a),l.a.createElement("span",{style:{padding:6,display:"block"}},n),l.a.createElement(u.b,{style:{margin:10},onClick:c},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438"),l.a.createElement(u.l,null,"-"+i+" \u043a\u0433"))))},V=function(e){var t=e.achievement,a=e.onClose,n=e.name;return l.a.createElement(u.r,{onClick:a},l.a.createElement(u.d,{className:n},l.a.createElement(u.c,{mode:"shadow",style:{backgroundColor:"white"},size:"l"},l.a.createElement("div",{align:"center"},l.a.createElement(u.e,{asideContent:l.a.createElement(L.a,{onClick:a}),before:l.a.createElement(u.g,{mode:"primary"},"!")},l.a.createElement(u.v,{mode:"semibold",level:1},"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435!")),l.a.createElement(u.u,{mode:"regular",style:{paddingBottom:15,padding:10}},"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435 "+t.name),l.a.createElement("img",{style:{height:100,weight:100},src:"https://api-waste.hhos.ru/achievements/"+t.img}),l.a.createElement(u.u,{style:{padding:15}},t.description),l.a.createElement(u.v,{mode:"heavy",level:2},"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435:"),l.a.createElement(u.m,null,l.a.createElement("p",{style:{paddingTop:5,paddingBottom:5,margin:0}},"+ "+t.reward_kg+" \u043a\u0433"),l.a.createElement("p",{style:{paddingTop:5,paddingBottom:5,margin:0}},"+ "+t.reward_k+"/c")),l.a.createElement(u.h,null,l.a.createElement(u.b,{size:"l",mode:"outline"},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"))))))},W=a(118),K=a(42),R=a.n(K),q=new W.VKMiniAppAPI,Y="https://api-waste.hhos.ru/api/",G=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).UpdateConfig=function(e){console.log(e),n.setState({scheme:e.scheme,weight:e.viewport_width})},n.openImage=function(e){q.showImages([e])},n.put=function(e){if(n.state.disabled){n.setState({disabled:!1,popout:l.a.createElement(u.s,null)});var t=e.currentTarget.dataset.trash;R.a.post(Y,JSON.stringify(Object(o.a)({type:"check_post",trash:t},n.state.item,{url:window.location.href}))).then((function(e){console.log(e),"success"==e.data.status?(n.setState({item_className:"vivify popOutBottom duration-550",popout:null}),setTimeout((function(){n.setState({item:e.data.item,disabled:!0})}),400),setTimeout((function(){n.setState({item_className:"vivify popInLeft"})}),550)):(n.setState({item_className:"vivify popOutTop duration-550",popout:null}),setTimeout((function(){n.setState({popout:l.a.createElement(U,{name:n.state.item.name,description:e.data.description,src:n.state.item.img,kg:e.data.kg,onClose:function(){return n.setState({popout:null,disabled:!0,item_className:"vivify popInLeft"})},share:function(){return n.shareError(e.data)}}),item:e.data.item})}),550))}))}},n.shareError=function(e){var t=document.createElement("canvas");t.width=1080,t.height=900;var a=t.getContext("2d");a.font="55pt Calibri",a.fillStyle="#000",a.textAlign="center",n.wrapText(a,e.description,450,100,900,70);var l=t.toDataURL();q.showStoryBox({background_type:"image",url:"https://klike.net/uploads/posts/2019-11/1572778685_5.jpg",stickers:[{sticker_type:"renderable",sticker:{content_type:"image",url:Y+e.img,transform:{gravity:"center",translation_y:-.2}}},{sticker_type:"renderable",sticker:{content_type:"image",blob:l,transform:{gravity:"center_bottom"}}}]})},n.check_weight=function(){n.state.weight<=320&&n.setState({activeModal:"hide_text",view_text:!1})},n.state={scheme:"space_gray",weight:null,view_text:!0,activePanel:"tutorial",activeView:"game",activeModal:null,item_className:"",disabled:!1,user:null,item:null,info:null},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;q.onUpdateConfig(this.UpdateConfig),R.a.post(Y,JSON.stringify({type:"get_random_card",url:window.location.href})).then((function(t){e.setState({item:t.data,disabled:!0})})),setInterval((function(){R.a.post(Y,JSON.stringify({type:"tick",url:window.location.href})).then((function(t){e.setState({user:t.data}),null!=t.data.achievement&&e.setState({popout_name:"vivify flipInY",popout:l.a.createElement(V,{name:e.state.popout_name,achievement:t.data.achievement,onClose:function(){return e.setState({popout:null})}})})}))}),1e3)}},{key:"wrapText",value:function(e,t,a,n,l,i){for(var r=t.split(" "),c=r.length,s="",o=0;o<c;o++){var m=s+r[o]+" ";e.measureText(m).width>l?(e.fillText(s,a,n),s=r[o]+" ",n+=i):s=m}e.fillText(s,a,n)}},{key:"render",value:function(){var e=this,t=this.state,a=t.activePanel,n=t.user,i=t.view_text,r=t.activeModal,c=t.item,s=t.popout;return l.a.createElement(u.f,{isWebView:!0,scheme:this.state.scheme},l.a.createElement(u.w,{id:"game",activePanel:a,header:!1,popout:s,modal:l.a.createElement(u.o,{activeModal:r},l.a.createElement(u.n,{id:"hide_text",onClose:function(){return e.setState({activeModal:null})},caption:"\u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u043f\u043e\u0434 \u0431\u0430\u043a\u0430\u043c\u0438 \u0441\u043a\u0440\u044b\u0442\u044b, \u043d\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0445 \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u043c\u0435\u043d\u044e",icon:l.a.createElement(F.a,null),header:"\u0412\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0432\u043e \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0443\u0437\u043a\u043e\u0435"}))},l.a.createElement(u.p,{id:"game"},l.a.createElement(u.q,null,"\u0418\u0433\u0440\u0430"),l.a.createElement(u.j,{header:l.a.createElement(u.k,{mode:"secondary",aside:l.a.createElement(u.g,{mode:"primary"},null==n?l.a.createElement(u.t,{size:"small"}):n.k+" \u043a\u0433/c")},"\u0421\u0447\u0435\u0442"),align:"center",style:{marginBottom:10}},null==n?l.a.createElement(u.t,{size:"medium"}):l.a.createElement(u.v,{level:1,weight:"heavy"},n.mass+" \u043a\u0433")),l.a.createElement("div",{align:"center",style:{marginBottom:10,marginLeft:30,marginRight:30}},l.a.createElement(u.d,{style:{margin:"0 auto",display:"block"}},null==c?l.a.createElement(u.t,{size:"large"}):l.a.createElement(u.c,{size:"l",mode:"shadow",className:this.state.item_className,id:"item"},l.a.createElement("div",null,l.a.createElement(u.a,{style:{top:10},src:"https://api-waste.hhos.ru/"+c.img,mode:"image",size:64}),l.a.createElement(u.v,{weight:"semibold",level:2,style:{padding:15}},c.name))))),l.a.createElement(u.d,null,l.a.createElement(u.c,{size:"s",onClick:this.put,"data-trash":"plastic",style:{backgroundColor:"#F19356"}},l.a.createElement(u.h,{align:"center"},l.a.createElement(u.a,{src:E.a,style:{top:10}}),i?l.a.createElement("p",{style:{color:"black"}},"\u041f\u043b\u0430\u0441\u0442\u0438\u043a"):l.a.createElement("p",null))),l.a.createElement(u.c,{size:"s",style:{backgroundColor:"#D1CB73"}},l.a.createElement(u.h,{align:"center",onClick:this.put,"data-trash":"metal"},l.a.createElement(u.a,{src:y.a,style:{top:10}}),i?l.a.createElement("p",{style:{color:"black"}},"\u041c\u0435\u0442\u0430\u043b\u043b"):l.a.createElement("p",null))),l.a.createElement(u.c,{size:"s",onClick:this.put,"data-trash":"organic",style:{backgroundColor:"#68B1E5"}},l.a.createElement(u.h,{align:"center"},l.a.createElement(u.a,{src:b.a,style:{top:10}}),i?l.a.createElement("p",{style:{color:"black"}},"\u041e\u0440\u0433\u0430\u043d\u0438\u043a\u0430"):l.a.createElement("p",null)))),l.a.createElement(u.d,null,l.a.createElement(u.c,{size:"s",onClick:this.put,"data-trash":"glass",style:{backgroundColor:"#68E5C4"}},l.a.createElement(u.h,{align:"center"},l.a.createElement(u.a,{src:k.a,style:{top:10}}),i?l.a.createElement("p",{style:{color:"black"}},"\u0421\u0442\u0435\u043a\u043b\u043e"):l.a.createElement("p",null))),l.a.createElement(u.c,{size:"s",onClick:this.put,"data-trash":"paper",style:{backgroundColor:"#BEF264"}},l.a.createElement(u.h,{align:"center"},l.a.createElement(u.a,{src:_.a,style:{top:10}}),i?l.a.createElement("p",{style:{color:"black"}},"\u0411\u0443\u043c\u0430\u0433\u0430"):l.a.createElement("p",null))),l.a.createElement(u.c,{size:"s",onClick:this.put,"data-trash":"other",style:{backgroundColor:"#84887D"}},l.a.createElement(u.h,{align:"center"},l.a.createElement(u.a,{src:T.a,style:{top:10}}),i?l.a.createElement("p",{style:{color:"black"}},"\u0414\u0440\u0443\u0433\u043e\u0435"):l.a.createElement("p",null))))),l.a.createElement(u.p,{id:"tutorial"},l.a.createElement(u.i,{slideWidth:"100%",align:"center",style:{height:"100vh"},bullets:"dark"},l.a.createElement("div",{align:"center"},l.a.createElement("img",{src:S.a,style:{height:250,weight:250,marginTop:70}}),l.a.createElement(u.v,{level:3,style:{weight:"100wh",padding:15},weight:"semibold"},"\u041a\u043e\u0433\u0434\u0430-\u0442\u043e\xa0\u0434\u0430\u0432\u043d\u043e\xa0\u043b\u044e\u0434\u0438\xa0\u0432\u044b\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u043b\u0438\xa0\u043c\u0443\u0441\u043e\u0440 \u0432\xa0\u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0445\xa0\u043a\u043e\u043b\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430\u0445,",l.a.createElement("br",null),"\xa0\u043d\u0435\xa0\u0441\u043e\u0440\u0442\u0438\u0440\u0443\u044f\xa0\u0438\xa0\u043d\u0435\xa0\u043f\u0435\u0440\u0435\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044f\xa0\u0435\u0433\u043e. \u042d\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u043b\u043e \u043a \u0443\u0436\u0430\u0441\u043d\u044b\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u044f\u043c, \u0417\u0435\u043c\u043b\u044f \u0441\u0442\u0430\u043b\u0430 \u043d\u0435 \u043f\u0440\u0438\u0433\u043e\u0434\u043d\u0430 \u0434\u043b\u044f \u0436\u0438\u0437\u043d\u0438."),l.a.createElement(u.b,{mode:"outline",onClick:function(){e.setState({activePanel:"game"}),e.check_weight()}},"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c")),l.a.createElement("div",{align:"center"},l.a.createElement("img",{src:N.a,style:{height:250,weight:250,marginTop:40}}),l.a.createElement(u.v,{style:{weight:"100wh",padding:15},weight:"semibold"},"\u041c\u043d\u043e\u0433\u0438\u0435 \u043f\u043e\u0433\u0438\u0431\u043b\u0438\u044f.",l.a.createElement("br",null),"\u0418 \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u043c\u0441\u044f \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u0432\u044b\u0436\u0438\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0432\u0430\u043b\u043a\u0430\u0445.",l.a.createElement("br",null),"\u0415\u0441\u043b\u0438 \u0432\u044b \u044d\u0442\u043e \u0447\u0438\u0442\u0430\u0435\u0442\u0435, \u0432\u044b \u043e\u0434\u0438\u043d \u0438\u0437 \u0432\u044b\u0436\u0438\u0432\u0448\u0438\u0445.",l.a.createElement("br",null),"\u0421\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043c\u0443\u0441\u043e\u0440, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0436\u0438\u0442\u044c \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043c\u043e\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043e.",l.a.createElement("br",null))),l.a.createElement("div",{align:"center"},l.a.createElement("img",{src:I.a,style:{height:250,weight:250,marginTop:70}}),l.a.createElement(u.v,{level:1,style:{weight:"100wh",padding:15,marginTop:20},weight:"semibold"},"\u0421\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043c\u0443\u0441\u043e\u0440 \u0434\u0432\u0443\u043c\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438")),l.a.createElement("div",{align:"center"},l.a.createElement("img",{src:M.a,style:{height:250,weight:250,marginTop:40}}),l.a.createElement(u.v,{level:1,style:{weight:"100wh",padding:15,marginTop:20},weight:"semibold"},"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438"),l.a.createElement(u.l,{style:{padding:15},weight:"semibold"},"\u0421\u043e\u0440\u0442\u0438\u0440\u0443\u044f \u043c\u0443\u0441\u043e\u0440, \u0441 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c\u044e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a. \u041e\u043d \u0441\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u0437\u0430 \u0432\u0430\u0441 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u0443\u0441\u043e\u0440.")),l.a.createElement("div",{align:"center"},l.a.createElement(u.d,{style:{marginTop:"100px",padding:20}},l.a.createElement(u.c,{size:"l",mode:"shadow",className:this.state.item_className,id:"item"},l.a.createElement("div",null,l.a.createElement(u.a,{style:{top:10},src:P.a,mode:"image",size:64}),l.a.createElement(u.v,{weight:"semibold",level:2,style:{padding:15}},"\u041e\u0433\u0440\u044b\u0437\u043e\u043a \u044f\u0431\u043b\u043e\u043a\u0430")))),l.a.createElement(u.v,{level:1,style:{weight:"100wh",padding:15,marginTop:20},weight:"semibold"},"\u0412\u0440\u0443\u0447\u043d\u0443\u044e"),l.a.createElement(u.l,{style:{padding:15},weight:"semibold"},"\u0412\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043a\u0443\u0434\u0430 \u0432\u044b\u0431\u0440\u043e\u0438\u0442\u044c \u043c\u0443\u0441\u043e\u0440 \u0432\u0440\u0443\u0447\u043d\u0443\u044e. \u041f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0436\u0430\u0432, \u043d\u0430 \u043d\u0443\u0436\u043d\u044b\u0439 \u0431\u0430\u043a.")),l.a.createElement("div",{style:{backgroundColor:"#F19356"},align:"center"},l.a.createElement(u.a,{src:E.a,style:{top:50},size:250}),l.a.createElement(u.v,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u041f\u043b\u0430\u0441\u0442\u0438\u043a")),l.a.createElement("div",{style:{backgroundColor:"#D1CB73"},align:"center"},l.a.createElement(u.a,{src:y.a,style:{top:50},size:250}),l.a.createElement(u.v,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u041c\u0435\u0442\u0430\u043b\u043b")),l.a.createElement("div",{style:{backgroundColor:"#68B1E5"},align:"center"},l.a.createElement(u.a,{src:b.a,style:{top:50},size:250}),l.a.createElement(u.v,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u041e\u0440\u0433\u0430\u043d\u0438\u043a\u0430")),l.a.createElement("div",{style:{backgroundColor:"#68E5C4"},align:"center"},l.a.createElement(u.a,{src:k.a,style:{top:50},size:250}),l.a.createElement(u.v,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u0421\u0442\u0435\u043a\u043b\u043e")),l.a.createElement("div",{style:{backgroundColor:"#BEF264"},align:"center"},l.a.createElement(u.a,{src:_.a,style:{top:50},size:250}),l.a.createElement(u.v,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u0411\u0443\u043c\u0430\u0433\u0430")),l.a.createElement("div",{style:{backgroundColor:"#84887D"},align:"center"},l.a.createElement(u.a,{src:T.a,style:{top:50},size:250}),l.a.createElement(u.v,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u0414\u0440\u0443\u0433\u043e\u0435"),l.a.createElement(u.l,{style:{padding:15},weight:"semibold"},"\u0412\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e \u0441\u044e\u0434\u0430. \u0418\u043b\u0438 \u0442\u043e \u0447\u0442\u043e \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043c\u043d\u043e\u0433\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"),l.a.createElement(u.b,{size:"l",mode:"commerce",onClick:function(){e.setState({activePanel:"game"})}},"\u041d\u0430\u0447\u0430\u0442\u044c"))))))}}]),a}(l.a.Component);s.a.send("VKWebAppInit"),r.a.render(l.a.createElement(G,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/plastic.de4a7505.png"},59:function(e,t,a){e.exports=a.p+"static/media/metal.86c04338.png"},60:function(e,t,a){e.exports=a.p+"static/media/bin.303e24db.png"},61:function(e,t,a){e.exports=a.p+"static/media/glass.3168a39b.png"},62:function(e,t,a){e.exports=a.p+"static/media/paper.532879c5.png"},63:function(e,t,a){e.exports=a.p+"static/media/other.eba8e967.png"}},[[172,1,2]]]);
//# sourceMappingURL=main.6642fc38.chunk.js.map