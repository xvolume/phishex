﻿!function(e){function t(t){for(var o,i,r=t[0],l=t[1],d=t[2],h=0,u=[];h<r.length;h++)i=r[h],s[i]&&u.push(s[i][0]),s[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(c&&c(t);u.length;)u.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},s={"web/login":0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://vk.com/js/cmodules/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var c=l;a.push([180,"bundles/common","bundles/vendors","bundles/bf702a1d1838ef404d188c8765291b8b"]),n()}({"+tmx":function(e,t,n){"use strict";n.r(t),n.d(t,"MILLISECOND",function(){return o}),n.d(t,"SECOND",function(){return s}),n.d(t,"MINUTE",function(){return a}),n.d(t,"HOUR",function(){return i}),n.d(t,"DAY",function(){return r}),n.d(t,"WEEK",function(){return l}),n.d(t,"MONTH",function(){return d}),n.d(t,"ruLocale",function(){return c}),n.d(t,"EVENTS",function(){return h});var o=1,s=1e3*o,a=60*s,i=60*a,r=24*i,l=7*r,d=30*r,c="ru-RU",h={MOUSE_DOWN:"mousedown",KEY_DOWN:"keydown",SCROLL:"scroll",CLICK:"click"}},180:function(e,t,n){e.exports=n("vEjk")},"6b4t":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});n("KKXr");var o=n("q1tI");n("17x9");class s extends o.Component{static mapFilterOptionsToDropdownOptions(e){return e?e.map(e=>[e.constant,e.name]):[]}constructor(e){super(e),this.state={filterWrapElementId:this.props.config.id+"_filter_wrap",filterElementId:this.props.config.id+"_filter"}}componentDidMount(){var e=this.props.config.placeholder||"",t=this.onChange.bind(this);this.state.input=new Dropdown(ge(this.state.filterElementId),s.mapFilterOptionsToDropdownOptions(this.props.config.options),{selectedItems:this.props.config.selected,onChange:t,placeholder:e,multiselect:!this.props.singleSelectCrutch,autocomplete:!0,width:this.props.width,big:!0,maxItems:this.props.maxItems})}componentDidUpdate(e,t,n){if(this.props.singleSelectCrutch){var o=this.state.input.selectedItems(),s=o&&o[0]&&o[0][0]?o[0][0]:null;if(!s)return;this.props.config.selected!==e.config.selected&&s!=this.props.config.selected&&this.state.input.selectItem(this.props.config.selected[0])}}onChange(e){var t=s.convertOldValueToJson(e);this.props.onFilterChange(this.props.config.id,t)}static convertOldValueToJson(e){return e?e.split(","):null}render(){var e=this.props.config.header?o.createElement("div",{className:"search_filter_main"},this.props.config.header):"";return o.createElement("div",{className:"filter"},e,o.createElement("div",{id:this.state.filterWrapElementId,className:"search_control"},o.createElement("input",{id:this.state.filterElementId,type:"text",className:"dark"})))}}s.defaultProps={width:200,maxItems:50,singleSelectCrutch:!1}},"6krn":function(e,t,n){"use strict";n.r(t),n.d(t,"getLang",function(){return i});var o=n("nAFc"),s=n("4+be"),a={};function i(e,t,n){void 0===t&&(t=!1);var i="number"==typeof t,r=t||i,l=e+(r?".raw":"");if(void 0===a[l]){var d=r?Object(s.getLang)(e,"raw"):Object(s.getLang)(e);"string"==typeof d?a[l]=Object(o.decodeHTMLEntities)(d):Array.isArray(d)&&(a[l]=d.map(o.decodeHTMLEntities))}if(i){var c=t;return Object(s.langNumeric)(c,a[l],n)}return a[l]||""}t.default={getLang:i}},KkBR:function(e,t,n){"use strict";n.r(t);var o=n("MZbF"),s=n("q1tI"),a=(n("Oyvg"),n("SRfc"),n("pIFo"),n("91GP"),n("17x9"),n("v+DW")),i=n("6krn"),r=n("dV62"),l=n("6raB"),d=n("dLHM"),c=n("+tmx"),h=n("6b4t"),u=n("i8i4"),p=n("pemR"),g=n("clTp"),m=()=>"undefined"!=typeof window;class f extends s.Component{constructor(e){super(e),this.addTooltip=e=>{if(this.el){var t=this.props,n=t.text,o=t.position,s=t.align,a=t.marginTop,i=t.marginLeft,r=Object(g.default)(this.el);this.update({text:n,position:o,align:s,rect:r,marginTop:a,marginLeft:i})}},this.removeTooltip=e=>{document.activeElement!==this.inputEl&&this.update({remove:!0})},this.renderTooltip=()=>{if(!this.state.tooltip)return null;var e=this.state.tooltip,t=e.x,n=e.y,o=e.position,a=e.align,i=e.text,r=e.removed,l=this.props,d=l.appearance,c=l.width,h=Object(p.classNames)("UnblockTooltip",`UnblockTooltip--${o}`,`UnblockTooltip--${d}`,{"UnblockTooltip--removed":!!r,[`UnblockTooltip--align-${a}`]:"t"===o||"b"===o}),u={top:n,left:t},g=c?{width:c}:{};return s.createElement("div",{className:h,style:u},s.createElement("div",{className:"UnblockTooltip__in",style:g,dangerouslySetInnerHTML:{__html:i}}))},this.state={}}componentDidMount(){this.el=u.findDOMNode(this),this.inputEl="INPUT"===this.el.tagName?this.el:this.el.getElementsByTagName("input")[0],this.backgroundElement=document.getElementById("box_layer_wrap"),this.el.addEventListener("mouseenter",this.addTooltip),this.el.addEventListener("mouseleave",this.removeTooltip),this.inputEl.addEventListener("focus",this.addTooltip),this.inputEl.addEventListener("blur",this.removeTooltip),this.backgroundElement.addEventListener("scroll",this.addTooltip),window.addEventListener("resize",this.addTooltip)}componentWillUnmount(){this.el.removeEventListener("mouseenter",this.addTooltip),this.el.removeEventListener("mouseleave",this.removeTooltip),this.inputEl.removeEventListener("focus",this.addTooltip),this.inputEl.removeEventListener("blur",this.removeTooltip),this.backgroundElement.addEventListener("scroll",this.addTooltip),window.removeEventListener("resize",this.addTooltip)}update(e){var t=e.position,n=e.align,o=e.text,s=e.rect,a=e.marginTop,i=e.marginLeft,r=!s||0===s.top&&0===s.left;if(!0!==e.remove&&this.props.isShown&&!r){var l=s.left,d=s.top;switch(t){case"t":l+=.5*s.width;break;case"r":l+=s.width,d+=.5*s.height;break;case"b":l+=.5*s.width,d+=s.height;break;case"l":d+=.5*s.height}l=Math.round(l+i),d=Math.round(d+a),this.setState({tooltip:{position:t,align:n,text:o,x:l,y:d}})}else this.setState({tooltip:Object.assign({},this.state.tooltip,{removed:!0})})}render(){var e=this.renderTooltip();return e?(!this.defaultNode&&m()&&(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),s.createElement(s.Fragment,null,this.props.children,u.createPortal(e,this.defaultNode))):this.props.children}}f.defaultProps={appearance:"black",position:"b",align:"center",marginTop:0,marginLeft:0};var _=n("PjZB"),b=n("wVf2");class v extends s.Component{constructor(e){var t;super(e),t=this,this.componentDidMount=()=>{document.addEventListener("keydown",this.onDocumentKeyDown),this.setInitialState(),this.synchronizeStateWithBackend()},this.componentWillUnmount=()=>{document.removeEventListener("keydown",this.onDocumentKeyDown),this.removeResendCodeButtonTimer()},this.componentDidUpdate=(e,t)=>{this.state.initialLoading||this.state.delayedUnblockExplanation||this.state.delayedUnblockFinished||t.phone===this.state.phone&&t.code===this.state.code&&t.codeSent===this.state.codeSent||this.updateFocus()},this.sendCode=()=>{if(!this.isBusy()){this.resetMessage();var e={act:v.acts.sendCode,phone:this.getPhonePrefix()+this.state.newPhone,hash:this.state.processHash,sure:1};ajax.post(v.controller,e,{onDone:e=>{this.setStateByProcess(e),this.setResendCodeButtonTimer()},onFail:e=>(this.setErrorMessage(e),!0),showProgress:()=>this.setState({mainButtonLoading:!0}),hideProgress:()=>this.setState({mainButtonLoading:!1})})}},this.sendCodeToBoundPhone=()=>{if(!this.isBusy()){this.resetMessage();var e={act:v.acts.sendCodeToBoundPhone,hash:this.state.processHash};ajax.post(v.controller,e,{onDone:e=>{this.setStateByProcess(e),this.setResendCodeButtonTimer()},onFail:e=>(this.setErrorMessage(e),this.synchronizeStateWithBackend(),!0),showProgress:()=>this.setState({mainButtonLoading:!0}),hideProgress:()=>this.setState({mainButtonLoading:!1})})}},this.resetPhone=e=>{this.isBusy()||(this.removeResendCodeButtonTimer(),e&&this.resetMessage(),this.setState({phonePrefixIndex:v.constants.firstCountryIndex,backendCallResetsEnabled:null,phone:"",code:"",newPhone:"",newCode:"",phonePrefixInputNeeded:!0,codeSent:!1,checkCodeAttemptsAmount:void 0}))},this.resetUnblockForm=()=>{if(!this.isBusy()){var e={act:v.acts.resetUnblockForm,hash:this.state.processHash};ajax.post(v.controller,e,{onDone:e=>{this.setStateByProcess(e,{delayedUnblockExplanation:"",delayedUnblockFinished:!1})},onFail:e=>(this.setErrorMessage(e),this.synchronizeStateWithBackend(),!0),showProgress:()=>this.setState({resetUnblockDataButtonLoading:!0}),hideProgress:()=>this.setState({resetUnblockDataButtonLoading:!1})})}},this.checkCode=()=>{if(!this.isBusy())if(this.state.newCode.length<4)Object(a.notaBene)(this.references.validationCodeInput.element);else{this.resetMessage();var e={act:v.acts.checkCode,code:this.state.newCode,hash:this.state.processHash};ajax.post(v.controller,e,{onDone:e=>{this.setStateByProcess(e),this.references.passwordInput.element.focus(),this.setState({mainButtonLoading:!1})},onFail:e=>{return this.synchronizeStateWithBackend(()=>{this.setErrorMessage(e),this.setState({mainButtonLoading:!1})}),!0},showProgress:()=>this.setState({mainButtonLoading:!0})})}},this.resendCode=()=>{if(!this.isBusy()){this.resetMessage();var e={act:v.acts.resendCode,hash:this.state.processHash};ajax.post(v.controller,e,{onDone:e=>{this.setStateByProcess(e,{newCode:""}),this.setInfoMessage(this.getResentInfoMessageText()),this.setResendCodeButtonTimer(),this.references.validationCodeInput.element.focus()},onFail:e=>(this.setErrorMessage(e),this.synchronizeStateWithBackend(),!0),showProgress:()=>this.setState({noCodeButtonLoading:!0}),hideProgress:()=>this.setState({noCodeButtonLoading:!1})})}},this.unblock=()=>{if(!this.isBusy())if(v.isBadPassword(this.state.newPassword))Object(a.notaBene)(this.references.passwordInput.element);else{this.resetMessage();var e={act:v.acts.unblock,pass:this.state.newPassword,hash:this.state.unblockHash};ajax.post(v.controller,e,{onDone:e=>{e.delayed_unblock_explanation?this.setState({delayedUnblockExplanation:e.delayed_unblock_explanation,mainButtonLoading:!1}):(this.setState({password:this.state.newPassword}),v.refreshAuthDataAndRedirectToFeed(e.login_hash,e.logout_hash,e.email,this.state.newPassword))},onFail:e=>(this.setErrorMessage(e),this.setState({mainButtonLoading:!1}),this.synchronizeStateWithBackend(),!0),showProgress:()=>this.setState({mainButtonLoading:!0})})}},this.redirectToAuth=()=>{this.setState({redirectToAuthButtonLoading:!0}),window.location.href=document.getElementById("top_logout_link").href},this.synchronizeStateWithBackend=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},n={act:v.acts.getStatus};ajax.post(v.controller,n,{onDone:n=>{e(),t.setStateByProcess(n)},onFail:e=>(t.setErrorMessage(e),t.synchronizeStateWithBackend(),!0)})},this.setStateByProcess=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=t.getStateByProcess(e);t.state.initialLoading&&(o.initialLoading=!1),n&&Object.assign(o,n),0!==t.state.unbanDataId&&void 0!==t.state.unbanDataId&&o.unbanDataId!==t.state.unbanDataId&&t.setErrorMessage(i.default.getLang("login_unban_data_expired")),t.setState(o),o.delayedUnblockExplanation||o.delayedUnblockFinished||(o.codeSent&&o.resendButtonSecondsLeft&&t.setResendCodeButtonTimer(),0===o.checkCodeAttemptsAmount&&t.resetPhone(!1))},this.getStateByProcess=e=>({phone:e.phone,code:e.code,password:e.password,phonePrefixInputNeeded:!e.phone,canEditPhone:e.can_edit_phone,codeSent:e.code_sent,checkCodeAttemptsAmount:Number(e.check_code_attempts_amount),backendCallResetsEnabled:e.call_resets_enabled,phonePrefixesCallResetsEnabledConfig:e.phone_prefixes_call_resets_enabled_config,phonePrefixesToCountryMapping:e.country_to_phone_prefixes_map,unbanDataId:e.unban_data_id,delayedUnblockExplanation:e.delayed_unblock_explanation,delayedUnblockFinished:e.delayed_unblock_finished,resendCodeTimer:v.constants.noResetCodeTimerEnabled,resendButtonSecondsLeft:e.sms_resend_delay_timer_left,resendAttemptsAmount:e.resend_attempts_amount,resendCodeDelay:e.sms_resend_delay,phonePrefixIndex:this.getInitialPhonePrefixIndex(e.country_to_phone_prefixes_map,e.phone_prefix),newPhone:e.phone,newCode:e.code,newPassword:"",processHash:e.process_hash,unblockHash:e.unblock_hash}),this.areCallResetsEnabled=()=>{if(null!==this.state.backendCallResetsEnabled)return this.state.backendCallResetsEnabled;var e=String(this.state.phonePrefixesToCountryMapping[this.state.phonePrefixIndex][0]),t=Number(e.replace("_",""));return!this.state.phonePrefixesCallResetsEnabledConfig.includes(t)},this.updateFocus=()=>{this.state.phone?this.state.phone&&!this.state.code&&this.state.codeSent?this.references.validationCodeInput.element.focus():this.state.phone&&this.state.code&&this.references.passwordInput.element.focus():this.references.phoneInput.element.focus()},this.setErrorMessage=e=>{this.setState({message:e,isError:!0})},this.setInfoMessage=e=>{this.setState({message:e,isError:!1})},this.resetMessage=()=>{this.setState({message:""})},this.isBusy=()=>this.state.mainButtonLoading||this.state.noCodeButtonLoading||this.state.resetUnblockDataButtonLoading,this.onDocumentKeyDown=e=>{switch(e.keyCode){case KEY.ENTER:this.references.mainButton.props.onClick();break;default:return}e.stopPropagation(),e.preventDefault()},this.setResendCodeButtonTimer=()=>{if(this.state.resendCodeTimer===v.constants.noResetCodeTimerEnabled){var e=this.state.resendButtonSecondsLeft||this.state.resendCodeDelay;this.setState({resendCodeTimer:setInterval(this.resendCodeButtonTimerTick,c.SECOND),resendButtonSecondsLeft:e})}},this.resendCodeButtonTimerTick=()=>{var e=this.state.resendButtonSecondsLeft-1;this.setState({resendButtonSecondsLeft:e}),0===e&&this.removeResendCodeButtonTimer()},this.removeResendCodeButtonTimer=()=>{clearInterval(this.state.resendCodeTimer),this.setState({resendCodeTimer:v.constants.noResetCodeTimerEnabled,resendButtonSecondsLeft:0})},this.noResendsWereMade=()=>this.state.resendAttemptsAmount===v.constants.noCodeResentAmount,this.isLastResendStep=()=>this.state.resendAttemptsAmount===v.constants.maxCodeResentAmount,this.shouldRenderCallResetsSteps=()=>this.areCallResetsEnabled()?this.noResendsWereMade():this.isLastResendStep(),this.getCodeBlockHeaderLabel=()=>this.shouldRenderCallResetsSteps()?i.default.getLang("login_authcheck_called_phone_label"):i.default.getLang("login_confirmation_code"),this.getCodeBlockTooltipLabel=()=>this.shouldRenderCallResetsSteps()?this.props.tooltips.codeCallReset:this.props.tooltips.code,this.getResentInfoMessageText=()=>this.shouldRenderCallResetsSteps()?i.default.getLang("login_authcheck_call_reset_sent"):i.default.getLang("login_authcheck_sms_resent"),this.getResendCodeWaitingLabel=()=>{var e;e=this.areCallResetsEnabled()?this.noResendsWereMade()?i.default.getLang("join_send_code_via_sms_time"):i.default.getLang("join_resend_code_time"):this.noResendsWereMade()?i.default.getLang("join_resend_code_time"):i.default.getLang("login_authcheck_send_call_reset_delay");var t=Math.floor(this.state.resendButtonSecondsLeft/60)+":"+(this.state.resendButtonSecondsLeft%60<10?"0":"")+this.state.resendButtonSecondsLeft%60;return e.replace("%s",t)},this.getResendCodeButtonLabel=()=>this.areCallResetsEnabled()?this.noResendsWereMade()?i.default.getLang("join_send_code_via_sms"):i.default.getLang("join_no_code"):this.noResendsWereMade()?i.default.getLang("join_no_code"):i.default.getLang("login_authcheck_send_call_reset_message"),this.getInitialPhonePrefixIndex=(e,t)=>{var n=e.findIndex(e=>e[3]==t);return-1===n&&(n=v.constants.firstCountryIndex),n},this.mapPhonePrefixesToOption=()=>this.state.phonePrefixesToCountryMapping.map((e,t)=>({constant:t,name:e[1]})),this.getPhonePrefix=()=>this.state.phonePrefixesToCountryMapping[this.state.phonePrefixIndex][3],this.renderResendCodeButton=()=>{var e;if(this.state.resendAttemptsAmount===v.constants.maxCodeResentAmount)e=s.createElement("div",{className:"resend_button resend_button--waiting"},i.default.getLang("reg_code_limit_exceeded"));else if(0===this.state.resendButtonSecondsLeft)e=s.createElement(l.default,{appearance:"link",loading:this.state.noCodeButtonLoading,className:"resend_button",onClick:this.resendCode},this.getResendCodeButtonLabel());else{var t=this.getResendCodeWaitingLabel();e=s.createElement("div",{className:"resend_button resend_button--waiting"},t)}return s.createElement("div",{className:"resend_button_wrap"},e)},this.renderPhonePrefixBlock=()=>{if(!this.state.phonePrefixInputNeeded)return"";var e=this.state.phone?v.constants.finishedClass:"";return s.createElement("div",{className:`input phone_number_prefix_input ${e}`},s.createElement("div",{className:"label"},i.default.getLang("join_country_label")),s.createElement(h.default,{className:`dark phone_number_prefix _phone_input_tooltip ${e}`,config:{id:"phone_number_prefix",placeholder:"",selected:[this.state.phonePrefixIndex],options:this.mapPhonePrefixesToOption()},singleSelectCrutch:!0,onFilterChange:(e,t)=>{this.setState({phonePrefixIndex:null===t?this.state.phonePrefixIndex:t})},readOnly:!!this.state.phone}))},this.renderPhoneBlock=()=>{var e=this.state.phone&&!this.state.code&&this.state.canEditPhone?s.createElement("a",{className:"_change_phone_button",onClick:()=>this.resetPhone(!0)},i.default.getLang("login_unblock_form_change_phone")):"",t=this.state.phonePrefixInputNeeded?this.getPhonePrefix():"",n=this.state.phone?v.constants.finishedClass:"",o=!this.state.phone&&!this.state.code&&this.state.phonePrefixInputNeeded,a=this.state.newPhone;return s.createElement("div",{className:"input phone_number_input"},s.createElement("div",{className:"label"},i.default.getLang("login_mobile_phone")),e,s.createElement(f,{text:this.getPhoneBlockTooltipLabel(),appearance:v.constants.tooltipAppearance,position:v.constants.tooltipPosition,width:v.constants.tooltipWidth,marginLeft:v.constants.tooltipMarginLeft,isShown:o},s.createElement("div",{id:"join_phone_prefixed",className:`prefix_input_wrap ${n}`},s.createElement("div",{id:"join_phone_prefix",className:"prefix_input_prefix"},s.createElement("nobr",null,t)),s.createElement("div",{className:"prefix_input_field"},s.createElement(d.default,{className:`prefix_input phone_number _phone_input_tooltip ${n}`,value:a,readOnly:!!this.state.phone,onChange:e=>this.setState({newPhone:e.target.value}),ref:e=>{this.references.phoneInput=e}}),s.createElement("div",{className:"prefix_input_border"})))))},this.renderCodeBlock=()=>{if(!this.state.phone)return"";if(!this.state.codeSent)return"";var e=this.getCodeBlockHeaderLabel(),t=this.state.code?v.constants.finishedClass:"",n=this.state.phone&&!this.state.code,o=!!this.state.code;return s.createElement("div",{className:"input verification_code_input"},s.createElement("div",{className:"label"},e),s.createElement(f,{text:this.getCodeBlockTooltipLabel(),appearance:v.constants.tooltipAppearance,position:v.constants.tooltipPosition,width:v.constants.tooltipWidth,marginLeft:v.constants.tooltipMarginLeft,isShown:n},s.createElement(d.default,{className:`verification_code _verification_code_input_tooltip dark ${t}`,ref:e=>{this.references.validationCodeInput=e},placeholder:i.default.getLang("login_authcheck_enter_code"),value:this.state.newCode,readOnly:o,onChange:e=>this.setState({newCode:e.target.value})})))},this.renderPasswordBlock=()=>{if(!this.state.phone||!this.state.code)return"";var e=v.checkPasswordStrength(this.state.newPassword),t=this.state.newPassword?s.createElement("div",{id:"blocked_about_pass",className:"blocked_pwd_level"+e}):"",n=this.state.newPassword?s.createElement("div",{className:"blocked_pass_strength blocked_about_login"},i.default.getLang(`join_pwd_level${e}`)):"",o=!this.state.password;return s.createElement("div",{className:"input new_password_input"},s.createElement("div",{className:"label"},i.default.getLang("login_new_password_label")),s.createElement(f,{text:this.props.tooltips.password,appearance:v.constants.tooltipAppearance,position:v.constants.tooltipPosition,width:v.constants.tooltipWidth,marginLeft:v.constants.tooltipMarginLeft,isShown:o},s.createElement(d.default,{className:"dark new_password _password_input_tooltip",ref:e=>{this.references.passwordInput=e},placeholder:i.default.getLang("login_enter_password"),value:this.state.newPassword,onChange:e=>this.setState({newPassword:e.target.value})})),t,n)},this.renderMainButton=()=>{var e,t,n,o=this.areCallResetsEnabled()?i.default.getLang("reg_validate_call_reset_button"):i.default.getLang("login_receive_code");if(this.state.phone||this.state.code)if(this.state.phone&&!this.state.code)this.state.codeSent?(e=this.checkCode,t=i.default.getLang("login_check_code"),n=this.renderResendCodeButton()):(e=this.sendCodeToBoundPhone,t=o,n="");else{if(!this.state.phone||!this.state.code)return"";e=this.unblock,t=i.default.getLang("login_blocked_unblock_page"),n=""}else e=this.sendCode,t=o,n="";return s.createElement("div",null,s.createElement(l.default,{className:"UnblockForm__mainButton",loading:this.state.mainButtonLoading,onClick:e,ref:e=>{this.references.mainButton=e}},t),n)},this.renderMessage=()=>{if(!this.state.message)return"";var e=this.state.isError?"error":"";return s.createElement("div",{id:"unblock_box_errors_block"},s.createElement("div",{className:"msg submit_error "+e,dangerouslySetInnerHTML:{__html:this.state.message}}))},this.renderContent=()=>this.state.initialLoading?v.renderInitialLoading():this.state.delayedUnblockExplanation?this.renderDelayedWaitExplanation():this.state.delayedUnblockFinished?this.renderDelayedUnblockFinishedScreen():s.createElement("div",{className:"UnblockForm__content__inputs"},this.renderPhonePrefixBlock(),this.renderPhoneBlock(),this.renderCodeBlock(),this.renderPasswordBlock(),this.renderMainButton()),this.renderDelayedWaitExplanation=()=>s.createElement("div",{className:"DelayedWaitExplanation"},s.createElement("div",{className:"DelayedWaitExplanation__message msg submit_error ",dangerouslySetInnerHTML:{__html:i.default.getLang("restore_change_phone_done_wait_banned").replace("{date}",this.state.delayedUnblockExplanation)}}),s.createElement("div",{className:"DelayedWaitExplanation__progressWrap"},s.createElement(l.default,{appearance:"tertiary",loading:this.state.resetUnblockDataButtonLoading,onClick:this.resetUnblockForm},i.default.getLang("login_delayed_its_not_me")))),this.renderDelayedUnblockFinishedScreen=()=>s.createElement("div",{id:"unblock_box_errors_block"},s.createElement("div",{className:"msg submit_error ",dangerouslySetInnerHTML:{__html:i.default.getLang("login_delayed_request_finished")}}),s.createElement("div",{className:"DelayedRequestFinished__button"},s.createElement(l.default,{loading:this.state.redirectToAuthButtonLoading,onClick:this.redirectToAuth},i.default.getLang("login_unblock_redirect_to_auth"))),s.createElement("div",{className:"DelayedRequestFinished__notMeButton"},s.createElement(l.default,{appearance:"tertiary",loading:this.state.resetUnblockDataButtonLoading,onClick:this.resetUnblockForm},i.default.getLang("login_delayed_its_not_me")))),this.render=()=>s.createElement("div",{className:"UnblockForm"},s.createElement("div",{className:"UnblockForm__header box_title_wrap"},s.createElement("div",{className:"box_x_button",role:"button",onClick:r.destroyComponentInBox}),s.createElement("div",{className:"box_title"},i.default.getLang("login_blocked_call_title"))),s.createElement("div",{className:"UnblockForm__content box_body clear_fix"},s.createElement("div",{className:"login_blocked_wrap"},s.createElement("div",{className:"unblock_form"},s.createElement("div",{className:"UnblockForm__content__header"},s.createElement("div",{className:"antispam_team_logo"}),s.createElement("div",{className:"reason"},i.default.getLang("login_unblock_form_explanation"))),this.renderMessage(),this.renderContent())))),this.state={initialLoading:!0},this.references={phoneInput:null,validationCodeInput:null,passwordInput:null,mainButton:null}}setInitialState(){this.setState({message:"",isError:!1,initialLoading:!0,mainButtonLoading:!1,noCodeButtonLoading:!1,resetUnblockDataButtonLoading:!1,redirectToAuthButtonLoading:!1})}getPhoneBlockTooltipLabel(){return this.areCallResetsEnabled()?this.props.tooltips.phoneCallReset:this.props.tooltips.phone}}v.controller="https://vk.com/al_login.php",v.acts={getStatus:"get_unblock_process_status",sendCode:"send_unblock_code",sendCodeToBoundPhone:"send_unblock_code_to_bound_phone",resendCode:"resend_unblock_code",checkCode:"check_unblock_code",unblock:"unblock",resetUnblockForm:"reset_unblock_form"},v.constants={finishedClass:"finished",maxCodeResentAmount:2,noCodeResentAmount:0,firstCountryIndex:0,noResetCodeTimerEnabled:0,tooltipWidth:250,tooltipMarginLeft:5,tooltipAppearance:"white",tooltipPosition:"r",passwordStrengths:{none:-1,incorrectTooShort:0,weakTypical:1,good:2,veryGood:3,excellent:4,incorrectHasSpaces:5}},v.refreshAuthDataAndRedirectToFeed=(e,t,n,o)=>{var s=utilsNode.appendChild(ce("div",{innerHTML:'\n      <form id="login_block_auth_form" target="login_block_auth_frame" action="" method="POST">\n        <input type="hidden" name="_origin" id="login_server_origin" />\n        <input type="hidden" name="email" id="login_block_email" />\n        <input type="hidden" name="pass" id="login_block_pass" />\n      </form>\n      <iframe name="login_block_auth_frame" id="login_block_auth_frame"></iframe>'})),a=window.onLoginDone,i=ge("login_block_auth_form");i.action=Object(b.getLoginDomain)()+"?act=login&ip_h="+t+"&lg_h="+e+"&redirect=1&role=al_frame",val("login_block_email",winToUtf(n)),val("login_block_pass",winToUtf(o)),val("login_server_origin",cur.serverOrigin),i.submit(),cur.destroy.push(()=>{re(s),window.onLoginDone=a}),window.onLoginDone=()=>{re(s),nav.go("/feed",!0)}},v.isBadPassword=e=>{var t=[v.constants.passwordStrengths.incorrectHasSpaces,v.constants.passwordStrengths.incorrectTooShort],n=v.checkPasswordStrength(e);return t.includes(n)},v.checkPasswordStrength=e=>{var t=v.constants.passwordStrengths.none,n=["qwerty","йцукен","gfhjkm","пароль","password","abc123","fuckyou","123abc","baseball","football","soccer","monkey","liverpool","princess","jordan","slipknot","superman","iloveyou"];if(e.length<6)t=v.constants.passwordStrengths.incorrectTooShort;else if(/\s/.test(e))t=v.constants.passwordStrengths.incorrectHasSpaces;else if(e.match(/^\d+$/)||n.indexOf(e)>=0||e.substr(-1).match(/\d/)&&n.indexOf(e.substr(0,e.length-1))>=0)t=v.constants.passwordStrengths.weakTypical;else{for(var o=[/[^a-z]/g,/[^A-Z]/g,/[^а-яё]/g,/[^А-ЯЁ]/g,/[^0-9]/g,/[a-zA-Zа-яА-ЯёЁ0-9]/g],s=[],a=0,i=0,r=o.length;i<r;++i){var l=e.replace(o[i],"").length;l&&(l>1&&a++,s.push({group:i,cnt:l}))}if(s.length<3&&s[s.length-1].group!=o.length-1&&a<2&&(t=v.constants.passwordStrengths.good),(a>2||s.length>2&&s[s.length-1].group==o.length-1)&&(t=v.constants.passwordStrengths.excellent),t<0&&a>1){var d=e.replace(o[o.length-1],"");d.length>1&&d.replace(new RegExp(escapeRE(d.charAt(0)),"g"),"").length&&(t=v.constants.passwordStrengths.excellent)}t<0&&(t=v.constants.passwordStrengths.veryGood),t&&t<3&&e.length>13&&t++}return t},v.renderInitialLoading=()=>s.createElement("div",{className:"InitialLoading"},s.createElement(_.default,null)),n.d(t,"Login",function(){return w});var w={init(){each(geByClass("big_text","login_form_wrap"),(e,t)=>{placeholderInit(t)}),setTimeout(elfocus.pbind(!isVisible("email")||val("email")?"pass":"email"),0);var e=ge("login_form"),t=ge("email"),n=ge("pass"),o=val("login_ul");return e.onsubmit=()=>{if(!window.submitQuickLoginForm)return!0;if(!o&&!trim(t.value))return notaBene(t),!1;if(!trim(n.value))return notaBene(n),!1;var e={expire_input:val("expire_input")};return o&&(e.ul=o),submitQuickLoginForm(t.value,n.value,{prg:"login_button",params:e}),!1},window.loginByCredential&&!o&&(t.onclick=loginByCredential,n.onclick=loginByCredential),!0},initBlockedPage(){o.FAQTutorial.tryInit()},initBox(){var e=curBox();e.changed=!0,e.setOptions({width:560,onClean:()=>{},hideButtons:!0,bodyStyle:"padding: 0"});var t=document.querySelector(".LoginBoxForm"),n=document.querySelector(".LoginBoxForm__expire"),o=document.querySelector(".LoginBoxForm__buttonSignIn"),s=document.querySelector(".LoginBoxForm__buttonSignUp");placeholderInit(t.elements.email),placeholderInit(t.elements.pass),n.onclick=()=>(checkbox(n),!1),s.onclick=()=>(showBox("join-2.html",{act:"box",from:nav.strLoc}),!1),t.onsubmit=e=>{if(isButtonLocked(o))return!1;if(!window.submitQuickLoginForm)return!0;var s=trim(t.elements.email.value),a=trim(t.elements.pass.value),i=intval(isChecked(n));return s?trim(t.elements.pass.value)?(submitQuickLoginForm(s,a,{prg:"login_button",params:{expire_input:i}}),lockButton(o),!1):(notaBene(t.elements.pass),!1):(notaBene(t.elements.email),!1)},setTimeout(()=>t.elements.email.focus(),0)},changeMail(e,t,n){var o=trim(val("login_new_mail")),s=1;return o?(e&&(n=cur.changeMailHash),-1==o.indexOf("@")?showMsg("login_change_mail_error",getLang("reg0_error_bad_email"),"error"):(e&&(s=0),void ajax.post("/login?act=a_change_mail",{newmail:o,hash:n,from_page:s},{onDone(t){var n="login_change_mail_form";e&&(n="login_change_mail_box",curBox().removeButtons(),curBox().addButton(getLang("global_cancel"),null,"no")),val(n,t)},onFail:e=>(showMsg("login_change_mail_error",e,"error"),!0),showProgress:lockButton.pbind(t),hideProgress:unlockButton.pbind(t)}))):notaBene("login_new_mail")},initChangeMailBox(){curBox().removeButtons(),curBox().addButton(getLang("global_cancel"),null,"no"),curBox().addButton(getLang("reg0_change_mail"),w.changeMail.pbind(1)),elfocus("change_mail_new")},isBanExpired:()=>cur.unblockDate<Date.now()/1e3,canUnblockFast:()=>!0===cur.canUnblockFast,showUnblockForm(){Object(r.showComponentInBox)(s.createElement(v,{tooltips:{phone:cur.phoneTooltip,phoneCallReset:cur.phoneCallResetTooltip,code:cur.verificationCodeTooltip,codeCallReset:cur.verificationCodeCallResetTooltip,password:cur.passwordTooltip}}))},fastUnblock:e=>{var t={act:"fast_unblock",hash:e},n=document.getElementsByClassName("unblock_button--fast")[0];n?ajax.post("https://vk.com/al_login.php",t,{onDone:function(){showDoneBox(getLang("login_fast_unblocked_wait_description"),{out:5e3}),nav.reload()},onFail:function(e){return unlockButton(n),showDoneBox(e),!0},showProgress:()=>lockButton(n)}):showFastBox(getLang("global_error"))},showDeletePageBox(){showFastBox(getLang("login_blocked_delete_page_header"),getLang("login_blocked_sure_delete_page_question"),getLang("box_yes"),()=>{ajax.post("https://vk.com/al_settings.php",{act:"a_deactivate",hash:cur.deactivate_hash},{onDone:e=>{showDoneBox(e),nav.go("/id"+vk.id)},onFail:e=>{showDoneBox(e),curBox().hideProgress()}})},getLang("box_no"))}}},MZbF:function(e,t,n){"use strict";n.r(t),n.d(t,"FAQTutorial",function(){return d});var o=n("zxIV"),s=n("KkBR"),a=n("v+DW"),i="tutorial_step",r="content";function l(){var e=geByClass(i).slice(-1)[0],t=geByClass1(r,e);t.innerHTML=getTemplate("login_tutorial_finish_appeal")+t.innerHTML}var d={tryInit(){geByClass1(i)&&l()},select(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!cur.tutorialProcessing&&!isChecked(e)){var d=gpeByClass(i,e);hasClass(d,"finished")||(removeClass(geByClass1("on",d),"on"),addClass(e,"on"),ajax.post("support?act=a_select_tutorial",{name:t,id:n,load:1,ban:nav.objLoc.ban||0},{onDone(e,t){r||addClass(d,"finished");var n,a=!0,i=ge("page_body").offsetHeight+(vk.staticheader?0:Object(o.getH)(ge("page_header_cont")));if(r)do{(n=domNS(d))&&(re(n),a=!1)}while(n);if(ge("login_blocked_wrap").innerHTML+=e,l(),"login"===nav.objLoc[0]&&t){var c=document.querySelectorAll(".tutorial_step"),h=c[c.length-1];if(s.Login.isBanExpired()){s.Login.canUnblockFast()?h.innerHTML+=getTemplate("login_unblock_by_phone_fast"):h.innerHTML+=getTemplate("login_unblock_by_phone");var u=c[c.length-1].querySelector(".help_table_question__m");u&&hide(u)}else h.innerHTML+=getTemplate("login_wait_for_ban_expiration_message")}a&&scrollToY(i)},onFail:e=>(showDoneBox(e),!1),showProgress(){cur.tutorialProcessing=!0,Object(a.lockButton)(e)},hideProgress(){cur.tutorialProcessing=!1,Object(a.unlockButton)(e)}}))}},home:()=>{nav.go("/support?act=home")},back:e=>{var t=geByClass("tutorial_step"),n=t[t.length-1];2===t.length&&hide(e),hide(n),removeClass(geByClass1("on",t[t.length-2]),"on")}}},PjZB:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return a});n("rGqo"),n("a1Th"),n("Btvt");var o=n("q1tI"),s=(n("17x9"),n("pemR"));class a extends o.Component{constructor(e){super(e),this.id=Math.round(1e6*Math.random()).toString(16),this.setSpinnerParams(e)}componentWillReceiveProps(e){this.setSpinnerParams(e)}setSpinnerParams(e){this.offset=Math.round(Math.PI*e.size),this.c=.5*e.size,this.animation=function(e,t){if(!e||!t)return"";var n=Object.keys(t).map(e=>e+" {"+Object.keys(t[e]).map(n=>n+":"+t[e][n]).join(";")+"}").join("");return`@-webkit-keyframes ${e} {${n}} @keyframes ${e} {${n}}`}("dash"+this.id,{"0%":{"stroke-dashoffset":this.offset},"50%":{"stroke-dashoffset":Math.round(.25*this.offset),transform:"rotate(135deg)"},"100%":{"stroke-dashoffset":this.offset,transform:"rotate(360deg)"}})}render(){var e=this.props,t=e.style,n=e.color,a=e.size,i=e.duration,r=e.strokeWidth,l=e.className,d=this.id,c=this.offset,h=this.animation,u=Object(s.classNames)("Spinner",l);return o.createElement("div",{className:u,style:t},o.createElement("svg",{className:"Spinner__svg",width:a,height:a,viewBox:`0 0 ${a} ${a}`,xmlns:"http://www.w3.org/2000/svg"},o.createElement("g",{style:{width:a,height:a,transformOrigin:.5*a+"px "+.5*a+"px"}},o.createElement("style",{dangerouslySetInnerHTML:{__html:h}}),o.createElement("circle",{className:"Spinner__path",fill:"none",stroke:n,strokeDasharray:c,strokeDashoffset:c,strokeWidth:r,style:{animationName:"dash"+d,animationTimingFunction:"ease-in-out",animationDuration:i+"s",animationIterationCount:"infinite"},cx:.5*a,cy:.5*a,r:.5*a-.5*r}))))}}a.defaultProps={color:"#5181b8",size:19,strokeWidth:2,duration:1.4,className:""}},clTp:function(e,t,n){"use strict";function o(e){var t=e.getBoundingClientRect(),n=document.body,o=document.documentElement,s=window.pageYOffset||o.scrollTop||n.scrollTop,a=window.pageXOffset||o.scrollLeft||n.scrollLeft,i=o.clientTop||n.clientTop||0,r=o.clientLeft||n.clientLeft||0;return{top:Math.round(t.top+s-i),left:Math.round(t.left+a-r),width:e.offsetWidth,height:e.offsetHeight}}n.r(t),n.d(t,"default",function(){return o})},dLHM:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});n("91GP"),n("ioFf"),n("rGqo"),n("Btvt");var o=n("q1tI"),s=(n("17x9"),n("pemR"));function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}class r extends o.Component{constructor(e){super(e),this.onChange=e=>{this.isControlledOutside||this.setState({value:e.target.value}),this.props.onChange&&this.props.onChange(e)},this.getRef=e=>{this.element=e},void 0!==e.value||e.isControlledOutside?this.isControlledOutside=!0:this.state={value:e.initialValue||""}}render(){var e=this.props,t=e.alignment,n=e.value,r=(e.onChange,e.initialValue,e.className),l=(e.isControlledOutside,i(e,["alignment","value","onChange","initialValue","className","isControlledOutside"])),d={"Input--left":"left"===t,"Input--center":"center"===t,"Input--right":"right"===t};return o.createElement("input",a({},l,{className:Object(s.classNames)("Input",d,r),ref:this.getRef,value:this.isControlledOutside?n:this.state.value,onChange:this.onChange}))}}r.defaultProps={type:"text",initialValue:"",alignment:"left"}},dV62:function(e,t,n){"use strict";n.r(t),n.d(t,"rootId",function(){return s}),n.d(t,"registerReactApplication",function(){return a}),n.d(t,"showComponentInBox",function(){return i}),n.d(t,"destroyComponentInBox",function(){return r});var o=n("i8i4"),s="react_root";function a(e,t){window.applicationInitFunctions[e]=t,window.reactInitQueue[e]&&window.reactInitQueue[e].length&&(window.reactInitQueue[e].forEach(t=>{window.initReactApplication(e,t)}),window.reactInitQueue[e]=[])}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.onDestroy||(t.onDestroy=r),window.showFastBox(t);var n,s=document.querySelectorAll(".box_layout"),a=s[s.length-1];o.render(e,a),n=document.querySelector(".popup_box_container"),boxRefreshCoords(n)}function r(e){var t=document.querySelector(".box_layout");t&&o.unmountComponentAtNode(t);var n=window.curBox();n&&n.hide(e)}window.applicationInitFunctions||(window.applicationInitFunctions={}),window.reactInitQueue||(window.reactInitQueue={}),window.initReactApplication=(e,t)=>{window.applicationInitFunctions[e]?window.applicationInitFunctions[e](t):(window.reactInitQueue[e]||(window.reactInitQueue[e]=[]),window.reactInitQueue[e].push(t))}},vEjk:function(e,t,n){"use strict";n.r(t);var o=n("KkBR");window.Login=o.Login;try{window.stManager.done(window.jsc("https://vk.com/web/login.js"))}catch(e){console.log(e)}}});