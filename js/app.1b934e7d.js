(function(e){function t(t){for(var a,l,i=t[0],o=t[1],u=t[2],m=0,d=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var o=s[i];0!==n[o]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=s[0]))}return e}var a={},n={app:0},r=[];function l(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=a,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(s,a,function(t){return e[t]}.bind(null,a));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/amobe-webapp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0845":function(e){e.exports=JSON.parse('{"PlayerName":"Játékos neve","PlayerMarkColor":"Játékos jelének a színe","SelectMark":"-- Válasszon amőba jelet --"}')},2284:function(e){e.exports=JSON.parse('{"Username":"Felhasználónév","Password":"Jelszó","TokenValidTo":"Token érvényessége","Login":"Bejelentkezés","LoginErrorTitle":"Sikertelen bejelentkezés","LoginErrorMsg":"Rossz felhasználónév/jelszó lett megadva"}')},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"468d":function(e){e.exports=JSON.parse('{"TableSettings":"Pálya beállításai","TableWidth":"Pálya szélessége","TableHeight":"Pálya magassága","TableSizeError":"A pálya túl kicsi ahhoz, hogy a nyertes darabszámú jel elférjen. Adjon meg nagyobb tábla méretet vagy állítson kisebb nyertes darabszámot.","TableSizeDescription":"A mező minimum 5, maximum 100 értéket vehet fel","WinnerMarkCount":"Nyertes darabszám","WinnerMarkCountError":"A nyertes darabszám túl sok, ahhoz hogy a pályán elférjen! Adjon meg kisebb nyertes darabszámot vagy a pályát állítsa nagyobbra.","WinnerMarkCountDescription":"A mező minimum 3, maximum 50 értéket vehet fel","PlayersSettings":"Játékosok beállítása","PlayersNumber":"Játékosok száma","PlayersNumberDescription":"A játékosok száma minimum 2, maximum 10 lehet. Egy jelet egyszere csak egy játékos választhat!","StartTheGame":"Kezdés!","GameSettings":"Játék beállításai","ModifyGameSettingsConfirmMsg":"A játék beállításának módosításával új játék fog indulni. Folytatja?"}')},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],l=s("c1df"),i=s.n(l);const o={GET:"GET",POST:"POST",PUT:"PUT",PATCH:"PATCH",DELETE:"DELETE"},u={async sendRequestBasicAuth(e,t,s,n,r){var l=new URL(a["default"].prototype.$baseUrl.concat(t));null!=s&&Object.entries(s).forEach(([e,t])=>{void 0!==t&&null!=t&&l.searchParams.append(e,s[e])});try{const t={method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:r},(e,t)=>"string"===typeof t&&""==t?null:"string"==typeof t?t.trim():t)},s=await fetch(l,t);return s}catch(i){return console.log(i),null}}},c="auth/login",m="amoba_user_token",d={async Login(e,t,s){const a=await u.sendRequestBasicAuth(o.POST,c,null,e,t),n=await a.json();return 200==a.status&&(n.ValidTo=s,localStorage.setItem(m,JSON.stringify(n)),!0)},TokenIsValid(){const e=localStorage.getItem(m);if(null==e)return!1;const t=JSON.parse(e),s=i()(t.ValidTo).diff(i()(),"seconds");return!(s<=0)||(localStorage.removeItem(m),!1)},Logout(){localStorage.removeItem(m)}};var p={name:"App",mounted(){d.TokenIsValid()||"Login"==this.$route.name||this.$router.replace("Login")}},h=p,b=(s("9e21"),s("2877")),y=Object(b["a"])(h,n,r,!1,null,null,null),f=y.exports,g=s("8c4f"),k=function(){var e=this,t=e._self._c;return t("div",[t("GameSetting",{ref:"gameSetting",on:{StartTheGame:e.startTheGame,Restart:e.clearGameTable}}),null!=e.gameSetting?t("div",{staticClass:"restart-game-button"},[t("b-button",{attrs:{variant:"warning"},on:{click:e.restartGame}},[t("b-icon",{attrs:{icon:"arrow-clockwise"}}),e._v(" "+e._s(e.$t("Game.RestartGame"))+" ")],1)],1):e._e(),null!=e.players&&e.players.length>0?t("div",{staticClass:"player-turn"},[e._v(" "+e._s(e.$t("Game.NextPlayer"))+": "),t("b",[e._v(" "+e._s(e.$t("Game.NamedPlayer",{name:e.players[e.turnPlayerIndex].PersonName}))+" ( "+e._s(e.players[e.turnPlayerIndex].Mark)+" ) ")])]):e._e(),t("GameTable",{ref:"gameTable",attrs:{Table:e.playersSteps},on:{SelectSquare:e.selectSquare}}),t("WinnerModal",{attrs:{Visible:e.showWinnerModal,Players:e.players,SkippedPlayers:e.skippedPlayersIndex,TurnPlayerIndex:e.turnPlayerIndex,WinnerPlayerMark:e.winnerPlayer},on:{GameContinuous:e.gameContinuous,NewGame:e.restartGame}})],1)},v=[],j=function(){var e=this,t=e._self._c;return null!=e.Table?t("div",[t("b-container",{attrs:{id:"zoom-button"}},[t("b-row",[t("b-col",[t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:e.$t("GameTable.ZoomIn"),expression:"$t('GameTable.ZoomIn')",modifiers:{hover:!0}}],attrs:{size:"sm",variant:"info"},on:{click:e.zoomIn}},[t("b-icon",{attrs:{icon:"zoom-in"}})],1)],1),t("b-col",[t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:e.$t("GameTable.ZoomReset"),expression:"$t('GameTable.ZoomReset')",modifiers:{hover:!0}}],attrs:{size:"sm"},on:{click:e.reset}},[t("b-icon",{attrs:{icon:"arrow-counterclockwise"}})],1)],1),t("b-col",[t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:e.$t("GameTable.ZoomOut"),expression:"$t('GameTable.ZoomOut')",modifiers:{hover:!0}}],attrs:{disabled:e.fontSize<=15,size:"sm",variant:"info"},on:{click:e.zoomOut}},[t("b-icon",{attrs:{icon:"zoom-out"}})],1)],1)],1)],1),t("div",{attrs:{id:"game-table"}},[t("table",e._l(e.Table,(function(s,a){return t("tr",{key:"y-"+a},e._l(s,(function(s,n){return t("td",{key:"x-"+n},[t("div",{staticClass:"square",style:"width:"+e.fieldSize+"px;height:"+e.fieldSize+"px;",on:{click:function(t){return e.$emit("SelectSquare",{x:n,y:a})}}},[t("div",{staticClass:"game-mark",style:"color:"+s.Color+";font-size:"+e.fontSize+"px;"},[e._v(" "+e._s(s.Mark)+" ")])])])})),0)})),0)])],1):e._e()},S=[],x={name:"GameTable",props:{Table:Array},data(){return{fieldSize:50,fontSize:30}},methods:{reset(){this.fieldSize=50,this.fontSize=30},zoomIn(){this.fieldSize+=10,this.fontSize+=10},zoomOut(){this.fieldSize-=10,this.fontSize-=10},refreshTable(){this.$forceUpdate()}}},P=x,_=Object(b["a"])(P,j,S,!1,null,null,null),w=_.exports,T=function(){var e=this,t=e._self._c;return t("div",[e.settingIsOpen?t("b-container",[t("b-row",{staticClass:"text-center"},[t("b-col",{attrs:{cols:"12"}},[e._v(" "+e._s(e.$t("GameSetting.TableSettings"))+" ")])],1),t("b-row",[t("b-col",{attrs:{cols:"12",md:"4"}},[t("eh-input",{attrs:{id:"table-x-size",label:e.$t("GameSetting.TableWidth"),required:!0,type:"number",state:null==e.yAxisLength||0==e.yAxisLength||e.yAxisLength>=e.markPieces,error:e.$t("GameSetting.TableSizeError"),min:5,max:100,description:e.$t("GameSetting.TableSizeDescription")},model:{value:e.yAxisLength,callback:function(t){e.yAxisLength=t},expression:"yAxisLength"}})],1),t("b-col",{attrs:{cols:"12",md:"4"}},[t("eh-input",{attrs:{id:"table-y-size",label:e.$t("GameSetting.TableHeight"),required:!0,type:"number",state:null==e.xAxisLength||0==e.xAxisLength||e.xAxisLength>=e.markPieces,error:e.$t("GameSetting.TableSizeError"),min:5,max:100,description:e.$t("GameSetting.TableSizeDescription")},model:{value:e.xAxisLength,callback:function(t){e.xAxisLength=t},expression:"xAxisLength"}})],1),t("b-col",{attrs:{cols:"12",md:"4"}},[t("eh-input",{attrs:{id:"winner-mark-pieces",label:e.$t("GameSetting.WinnerMarkCount"),required:!0,type:"number",state:null==e.xAxisLength||0==e.xAxisLength||null==e.yAxisLength||0==e.yAxisLength||e.xAxisLength>=e.markPieces&&e.yAxisLength>=e.markPieces,error:e.$t("GameSetting.WinnerMarkCountError"),min:3,max:50,description:e.$t("GameSetting.WinnerMarkCountDescription")},model:{value:e.markPieces,callback:function(t){e.markPieces=t},expression:"markPieces"}})],1)],1),t("b-row",{staticClass:"text-center pt-3"},[t("b-col",{attrs:{cols:"12"}},[e._v(" "+e._s(e.$t("GameSetting.PlayersSettings"))+" ")])],1),t("b-row",{attrs:{"align-h":"center"}},[t("b-col",{attrs:{cols:"4"}},[t("eh-input",{staticStyle:{width:"fit-content",margin:"auto"},attrs:{label:e.$t("GameSetting.PlayersNumber"),description:e.$t("GameSetting.PlayersNumberDescription"),required:!0,type:"number",min:2,max:10,value:e.playerNumber},on:{change:e.setPlayersNumber}})],1)],1),null!=e.players?t("b-row",e._l(e.players,(function(s,a){return t("b-col",{key:"game-player-"+a,attrs:{cols:"12",md:"4"}},[t("PlayerSetting",{attrs:{SelectedMarks:e.getSelectedMarks(a)},model:{value:e.players[a],callback:function(t){e.$set(e.players,a,t)},expression:"players[index]"}})],1)})),1):e._e(),t("b-row",[t("b-col",[t("b-button",{attrs:{disabled:e.formIsInvalidToStartTheGame},on:{click:e.startTheGame}},[e._v(" "+e._s(e.$t("GameSetting.StartTheGame"))+" ")])],1)],1)],1):t("div",{staticStyle:{"text-align":"center"}},[t("b-button",{on:{click:e.openSettings}},[t("b-icon",{attrs:{icon:"gear-fill"}}),e._v(" "+e._s(e.$t("GameSetting.GameSettings"))+" ")],1)],1)],1)},z=[],M=function(){var e=this,t=e._self._c;return t("b-container",[t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("eh-input",{attrs:{label:e.$t("PlayerSetting.PlayerName")},on:{change:e.ChangedValue},model:{value:e.personName,callback:function(t){e.personName=t},expression:"personName"}})],1),t("b-col",{attrs:{cols:"12"}},[t("eh-input",{attrs:{label:e.$t("PlayerSetting.PlayerMarkColor"),type:"color"},on:{change:e.ChangedValue},model:{value:e.markColor,callback:function(t){e.markColor=t},expression:"markColor"}})],1),t("b-col",{attrs:{cols:"12"}},[t("b-form-select",{staticClass:"m-2",attrs:{state:e.IsValid},on:{change:e.ChangedValue},model:{value:e.mark,callback:function(t){e.mark=t},expression:"mark"}},[t("b-form-select-option",{attrs:{value:null}},[e._v(" "+e._s(e.$t("PlayerSetting.SelectMark"))+" ")]),t("b-form-select-option",{attrs:{value:"X"}},[e._v(" X ")]),t("b-form-select-option",{attrs:{value:"Y"}},[e._v(" Y ")]),t("b-form-select-option",{attrs:{value:"O"}},[e._v(" O ")]),t("b-form-select-option",{attrs:{value:"Z"}},[e._v(" Z ")]),t("b-form-select-option",{attrs:{value:"A"}},[e._v(" A ")]),t("b-form-select-option",{attrs:{value:"B"}},[e._v(" B ")]),t("b-form-select-option",{attrs:{value:"C"}},[e._v(" C ")]),t("b-form-select-option",{attrs:{value:"D"}},[e._v(" D ")]),t("b-form-select-option",{attrs:{value:"E"}},[e._v(" E ")]),t("b-form-select-option",{attrs:{value:"F"}},[e._v(" F ")])],1)],1)],1)],1)},C=[],G={name:"PlayerSetting",model:{event:"change",prop:"Player"},props:{Player:Object,SelectedMarks:Array},data(){return{personName:null,markColor:null,mark:null}},watch:{Player(e){this.SetPlayer(e)}},computed:{IsValid(){return null!=this.mark&&!this.SelectedMarks.includes(this.mark)}},methods:{ChangedValue(){this.IsValid&&(null!=this.personName||null!=this.mark||null!=this.markColor&&"#000000"!=this.markColor)?this.IsValid&&this.$emit("change",{PersonName:this.personName,Mark:this.mark,MarkColor:this.markColor}):this.$emit("change",null)},SetPlayer(e){null!=e&&(this.personName=e.PersonName,this.markColor=e.MarkColor,this.mark=e.Mark)}},mounted(){this.SetPlayer(this.Player)}},N=G,L=Object(b["a"])(N,M,C,!1,null,null,null),$=L.exports,O={components:{PlayerSetting:$},name:"GameSetting",data(){return{players:null,settingIsOpen:!0,xAxisLength:null,yAxisLength:null,markPieces:null,playerNumber:null}},computed:{formIsInvalidToStartTheGame(){return null==this.players||null!=this.players&&this.players.length<2||null!=this.players&&this.players.length>1&&this.players.some(e=>null==e)||null==this.markPieces||null==this.xAxisLength||this.yAxisLength<this.markPieces||null==this.yAxisLength||this.yAxisLength<this.markPieces}},methods:{getSelectedMarks(e){const t=JSON.parse(JSON.stringify(this.players));return t.splice(e,1),t.map(e=>null!=e?e.Mark:null)},setPlayersNumber(e){if(this.playerNumber=e,null==e||e<2)this.players=null;else if(null==this.players)this.players=new Array(e),this.players.fill(null);else if(this.players.length>e)this.players=this.players.slice(0,e);else if(this.players.length<e){const t=e-this.players.length,s=new Array(t);s.fill(null),this.players=[...this.players,...s]}},startTheGame(){this.$emit("StartTheGame",{TableSize:{x:this.xAxisLength,y:this.yAxisLength},WinnerMarkPieces:this.markPieces,Players:this.players}),this.settingIsOpen=!1},openSettings(){confirm(this.$t("GameSetting.ModifyGameSettingsConfirmMsg"))&&(this.settingIsOpen=!0,this.$emit("Restart"))}}},A=O,I=Object(b["a"])(A,T,z,!1,null,null,null),V=I.exports,W=function(){var e=this,t=e._self._c;return e.Visible&&e.PlayersCount>0?t("b-modal",{attrs:{size:"md","hide-footer":"","hide-header":"","no-close-on-backdrop":""},model:{value:e.Visible,callback:function(t){e.Visible=t},expression:"Visible"}},[t("div",{staticStyle:{"text-align":"center"}},[2==e.PlayersCount||1==e.SkippedPlayersCount?t("div",{staticStyle:{padding:"10px"}},[t("h1",[e._v(" "+e._s(e.$t("WinnerModal.PlayerWon",{name:e.Players[e.TurnPlayerIndex].PersonName}))+" ( "+e._s(e.Players[e.TurnPlayerIndex].Mark)+" ) ")])]):e.SkippedPlayersCount>0?t("div",e._l(e.SkippedPlayers,(function(s,a){return t("div",{key:"player"+s},[a==e.TurnPlayerIndex?t("h2",[e._v(" "+e._s(e.WinnerText(a+1,s))+" ( "+e._s(e.Players[s].Mark)+" ) ")]):t("h3",[e._v(" "+e._s(e.WinnerText(a+1,s))+" ( "+e._s(e.Players[s].Mark)+" ) ")])])})),0):e._e()]),t("b-container",[t("b-row",[t("b-col",[t("b-button",{on:{click:e.newGame}},[e._v(" "+e._s(e.$t("WinnerModal.RestartGame"))+" ")])],1),t("b-col",[e.PlayersCount>2&&0!=e.SkippedPlayersCount&&e.PlayersCount-1!=e.SkippedPlayersCount?t("div",{staticStyle:{"text-align":"end"}},[t("b-button",{on:{click:e.gameContinuous}},[e._v(" "+e._s(e.$t("WinnerModal.GameContinuous"))+" ")])],1):e._e()])],1)],1)],1):e._e()},J=[],E={name:"WinnerModal",props:{Players:Array,SkippedPlayers:Array,WinnerPlayerMark:String,Visible:Boolean,TurnPlayerIndex:Number},computed:{PlayersCount(){return null==this.Players?0:this.Players.length},SkippedPlayersCount(){return null==this.SkippedPlayers?0:this.SkippedPlayers.length}},methods:{gameContinuous(){this.$emit("GameContinuous")},newGame(){this.$emit("NewGame")},WinnerText(e,t){switch(e){case 1:return this.$t("WinnerModal.FirstPlayer",{name:this.Players[t].PersonName});case 2:return this.$t("WinnerModal.SecondPlayer",{name:this.Players[t].PersonName});case 3:return this.$t("WinnerModal.ThirdPlayer",{name:this.Players[t].PersonName});default:return this.$t("WinnerModal.OtherWinnerPlayer",{name:this.Players[t].PersonName,place:e})}}}},F=E,q=Object(b["a"])(F,W,J,!1,null,null,null),D=q.exports,R={name:"Game",components:{GameTable:w,GameSetting:V,WinnerModal:D},data(){return{showWinnerModal:!1,winnerPlayer:null,players:null,skippedPlayersIndex:null,turnPlayerIndex:0,playersSteps:null,winnerMarkPieces:0,gameSetting:null}},methods:{gameContinuous(){this.turnPlayerIndex=this.setNextPlayer(this.turnPlayerIndex+1),this.showWinnerModal=!1},startTheGame(e){this.gameSetting=e,this.startGame()},restartGame(){this.showWinnerModal=!1,this.turnPlayerIndex=0,this.skippedPlayersIndex=null,this.startGame()},startGame(){this.players=this.gameSetting.Players,this.winnerMarkPieces=this.gameSetting.WinnerMarkPieces,this.loadTheTable(this.gameSetting.TableSize)},clearGameTable(){this.players=null,this.playersSteps=null,this.winnerMarkPieces=null,this.gameSetting=null},loadTheTable(e){let t=new Array(e.y);t.fill("");let s=[];for(let a=0;a<e.x;a++)s.push(JSON.parse(JSON.stringify(t)));this.playersSteps=s},selectSquare(e){if(""===this.playersSteps[e.y][e.x]||null==this.playersSteps[e.y][e.x]){this.playersSteps[e.y][e.x]={Mark:this.players[this.turnPlayerIndex].Mark,Color:this.players[this.turnPlayerIndex].MarkColor},this.$refs.gameTable.refreshTable();const t=this.checkWinner(e.x,e.y);if(t)return;this.turnPlayerIndex=this.setNextPlayer(this.turnPlayerIndex+1)}},setNextPlayer(e){return e>=this.players.length&&(e=0),null!=this.skippedPlayersIndex&&this.skippedPlayersIndex.includes(e)&&(e=this.setNextPlayer(e+1)),e},checkWinner(e,t){var s=[],a=[],n=[],r=[],l=-1*(this.winnerMarkPieces-1),i=-1*(this.winnerMarkPieces-1);const o=this.playersSteps[0].length-1,u=this.playersSteps.length-1;for(let m=0;m<o;m++)e+l>=0&&e+l<=o&&t+i>=0&&t+i<=u&&s.push(this.playersSteps[t+i][e+l]),e+l>=0&&e+l<=o&&a.push(this.playersSteps[t][e+l]),e+l>=0&&e+l<=o&&t-i>=0&&t-i<=u&&n.push(this.playersSteps[t-i][e+l]),t+i>=0&&t+i<=u&&r.push(this.playersSteps[t+i][e]),l++,i++;var c=!1;return c=this.checkMarksCoordinates(s),c||(c=this.checkMarksCoordinates(a)),c||(c=this.checkMarksCoordinates(n)),c||(c=this.checkMarksCoordinates(r)),c},checkMarksCoordinates(e){const t=this.players[this.turnPlayerIndex].Mark;var s=e.findIndex(e=>e.Mark===t);if(s<this.winnerMarkPieces&&s>=0){var a=e.slice(s,s+this.winnerMarkPieces);if(a.length===this.winnerMarkPieces&&a.every(e=>e.Mark===t))return this.onWinner(t),!0}return!1},onWinner(e){this.showWinnerModal=!0,this.winnerPlayer=e,this.players.length>2&&(null==this.skippedPlayersIndex&&(this.skippedPlayersIndex=[]),this.skippedPlayersIndex.push(this.players.findIndex(t=>t.Mark==e)))}}},U=R,H=Object(b["a"])(U,k,v,!1,null,null,null),B=H.exports,Z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-page-container"},[t("b-container",[t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("eh-input",{attrs:{label:e.$t("Login.Username")},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),t("b-col",{attrs:{cols:"12"}},[t("eh-input",{attrs:{label:e.$t("Login.Password"),type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),t("b-col",{attrs:{cols:"12"}},[t("eh-input",{attrs:{label:e.$t("Login.TokenValidTo"),type:"datetime-local"},model:{value:e.tokenValidTo,callback:function(t){e.tokenValidTo=t},expression:"tokenValidTo"}})],1),t("b-col",{attrs:{cols:"12"}},[t("b-button",{staticClass:"login-button",on:{click:e.login}},[e._v(" "+e._s(e.$t("Login.Login"))+" ")])],1)],1)],1)],1)},Y=[],K={name:"Login",data(){return{username:"atuny0",password:"9uQFF1Lh",tokenValidTo:i()().add(10,"minutes").format("YYYY-MM-DDTHH:mm")}},methods:{async login(){const e=await d.Login(this.username,this.password,this.tokenValidTo);e?this.$router.push("/"):this.$bvToast.toast(this.$t("Login.LoginErrorMsg"),{title:this.$t("Login.LoginErrorTitle"),variant:"danger",solid:!0})}},mounted(){d.TokenIsValid()&&this.$router.replace("/")}},X=K,Q=Object(b["a"])(X,Z,Y,!1,null,null,null),ee=Q.exports,te=function(){var e=this,t=e._self._c;return t("div",[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("Menu.Home")))]),e._v(" | "),t("a",{attrs:{href:""},on:{click:e.logout}},[e._v(e._s(e.$t("Menu.Logout")))])],1),t("router-view",{attrs:{name:"loggedView"}})],1)},se=[],ae={methods:{logout(){d.Logout(),this.$router.push("/login")}}},ne=ae,re=Object(b["a"])(ne,te,se,!1,null,null,null),le=re.exports,ie=function(){var e=this,t=e._self._c;return t("router-view",{attrs:{name:"notLoggedView"}})},oe=[],ue={},ce=Object(b["a"])(ue,ie,oe,!1,null,null,null),me=ce.exports;a["default"].use(g["a"]);const de=[{path:"/",name:"LoggedRouterView",component:le,children:[{path:"/",name:"Game",components:{loggedView:B}}]},{path:"/",name:"NotLoggedRouterView",component:me,children:[{path:"/login",name:"Login",components:{notLoggedView:ee}}]}],pe=new g["a"]({mode:"history",base:"/amobe-webapp/",routes:de});var he=pe,be=s("5f5b"),ye=s("b1e0"),fe=(s("f9e3"),s("2dd8"),s("a925")),ge=s("b0aa"),ke=s("808d"),ve=s("ba2a"),je=s("468d"),Se=s("0845"),xe=s("2284"),Pe=s("891d"),_e={Game:ge,GameTable:ke,WinnerModal:ve,GameSetting:je,PlayerSetting:Se,Login:xe,Menu:Pe};a["default"].use(fe["a"]);const we={hu:_e},Te={hu:["hu","HUN","hu-HU","hu-hu","hu-HUN"]};function ze(){var e="hu";return Object.entries(Te).forEach(([t,s])=>{s.includes(navigator.language||navigator.userLanguage)&&(e=t)}),e}const Me=new fe["a"]({locale:ze(),messages:we});var Ce=Me,Ge=(s("5717"),function(){var e=this,t=e._self._c;return t("div",["checkbox"===(e.type?e.type:"text")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.tempValue,expression:"tempValue"}],staticClass:"eh-base-input",class:e.setClass,style:e.inputStyle,attrs:{placeholder:e.placeholder?e.placeholder:" ",disabled:e.disabled,pattern:e.pattern,step:e.step,min:e.min,max:e.max,list:"color"==e.type?"colorList":null,type:"checkbox"},domProps:{checked:Array.isArray(e.tempValue)?e._i(e.tempValue,null)>-1:e.tempValue},on:{focus:function(t){e.isFocus=!0},blur:function(t){e.isFocus=!1},change:function(t){var s=e.tempValue,a=t.target,n=!!a.checked;if(Array.isArray(s)){var r=null,l=e._i(s,r);a.checked?l<0&&(e.tempValue=s.concat([r])):l>-1&&(e.tempValue=s.slice(0,l).concat(s.slice(l+1)))}else e.tempValue=n}}}):"radio"===(e.type?e.type:"text")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.tempValue,expression:"tempValue"}],staticClass:"eh-base-input",class:e.setClass,style:e.inputStyle,attrs:{placeholder:e.placeholder?e.placeholder:" ",disabled:e.disabled,pattern:e.pattern,step:e.step,min:e.min,max:e.max,list:"color"==e.type?"colorList":null,type:"radio"},domProps:{checked:e._q(e.tempValue,null)},on:{focus:function(t){e.isFocus=!0},blur:function(t){e.isFocus=!1},change:function(t){e.tempValue=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.tempValue,expression:"tempValue"}],staticClass:"eh-base-input",class:e.setClass,style:e.inputStyle,attrs:{placeholder:e.placeholder?e.placeholder:" ",disabled:e.disabled,pattern:e.pattern,step:e.step,min:e.min,max:e.max,list:"color"==e.type?"colorList":null,type:e.type?e.type:"text"},domProps:{value:e.tempValue},on:{focus:function(t){e.isFocus=!0},blur:function(t){e.isFocus=!1},input:function(t){t.target.composing||(e.tempValue=t.target.value)}}}),e.label?t("span",{staticClass:"eh-base-input-floating-label",style:e.labelStyle},[e._v(" "+e._s(e.label)+" "),e.required?t("span",{staticClass:"text-danger"},[e._v("*")]):e._e()]):e._e(),e.list?t("datalist",{attrs:{id:"colorList"}},e._l(e.list,(function(e){return t("option",{key:e,domProps:{value:e}})})),0):e._e(),t("div",{staticClass:"eh-base-input-desc-error-box"},[e.description?t("div",{staticClass:"eh-base-input-description"},[t("div",{domProps:{innerHTML:e._s(e.description)}})]):e._e(),!e.state&&e.error?t("div",{staticClass:"eh-base-input-error-text",style:e.errorStyle},[e._v(" "+e._s(e.error)+" ")]):e._e()])])}),Ne=[],Le={name:"eh-input",model:{prop:"value",event:"change"},props:{inputStyle:String,labelStyle:String,errorStyle:String,label:String,disabled:Boolean,required:Boolean,placeholder:String,description:String,pattern:String,min:Number,max:Number,error:String,isInvalidInput:Boolean,type:String,value:[String,Number,FileList],state:{type:Boolean,default:!0},list:Array,multiple:Boolean,step:{type:[String,Number],default:"any"}},data(){return{isFocus:!1,tempValue:this.value}},watch:{tempValue(e){null==e||""==e?this.$emit("change",null):"number"==this.type||"range"==this.type?this.$emit("change",Number.parseFloat(e)):this.$emit("change",e)},value(e){"file"!=this.type&&(this.tempValue=e)}},computed:{setClass(){var e="";return this.label?e+=" with-label ":e+=" without-label ",this.state?e+=" valid-input ":e+=" invalid-input ",e}}},$e=Le,Oe=Object(b["a"])($e,Ge,Ne,!1,null,null,null),Ae=Oe.exports,Ie={install(e){e.component("eh-input",Ae)}};a["default"].config.productionTip=!1,a["default"].use(be["a"]),a["default"].use(ye["a"]),a["default"].use(fe["a"]),a["default"].use(Ie),a["default"].prototype.$baseUrl="https://dummyjson.com/",new a["default"]({router:he,i18n:Ce,render:function(e){return e(f)}}).$mount("#app")},5717:function(e,t,s){},"808d":function(e){e.exports=JSON.parse('{"ZoomIn":"Nagyítás","ZoomReset":"Méret visszaállítása alapértelmezett helyzetbe","ZoomOut":"Kicsinyítés"}')},"891d":function(e){e.exports=JSON.parse('{"Home":"Kezdőlap","Logout":"Kijelentkezés"}')},"9e21":function(e,t,s){"use strict";s("e5fe")},b0aa:function(e){e.exports=JSON.parse('{"RestartGame":"Játék újraindtása","NextPlayer":"Következő játékos","NamedPlayer":"{name} nevű játékos"}')},ba2a:function(e){e.exports=JSON.parse('{"PlayerWon":"Győzött a {name} nevű játékos","FirstPlayer":"1. helyezett: {name} nevű játékos","SecondPlayer":"2. helyezett: {name} nevű játékos","ThirdPlayer":"3. helyezett: {name} nevű játékos","OtherWinnerPlayer":"{place}. helyezett: {name} nevű játékos","RestartGame":"Játék újrakezdése","GameContinuous":"Játék folytatása"}')},e5fe:function(e,t,s){}});
//# sourceMappingURL=app.1b934e7d.js.map