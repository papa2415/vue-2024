import{r as l,o as n,c as i,a as s,w as r,v as m,b as u}from"./index-JWKlCTuy.js";import{a as c}from"./axios-BimPEqV4.js";const g={id:"loginPage",class:"bg-yellow"},w={class:"conatiner loginPage vhContainer"},f={class:"formControls",action:"index.html"},v={key:0},b="https://todolist-api.hexschool.io",k={__name:"TodoLogIn",setup(h){const t=l({email:"",password:""}),d=l(""),p=async()=>{try{const e=await c.post(`${b}/users/sign_in`,t.value);d.value=e.data.token,document.cookie=`customTodoToken=${e.data.token}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`,window.location.assign("/#/todoListPage")}catch(e){window.alert(e.response.data.message)}};return(e,o)=>(n(),i("div",g,[s("div",w,[o[6]||(o[6]=s("div",{class:"side"},[s("a",{href:"/#/"},[s("img",{class:"logoImg",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png",alt:""})]),s("img",{class:"d-m-n",src:"https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png",alt:"workImg"})],-1)),s("div",null,[s("form",f,[o[2]||(o[2]=s("h2",{class:"formControls_txt"},"最實用的線上代辦事項服務",-1)),o[3]||(o[3]=s("label",{class:"formControls_label",for:"email"},"Email",-1)),r(s("input",{class:"formControls_input",type:"text",id:"email",name:"email",placeholder:"請輸入 email",required:"","onUpdate:modelValue":o[0]||(o[0]=a=>t.value.email=a)},null,512),[[m,t.value.email]]),t.value.email==""?(n(),i("span",v,"此欄位不可留空")):u("",!0),o[4]||(o[4]=s("label",{class:"formControls_label",for:"pwd"},"密碼",-1)),r(s("input",{class:"formControls_input",type:"password",name:"pwd",id:"pwd",placeholder:"請輸入密碼",required:"","onUpdate:modelValue":o[1]||(o[1]=a=>t.value.password=a)},null,512),[[m,t.value.password]]),s("input",{class:"formControls_btnSubmit",type:"button",value:"登入",onClick:p}),o[5]||(o[5]=s("a",{class:"formControls_btnLink",href:"#/signUpPage"},"註冊帳號",-1))])])])]))}};export{k as default};
