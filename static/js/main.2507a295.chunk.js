(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/bomb.e4a2809d.png"},113:function(e,t,a){e.exports=a.p+"static/media/waste.f8b25493.png"},114:function(e,t,a){e.exports=a.p+"static/media/sort.15eb27f1.png"},115:function(e,t,a){e.exports=a.p+"static/media/conveer.3d372761.png"},116:function(e,t,a){e.exports=a.p+"static/media/apple.32447e79.png"},174:function(e,t,a){e.exports=a(284)},266:function(e,t,a){},284:function(e,t,a){"use strict";a.r(t);a(175),a(201),a(203),a(204),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243);var n=a(0),l=a.n(n),i=a(99),r=a.n(i),c=a(29),s=a.n(c),o=a(122),m=a(100),d=a(101),p=a(123),g=a(121),h=(a(251),a(253),a(254),a(2)),u=a(58),E=a.n(u),w=a(59),y=a.n(w),v=a(60),b=a.n(v),f=a(61),k=a.n(f),C=a(62),_=a.n(C),x=a(63),T=a.n(x),S=a(112),z=a.n(S),B=a(113),N=a.n(B),O=a(114),j=a.n(O),I=a(115),A=a.n(I),D=a(116),M=a.n(D),P=(a(265),a(266),a(117)),F=a.n(P),J=a(118),L=a.n(J),U=a(119),V=a.n(U),R=a(36),W=a.n(R),q=function(e){var t=e.src,a=e.name,n=e.description,i=e.kg,r=e.onClose,c=e.share;return l.a.createElement(h.s,{onClick:r},l.a.createElement(h.c,{style:{border:"1px solid  #F66565",backgroundColor:"#C66363"}},l.a.createElement(h.h,{align:"center"},l.a.createElement(h.e,{before:l.a.createElement(h.g,{mode:"prominent"},"!"),asideContent:l.a.createElement(W.a,{fill:"#37200A",onClick:r})},l.a.createElement(h.w,{level:3,weight:"heavy"},"\u041e\u0448\u0438\u0431\u043e\u0447\u043a\u0430")),l.a.createElement(h.a,{src:"https://api-waste.hhos.ru/"+t,mode:"image",size:56,style:{marginTop:10}}),l.a.createElement("h1",null,a),l.a.createElement("span",{style:{padding:6,display:"block"}},n),l.a.createElement(h.b,{style:{margin:10},onClick:c},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438"),l.a.createElement(h.l,null,"-"+i+" \u043a\u0433"))))},K=function(e){var t=e.achievement,a=e.onClose,n=e.name,i=e.share;return l.a.createElement(h.s,{onClick:a},l.a.createElement(h.d,{className:n},l.a.createElement(h.c,{mode:"shadow",style:{backgroundColor:"white"},size:"l"},l.a.createElement("div",{align:"center"},l.a.createElement(h.e,{asideContent:l.a.createElement(W.a,{onClick:a}),before:l.a.createElement(h.g,{mode:"primary"},"!")},l.a.createElement(h.w,{mode:"semibold",level:1},"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435!")),l.a.createElement(h.v,{mode:"regular",style:{paddingBottom:15,padding:10}},"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435 "+t.name),l.a.createElement("img",{style:{height:100,weight:100},src:"https://api-waste.hhos.ru/achievements/"+t.img}),l.a.createElement(h.v,{style:{padding:15}},t.description),l.a.createElement(h.w,{mode:"heavy",level:2},"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435:"),l.a.createElement(h.n,null,l.a.createElement("p",{style:{paddingTop:5,paddingBottom:5,margin:0}},"+ "+t.reward_kg+" \u043a\u0433"),l.a.createElement("p",{style:{paddingTop:5,paddingBottom:5,margin:0}},"+ "+t.reward_k+"/c")),l.a.createElement(h.h,null,l.a.createElement(h.b,{size:"l",mode:"outline",onClick:i},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"))))))},Y=a(120),G=a(42),H=a.n(G),Q=new Y.VKMiniAppAPI,X=Object(h.y)(),Z="https://api-waste.hhos.ru/api/",$="https://api-waste.hhos.ru/",ee={color:"black",marginTop:15,padding:0},te=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).UpdateConfig=function(e){console.log(e),n.setState({scheme:e.scheme,weight:window.screen.width}),null==e.viewport_width?n.setState({scheme:e.scheme,weight:window.screen.width}):n.setState({scheme:e.scheme,weight:e.viewport_width})},n.openImage=function(e){Q.showImages([e])},n.put=function(e){if(n.state.disabled){n.setState({disabled:!1,popout:l.a.createElement(h.t,null)});var t=e.currentTarget.dataset.trash;H.a.post(Z,JSON.stringify(Object(o.a)({type:"check_post",trash:t},n.state.item,{url:window.location.href}))).then((function(e){console.log(e),"success"==e.data.status?(n.setState({item_className:"vivify popOutBottom duration-550",popout:null}),setTimeout((function(){n.setState({item:e.data.item,disabled:!0})}),400),setTimeout((function(){n.setState({item_className:"vivify popInLeft"})}),550)):(n.setState({item_className:"vivify popOutTop duration-550",popout:null}),setTimeout((function(){n.setState({popout:l.a.createElement(q,{name:n.state.item.name,description:e.data.description,src:n.state.item.img,kg:e.data.kg,onClose:function(){return n.setState({popout:null,disabled:!0,item_className:"vivify popInLeft"})},share:function(){return n.shareError(e.data)}}),item:e.data.item})}),550))}))}},n.shareError=function(e){var t=document.createElement("canvas");t.width=900,t.height=900;var a=t.getContext("2d");a.font="55pt Calibri",a.fillStyle="#000",a.textAlign="center",n.wrapText(a,e.description,450,100,900,70);var l=t.toDataURL();Q.showStoryBox({background_type:"image",url:"https://klike.net/uploads/posts/2019-11/1572778685_5.jpg",stickers:[{sticker_type:"renderable",sticker:{content_type:"image",url:$+e.img,transform:{gravity:"center",translation_y:-.2}}},{sticker_type:"renderable",sticker:{content_type:"image",blob:l,transform:{gravity:"center_bottom"}}}]})},n.shareAchievements=function(e){var t=document.createElement("canvas");t.width=1080,t.height=900;var a=t.getContext("2d");a.font="55pt Calibri",a.fillStyle="#000",a.textAlign="center",n.wrapText(a,e.description,450,100,900,70);var l=t.toDataURL();Q.showStoryBox({background_type:"image",url:"https://klike.net/uploads/posts/2019-11/1572778685_5.jpg",stickers:[{sticker_type:"renderable",sticker:{content_type:"image",url:$+e.img,transform:{gravity:"center",translation_y:-.2}}},{sticker_type:"renderable",sticker:{content_type:"image",blob:l,transform:{gravity:"center_bottom"}}}]})},n.check_weight=function(){(n.state.weight<=320&&X===h.m||n.state.weight<=360&&X!==h.m)&&n.setState({activeModal:"hide_text",view_text:!1})},n.state={scheme:"space_gray",weight:null,view_text:!0,activePanel:"tutorial",activeView:"game",activeModal:null,item_className:"",disabled:!1,user:null,item:null,info:null},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Q.onUpdateConfig(this.UpdateConfig),H.a.post(Z,JSON.stringify({type:"get_random_card",url:window.location.href})).then((function(t){e.setState({item:t.data,disabled:!0})})),setInterval((function(){H.a.post(Z,JSON.stringify({type:"tick",url:window.location.href})).then((function(t){e.setState({user:t.data}),null!=t.data.achievement&&e.setState({popout_name:"vivify flipInY",popout:l.a.createElement(K,{name:e.state.popout_name,achievement:t.data.achievement,share:e.shareAchievements(t.data.achievement),onClose:function(){return e.setState({popout:null})}})})}))}),1e3)}},{key:"wrapText",value:function(e,t,a,n,l,i){for(var r=t.split(" "),c=r.length,s="",o=0;o<c;o++){var m=s+r[o]+" ";e.measureText(m).width>l?(e.fillText(s,a,n),s=r[o]+" ",n+=i):s=m}e.fillText(s,a,n)}},{key:"render",value:function(){var e=this,t=this.state,a=t.activePanel,n=t.user,i=t.view_text,r=t.activeModal,c=t.item,s=t.popout;return l.a.createElement(h.f,{isWebView:!0,scheme:this.state.scheme},l.a.createElement(h.x,{id:"game",activePanel:a,header:!1,popout:s,modal:l.a.createElement(h.p,{activeModal:r},l.a.createElement(h.o,{id:"hide_text",onClose:function(){return e.setState({activeModal:null})},caption:"\u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u043f\u043e\u0434 \u0431\u0430\u043a\u0430\u043c\u0438 \u0441\u043a\u0440\u044b\u0442\u044b, \u043d\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0445 \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u043c\u0435\u043d\u044e "+this.state.weight,icon:l.a.createElement(F.a,null),header:"\u0412\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0432\u043e \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0443\u0437\u043a\u043e\u0435"}))},l.a.createElement(h.q,{id:"game"},l.a.createElement(h.r,{left:i?l.a.createElement(L.a,{onClick:function(){return e.setState({view_text:!1})}}):l.a.createElement(V.a,{onClick:function(){return e.setState({view_text:!0})}})},"\u0418\u0433\u0440\u0430"),l.a.createElement(h.j,{header:l.a.createElement(h.k,{mode:"secondary",aside:l.a.createElement(h.g,{mode:"primary"},null==n?l.a.createElement(h.u,{size:"small"}):n.k+" \u043a\u0433/c")},"\u0421\u0447\u0435\u0442"),align:"center",style:{marginBottom:10}},null==n?l.a.createElement(h.u,{size:"medium"}):l.a.createElement(h.w,{level:1,weight:"heavy"},n.mass+" \u043a\u0433")),l.a.createElement("div",{align:"center",style:{marginBottom:10,marginLeft:30,marginRight:30}},l.a.createElement(h.d,{style:{margin:"0 auto",display:"block"}},null==c?l.a.createElement(h.u,{size:"large"}):l.a.createElement(h.c,{size:"l",mode:"shadow",className:this.state.item_className,id:"item"},l.a.createElement("div",null,l.a.createElement(h.a,{style:{top:10},src:$+c.img,mode:"image",size:64}),l.a.createElement(h.w,{weight:"semibold",level:2,style:{padding:15}},c.name))))),l.a.createElement(h.d,null,l.a.createElement(h.c,{size:"s",onClick:this.put,"data-trash":"plastic",style:{backgroundColor:"#F19356"}},l.a.createElement(h.h,{align:"center"},l.a.createElement(h.a,{src:E.a,style:{top:10}}),i?l.a.createElement(h.w,{style:ee},"\u041f\u043b\u0430\u0441\u0442\u0438\u043a"):l.a.createElement("p",null))),l.a.createElement(h.c,{size:"s",style:{backgroundColor:"#D1CB73"}},l.a.createElement(h.h,{align:"center",onClick:this.put,"data-trash":"metal"},l.a.createElement(h.a,{src:y.a,style:{top:10}}),i?l.a.createElement(h.w,{style:ee},"\u041c\u0435\u0442\u0430\u043b\u043b"):l.a.createElement("p",null))),l.a.createElement(h.c,{size:"s",onClick:this.put,"data-trash":"organic",style:{backgroundColor:"#68B1E5"}},l.a.createElement(h.h,{align:"center"},l.a.createElement(h.a,{src:b.a,style:{top:10}}),i?l.a.createElement(h.w,{style:ee},"\u041e\u0440\u0433\u0430\u043d\u0438\u043a\u0430"):l.a.createElement("p",null)))),l.a.createElement(h.d,null,l.a.createElement(h.c,{size:"s",onClick:this.put,"data-trash":"glass",style:{backgroundColor:"#68E5C4"}},l.a.createElement(h.h,{align:"center"},l.a.createElement(h.a,{src:k.a,style:{top:10}}),i?l.a.createElement(h.w,{style:ee},"\u0421\u0442\u0435\u043a\u043b\u043e"):l.a.createElement("p",null))),l.a.createElement(h.c,{size:"s",onClick:this.put,"data-trash":"paper",style:{backgroundColor:"#BEF264"}},l.a.createElement(h.h,{align:"center"},l.a.createElement(h.a,{src:_.a,style:{top:10}}),i?l.a.createElement(h.w,{style:ee},"\u0411\u0443\u043c\u0430\u0433\u0430"):l.a.createElement("p",null))),l.a.createElement(h.c,{size:"s",onClick:this.put,"data-trash":"other",style:{backgroundColor:"#84887D"}},l.a.createElement(h.h,{align:"center"},l.a.createElement(h.a,{src:T.a,style:{top:10}}),i?l.a.createElement(h.w,{style:ee},"\u0414\u0440\u0443\u0433\u043e\u0435"):l.a.createElement("p",null))))),l.a.createElement(h.q,{id:"tutorial"},l.a.createElement(h.i,{slideWidth:"100%",align:"center",style:{height:"100vh"},bullets:"dark"},l.a.createElement("div",{align:"center"},l.a.createElement("img",{src:z.a,style:{height:250,weight:250,marginTop:70}}),l.a.createElement(h.w,{level:3,style:{weight:"100wh",padding:15},weight:"semibold"},"\u041a\u043e\u0433\u0434\u0430-\u0442\u043e\xa0\u0434\u0430\u0432\u043d\u043e\xa0\u043b\u044e\u0434\u0438\xa0\u0432\u044b\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u043b\u0438\xa0\u043c\u0443\u0441\u043e\u0440 \u0432\xa0\u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0445\xa0\u043a\u043e\u043b\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430\u0445,",l.a.createElement("br",null),"\xa0\u043d\u0435\xa0\u0441\u043e\u0440\u0442\u0438\u0440\u0443\u044f\xa0\u0438\xa0\u043d\u0435\xa0\u043f\u0435\u0440\u0435\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044f\xa0\u0435\u0433\u043e. \u042d\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u043b\u043e \u043a \u0443\u0436\u0430\u0441\u043d\u044b\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u044f\u043c, \u0417\u0435\u043c\u043b\u044f \u0441\u0442\u0430\u043b\u0430 \u043d\u0435 \u043f\u0440\u0438\u0433\u043e\u0434\u043d\u0430 \u0434\u043b\u044f \u0436\u0438\u0437\u043d\u0438."),l.a.createElement(h.b,{mode:"outline",onClick:function(){e.setState({activePanel:"game"}),e.check_weight()}},"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c")),l.a.createElement("div",{align:"center"},l.a.createElement("img",{src:N.a,style:{height:250,weight:250,marginTop:40}}),l.a.createElement(h.w,{style:{weight:"100wh",padding:15},weight:"semibold"},"\u041c\u043d\u043e\u0433\u0438\u0435 \u043f\u043e\u0433\u0438\u0431\u043b\u0438\u044f.",l.a.createElement("br",null),"\u0418 \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u043c\u0441\u044f \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u0432\u044b\u0436\u0438\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0432\u0430\u043b\u043a\u0430\u0445.",l.a.createElement("br",null),"\u0415\u0441\u043b\u0438 \u0432\u044b \u044d\u0442\u043e \u0447\u0438\u0442\u0430\u0435\u0442\u0435, \u0432\u044b \u043e\u0434\u0438\u043d \u0438\u0437 \u0432\u044b\u0436\u0438\u0432\u0448\u0438\u0445.",l.a.createElement("br",null),"\u0421\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043c\u0443\u0441\u043e\u0440, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0436\u0438\u0442\u044c \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043c\u043e\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043e.",l.a.createElement("br",null))),l.a.createElement("div",{align:"center"},l.a.createElement("img",{src:j.a,style:{height:250,weight:250,marginTop:70}}),l.a.createElement(h.w,{level:1,style:{weight:"100wh",padding:15,marginTop:20},weight:"semibold"},"\u0421\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043c\u0443\u0441\u043e\u0440 \u0434\u0432\u0443\u043c\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438")),l.a.createElement("div",{align:"center"},l.a.createElement("img",{src:A.a,style:{height:250,weight:250,marginTop:40}}),l.a.createElement(h.w,{level:1,style:{weight:"100wh",padding:15,marginTop:20},weight:"semibold"},"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438"),l.a.createElement(h.l,{style:{padding:15},weight:"semibold"},"\u0421\u043e\u0440\u0442\u0438\u0440\u0443\u044f \u043c\u0443\u0441\u043e\u0440, \u0441 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c\u044e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a. \u041e\u043d \u0441\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u0437\u0430 \u0432\u0430\u0441 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u0443\u0441\u043e\u0440.")),l.a.createElement("div",{align:"center"},l.a.createElement(h.d,{style:{marginTop:"100px",padding:20}},l.a.createElement(h.c,{size:"l",mode:"shadow",className:this.state.item_className,id:"item"},l.a.createElement("div",null,l.a.createElement(h.a,{style:{top:10},src:M.a,mode:"image",size:64}),l.a.createElement(h.w,{weight:"semibold",level:2,style:{padding:15}},"\u041e\u0433\u0440\u044b\u0437\u043e\u043a \u044f\u0431\u043b\u043e\u043a\u0430")))),l.a.createElement(h.w,{level:1,style:{weight:"100wh",padding:15,marginTop:20},weight:"semibold"},"\u0412\u0440\u0443\u0447\u043d\u0443\u044e"),l.a.createElement(h.l,{style:{padding:15},weight:"semibold"},"\u0412\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043a\u0443\u0434\u0430 \u0432\u044b\u0431\u0440\u043e\u0438\u0442\u044c \u043c\u0443\u0441\u043e\u0440 \u0432\u0440\u0443\u0447\u043d\u0443\u044e. \u041f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0436\u0430\u0432, \u043d\u0430 \u043d\u0443\u0436\u043d\u044b\u0439 \u0431\u0430\u043a.")),l.a.createElement("div",{style:{backgroundColor:"#F19356"},align:"center"},l.a.createElement(h.a,{src:E.a,style:{top:50},size:250}),l.a.createElement(h.w,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u041f\u043b\u0430\u0441\u0442\u0438\u043a")),l.a.createElement("div",{style:{backgroundColor:"#D1CB73"},align:"center"},l.a.createElement(h.a,{src:y.a,style:{top:50},size:250}),l.a.createElement(h.w,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u041c\u0435\u0442\u0430\u043b\u043b")),l.a.createElement("div",{style:{backgroundColor:"#68B1E5"},align:"center"},l.a.createElement(h.a,{src:b.a,style:{top:50},size:250}),l.a.createElement(h.w,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u041e\u0440\u0433\u0430\u043d\u0438\u043a\u0430")),l.a.createElement("div",{style:{backgroundColor:"#68E5C4"},align:"center"},l.a.createElement(h.a,{src:k.a,style:{top:50},size:250}),l.a.createElement(h.w,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u0421\u0442\u0435\u043a\u043b\u043e")),l.a.createElement("div",{style:{backgroundColor:"#BEF264"},align:"center"},l.a.createElement(h.a,{src:_.a,style:{top:50},size:250}),l.a.createElement(h.w,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u0411\u0443\u043c\u0430\u0433\u0430")),l.a.createElement("div",{style:{backgroundColor:"#84887D"},align:"center"},l.a.createElement(h.a,{src:T.a,style:{top:50},size:250}),l.a.createElement(h.w,{level:1,style:{weight:"100wh",padding:15,marginTop:70},weight:"semibold"},"\u0414\u0440\u0443\u0433\u043e\u0435"),l.a.createElement(h.l,{style:{padding:15},weight:"semibold"},"\u0412\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e \u0441\u044e\u0434\u0430. \u0418\u043b\u0438 \u0442\u043e \u0447\u0442\u043e \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043c\u043d\u043e\u0433\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"),l.a.createElement(h.b,{size:"l",mode:"commerce",onClick:function(){e.setState({activePanel:"game"})}},"\u041d\u0430\u0447\u0430\u0442\u044c"))))))}}]),a}(l.a.Component);s.a.send("VKWebAppInit"),r.a.render(l.a.createElement(te,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/plastic.de4a7505.png"},59:function(e,t,a){e.exports=a.p+"static/media/metal.86c04338.png"},60:function(e,t,a){e.exports=a.p+"static/media/bin.303e24db.png"},61:function(e,t,a){e.exports=a.p+"static/media/glass.3168a39b.png"},62:function(e,t,a){e.exports=a.p+"static/media/paper.532879c5.png"},63:function(e,t,a){e.exports=a.p+"static/media/other.eba8e967.png"}},[[174,1,2]]]);
//# sourceMappingURL=main.2507a295.chunk.js.map