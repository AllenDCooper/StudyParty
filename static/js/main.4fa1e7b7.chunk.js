(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{74:function(e,a,t){e.exports=t(98)},79:function(e,a,t){},80:function(e,a,t){},94:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),o=t.n(l),c=(t(79),t(29)),s=t(30),m=t(36),i=t(35),u=t(24),p=t(8),d=t(7),E=t(23),h=t(103),A=t(104),y=t(108),g=t(67),b=(t(80),t(43),t(59),t(12)),N=t.n(b);t(82),t(84),t(87);N.a.initializeApp({apiKey:"AIzaSyCLuloPcn-et2C4WJqj6uf03HGcpcYF3m8",authDomain:"studyparty-97e3d.firebaseapp.com",databaseURL:"https://studyparty-97e3d.firebaseio.com",projectId:"studyparty-97e3d",storageBucket:"studyparty-97e3d.appspot.com",messagingSenderId:"320626247759",appId:"1:320626247759:web:136b65025be5f241aa823a",measurementId:"G-F3RVYS6305"});var v=N.a.auth(),f=N.a.database();N.a.firestore();N.a.firestore().enablePersistence();var Q=new N.a.auth.GoogleAuthProvider,k=function(e,a,t){console.log(e,a),e.updateProfile({displayName:a.displayName,photoURL:a.photoURL||null}).then((function(){var n={displayName:a.displayName,email:e.email,photoURL:a.photoURL||null,phoneNumber:a.phoneNumber||null};console.log(t),t&&t(n),console.log(n),f.ref("users/"+e.uid).update(n)})).then((function(){console.log("Successfully updated profile")})).catch((function(e){console.log("Error updating user profile:",e)}))},I=function(){v.signInWithPopup(Q).then((function(e){var a=e.user;console.log(a),k(a,a)})).catch((function(e){console.log(e)}))},x=function(e){var a=Object(n.useState)({typed:"",i:0}),t=Object(E.a)(a,2),l=t[0],o=l.typed,c=l.i,s=t[1],m=Object(n.useState)({email:"",password:"",error:null}),i=Object(E.a)(m,2),p=i[0],b=i[1];Object(n.useEffect)((function(){o.length!=="Hey! You want to umm... study???".length&&setTimeout((function(){s({typed:o+"Hey! You want to umm... study???"[c],i:c+1})}),200*Math.random()+50)}),[o]);var v=function(e){var a=e.currentTarget,t=a.name,n=a.value;"userEmail"===t?b(Object(d.a)(Object(d.a)({},p),{},{email:n})):"userPassword"===t&&b(Object(d.a)(Object(d.a)({},p),{},{password:n}))};return r.a.createElement("div",null,r.a.createElement(h.a,{style:{backgroundColor:"white"}},r.a.createElement(A.a,{style:{backgroundColor:"white",marginBottom:"0px",textAlign:"center"}},r.a.createElement("h1",{className:"main-title permanent-marker pink animate__animated animate__bounceInDown"},"StudyParty!"),r.a.createElement("h6",{className:"montserrat"},o,r.a.createElement("span",{className:"cursor"},r.a.createElement("span",{style:{fontWeight:"normal"}},"|")))),r.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto"}},p.error&&r.a.createElement("p",{style:{color:"red"}},p.error),r.a.createElement(y.a,{onSubmit:function(e){e.preventDefault(),N.a.auth().signInWithEmailAndPassword(p.email,p.password).catch((function(e){b(Object(d.a)(Object(d.a)({},p),{},{error:"Incorrect username or password. Please try again."}))}))}},r.a.createElement(y.a.Group,{controlId:"userEmail"},r.a.createElement(y.a.Label,null,"Email address"),r.a.createElement(y.a.Control,{type:"email",placeholder:"Enter email",name:"userEmail",value:p.email,onChange:v})),r.a.createElement(y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(y.a.Label,null,"Password"),r.a.createElement(y.a.Control,{type:"password",placeholder:"Password",name:"userPassword",value:p.password,onChange:v})),r.a.createElement(g.a,{variant:"primary",type:"submit",block:!0},"Sign In"),r.a.createElement("div",{style:{margin:"40px 0px"}},r.a.createElement("p",{className:"ride-line"},r.a.createElement("span",{className:"ride-line-span"},"or")),r.a.createElement(g.a,{variant:"outline-primary",block:!0,onClick:I},"Sign in with Google"))),r.a.createElement("p",{style:{paddingBottom:"100px"}},"Don't have an account? Sign up ",r.a.createElement(u.b,{to:"/signUp"},"here")))))},C=function(e){var a=Object(n.useState)({typed:"",i:0}),t=Object(E.a)(a,2),l=t[0],o=l.typed,c=l.i,s=t[1],m=Object(n.useState)({email:"",password:"",displayName:"",error:null}),i=Object(E.a)(m,2),p=i[0],b=i[1];Object(n.useEffect)((function(){o.length!=="Hey! You want to umm... study???".length&&setTimeout((function(){s({typed:o+"Hey! You want to umm... study???"[c],i:c+1})}),200*Math.random()+50)}),[o]);var v=function(e){var a=e.currentTarget,t=a.name,n=a.value;"userEmail"===t?b(Object(d.a)(Object(d.a)({},p),{},{email:n})):"userPassword"===t?b(Object(d.a)(Object(d.a)({},p),{},{password:n})):"displayName"===t&&b(Object(d.a)(Object(d.a)({},p),{},{displayName:n}))};return r.a.createElement("div",null,r.a.createElement(h.a,{style:{backgroundColor:"white"}},r.a.createElement(A.a,{style:{backgroundColor:"white",marginBottom:"0px",textAlign:"center"}},r.a.createElement("h1",{className:"main-title permanent-marker pink animate__animated animate__bounceInDown"},"StudyParty!"),r.a.createElement("h6",{className:"montserrat"},o,r.a.createElement("span",{className:"cursor"},r.a.createElement("span",{style:{fontWeight:"normal"}},"|")))),r.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto"}},p.error&&r.a.createElement("p",{style:{color:"red"}},p.error),r.a.createElement(y.a,{onSubmit:function(a){a.preventDefault(),e.updateDisplayNameFromForm(p.displayName),N.a.auth().createUserWithEmailAndPassword(p.email,p.password).then((function(){console.log("Successfully created new user");var e=N.a.auth().currentUser;console.log(e),console.log(p),k(e,p)})).catch((function(e){b(Object(d.a)(Object(d.a)({},p),{},{error:e.message})),console.log("Error creating new user:",e)}))}},r.a.createElement(y.a.Group,{controlId:"userName"},r.a.createElement(y.a.Label,null,"Display name"),r.a.createElement(y.a.Control,{type:"name",placeholder:"Enter name",name:"displayName",value:p.displayName,onChange:v})),r.a.createElement(y.a.Group,{controlId:"userEmail"},r.a.createElement(y.a.Label,null,"Email address"),r.a.createElement(y.a.Control,{type:"email",placeholder:"Enter email",name:"userEmail",value:p.email,onChange:v})),r.a.createElement(y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(y.a.Label,null,"Password"),r.a.createElement(y.a.Control,{type:"password",placeholder:"Password",name:"userPassword",value:p.password,onChange:v})),r.a.createElement(g.a,{variant:"primary",type:"submit",block:!0},"Sign Up"),r.a.createElement("div",{style:{margin:"40px 0px"}},r.a.createElement("p",{className:"ride-line"},r.a.createElement("span",{className:"ride-line-span"},"or")),r.a.createElement(g.a,{onClick:I,variant:"outline-primary",block:!0},"Sign up with Google"))),r.a.createElement("p",{style:{paddingBottom:"100px"}},"Already have an account? Sign in ",r.a.createElement(u.b,{to:"/"},"here")))))},j=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(A.a,null,r.a.createElement("h1",null,"Main page"))))}}]),t}(n.Component),w=t(105),B=t(66),O=t(106),U=(t(94),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(A.a,{style:{backgroundColor:"white",marginBottom:"0px",textAlign:"center"}},r.a.createElement("h1",{className:"main-title permanent-marker pink animate__animated animate__bounceInDown"},"About!")),r.a.createElement(w.a,null,r.a.createElement(B.a,null,r.a.createElement("p",{className:"about-description montserrat"},"StudyParty helps students study together to achieve their learning goals. We are dedicated to the simple idea that learning should be social. When we learn together, we help each other stay on task, work through gaps in our comprehension, and have fun!"))),r.a.createElement("div",{className:"about-us"},r.a.createElement(w.a,null,r.a.createElement(B.a,null,r.a.createElement("h3",{className:"permanent-marker team-header"},"Our Team!"))),r.a.createElement(w.a,{style:{paddingBottom:"50px",marginBottom:"50px"}},r.a.createElement(B.a,{xs:6,md:4},r.a.createElement(O.a,{src:"https://media-exp1.licdn.com/dms/image/C4E03AQGKsgdfdQXnJw/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=ZJ3-LwvQrKUUhx8jbm-BXswrxepBGU53Qn-oae16MFA",className:"headshot",roundedCircle:!0}),r.a.createElement("h6",{className:"name montserrat"},"David Spector")),r.a.createElement(B.a,{xs:6,md:4},r.a.createElement(O.a,{src:"https://media-exp1.licdn.com/dms/image/C4E03AQHw0jvKd0WnFw/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=fNt6IWpTjRKRKlTL5obfhT5Z9P66MVFCbv6pyN9ig_Y",className:"headshot",roundedCircle:!0}),r.a.createElement("h6",{className:"name montserrat"},"Allen Cooper")),r.a.createElement(B.a,{xs:6,md:4},r.a.createElement(O.a,{src:"https://media-exp1.licdn.com/dms/image/C4D03AQE2ep-1HcU4Pg/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=eQoL80w2D5zd6G1KRCGJMkQ4Sad34veoB-naV4-H2gM",className:"headshot",roundedCircle:!0}),r.a.createElement("h6",{className:"name montserrat"},"Danny Grossman")),r.a.createElement(B.a,{xs:6,md:4},r.a.createElement(O.a,{src:"data:image/jpeg;base64,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",className:"headshot",roundedCircle:!0}),r.a.createElement("h6",{className:"name montserrat"},"Kyle Tomanelli"))))))}}]),t}(n.Component)),S=t(110),K=t(111),F=t(109),G=t(107),H=function(e){console.log(e);var a=Object(n.useState)({displayName:e.user.displayName,phoneNumber:e.user.phoneNumber,photoURL:e.user.photoURL,error:null}),t=Object(E.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(!1),s=Object(E.a)(c,2),m=s[0],i=s[1],u=function(){return i(!1)},p=function(e){var a=e.currentTarget,t=a.name,n=a.value;"userEmail"===t?o(Object(d.a)(Object(d.a)({},l),{},{email:n})):"phoneNumber"===t?o(Object(d.a)(Object(d.a)({},l),{},{phoneNumber:n})):"displayName"===t&&o(Object(d.a)(Object(d.a)({},l),{},{displayName:n}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a.Item,{onClick:function(){return i(!0)}},"Edit Profile"),r.a.createElement(G.a,{size:"lg",show:m,onHide:u},r.a.createElement(G.a.Header,{closeButton:!0},r.a.createElement(G.a.Title,null,"Edit Profile")),r.a.createElement(G.a.Body,null,r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Label,{column:!0,lg:2},"Display Name"),r.a.createElement(B.a,null,r.a.createElement(y.a.Control,{type:"text",name:"displayName",value:l.displayName,onChange:p}))),r.a.createElement("br",null),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Label,{column:!0,lg:2},"Phone Number"),r.a.createElement(B.a,null,r.a.createElement(y.a.Control,{type:"text",name:"phoneNumber",value:l.phoneNumber,onChange:p}))),r.a.createElement("br",null),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Label,{column:!0,lg:2},"Image URL"),r.a.createElement(B.a,null,r.a.createElement(y.a.Control,{type:"text",name:"photoURL",value:l.photoURL,onChange:p}))))),r.a.createElement(G.a.Footer,null,r.a.createElement(g.a,{variant:"secondary",onClick:u},"Close"),r.a.createElement(g.a,{variant:"primary",onClick:function(a){a.preventDefault();var t=N.a.auth().currentUser,n={uid:t.uid,email:t.email,displayName:l.displayName,phoneNumber:l.phoneNumber,photoURL:l.photoURL};console.log(n),k(t,n,e.updateUserInState),u()}},"Submit"))))};var P=function(e){return r.a.createElement(S.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(S.a.Brand,{href:"".concat("/StudyParty","/"),className:"permanent-marker"},"StudyParty!"),r.a.createElement(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(S.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(K.a,{className:"mr-auto"},r.a.createElement(K.a.Link,{as:u.b,to:"/about"},"About")),r.a.createElement(K.a,{style:{marginRight:"75px"}},e.user?r.a.createElement(F.a,{title:e.user.displayName,id:"collasible-nav-dropdown"},r.a.createElement(H,{user:e.user,updateUserInState:e.updateUserInState}),r.a.createElement(F.a.Item,{style:{marginRight:"20px"},onClick:function(){v.signOut()}},"Logout")):null)))},D=(t(96),t(97),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={user:null,displayNameFromForm:null},e.updateDisplayNameFromForm=function(a){console.log(a),e.setState({displayNameFromForm:a})},e.updateUserInState=function(a){console.log("UpdateUserInState run"),e.setState({user:a})},e.updateDisplayNameFromForm=function(a){console.log(a),e.setState({displayNameFromForm:a})},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.onAuthStateChanged((function(a){if(a){console.log(a.uid);var t=a.uid;f.ref("/users/"+t).once("value").then((function(a){var t=a.val()||{displayName:e.state.displayNameFromForm};console.log(t),e.setState({user:t})})).catch((function(e){console.log(e)}))}else e.setState({user:null})}))}},{key:"render",value:function(){var e=this;return console.log("/StudyParty"),r.a.createElement("div",{className:"Application"},r.a.createElement(u.a,{basename:"".concat("/StudyParty","/")},r.a.createElement(P,{user:this.state.user,updateUserInState:this.updateUserInState}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/"},this.state.user?r.a.createElement(p.a,{to:"/main"}):r.a.createElement(x,null)),r.a.createElement(p.b,{exact:!0,path:"/signUp",render:function(a){return e.state.user?r.a.createElement(p.a,{to:"/main"}):r.a.createElement(C,{updateDisplayNameFromForm:e.updateDisplayNameFromForm})}}),r.a.createElement(p.b,{exact:!0,path:"/main"},this.state.user?r.a.createElement(j,null):r.a.createElement(p.a,{to:"/"})),r.a.createElement(p.b,{exact:!0,path:"/about"},r.a.createElement(U,null)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.4fa1e7b7.chunk.js.map