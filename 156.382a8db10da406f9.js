"use strict";(self.webpackChunkfrizzar_lp_cliente=self.webpackChunkfrizzar_lp_cliente||[]).push([[156],{1156:(D,l,c)=>{c.r(l),c.d(l,{PackagesModule:()=>H});var g=c(6895),p=c(4859),_=c(3162),s=c(3848),r=c(9390),u=c(2385),d=c(2761),t=c(4650),O=c(9335),P=c(6985),M=c(529);let h=(()=>{class e{constructor(n){this.http=n,this.url=P.N.api+"/pack"}listarPorCarteira(n){return this.http.get(`${this.url}/listarporcarteira/`+n)}listarComprasPorCarteira(n){return this.http.get(`${this.url}/listarcompraporcarteira/`+n)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(M.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=c(8613);const m=function(e,o){return{"text-success":e,"text-primary":o}};function b(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td",11)(2,"h5"),t._uU(3),t.qZA()(),t.TgZ(4,"td",11)(5,"h5"),t._uU(6),t.qZA()(),t.TgZ(7,"td",11)(8,"h5"),t._uU(9),t.ALo(10,"date"),t.qZA()(),t._UZ(11,"td",11),t.TgZ(12,"td",11)(13,"div",12)(14,"span",13),t._uU(15),t.qZA(),t.TgZ(16,"h5"),t._uU(17,"Comprado"),t.qZA()()()()),2&e){const n=o.$implicit;t.xp6(3),t.Oqu(n.nome),t.xp6(3),t.Oqu(n.service),t.xp6(3),t.Oqu(t.xi3(10,5,n.dataCompra,"dd/MM/yyyy")),t.xp6(5),t.Q6J("ngClass",t.WLB(8,m,!n.used,!!n.used)),t.xp6(1),t.hij(" ",n.used?"arrow_downward":"arrow_upward"," ")}}function x(e,o){if(1&e&&(t.TgZ(0,"div",7)(1,"table",8)(2,"thead")(3,"tr")(4,"th",9),t._uU(5,"COMBO"),t.qZA(),t._UZ(6,"th",9),t.TgZ(7,"th",9),t._uU(8,"DATA"),t.qZA(),t._UZ(9,"th",9)(10,"th",9),t.qZA()(),t.TgZ(11,"tbody"),t.YNc(12,b,18,11,"tr",10),t.qZA()()()),2&e){const n=t.oxw();t.xp6(12),t.Q6J("ngForOf",n.history)}}function v(e,o){if(1&e&&(t.TgZ(0,"div",14)(1,"div",15)(2,"div",16)(3,"span",17),t._uU(4,"COMBO"),t.qZA(),t.TgZ(5,"h5"),t._uU(6),t.qZA()(),t.TgZ(7,"div",16),t._UZ(8,"span",17),t.TgZ(9,"h5"),t._uU(10),t.qZA()()(),t.TgZ(11,"div",15)(12,"div",16)(13,"span",17),t._uU(14,"DATA"),t.qZA(),t.TgZ(15,"h5"),t._uU(16),t.ALo(17,"date"),t.qZA()(),t.TgZ(18,"div",16),t._UZ(19,"span",17),t.TgZ(20,"div",18)(21,"span",13),t._uU(22),t.qZA(),t.TgZ(23,"h5"),t._uU(24,"Comprado"),t.qZA()()()()()),2&e){const n=o.$implicit;t.xp6(6),t.Oqu(n.nome),t.xp6(4),t.Oqu(n.service),t.xp6(6),t.Oqu(t.xi3(17,5,n.dataCompra,"dd/MM/yyyy")),t.xp6(5),t.Q6J("ngClass",t.WLB(8,m,!n.used,!!n.used)),t.xp6(1),t.hij(" ",n.used?"arrow_downward":"arrow_upward"," ")}}function Z(e,o){1&e&&t._UZ(0,"app-loading")}let k=(()=>{class e{constructor(){this.loading=!1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-use-history"]],inputs:{history:"history",loading:"loading"},decls:11,vars:3,consts:[[1,"use-history"],[1,"title","d-flex","align-items-center","gap-2"],[1,"material-symbols-rounded","text-primary","fs-3"],["class","table-container d-none d-lg-flex",4,"ngIf","ngIfElse"],[1,"items","d-flex","flex-column","gap-4","d-lg-none"],["class","item d-flex flex-column bg-white p-3 rounded gap-2",4,"ngFor","ngForOf"],["loadingtemplate",""],[1,"table-container","d-none","d-lg-flex"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"d-flex","gap-2","align-items-center"],[1,"material-symbols-rounded",3,"ngClass"],[1,"item","d-flex","flex-column","bg-white","p-3","rounded","gap-2"],[1,"d-flex","justify-content-between"],[1,"d-flex","flex-column","flex-fill"],[1,"title"],[1,"d-flex","gap-2"]],template:function(n,a){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3," schedule "),t.qZA(),t.TgZ(4,"strong"),t._uU(5,"Hist\xf3rico de compra"),t.qZA()(),t.YNc(6,x,13,1,"div",3),t.TgZ(7,"div",4),t.YNc(8,v,25,11,"div",5),t.qZA(),t.YNc(9,Z,1,0,"ng-template",null,6,t.W1O),t.qZA()),2&n){const i=t.MAs(10);t.xp6(6),t.Q6J("ngIf",!a.loading)("ngIfElse",i),t.xp6(2),t.Q6J("ngForOf",a.history)}},dependencies:[g.mk,g.sg,g.O5,r.N,g.uU],styles:["[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%]{margin-top:2rem;border-radius:6px;background-color:#fff;box-shadow:0 3px 24px #dee3e7;padding:28px 28px 14px}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{display:grid;border-collapse:collapse;min-width:100%;grid-template-columns:minmax(180px,2fr) minmax(150px,2fr) minmax(150px,1fr) minmax(150px,2fr) minmax(150px,max-content)}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], [_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], [_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:contents}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{vertical-align:middle}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:15px;color:#acb5bd;border:none;padding:18px 1.5rem}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{text-align:center}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#fff;margin-bottom:2rem;background-color:var(--grey-bg);vertical-align:middle}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:transparent;border:none!important;vertical-align:baseline;box-sizing:border-box;padding:18px 1.5rem}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:1rem;width:32px;height:32px}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:500;font-size:16px;line-height:20px;color:#151414;word-break:break-all;overflow:hidden;margin-bottom:0;text-overflow:ellipsis}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%] > .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:4px;height:30px;padding:0 1rem}@media (max-width: 991px){[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%]{background-color:transparent;padding:0;box-shadow:none}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{color:#acb5bd;font-weight:700;font-size:10px}[_nghost-%COMP%] > .use-history[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#151414;font-weight:400;font-size:14px}}"]}),e})();var y=c(8389);const T=function(){return{active:!0}},A=function(){return{active:!1}};function U(e,o){if(1&e&&(t.TgZ(0,"mat-tab-group",6)(1,"mat-tab",7),t.GkF(2,8),t.qZA(),t.TgZ(3,"mat-tab",7),t.GkF(4,8),t.qZA()()),2&e){const n=t.oxw(),a=t.MAs(9);t.Q6J("disableRipple",!0),t.xp6(1),t.MGl("label","ATIVOS (",null==n.actives?null:n.actives.length,")"),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(7,T)),t.xp6(1),t.MGl("label","UTILIZADOS  (",null==n.inactives?null:n.inactives.length,")"),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(8,A))}}function w(e,o){1&e&&t._UZ(0,"app-loading")}function q(e,o){if(1&e&&t._UZ(0,"mat-progress-bar",25),2&e){const n=t.oxw().$implicit,a=t.oxw(2);t.Q6J("value",a.calculateProgressBar(n.utilizado,n.quantidade))}}function L(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(3);return t.KtG(i.routeToRating("1"))}),t._uU(1," Agendar "),t.qZA()}}function I(e,o){1&e&&(t.TgZ(0,"button",27),t._uU(1,"Comprar mais"),t.qZA())}const C=function(e){return{" opacity-50":e}};function F(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td",17)(2,"h5"),t._uU(3),t.qZA()(),t.TgZ(4,"td",17)(5,"h5"),t._uU(6),t.qZA()(),t.TgZ(7,"td",18)(8,"div",19)(9,"h5",20),t._uU(10),t.qZA(),t.YNc(11,q,1,1,"mat-progress-bar",21),t.qZA()(),t.TgZ(12,"td",22),t.YNc(13,L,2,0,"button",23),t.YNc(14,I,2,0,"ng-template",null,24,t.W1O),t.qZA()()),2&e){const n=o.$implicit,a=t.MAs(15),i=t.oxw().active;t.xp6(3),t.Oqu(n.nome),t.xp6(3),t.Oqu(n.servico),t.xp6(3),t.Q6J("ngClass",t.VKq(8,C,!n.ativo)),t.xp6(1),t.AsE(" ",n.utilizado," / ",n.quantidade," "),t.xp6(1),t.Q6J("ngIf",i),t.xp6(2),t.Q6J("ngIf",i)("ngIfElse",a)}}function J(e,o){if(1&e&&t._UZ(0,"mat-progress-bar",25),2&e){const n=t.oxw().$implicit,a=t.oxw(2);t.Q6J("value",a.calculateProgressBar(n.utilizado,n.quantidade))}}function N(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(3);return t.KtG(i.routeToRating("1"))}),t._uU(1," Agendar "),t.qZA()}}function z(e,o){1&e&&(t.TgZ(0,"button",27),t._uU(1,"Comprar mais"),t.qZA())}function B(e,o){if(1&e&&(t.TgZ(0,"div",28)(1,"div",29)(2,"div",30)(3,"span",31),t._uU(4," COMBO "),t.qZA(),t.TgZ(5,"h4"),t._uU(6),t.qZA()(),t.TgZ(7,"div",30)(8,"span",31),t._uU(9," SERVI\xc7O "),t.qZA(),t.TgZ(10,"h4"),t._uU(11),t.qZA()()(),t.TgZ(12,"div",30)(13,"div",32)(14,"span",31),t._uU(15,"DISPONIBILIDADE"),t.qZA(),t.TgZ(16,"h4",33),t._uU(17),t.qZA()(),t.YNc(18,J,1,1,"mat-progress-bar",21),t.qZA(),t.YNc(19,N,2,0,"button",23),t.YNc(20,z,2,0,"ng-template",null,24,t.W1O),t.qZA()),2&e){const n=o.$implicit,a=t.MAs(21),i=t.oxw().active;t.xp6(6),t.Oqu(n.nome),t.xp6(5),t.Oqu(n.servico),t.xp6(5),t.Q6J("ngClass",t.VKq(8,C,!n.ativo)),t.xp6(1),t.AsE(" ",n.utilizado," / ",n.quantidade," "),t.xp6(1),t.Q6J("ngIf",i),t.xp6(1),t.Q6J("ngIf",i)("ngIfElse",a)}}function Q(e,o){if(1&e&&(t.TgZ(0,"div",9)(1,"table",10)(2,"thead")(3,"tr")(4,"th",11),t._uU(5,"COMBO"),t.qZA(),t.TgZ(6,"th",11),t._uU(7,"SERVI\xc7O"),t.qZA(),t.TgZ(8,"th",12),t._uU(9,"DISPONIBILIDADE"),t.qZA(),t._UZ(10,"th",13),t.qZA()(),t.TgZ(11,"tbody"),t.YNc(12,F,16,10,"tr",14),t.qZA()()(),t.TgZ(13,"div",15),t.YNc(14,B,22,10,"div",16),t.qZA()),2&e){const n=o.active,a=t.oxw();t.xp6(12),t.Q6J("ngForOf",n?a.actives:a.inactives),t.xp6(2),t.Q6J("ngForOf",n?a.actives:a.inactives)}}let Y=(()=>{class e extends y.H{constructor(){super(...arguments),this.packages=[],this.loading=!1}get actives(){return this.packages?.filter(n=>!!n.ativo)}get inactives(){return this.packages?.filter(n=>!n.ativo)}calculateProgressBar(n,a){return 100*n/a}}return e.\u0275fac=function(){let o;return function(a){return(o||(o=t.n5z(e)))(a||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["app-packages-list"]],inputs:{packages:"packages",loading:"loading"},features:[t.qOj],decls:10,vars:2,consts:[[1,"package"],[1,"title","d-flex","align-items-center","gap-2","mb-4"],[1,"bi","bi-shop","text-primary","fs-3"],["mat-stretch-tabs","false","mat-align-tabs","start",3,"disableRipple",4,"ngIf","ngIfElse"],["loadingtemplate",""],["table",""],["mat-stretch-tabs","false","mat-align-tabs","start",3,"disableRipple"],[3,"label"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"table-container","d-none","d-lg-flex"],[1,"table"],["scope","col","colspan","3"],["scope","col","colspan","2"],["scope","col"],[4,"ngFor","ngForOf"],[1,"d-flex","d-lg-none","flex-column","packages-mobile"],["class","item d-flex flex-column",4,"ngFor","ngForOf"],["scope","row","colspan","3"],["scope","row","colspan","2"],[1,"d-flex","align-items-center"],[1,"d-flex","w-100",3,"ngClass"],["class","w-100","mode","determinate",3,"value",4,"ngIf"],["scope","row"],["mat-flat-button","","color","primary",3,"click",4,"ngIf","ngIfElse"],["buyMore",""],["mode","determinate",1,"w-100",3,"value"],["mat-flat-button","","color","primary",3,"click"],["mat-flat-button","","color","primary"],[1,"item","d-flex","flex-column"],[1,"d-flex","justify-content-between"],[1,"d-flex","flex-column"],[1,"label"],[1,"d-flex","gap-2","mt-4"],[1,"d-flex","w-100","fw-bold",3,"ngClass"]],template:function(n,a){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"i",2),t.TgZ(3,"strong"),t._uU(4,"Pacotes "),t.qZA()(),t.YNc(5,U,5,9,"mat-tab-group",3),t.qZA(),t.YNc(6,w,1,0,"ng-template",null,4,t.W1O),t.YNc(8,Q,15,2,"ng-template",null,5,t.W1O)),2&n){const i=t.MAs(7);t.xp6(5),t.Q6J("ngIf",!a.loading)("ngIfElse",i)}},dependencies:[g.mk,g.sg,g.O5,g.tP,s.uX,s.SP,_.pW,p.lW,r.N],styles:["[_nghost-%COMP%] > .package[_ngcontent-%COMP%]{border-radius:6px;background-color:#fff;box-shadow:0 3px 24px #dee3e7;padding:28px 28px 14px}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]     mat-tab-group mat-tab-header .mdc-tab{height:36px}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{display:grid;border-collapse:collapse;min-width:100%;grid-template-columns:minmax(180px,1.5fr) minmax(150px,2fr) minmax(150px,1fr) minmax(150px,max-content)}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], [_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], [_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:contents}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{vertical-align:middle}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:15px;color:#acb5bd;border:none;padding:18px 1.5rem}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7){text-align:start}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#fff;margin-bottom:2rem;background-color:var(--grey-bg);vertical-align:middle}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:transparent;border:none!important;vertical-align:baseline;box-sizing:border-box;padding:18px 1.5rem}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:1rem;width:32px;height:32px}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:500;font-size:16px;line-height:20px;color:#151414;word-break:break-all;overflow:hidden;margin-bottom:0;text-overflow:ellipsis}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:4px;height:30px;padding:0 1rem}@media (max-width: 991px){[_nghost-%COMP%] > .package[_ngcontent-%COMP%]{background-color:transparent;padding:0;box-shadow:none}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .packages-mobile[_ngcontent-%COMP%]{gap:2rem;margin-top:2rem}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .packages-mobile[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{background-color:#fff;padding:10px}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .packages-mobile[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;color:#acb5bd;margin-bottom:.5rem}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .packages-mobile[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:#151414}[_nghost-%COMP%] > .package[_ngcontent-%COMP%]   .packages-mobile[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:1rem}}"]}),e})();const S=[{path:"",component:(()=>{class e{constructor(n,a){this.carteiraService=n,this.pacoteService=a,this.packagesLoading=!1,this.packagesBuysLoading=!1}ngOnInit(){this.wallet$=this.carteiraService.buscarCarteiraRefresh(),this.packagesLoading=!0,this.packagesBuysLoading=!0,this.pacoteService.listarPorCarteira(this.wallet$.codigo).subscribe({next:n=>{this.packages=n,this.packagesLoading=!1},error:n=>{console.log(n),this.packagesLoading=!1}}),this.pacoteService.listarComprasPorCarteira(this.wallet$.codigo).subscribe({next:n=>{this.historyUse=n,this.packagesBuysLoading=!1},error:n=>{console.log(n),this.packagesBuysLoading=!1}})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(O.W),t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-packages"]],decls:4,vars:4,consts:[[1,"container"],[3,"packages","loading"],[3,"history","loading"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-packages-list",1)(2,"app-use-history",2),t.qZA(),t._UZ(3,"app-footer")),2&n&&(t.xp6(1),t.Q6J("packages",a.packages)("loading",a.packagesLoading),t.xp6(1),t.Q6J("history",a.historyUse)("loading",a.packagesBuysLoading))},dependencies:[f.c,k,Y]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(S),d.Bz]}),e})(),H=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,E,s.Nh,_.Cv,p.ot,u._,r.N]}),e})()}}]);