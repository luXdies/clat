<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>CLAT 2027 · OMR Answer Sheet</title>
<style>
:root{--bg:#f2eee4;--card:#faf7f0;--ink:#1c1b19;--mut:#6f6a5f;--line:#cfc8b8;--acc:#a8321f;--ok:#2c6b41;--bad:#b3261e;--serif:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#171613;--card:#1f1d19;--ink:#ece7da;--mut:#9a9384;--line:#38342c;--acc:#e0714f;--ok:#6fbf8a;--bad:#ef7b72}}
:root[data-theme="dark"]{--bg:#171613;--card:#1f1d19;--ink:#ece7da;--mut:#9a9384;--line:#38342c;--acc:#e0714f;--ok:#6fbf8a;--bad:#ef7b72}
*{box-sizing:border-box}html,body{margin:0}
body{background:var(--bg);color:var(--ink);font:15px/1.45 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.wrap{max-width:980px;margin:0 auto;padding:0 16px 60px}
.top{padding:28px 0 14px;border-bottom:2px solid var(--ink)}
.eyebrow{font:600 11px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--acc)}
h1{font:700 clamp(30px,6vw,46px)/1.05 var(--serif);margin:10px 0 6px;letter-spacing:-.01em}
.rule{color:var(--mut);font-size:13px}
.tabs{display:flex;gap:0;margin-top:16px}
.tabs a{font:600 13px var(--mono);padding:8px 16px;border:1.5px solid var(--ink);color:var(--ink);text-decoration:none;margin-right:-1.5px}
.tabs a.on{background:var(--ink);color:var(--bg)}
.bar{position:sticky;top:env(safe-area-inset-top,0px);z-index:5;background:var(--bg);border-bottom:1px solid var(--line);padding:10px 0;display:flex;align-items:center;gap:14px;flex-wrap:wrap}
body::before{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);background:var(--bg);z-index:10}
.stat{font:13px var(--mono);color:var(--mut)}.stat b{color:var(--ink);font-size:15px}
.sp{flex:1}
.btn{font:600 13px var(--mono);padding:9px 14px;border:1.5px solid var(--ink);background:transparent;color:var(--ink);cursor:pointer}
.btn.p{background:var(--acc);border-color:var(--acc);color:#fff}
h2{font:700 21px var(--serif);margin:30px 0 4px;display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid var(--line);padding-bottom:6px}
h2 small{font:12px var(--mono);color:var(--mut);font-weight:400}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:0 22px}
.row{display:flex;align-items:center;gap:7px;padding:5px 0;border-bottom:1px dotted var(--line)}
.no{font:12px var(--mono);color:var(--mut);width:28px;text-align:right;margin-right:4px}
.b{width:34px;height:34px;border-radius:50%;border:1.5px solid var(--ink);background:transparent;color:var(--mut);font:11px var(--mono);cursor:pointer;padding:0}
.b.sel{background:var(--ink);color:var(--card)}
.b.ok{background:var(--ok);border-color:var(--ok);color:#fff}
.b.bad{background:var(--bad);border-color:var(--bad);color:#fff}
.b.key{border:2.5px solid var(--ok);color:var(--ok)}
.tag{font:11px var(--mono);margin-left:auto;color:var(--mut);min-width:40px;text-align:right}
.tag.g{color:var(--ok)}.tag.r{color:var(--bad)}
#res{display:none;background:var(--card);border:1.5px solid var(--ink);padding:20px;margin:20px 0}
.score{font:700 64px/1 var(--serif)}.score small{font:16px var(--mono);color:var(--mut);font-weight:400}
.line{font:13px var(--mono);margin:10px 0 4px}
table{width:100%;border-collapse:collapse;margin-top:14px;font:13px var(--mono)}
th,td{padding:7px 4px;text-align:right;border-bottom:1px solid var(--line)}th:first-child,td:first-child{text-align:left}
th{color:var(--mut);font-weight:600}
.note{font-size:12px;color:var(--mut);margin-top:12px}
footer{margin-top:40px;font-size:12px;color:var(--mut)}
@media (max-width:520px){.grid{grid-template-columns:1fr}.b{width:40px;height:40px}}
</style></head><body><div class="wrap">
<div class="top">
<div class="eyebrow">CLAT 2027 · UG · Practice</div>
<h1>OMR answer sheet</h1>
<div class="rule">Fill a bubble per question. Correct +1, wrong −0.25, blank 0. Tap a filled bubble again to clear it.</div>
<div class="tabs"><a href="#mock1" id="t1">Mock 1</a><a href="#mock2" id="t2">Mock 2</a></div>
</div>
<div class="bar"><span class="stat"><b id="cnt">0</b> / 120 marked</span><span class="stat" id="tm">00:00</span><span class="sp"></span><button class="btn" id="clr">Clear sheet</button><button class="btn p" id="go">Submit</button></div>
<div id="res"></div>
<div id="sheet"></div>
<footer>Unofficial practice tool. Answers are saved on this device only. Keys are taken from the mock PDFs.</footer>
</div>
<script>
var K1="BCDCABCACB"+"BBBCABBBCB"+"BBBCBBCDCA"+"ACAADBCBCA"+"BBACBBBAAC"+"CBDDBABCAD"+"BCBAABCCAA"+"ABBBBABABB"+"ABCBABCDAB"+"BACBACACBC"+"CACBABACBC"+"BCBACBCCBA";
var K2="BBBBABABBC"+"BCBBABBBBB"+"BBBBABABBC"+"BBABABBAAB"+"AACAAAAABC"+"BAAACAAACA"+"BAABAABAAB"+"ACAABABAAC"+"ABABABACAA"+"BAAAABAAAA"+"ABAABABABA"+"CAAABABCBA";
var A2="--AC-CCCCD"+"CDCCCCCCCC"+"CCCCCCCCCD"+"CCCCBCCCCC"+"CCBCCBCBCD"+"CCBBDCBBDC"+"CBCCBBBBBC"+"BDBCCBCCBD"+"BCBCBCBDBB"+"CBBBBCCBCB"+"BACBCBABCB"+"----------";
var NOTE2="Mock 2 accepts either of two equivalent options on Q3–4 and Q6–110. Q1, Q2, Q5 and the Quant block accept one. Q113 uses ₹60,000 (A). Q120 follows the printed key, though the computed value (₹12,724) is not among the options.";
var SECS=[["English Language",1,25],["Current Affairs & GK",26,55],["Legal Reasoning",56,85],["Logical Reasoning",86,110],["Quantitative Aptitude",111,120]];
var id,st,done,t0,iv,sheet=document.getElementById("sheet"),res=document.getElementById("res");
function key(){return id===1?K1:K2}
function alt(i){return id===2?A2[i-1]:"-"}
function load(){st={};done=false;t0=Date.now();try{var s=JSON.parse(localStorage.getItem("clat"+id)||"null");if(s){st=s.a||{};t0=s.t||t0}}catch(e){}}
function save(){try{localStorage.setItem("clat"+id,JSON.stringify({a:st,t:t0}))}catch(e){}}
function count(){document.getElementById("cnt").textContent=Object.keys(st).length}
function build(){
  var h="";
  SECS.forEach(function(s){
    h+='<h2>'+s[0]+'<small>Q'+s[1]+'–'+s[2]+'</small></h2><div class="grid">';
    for(var i=s[1];i<=s[2];i++){
      h+='<div class="row" id="q'+i+'"><span class="no">'+i+'</span>';
      "ABCD".split("").forEach(function(l){h+='<button class="b'+(st[i]===l?' sel':'')+'" data-q="'+i+'" data-o="'+l+'">'+l+'</button>'});
      h+='<span class="tag"></span></div>';
    }
    h+='</div>';
  });
  sheet.innerHTML=h;res.style.display="none";res.innerHTML="";
  document.getElementById("go").textContent="Submit";
  document.getElementById("t1").className=id===1?"on":"";document.getElementById("t2").className=id===2?"on":"";
  count();clearInterval(iv);iv=setInterval(tick,1000);tick();
}
function tick(){if(done)return;var s=Math.floor((Date.now()-t0)/1000);document.getElementById("tm").textContent=String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")}
sheet.addEventListener("click",function(e){
  var b=e.target.closest(".b");if(!b||done)return;
  var q=b.dataset.q,o=b.dataset.o;
  if(st[q]===o)delete st[q];else st[q]=o;
  save();
  document.querySelectorAll("#q"+q+" .b").forEach(function(x){x.classList.toggle("sel",st[q]===x.dataset.o)});
  count();
});
var cl=0,clb=document.getElementById("clr");
clb.onclick=function(){
  if(!cl){cl=1;clb.textContent="Tap again to clear";setTimeout(function(){cl=0;clb.textContent="Clear sheet"},3000);return}
  cl=0;clb.textContent="Clear sheet";try{localStorage.removeItem("clat"+id)}catch(e){}
  load();build();
};
document.getElementById("go").onclick=function(){
  if(done){done=false;build();return}
  done=true;clearInterval(iv);
  var C=0,W=0,rows="",K=key();
  SECS.forEach(function(s){
    var c=0,w=0,u=0;
    for(var i=s[1];i<=s[2];i++){
      var a=st[i],k=K[i-1],x2=alt(i),row=document.getElementById("q"+i),tag=row.querySelector(".tag");
      row.querySelectorAll(".b").forEach(function(x){
        var o=x.dataset.o;x.classList.remove("sel");
        if(o===k||o===x2)x.classList.add(a===o?"ok":"key");
        else if(o===a)x.classList.add("bad");
      });
      if(!a){u++;tag.textContent="—"}
      else if(a===k||a===x2){c++;tag.textContent="+1";tag.className="tag g"}
      else{w++;tag.textContent="−0.25";tag.className="tag r"}
    }
    C+=c;W+=w;
    rows+="<tr><td>"+s[0]+"</td><td>"+c+"</td><td>"+w+"</td><td>"+u+"</td><td>"+(c-w*0.25).toFixed(2)+"</td></tr>";
  });
  var A=C+W;
  res.style.display="block";
  res.innerHTML='<div class="eyebrow">Result · Mock '+id+'</div><div class="score">'+(C-W*0.25).toFixed(2)+' <small>/ 120</small></div>'+
    '<div class="line">'+C+' correct · '+W+' wrong · '+(120-A)+' blank · accuracy '+(A?Math.round(C/A*100):0)+'% · time '+document.getElementById("tm").textContent+'</div>'+
    '<table><tr><th>Section</th><th>Right</th><th>Wrong</th><th>Blank</th><th>Marks</th></tr>'+rows+'</table>'+
    '<div class="note">Green fill: your correct pick. Red fill: your wrong pick. Green ring: accepted answer.'+(id===2?'<br>'+NOTE2:'')+'</div>';
  this.textContent="Review done · Edit again";
  window.scrollTo({top:0,behavior:"smooth"});
};
function route(){id=location.hash==="#mock1"?1:2;load();build()}
window.addEventListener("hashchange",route);route();
</script></body></html>
