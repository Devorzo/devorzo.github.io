(this.webpackJsonpmajor_project_ui=this.webpackJsonpmajor_project_ui||[]).push([[8],{185:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),l=a.n(n);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createElement("path",{fill:"currentColor",d:"M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z",className:""}),s=function(e){var t=e.svgRef,a=e.title,n=c(e,["svgRef","title"]);return l.a.createElement("svg",r({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"angle-down",role:"img",viewBox:"0 0 320 512",ref:t},n),a?l.a.createElement("title",null,a):null,o)},i=l.a.forwardRef((function(e,t){return l.a.createElement(s,r({svgRef:t},e))}));a.p},231:function(e,t,a){"use strict";a.r(t),a.d(t,"ProfileSettings",(function(){return w}));var n=a(6),l=a(0),r=a.n(l),c=a(95),o=(a(208),a(209)),s=a.n(o),i=a(179),m=a(185),u=a(21),d=a(44),p=a(210),h=a(232),g=a(29),E=a.n(g),f=a(30),b=a(214),v=a(24),N=a(57);var w=function(e){var t=Object(l.useContext)(v.a),a=(t.user_id,t.user_dp),c=t.user_fullname,o=t.user_username,d=t.user_bio,p=t.user_gender,h=t.auth_token,g=t.setAuth,b=Object(l.useState)({aspect:1,width:1024}),w=Object(n.a)(b,2),y=w[0],j=w[1],O=Object(l.useState)(!1),S=Object(n.a)(O,2),x=S[0],C=S[1],k=Object(l.useState)(null),_=Object(n.a)(k,2),I=_[0],L=_[1],F=Object(l.useState)(null),P=Object(n.a)(F,2),T=(P[0],P[1]),A=Object(l.useState)(null),R=Object(n.a)(A,2),U=R[0],B=R[1],z=Object(l.useState)(a),H=Object(n.a)(z,2),W=H[0],D=H[1],J=Object(l.useState)(c),K=Object(n.a)(J,2),M=K[0],Y=K[1],q=Object(l.useState)(d),G=Object(n.a)(q,2),X=G[0],Q=G[1],V=Object(l.useState)(p),Z=Object(n.a)(V,2),$=Z[0],ee=Z[1],te=Object(l.useCallback)((function(e){B(e);var t=e.width/1<1*e.height?100:1*e.height/e.width*100,a=e.width/1>1*e.height?100:e.width/1/e.height*100;return j({unit:"%",width:t,height:a,x:(100-t)/2,y:(100-a)/2,aspect:1}),!0}),[]);function ae(e){"name"===e.target.name&&Y(e.target.value),"bio"===e.target.name&&Q(e.target.value),"gender"===e.target.name&&ee(e.target.value)}function ne(e){var t=new FormData;return t.append("file",e),E.a.post("".concat(Object(f.a)(),"/api/v1/upload"),t,{}).then((function(e){var t;console.log(e),e.data.success?(t="".concat(Object(f.a)(),"/file/").concat(e.data.file_name),E.a.post("".concat(Object(f.a)(),"/api/v1/updateUserSettings"),{xAuthToken:h,profile_image_link:t}).then((function(e){console.log(e),e.data.success?(D(t),e.data.message.token=h,console.log({doc:e}),g(e.data),N.a.success("Successfully updated image")):N.a.error("Error occured while updating image")})).catch((function(e){console.log(e),console.log("Error while uploading image"),N.a.error("Error occured while updating image")}))):N.a.error("Error occured while updating image")})).catch((function(e){return console.log(e),console.log("Error while uploading image"),{success:0}}))}function le(){var e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.addEventListener("change",(function(){e.files[0]?(T(e.files[0]),L(window.URL.createObjectURL(e.files[0])),C(!0)):N.a.error("Invalid file"),e.removeEventListener("change",(function(){}))}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.className},r.a.createElement("h3",null,"Public Profile"),r.a.createElement("hr",{className:"light"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 text-center show-xs hide-md"},r.a.createElement("div",{className:"position-relative text-center"},r.a.createElement("img",{className:"avatar_image",alt:"img",name:"dp",src:W}),r.a.createElement(u.b,{title:r.a.createElement(m.a,{className:"text"}),autoClose:!0,autoCloseTouch:!0,containerClassName:"drop-btnx position-absolute px-2 py-1 right-50 bottom-0 ml-2 mb-2",className:"profile-edit-btn btn-sm btn-info",containerStyle:{},menuStyle:{}},r.a.createElement(u.a,{onClick:le},"Upload Image")))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h6",null,"Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",placeholder:"Full Name",value:M,onChange:ae}),r.a.createElement("p",{className:"text-muted"},"Your name may appear around Lattice where you contribute or are mentioned."),r.a.createElement("br",null),r.a.createElement("h6",null,"Username"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"@username",value:o,disabled:!0}),r.a.createElement("p",{className:"text-muted"},"Your username may appear around Lattice where you contribute or are mentioned."),r.a.createElement("h6",null,"Bio"),r.a.createElement("textarea",{id:"",cols:"30",rows:"3",className:"form-control",name:"bio",placeholder:"Enter you Profile Bio",value:X,onChange:ae}),r.a.createElement("hr",{className:"darker"}),r.a.createElement("h6",null,"Gender"),r.a.createElement("select",{className:"custom-select form-control",id:"ig-gender",name:"gender",onChange:ae,value:$},r.a.createElement("option",{defaultChecked:!0},"Choose..."),r.a.createElement("option",{value:"0"},"Male"),r.a.createElement("option",{value:"1"},"Female"),r.a.createElement("option",{value:"2"},"Others"),r.a.createElement("option",{value:"-1"},"Choose not to specify.")),r.a.createElement("button",{className:"btn btn-primary mt-2",onClick:function(){null===M||""===M||M.length>60?N.a.error("Invalid name"):null===$||"Choose..."===$?N.a.error("Invalid gender"):null===X||""===X||X.length>160?N.a.error("Invalid bio"):E.a.post("".concat(Object(f.a)(),"/api/v1/updateUserSettings"),{xAuthToken:h,fullname:M,user_bio:X,gender:$}).then((function(e){console.log(e),e.data.success?(e.data.message.token=h,console.log({doc:e}),g(e.data),N.a.success("Successfully updated profile")):N.a.error("Error occured while updating profile information")})).catch((function(e){console.log(e),console.log("Error while updating information"),N.a.error("Error occured while updating profile information")}))}},"Save")),r.a.createElement("div",{className:"col-md-4 text-left pl-2 hide-xs show-md"},r.a.createElement("div",{className:"position-relative"},r.a.createElement("img",{className:"avatar_image",alt:"img",src:W}),r.a.createElement(u.b,{title:r.a.createElement(m.a,{className:"text"}),autoClose:!0,autoCloseTouch:!0,containerClassName:"drop-btnx position-absolute px-2 py-1 left-0 bottom-0 ml-2 mb-2",className:"profile-edit-btn btn-sm btn-info",containerStyle:{},menuStyle:{transform:window.innerWidth<=576?"translateX(-80%)":null}},r.a.createElement(u.a,{onClick:le},"Upload Image")))))),r.a.createElement(i.a,{show:x,onHide:function(){C(!1)}},r.a.createElement(i.a.Header,{closeButton:!0},r.a.createElement(i.a.Title,null,"Select Image")),r.a.createElement(i.a.Body,null,r.a.createElement(s.a,{circularCrop:!0,keepSelection:!0,onComplete:function(e,t){console.log(e,t)},src:I,crop:y,onChange:function(e){return j(e)},onImageLoaded:te}),r.a.createElement("br",null)),r.a.createElement(i.a.Footer,null,r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){C(!1)}},"Close"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){(function(e,t,a){var n=document.createElement("canvas"),l=e.naturalWidth/e.width,r=e.naturalHeight/e.height;return n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(e,t.x*l,t.y*r,t.width*l,t.height*r,0,0,t.width,t.height),new Promise((function(e,t){n.toBlob((function(t){t.name=a,e(t)}),"image/jpeg",1)}))})(U,y,"file-upload.jpeg").then((function(e){T(e),C(!1),ne(new File([e],"file-upload.jpeg"))}))}},"Select"))))},y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.className},r.a.createElement("h3",null,"Account Settings"),r.a.createElement("hr",{className:"light"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},"This is something"))))},j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.className},r.a.createElement("h3",null,"Security Settings"),r.a.createElement("hr",{className:"light"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("br",null),r.a.createElement("h5",null,"Change password"),r.a.createElement("hr",{className:"light"}),r.a.createElement("h6",null,"Old passworrd"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter you current password"}),r.a.createElement("h6",{className:"mt-3"},"New password"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mb-2"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter new password"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repeat new password"}))),r.a.createElement("button",{className:"btn btn-primary mt-3",onClick:function(){console.log("saving new password")}},"Change password"),r.a.createElement("h5",{className:"mt-4 pt-3"},"Two-factor authentication"),r.a.createElement("hr",{className:"light"}),r.a.createElement("div",{className:"text-center"},r.a.createElement("span",{className:"mt-4 mb-2 pt-4 pb-2"},r.a.createElement(h.a,{className:"text-muted",style:{fontSize:"48px"}})),r.a.createElement("h5",null,"Two factor authentication is not enabled yet."),r.a.createElement("p",{className:"text-muted",style:{fontSize:"14px"}},"Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in."),r.a.createElement("button",{className:"btn btn-success mt-4"},"Enable two-factor authentication"))))))};t.default=function(){var e=Object(l.useState)(1),t=Object(n.a)(e,2),a=t[0],o=t[1],s=Object(l.useState)(1),i=Object(n.a)(s,2),m=i[0],u=i[1],h=Object(l.useState)(0),g=Object(n.a)(h,2),E=g[0],f=g[1],v=screen.availWidth;return Object(l.useEffect)((function(){v<=767&&(f(1),u(0))}),[v]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Settings - Devorzo"),r.a.createElement("link",{rel:"canonical",href:"https://devorzo.github.io/settings"})),r.a.createElement("div",{className:"settings-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3 mb-0 mt-3"},r.a.createElement("h2",{className:"noselect cursor-pointer",onClick:function(){v<=767&&u((m+1)%2)}},"Settings\xa0",function(e,t){return e?r.a.createElement("span",null,1===t?r.a.createElement(p.a,{icon:b.a,className:"toggle-icon"}):r.a.createElement(p.a,{icon:b.b,className:"toggle-icon"})):""}(E,m)),r.a.createElement("div",{className:0===m?"hide-sm hide-xs":""},r.a.createElement(c.a,{variant:"pills",defaultActiveKey:"link-1",className:"flex-column settings-nav"},r.a.createElement(c.a.Item,null,r.a.createElement(c.a.Link,{i:1,className:"nav-btn",onClick:function(e){o(1)},eventKey:"link-1"},"Profile Settings"))))),r.a.createElement("div",{className:"col-lg-9"},function(e){return 1===e?r.a.createElement(w,{className:"mt-4 pb-4"}):2===e?r.a.createElement(y,{className:"mt-4 pb-4"}):r.a.createElement(j,{className:"mt-4 pb-4"})}(a),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))))}}}]);
//# sourceMappingURL=8.20898771.chunk.js.map