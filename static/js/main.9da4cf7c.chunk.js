(this["webpackJsonpburger-builder-starting-setup"]=this["webpackJsonpburger-builder-starting-setup"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__3KYc7",BreadTop:"BurgerIngredients_BreadTop__oSAzt",Seeds1:"BurgerIngredients_Seeds1__1oS00",Seeds2:"BurgerIngredients_Seeds2__3TkAW",Meat:"BurgerIngredients_Meat__9tgBG",Cheese:"BurgerIngredients_Cheese__2ew82",Salad:"BurgerIngredients_Salad__3-pli",Bacon:"BurgerIngredients_Bacon__1EkkM"}},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1Z8Z5",Open:"SideDrawer_Open__2htaN",Close:"SideDrawer_Close__1haRc",Logo:"SideDrawer_Logo__26M8X"}},function(e,t,n){e.exports={Input:"Input_Input__3Az1C",Label:"Input_Label__2DT5V",InputElement:"Input_InputElement__2IJum",Invalid:"Input_Invalid__bSz04",ValidationError:"Input_ValidationError__2Umkx"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__zCfne",Label:"BuildControl_Label__5iCjz",Less:"BuildControl_Less__3A6S7",More:"BuildControl_More__2WAeJ"}},,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__oTouO",Logo:"Toolbar_Logo__1p4Iw",DesktopOnly:"Toolbar_DesktopOnly__Y59Lq"}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__3-7Hs",active:"NavigationItem_active__1_XJm"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__jcWfa",OrderButton:"BuildControls_OrderButton__9rUuW",enable:"BuildControls_enable__2FwhR"}},function(e,t,n){e.exports={Button:"Button_Button__3FRHC",Success:"Button_Success__35POG",Danger:"Button_Danger__3-63m"}},,,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__3KdDa"}},function(e,t,n){e.exports=n.p+"static/media/burger.804fa877.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__2_jtH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__2X_dE"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__4VB1-"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2W1zk"}},function(e,t,n){e.exports={Burger:"Burger_Burger__2m4_R"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1_Knl"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__21eaQ",load6:"Spinner_load6__cqOL4",round:"Spinner_round__3rSSL"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3RJf0"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1vxDc"}},function(e,t,n){e.exports={Order:"Order_Order__1Lvee"}},,function(e,t,n){e.exports=n(87)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(23),i=n.n(o),c=n(17),l=n(13),s=n(15),u=n(45),d=(n(68),n(3)),p=n(4),m=n(6),h=n(5),g=n(2),f=function(e){return e.children},v=n(46),E=n.n(v),_=n(25),b=n.n(_),C=n(47),y=n.n(C),O=n(48),k=n.n(O),S=function(e){return a.a.createElement("div",{className:k.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:y.a,alt:"MyBurger"}))},I=n(49),N=n.n(I),w=n(29),j=n.n(w),B=function(e){return a.a.createElement("li",{className:j.a.NavigationItem},a.a.createElement(c.b,{exact:e.exact,to:e.link,activeClassName:j.a.active},e.children))},T=function(){return a.a.createElement("ul",{className:N.a.NavigationItems},a.a.createElement(B,{link:"/",exact:!0},"Burger Builder"),a.a.createElement(B,{link:"/orders"},"Orders"))},D=n(50),R=n.n(D),x=function(e){return a.a.createElement("div",{className:R.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},L=function(e){return a.a.createElement("header",{className:b.a.Toolbar},a.a.createElement(x,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:b.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",{className:b.a.DesktopOnly},a.a.createElement(T,null)))},H=n(18),A=n.n(H),F=n(51),U=n.n(F),P=function(e){return e.show?a.a.createElement("div",{className:U.a.Backdrop,onClick:e.clicked}):null},M=function(e){var t;return t=e.show?[A.a.SideDrawer,A.a.Open]:[A.a.SideDrawer,A.a.Close],a.a.createElement(f,null,a.a.createElement(P,{show:e.show,clicked:e.closed}),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{className:A.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",null,a.a.createElement(T,null))))},V=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e.sideDrawerCloseHandler=function(){e.setState({showSideDrawer:!1})},e}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(f,null,a.a.createElement(L,{drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(M,{show:this.state.showSideDrawer,closed:this.sideDrawerCloseHandler}),a.a.createElement("main",{className:E.a.Content},this.props.children))}}]),n}(r.Component),G=n(12),W=n(58),q=n(52),z=n.n(q),J=n(14),Y=n.n(J),X=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=a.a.createElement("div",{className:Y.a.BreadBottom});break;case"bread-top":e=a.a.createElement("div",{className:Y.a.BreadTop},a.a.createElement("div",{className:Y.a.Seeds1}),a.a.createElement("div",{className:Y.a.Seeds2}));break;case"meat":e=a.a.createElement("div",{className:Y.a.Meat});break;case"cheese":e=a.a.createElement("div",{className:Y.a.Cheese});break;case"bacon":e=a.a.createElement("div",{className:Y.a.Bacon});break;case"salad":e=a.a.createElement("div",{className:Y.a.Salad});break;default:e=null}return e}}]),n}(r.Component),K=function(e){console.log(e);var t=Object.keys(e.ingredients).map((function(t){return Object(W.a)(new Array(e.ingredients[t])).map((function(e,n){return a.a.createElement(X,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=a.a.createElement("p",null,"Please start adding ingredients!")),a.a.createElement("div",{className:z.a.Burger},a.a.createElement(X,{type:"bread-top"}),t,a.a.createElement(X,{type:"bread-bottom"}))},Z=n(32),Q=n.n(Z),$=n(22),ee=n.n($),te=function(e){return a.a.createElement("div",{className:ee.a.BuildControl},a.a.createElement("div",{className:ee.a.Label},e.label),a.a.createElement("button",{className:ee.a.Less,onClick:e.removed,disabled:e.disabled},"-"),a.a.createElement("button",{className:ee.a.More,onClick:e.added},"+"))},ne=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],re=function(e){return a.a.createElement("div",{className:Q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),ne.map((function(t){return a.a.createElement(te,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:Q.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER"))},ae=n(53),oe=n.n(ae),ie=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return a.a.createElement(f,null,a.a.createElement(P,{show:this.props.show,clicked:this.props.modalClosed}),a.a.createElement("div",{className:oe.a.Modal,style:{display:this.props.show?"block":"none",transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(r.Component),ce=n(33),le=n.n(ce),se=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[le.a.Button,le.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ue=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidUpdate",value:function(){console.log("[OrderSummary] WillUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return a.a.createElement(f,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(se,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(se,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),n}(r.Component),de=n(54),pe=n.n(de),me=function(){return a.a.createElement("div",{className:pe.a.Loader},"Loading...")},he=n(27),ge=function(e,t){return function(n){Object(m.a)(o,n);var r=Object(h.a)(o);function o(){var e;return Object(d.a)(this,o),(e=r.call(this)).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),e.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})})),e}return Object(p.a)(o,[{key:"componentWillUnmount",value:function(){console.log("Will Unmount!",this.reqInterceptor,this.resInterceptor),t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(f,null,a.a.createElement(ie,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),a.a.createElement(e,this.props))}}]),o}(r.Component)},fe=n.n(he).a.create({baseURL:"https://react-app-cd7b3.firebaseio.com/"}),ve=function(e){return function(t){t({type:"PURCHASE_BURGER_START"}),fe.post("/orders.json",e).then((function(n){console.log("Success"),t(function(e,t){return console.log("purchaseBurgerSuccess"),{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(n.data.name,e))})).catch((function(e){console.log("Error: "+e),t(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))}))}},Ee=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(G.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(me,null);return this.props.ings&&(r=a.a.createElement(f,null,a.a.createElement(K,{ingredients:this.props.ings}),a.a.createElement(re,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,price:this.props.price})),n=a.a.createElement(ue,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(f,null,a.a.createElement(ie,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),n}(r.Component),_e=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){fe.get("https://react-app-cd7b3.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},onInitPurchase:function(){return e((console.log("INitPurchase!!"),{type:"PURCHASE_INIT"}))}}}))(ge(Ee,fe)),be=n(55),Ce=n.n(be),ye=function(e){return a.a.createElement("div",{className:Ce.a.CheckoutSummary},a.a.createElement("h1",null,"We hope it tastes well!"),a.a.createElement("div",{style:{width:"300px",margin:"auto"}},a.a.createElement(K,{ingredients:e.ingredients})),a.a.createElement(se,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),a.a.createElement(se,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},Oe=n(56),ke=n.n(Oe),Se=n(19),Ie=n.n(Se),Ne=function(e){var t=null,n=[Ie.a.InputElement];e.invalid&&e.shouldValidate&&e.touched&&n.push(Ie.a.Invalid);var r=null;switch(e.invalid&&e.touched&&(r=a.a.createElement("p",{className:Ie.a.ValidationError},"Please enter a valid ",e.valueType,"!")),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value}))}return a.a.createElement("div",{className:Ie.a.Input},a.a.createElement("label",{className:Ie.a.Label},e.label),t,r)},we=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"text",placeholder:"Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}],placeholder:"Delivery Method"},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var r in e.state.orderForm)console.log("formdata:"+e.state.orderForm[r].value),n[r]=e.state.orderForm[r].value;var a={ingredients:e.props.ings,price:e.props.price,orderData:n};e.props.onOrderBurger(a)},e.inputChangedHandler=function(t,n){var r=Object(G.a)({},e.state.orderForm),a=Object(G.a)({},r[n]);a.value=t.target.value,a.valid=e.checkValidity(a.value,a.validation),a.touched=!0,r[n]=a;var o=!0;for(var i in r)o=r[i].valid&&o;e.setState({orderForm:r,formIsValid:o})},e}return Object(p.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=a.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return a.a.createElement(Ne,{valueType:t.id,key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),a.a.createElement(se,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(r=a.a.createElement(me,null)),a.a.createElement("div",{className:ke.a.ContactData},a.a.createElement("h4",null,"Enter your Contact Data"),r)}}]),n}(r.Component),je=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading}}),(function(e){return{onOrderBurger:function(t){return e(ve(t))}}}))(ge(we,fe)),Be=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(p.a)(n,[{key:"render",value:function(){var e=a.a.createElement(g.a,{to:"/"});if(console.log("HIIHIHIH"),console.log(this.props.purchased),this.props.ings){var t=this.props.purchased?a.a.createElement(g.a,{to:"/"}):null;e=a.a.createElement("div",null,t,a.a.createElement(ye,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),a.a.createElement(g.b,{path:this.props.match.path+"/contact-data",component:je}))}return e}}]),n}(r.Component),Te=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(Be),De=n(57),Re=n.n(De),xe=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map((function(e){return a.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return a.a.createElement("div",{className:Re.a.Order},a.a.createElement("p",null,"Ingredients: ",r),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},Le=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders()}},{key:"render",value:function(){var e=a.a.createElement(me,null);return this.props.loading||(e=this.props.orders.map((function(e){return a.a.createElement(xe,{ingredients:e.ingredients,price:e.price,key:e.id})}))),a.a.createElement("div",null,e)}}]),n}(r.Component),He=Object(l.b)((function(e){return{orders:e.order.orders,loading:e.order.loading}}),(function(e){return{onFetchOrders:function(){return e((function(e){e({type:"FETCH_ORDERS_START"}),fe.get("/orders.json").then((function(t){var n=[];for(var r in t.data)n.push(Object(G.a)(Object(G.a)({},t.data[r]),{},{id:r}));e({type:"FETCH_ORDERS_SUCCESS",orders:n})})).catch((function(t){e({type:"FETCH_ORDERS_FAIL",error:t})}))}))}}}))(ge(Le,fe)),Ae=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(V,null,a.a.createElement(g.d,null,a.a.createElement(g.b,{path:"/",exact:!0,component:_e}),a.a.createElement(g.b,{path:"/orders",component:He}),a.a.createElement(g.b,{path:"/checkout",component:Te}))))}}]),n}(r.Component),Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ue(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Pe=n(21),Me=function(e,t){return Object(G.a)(Object(G.a)({},e),t)},Ve={ingredients:null,totalPrice:4,error:!1},Ge={salad:.5,cheese:.4,meat:1.3,bacon:.7},We=function(e,t){var n=Object(Pe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Me(e.ingredients,n),totalPrice:e.totalPrice+Ge[t.ingredientName]};return Me(e,r)},qe=function(e,t){var n=Object(Pe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Me(e.ingredients,n),totalPrice:e.totalPrice+Ge[t.ingredientName]};return Me(e,r)},ze=function(e,t){return Me(e,{error:!0})},Je=function(e,t){return Me(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!0})},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return We(e,t);case"REMOVE_INGREDIENT":return qe(e,t);case"SET_INGREDIENTS":return Je(e,t);case"FETCH_INGREDIENTS_FAILED":return ze(e);default:return e}},Xe={orders:[],loading:!1,purchased:!1},Ke=function(e,t){return Me(e,{purchased:!1})},Ze=function(e,t){return Me(e,{loading:!0})},Qe=function(e,t){var n=Me(t.orderData,{id:t.orderId});return Me(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},$e=function(e,t){return Me(e,{loading:!1})},et=function(e,t){return Me(e,{loading:!0})},tt=function(e,t){return Me(e,{orders:t.orders,loading:!1})},nt=function(e,t){return Me(e,{loading:!1})},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return Ke(e);case"PURCHASE_BURGER_START":return Ze(e);case"PURCHASE_BURGER_SUCCESS":return Qe(e,t);case"PURCHASE_BURGER_FAIL":return $e(e);case"FETCH_ORDERS_START":return et(e);case"FETCH_ORDERS_SUCCESS":return tt(e,t);case"FETCH_ORDERS_FAIL":return nt(e);default:return e}},at=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,ot=Object(s.c)({burgerBuilder:Ye,order:rt}),it=Object(s.e)(ot,at(Object(s.a)(u.a))),ct=a.a.createElement(l.a,{store:it},a.a.createElement(c.a,null,a.a.createElement(Ae,null)));i.a.render(ct,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Burger",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Burger","/service-worker.js");Fe?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ue(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Ue(e)}))}}()}],[[59,1,2]]]);
//# sourceMappingURL=main.9da4cf7c.chunk.js.map