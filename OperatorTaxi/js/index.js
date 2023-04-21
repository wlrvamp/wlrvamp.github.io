document.addEventListener("DOMContentLoaded",(function(a){new Vue({el:".wrapper",vuetify:new Vuetify,data:{val:1e3,pr1:10,pr2:2,pr3:5,service:[{img:{backgroundSize:"120px 225px"},text:"При работе над сервисом компания Такси Лайм стремилась к созданию интересного и простого приложения для водителя и пассажира"},{img:{backgroundSize:"293px 131px"},text:"IQ Taxi начало свою работу в 2015 году и сразу заявило о себе как об инновационном сервисе по вызову такси в Минске. Сейчас компания плавно расширяет горизонты."},{img:{backgroundSize:"153px 197px"},text:"Путь в борьбе за клиента такси Командир начало в ноябре 2014 года в Дзержинске. Основатели компании загорелись идеей создать службу."},{img:{backgroundSize:"192px 158px"},text:"Такси 135 раньше не осуществляло пассажирских перевозок - первоначально компания оказывала помощь в сфере эвакуации авто."},{img:{backgroundSize:"199px 199px"},text:"В конце 2017-го года запустилось такси В Десятку. Именно этот сервис принес на рынок белорусского такси новое понятие - фиксированную цену за поездку."},{img:{backgroundSize:"401px 110px"},text:"Летом 2018 года Минск встретил ЕвроТакси. Служба за счет правильной маркетинговой стратегии быстро расположила к себе жителей столицы."},{img:{backgroundSize:"322px 91px"},text:"В тестовом режиме Яндекс.Такси начало работать в Минске под крылом Такси 135 в 2016 году. Изначально популярностью сервис пользовался преимущественно у россиян, приезжающих в нашу столицу."},{img:{backgroundSize:"246px 52px"},text:"История заявившего о себе по всему миру сервиса такси Убер началась в Минске в конце 2015 года."}],milleage:3,hours:2,color:"#6095ff",height:0,comp:1,oil:2,trColor:"#eeeeee",days:3,milleageList:["4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],milleageListSm:["4","","","","8","","","","12","","","","16","","","","20"],hoursList:["1","6.75","12.5","18.25","24"],daysList:["1","8.25","15.5","22.75","30"]},methods:{navActive:function(a){var t=document.querySelector(".navigation-block-sm").classList,e=document.querySelector(".navigation-sm-btn_line_1").classList,c=document.querySelector(".navigation-sm-btn_line_2").classList,i=document.querySelector(".navigation-sm-btn_line_3").classList;t.contains("navigation-block-sm_active")?(t.remove("navigation-block-sm_active"),e.remove("navigation-sm-btn_line_1_active"),c.remove("navigation-sm-btn_line_2_active"),i.remove("navigation-sm-btn_line_3_active")):(t.add("navigation-block-sm_active"),e.add("navigation-sm-btn_line_1_active"),c.add("navigation-sm-btn_line_2_active"),i.add("navigation-sm-btn_line_3_active"))},fbActive:function(a){var t=document.querySelector(".feedback-block").classList,e=document.querySelector(".overlay").classList;t.add("feedback-block_active"),e.add("overlay_active"),window.addEventListener("DOMMouseScroll",this.preventDefault,!1),document.addEventListener("wheel",this.preventDefault,{passive:!1}),document.addEventListener("scroll",this.preventDefault,{passive:!1})},overlayHidden:function(a){var t=document.querySelector(".overlay").classList,e=document.querySelector(".feedback-block").classList;t.remove("overlay_active"),e.remove("feedback-block_active"),window.removeEventListener("DOMMouseScroll",this.preventDefault,!1),document.removeEventListener("wheel",this.preventDefault,{passive:!1}),document.removeEventListener("scroll",this.preventDefault,{passive:!1})},resultActive:function(){document.querySelector(".calculator-block__result-wrapper-sm").classList.add("calculator-block_result-wrapper-sm_active")},resultDisable:function(){document.querySelector(".calculator-block__result-wrapper-sm").classList.remove("calculator-block_result-wrapper-sm_active")},cbActive:function(a){var t=document.querySelectorAll(".callback-person-block"),e=document.querySelectorAll(".callback-img-block__img");for(i=0;i<t.length;i++)t[i].classList.remove("callback-person-block_active");for(i=0;i<t.length;i++)e[i].classList.remove("callback-img-block_img_active");a.target.classList.contains("callback-img-block_img_1")?(t[0].classList.add("callback-person-block_active"),e[0].classList.add("callback-img-block_img_active")):a.target.classList.contains("callback-img-block_img_2")?(t[1].classList.add("callback-person-block_active"),e[1].classList.add("callback-img-block_img_active")):a.target.classList.contains("callback-img-block_img_3")?(t[2].classList.add("callback-person-block_active"),e[2].classList.add("callback-img-block_img_active")):a.target.classList.contains("callback-img-block_img_4")?(t[3].classList.add("callback-person-block_active"),e[3].classList.add("callback-img-block_img_active")):a.target.classList.contains("callback-img-block_img_5")?(t[4].classList.add("callback-person-block_active"),e[4].classList.add("callback-img-block_img_active")):a.target.classList.contains("callback-img-block_img_6")&&(t[5].classList.add("callback-person-block_active"),e[5].classList.add("callback-img-block_img_active"))},mapActive:function(a){var t=document.querySelectorAll(".map-content-block__map"),e=document.querySelectorAll(".map-content-block__variant");for(i=0;i<t.length;i++)t[i].classList.remove("map-content-block_map_active"),e[i].classList.remove("map-content-block_variant_active");a.target.classList.contains("map-content-block_variant_1")?(t[0].classList.add("map-content-block_map_active"),e[0].classList.add("map-content-block_variant_active")):a.target.classList.contains("map-content-block_variant_2")?(t[1].classList.add("map-content-block_map_active"),e[1].classList.add("map-content-block_variant_active")):a.target.classList.contains("map-content-block_variant_3")?(t[2].classList.add("map-content-block_map_active"),e[2].classList.add("map-content-block_variant_active")):a.target.classList.contains("map-content-block_variant_4")&&(t[3].classList.add("map-content-block_map_active"),e[3].classList.add("map-content-block_variant_active"))}},computed:{price:function(){return Math.round(15*+this.hours*+this.days*15*+this.comp/+this.oil/(+this.milleage+1)*7)}}})}));