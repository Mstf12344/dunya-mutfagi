/* Burger chases the French fries next to the brand name (decorative) */
(function(){
  var FRIES='<span class="ck-c ck-f"><svg class="ck-s" viewBox="0 0 44 60" aria-hidden="true" stroke-linejoin="round" stroke-linecap="round">'
   +'<g class="ck-ar a" style="transform-origin:8px 26px"><rect x="6.5" y="26" width="3" height="13" rx="1.5" fill="#f4efe6" stroke="#2b2b2b" stroke-width="1"/><circle cx="8" cy="40" r="2.6" fill="#f4efe6" stroke="#2b2b2b" stroke-width="1"/></g>'
   +'<g class="ck-ar b" style="transform-origin:36px 26px"><rect x="34.5" y="26" width="3" height="13" rx="1.5" fill="#f4efe6" stroke="#2b2b2b" stroke-width="1"/><circle cx="36" cy="40" r="2.6" fill="#f4efe6" stroke="#2b2b2b" stroke-width="1"/></g>'
   +'<g class="ck-lg a" style="transform-origin:17px 40px"><rect x="15.5" y="40" width="3" height="14" rx="1.5" fill="#f4efe6" stroke="#2b2b2b" stroke-width="1"/><ellipse cx="18.5" cy="55" rx="4.2" ry="2.2" fill="#f4efe6" stroke="#2b2b2b" stroke-width="1"/></g>'
   +'<g class="ck-lg b" style="transform-origin:27px 40px"><rect x="25.5" y="40" width="3" height="14" rx="1.5" fill="#f4efe6" stroke="#2b2b2b" stroke-width="1"/><ellipse cx="28.5" cy="55" rx="4.2" ry="2.2" fill="#f4efe6" stroke="#2b2b2b" stroke-width="1"/></g>'
   +'<g fill="#f7e6a0" stroke="#6b4a12" stroke-width=".9"><rect x="8.5" y="6" width="4" height="15" rx=".6" transform="rotate(-14 10.5 21)"/><rect x="12.5" y="3" width="4" height="16" rx=".6" transform="rotate(-6 14.5 20)"/><rect x="17" y="1" width="4" height="18" rx=".6"/><rect x="21.5" y="3" width="4" height="16" rx=".6" transform="rotate(3 23.5 20)"/><rect x="25.5" y="2" width="4" height="17" rx=".6" transform="rotate(8 27.5 20)"/><rect x="29.5" y="6" width="4" height="15" rx=".6" transform="rotate(15 31.5 21)"/></g>'
   +'<path d="M7 18H37L34 41H10Z" fill="#d8392f" stroke="#4a1410" stroke-width="1.2"/><path d="M7 18H10.5L13 41H10Z" fill="#a82a21"/><path d="M37 18H33.5L31 41H34Z" fill="#a82a21"/>'
   +'<circle cx="17.5" cy="27.5" r="3.5" fill="#fff" stroke="#2b2b2b" stroke-width=".9"/><circle cx="26.5" cy="27.5" r="3.5" fill="#fff" stroke="#2b2b2b" stroke-width=".9"/><circle cx="18.2" cy="27.8" r="1.7" fill="#3b2314"/><circle cx="27.2" cy="27.8" r="1.7" fill="#3b2314"/><circle cx="18.7" cy="27.2" r=".6" fill="#fff"/><circle cx="27.7" cy="27.2" r=".6" fill="#fff"/>'
   +'<path d="M13.8 22.6Q17.5 20.4 21 22.6M23 22.6Q26.5 20.4 30.2 22.6" fill="none" stroke="#2b2b2b" stroke-width="1"/><path d="M16.5 33.5Q22 38 27.5 33.5" fill="none" stroke="#2b2b2b" stroke-width="1.3"/></svg></span>';
  var BURGER='<span class="ck-c ck-b"><svg class="ck-s" viewBox="0 0 52 56" aria-hidden="true" stroke-linejoin="round" stroke-linecap="round">'
   +'<g class="ck-ar a" style="transform-origin:6px 26px"><rect x="4.5" y="26" width="3" height="13" rx="1.5" fill="#e8b878" stroke="#5a2e0e" stroke-width="1"/><circle cx="6" cy="40" r="2.6" fill="#e8b878" stroke="#5a2e0e" stroke-width="1"/></g>'
   +'<g class="ck-lg a" style="transform-origin:20px 40px"><rect x="18.5" y="40" width="3" height="13" rx="1.5" fill="#e8b878" stroke="#5a2e0e" stroke-width="1"/><ellipse cx="21.5" cy="54" rx="4.4" ry="2.2" fill="#e8b878" stroke="#5a2e0e" stroke-width="1"/></g>'
   +'<g class="ck-lg b" style="transform-origin:32px 40px"><rect x="30.5" y="40" width="3" height="13" rx="1.5" fill="#e8b878" stroke="#5a2e0e" stroke-width="1"/><ellipse cx="33.5" cy="54" rx="4.4" ry="2.2" fill="#e8b878" stroke="#5a2e0e" stroke-width="1"/></g>'
   +'<path d="M7 35H45Q45 40.5 40 40.5H12Q7 40.5 7 35Z" fill="#d98a3a" stroke="#5a2e0e" stroke-width="1.1"/>'
   +'<path d="M5 31q3.4 4 6.8 0t6.8 0 6.8 0 6.8 0 6.8 0 6.8 0V35H5Z" fill="#7cc242" stroke="#3a6b1c" stroke-width="1"/>'
   +'<rect x="7" y="28.5" width="38" height="3.4" rx="1.7" fill="#e03b2e" stroke="#7a1d14" stroke-width=".8"/>'
   +'<rect x="6" y="23.5" width="40" height="5.6" rx="2.8" fill="#5b2a1a" stroke="#2b120a" stroke-width="1"/>'
   +'<path d="M6.5 20.5H45.5L44 24H36L34.5 27 33 24H8Z" fill="#f5b81f" stroke="#8a5a0a" stroke-width=".9"/>'
   +'<rect x="7" y="18" width="38" height="3.4" rx="1.7" fill="#7fb04a" stroke="#3a6b1c" stroke-width=".8"/>'
   +'<rect x="6.5" y="16" width="39" height="2.8" rx="1.4" fill="#9a4f9e" stroke="#4d1f50" stroke-width=".8"/>'
   +'<path d="M5 17Q5 1.5 26 1.5Q47 1.5 47 17Z" fill="#e08f3b" stroke="#5a2e0e" stroke-width="1.2"/>'
   +'<g fill="#fff3cf"><ellipse cx="14" cy="6.2" rx="1" ry=".55" transform="rotate(-25 14 6.2)"/><ellipse cx="22" cy="3.6" rx="1" ry=".55"/><ellipse cx="31" cy="3.8" rx="1" ry=".55" transform="rotate(20 31 3.8)"/><ellipse cx="39" cy="7" rx="1" ry=".55" transform="rotate(35 39 7)"/><ellipse cx="9.5" cy="11.5" rx="1" ry=".55" transform="rotate(-50 9.5 11.5)"/><ellipse cx="42.5" cy="12" rx="1" ry=".55" transform="rotate(50 42.5 12)"/></g>'
   +'<circle cx="20" cy="10.6" r="3.3" fill="#fff" stroke="#2b2b2b" stroke-width=".9"/><circle cx="32" cy="10.6" r="3.3" fill="#fff" stroke="#2b2b2b" stroke-width=".9"/><circle cx="20.8" cy="10.9" r="1.7" fill="#4a2a14"/><circle cx="32.8" cy="10.9" r="1.7" fill="#4a2a14"/><circle cx="21.3" cy="10.3" r=".6" fill="#fff"/><circle cx="33.3" cy="10.3" r=".6" fill="#fff"/>'
   +'<path d="M16.8 6.6Q20 4.6 23.2 6.6M28.8 6.6Q32 4.6 35.2 6.6" fill="none" stroke="#5a2e0e" stroke-width="1.1"/><path d="M22 14.6Q26 17.8 30 14.6" fill="none" stroke="#5a2e0e" stroke-width="1.3"/>'
   +'<g class="ck-ho" style="transform-origin:45px 25px"><rect x="43.5" y="25" width="3" height="14" rx="1.5" fill="#e8b878" stroke="#5a2e0e" stroke-width="1"/><circle cx="45" cy="38" r="2.7" fill="#e8b878" stroke="#5a2e0e" stroke-width="1"/></g></svg></span>';
  function add(el){if(!el||el.querySelector(".ck"))return;var d=document.createElement("span");d.className="ck";d.setAttribute("aria-hidden","true");d.innerHTML=FRIES+BURGER;el.appendChild(d)}
  var KETCH="<span class=\"ck-c ck-k\"><svg class=\"ck-s\" viewBox=\"0 0 36 60\" aria-hidden=\"true\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><g class=\"ck-ar a\" style=\"transform-origin:7px 27px\"><rect x=\"5.5\" y=\"27\" width=\"3\" height=\"13\" rx=\"1.5\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><circle cx=\"7.0\" cy=\"41\" r=\"2.6\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/></g><g class=\"ck-ar b\" style=\"transform-origin:29px 27px\"><rect x=\"27.5\" y=\"27\" width=\"3\" height=\"13\" rx=\"1.5\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><circle cx=\"29.0\" cy=\"41\" r=\"2.6\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/></g><g class=\"ck-lg a\" style=\"transform-origin:14px 41px\"><rect x=\"12.5\" y=\"41\" width=\"3\" height=\"14\" rx=\"1.5\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><ellipse cx=\"15.5\" cy=\"56\" rx=\"4.2\" ry=\"2.2\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/></g><g class=\"ck-lg b\" style=\"transform-origin:22px 41px\"><rect x=\"20.5\" y=\"41\" width=\"3\" height=\"14\" rx=\"1.5\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><ellipse cx=\"23.5\" cy=\"56\" rx=\"4.2\" ry=\"2.2\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/></g><path d=\"M15 1H21L20.5 8H15.5Z\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><rect x=\"12\" y=\"7\" width=\"12\" height=\"6\" rx=\"1.5\" fill=\"#fff\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><path d=\"M8 15Q8 12 12 12H24Q28 12 28 15V41Q28 44 25 44H11Q8 44 8 41Z\" fill=\"#d8392f\" stroke=\"#4a1410\" stroke-width=\"1.2\"/><path d=\"M8 15Q8 12 12 12H14V44H11Q8 44 8 41Z\" fill=\"#a82a21\"/><rect x=\"9.5\" y=\"31\" width=\"17\" height=\"9\" rx=\"1.5\" fill=\"#fff4d6\" stroke=\"#4a1410\" stroke-width=\".8\"/><text x=\"18\" y=\"38\" text-anchor=\"middle\" font-size=\"6\" font-weight=\"700\" font-family=\"Arial\" fill=\"#d8392f\">K</text><circle cx=\"14.5\" cy=\"20\" r=\"3.3\" fill=\"#fff\" stroke=\"#2b2b2b\" stroke-width=\".9\"/><circle cx=\"21.5\" cy=\"20\" r=\"3.3\" fill=\"#fff\" stroke=\"#2b2b2b\" stroke-width=\".9\"/><circle cx=\"15.2\" cy=\"20.3\" r=\"1.6\" fill=\"#3b2314\"/><circle cx=\"22.2\" cy=\"20.3\" r=\"1.6\" fill=\"#3b2314\"/><path d=\"M11.8 15.5Q14.5 14 17 15.5M19 15.5Q21.5 14 24.2 15.5\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><path d=\"M14.5 26Q18 29.5 21.5 26\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"1.3\"/></svg></span>";
  var PARSLEY="<span class=\"ck-c ck-p\"><svg class=\"ck-s\" viewBox=\"0 0 36 60\" aria-hidden=\"true\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><g class=\"ck-ar a\" style=\"transform-origin:7px 27px\"><rect x=\"5.5\" y=\"27\" width=\"3\" height=\"13\" rx=\"1.5\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><circle cx=\"7.0\" cy=\"41\" r=\"2.6\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/></g><g class=\"ck-ar b\" style=\"transform-origin:29px 27px\"><rect x=\"27.5\" y=\"27\" width=\"3\" height=\"13\" rx=\"1.5\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><circle cx=\"29.0\" cy=\"41\" r=\"2.6\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/></g><g class=\"ck-lg a\" style=\"transform-origin:14px 41px\"><rect x=\"12.5\" y=\"41\" width=\"3\" height=\"14\" rx=\"1.5\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><ellipse cx=\"15.5\" cy=\"56\" rx=\"4.2\" ry=\"2.2\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/></g><g class=\"ck-lg b\" style=\"transform-origin:22px 41px\"><rect x=\"20.5\" y=\"41\" width=\"3\" height=\"14\" rx=\"1.5\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><ellipse cx=\"23.5\" cy=\"56\" rx=\"4.2\" ry=\"2.2\" fill=\"#f4efe6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/></g><path d=\"M15 1H21L20.5 8H15.5Z\" fill=\"#f2c230\" stroke=\"#6b5a1c\" stroke-width=\"1\"/><rect x=\"12\" y=\"7\" width=\"12\" height=\"6\" rx=\"1.5\" fill=\"#f2c230\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><path d=\"M8 15Q8 12 12 12H24Q28 12 28 15V41Q28 44 25 44H11Q8 44 8 41Z\" fill=\"#fff0b8\" stroke=\"#6b5a1c\" stroke-width=\"1.2\"/><path d=\"M8 15Q8 12 12 12H14V44H11Q8 44 8 41Z\" fill=\"#e6cf84\"/><rect x=\"9.5\" y=\"31\" width=\"17\" height=\"9\" rx=\"1.5\" fill=\"#3a7bd5\" stroke=\"#6b5a1c\" stroke-width=\".8\"/><text x=\"18\" y=\"38\" text-anchor=\"middle\" font-size=\"6\" font-weight=\"700\" font-family=\"Arial\" fill=\"#fff\">M</text><circle cx=\"14.5\" cy=\"20\" r=\"3.3\" fill=\"#fff\" stroke=\"#2b2b2b\" stroke-width=\".9\"/><circle cx=\"21.5\" cy=\"20\" r=\"3.3\" fill=\"#fff\" stroke=\"#2b2b2b\" stroke-width=\".9\"/><circle cx=\"15.2\" cy=\"20.3\" r=\"1.6\" fill=\"#3b2314\"/><circle cx=\"22.2\" cy=\"20.3\" r=\"1.6\" fill=\"#3b2314\"/><path d=\"M11.8 15.5Q14.5 14 17 15.5M19 15.5Q21.5 14 24.2 15.5\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><path d=\"M14.5 26Q18 29.5 21.5 26\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"1.3\"/></svg></span>";

  /* Walk engine: two-bone IK legs, planted feet, synced body bob, counter-swinging arms */
  function walk(st){
    var NS="http://www.w3.org/2000/svg",EXT=9,reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
    var cast=[];
    st.querySelectorAll(".ck-c").forEach(function(c,i){
      var svg=c.querySelector("svg"),vb=svg.getAttribute("viewBox").split(" ").map(Number),W=vb[2],H=vb[3]+EXT;
      svg.setAttribute("viewBox","0 0 "+W+" "+H);
      var legs=[].slice.call(svg.querySelectorAll(".ck-lg")),info=[];
      legs.forEach(function(g){var r=g.querySelector("rect");info.push({hx:+r.getAttribute("x")+ +r.getAttribute("width")/2,hy:+r.getAttribute("y"),fill:r.getAttribute("fill"),stroke:r.getAttribute("stroke"),side:g.classList.contains("a")?0:1});g.remove()});
      var body=document.createElementNS(NS,"g");
      while(svg.firstChild)body.appendChild(svg.firstChild);
      var lg=document.createElementNS(NS,"g");svg.appendChild(lg);svg.appendChild(body);
      var footY=H-2.7,parts=info.map(function(f){
        var g=document.createElementNS(NS,"g");lg.appendChild(g);
        var o=document.createElementNS(NS,"path"),n=document.createElementNS(NS,"path"),sh=document.createElementNS(NS,"ellipse");
        o.setAttribute("fill","none");o.setAttribute("stroke",f.stroke);o.setAttribute("stroke-width","4.4");o.setAttribute("stroke-linecap","round");o.setAttribute("stroke-linejoin","round");
        n.setAttribute("fill","none");n.setAttribute("stroke",f.fill);n.setAttribute("stroke-width","2.2");n.setAttribute("stroke-linecap","round");n.setAttribute("stroke-linejoin","round");
        sh.setAttribute("rx","4.4");sh.setAttribute("ry","2.3");sh.setAttribute("fill",f.fill);sh.setAttribute("stroke",f.stroke);sh.setAttribute("stroke-width","1");
        g.appendChild(o);g.appendChild(n);g.appendChild(sh);
        return {f:f,o:o,n:n,sh:sh,len:footY-f.hy}});
      var arms=[].slice.call(svg.querySelectorAll(".ck-ar")).map(function(a){var m=/(-?[\d.]+)px (-?[\d.]+)px/.exec(a.getAttribute("style")||"");a.removeAttribute("style");return {el:a,ox:+m[1],oy:+m[2],side:a.classList.contains("a")?0:1}});
      cast.push({c:c,svg:svg,body:body,parts:parts,arms:arms,H:H,footY:footY,delay:[0,.8,1.65,2.5][i]||0,x:0})});
    function frame(now){
      if(!st.isConnected)return;
      var t=now/1000,Wd=st.clientWidth,M=Wd*.3,loop=Wd*1.45,speed=loop/10; // px/s
      cast.forEach(function(k){
        var sc=k.svg.clientHeight/k.H||1,v=speed/sc,len=k.parts[0].len,S=len*.62,T=2*S/v;
        var ph=reduce?.18:(t/T)%1,dist=reduce?[.2,.35,.5,.62][cast.indexOf(k)]*Wd:((t-k.delay)*speed);
        var x=reduce?dist-0:((dist%loop)+loop)%loop-M-k.svg.clientWidth*.4;
        k.c.style.transform="translateX("+x.toFixed(1)+"px)";
        var bob=Math.min(len*.1,2.2),dy=-bob*(1-Math.cos(4*Math.PI*ph))/2+bob*.5;
        k.body.setAttribute("transform","translate(0 "+dy.toFixed(2)+") rotate("+(2.2*Math.sin(4*Math.PI*ph+1)).toFixed(2)+" "+(k.parts[0].f.hx+4)+" "+k.parts[0].f.hy+")");
        k.parts.forEach(function(p){
          var f=p.f,q=(ph+f.side*.5)%1,fx,fy=0,ang=0,L1=p.len*.57,L2=p.len*.57;
          if(q<.5){fx=S/2-S*(q/.5);var r=(q-.35)/.15;ang=r>0?16*Math.min(1,r):0}
          else{var u=(q-.5)/.5,e=u*u*(3-2*u);fx=-S/2+S*e;fy=p.len*.3*Math.sin(Math.PI*u);ang=-22*Math.sin(Math.PI*u)}
          var hx=f.hx,hy=f.hy+dy,ex=hx+fx,ey=k.footY-fy,dx=ex-hx,dd=ey-hy,d=Math.min(Math.hypot(dx,dd),L1+L2-.05),ux=dx/Math.hypot(dx,dd),uy=dd/Math.hypot(dx,dd);
          var a=(L1*L1-L2*L2+d*d)/(2*d),h=Math.sqrt(Math.max(0,L1*L1-a*a)),kx=hx+a*ux+h*uy,ky=hy+a*uy-h*ux;
          var dstr="M"+hx.toFixed(2)+" "+hy.toFixed(2)+"L"+kx.toFixed(2)+" "+ky.toFixed(2)+"L"+ex.toFixed(2)+" "+ey.toFixed(2);
          p.o.setAttribute("d",dstr);p.n.setAttribute("d",dstr);
          p.sh.setAttribute("cx",(ex+1.3).toFixed(2));p.sh.setAttribute("cy",(ey+.1).toFixed(2));p.sh.setAttribute("transform","rotate("+ang.toFixed(1)+" "+ex.toFixed(2)+" "+ey.toFixed(2)+")")});
        k.arms.forEach(function(a){a.el.setAttribute("transform","rotate("+((a.side?-1:1)*30*Math.cos(2*Math.PI*ph)).toFixed(1)+" "+a.ox+" "+a.oy+")")})});
      if(!reduce)requestAnimationFrame(frame)}
    requestAnimationFrame(frame)}
  function stage(){var m=document.querySelector(".hero .hb-main");if(!m||document.querySelector(".hb-stage"))return;
    var d=document.createElement("div");d.className="hb-stage";d.setAttribute("aria-hidden","true");
    d.innerHTML='<div class="hb-ground"></div>'+FRIES+BURGER+KETCH+PARSLEY;
    d.insertAdjacentHTML("afterbegin","<svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\"><filter id=\"ck3d\" x=\"-8%\" y=\"-8%\" width=\"116%\" height=\"116%\" color-interpolation-filters=\"sRGB\"><feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"3.2\" result=\"b\"/><feDiffuseLighting in=\"b\" surfaceScale=\"7\" diffuseConstant=\"1.15\" lighting-color=\"#fff\" result=\"d\"><feDistantLight azimuth=\"235\" elevation=\"52\"/></feDiffuseLighting><feComposite in=\"SourceGraphic\" in2=\"d\" operator=\"arithmetic\" k1=\"1\" k2=\"0\" k3=\"0\" k4=\"0\" result=\"lit\"/><feSpecularLighting in=\"b\" surfaceScale=\"7\" specularConstant=\".5\" specularExponent=\"26\" lighting-color=\"#fff\" result=\"sp\"><feDistantLight azimuth=\"235\" elevation=\"52\"/></feSpecularLighting><feComposite in=\"sp\" in2=\"SourceAlpha\" operator=\"in\" result=\"sp2\"/><feComposite in=\"lit\" in2=\"sp2\" operator=\"arithmetic\" k1=\"0\" k2=\"1\" k3=\"1\" k4=\"0\"/></filter></svg>");
    m.insertAdjacentElement("afterend",d);walk(d)}
  function go(){document.querySelectorAll(".au-brand,.logo").forEach(add);stage()}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",go);else go();
})();
