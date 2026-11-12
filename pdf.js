function buildActPdf(sections, logo) {
 const pages=[];
 let canvas,ctx,y;
 const W=595,H=842, left=48, right=547, bottom=780;
 const green="#194742", ink="#24352f", muted="#52665d", rose="#913e53";
 function text(value,x,baseline,font,color=ink){
  ctx.font=font;ctx.fillStyle=color;ctx.fillText(value,x,baseline);
 }
 function line(x1,y1,x2,y2,color){
  ctx.strokeStyle=color;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
 }
 function newPage(){
  canvas=document.createElement("canvas");canvas.width=W*2;canvas.height=H*2;
  ctx=canvas.getContext("2d");ctx.scale(2,2);
  ctx.fillStyle="#fffdf8";ctx.fillRect(0,0,W,H);
  ctx.fillStyle=green;ctx.fillRect(0,0,W,8);
  if(logo.complete&&logo.naturalWidth)ctx.drawImage(logo,447,23,100,100*logo.naturalHeight/logo.naturalWidth);
  text("OMBALIZ THÉRAPIE   /   ACCEPTATION ET ENGAGEMENT",left,49,"bold 9px Arial",rose);
  text(pages.length?"Ma synthèse ACT · suite":"Ma synthèse ACT",left,85,"32px Georgia",green);
  line(left,102,right,102,"#c9d4c7");y=123;pages.push(canvas);
 }
 function wrap(value,font,width){
  ctx.font=font;
  const lines=[];
  for(const paragraph of String(value).split(/\r?\n/)){
   let current="";
   for(const word of paragraph.trim().split(/\s+/)){
    if(!word)continue;
    const next=current?current+" "+word:word;
    if(ctx.measureText(next).width<=width){current=next;continue;}
    if(current){lines.push(current);current="";}
    for(const char of word){
     if(ctx.measureText(current+char).width>width){lines.push(current);current="";}
     current+=char;
    }
   }
   lines.push(current);
  }
  return lines;
 }
 function heading(title){
  ctx.fillStyle="#e9efe4";ctx.fillRect(left,y,right-left,26);
  text(title,left+11,y+18,"bold 12px Arial",green);y+=39;
 }
 newPage();
 text("Mes exercices et mes prochains pas",left,y,"15px Georgia",muted);y+=29;
 for(const section of sections){
  if(y+75>bottom)newPage();
  heading(section.title);
  for(const [label,value] of section.rows){
   const labelFont="bold 10.5px Arial";
   const valueFont="12px Arial";
   const labelLines=wrap(label,labelFont,right-left-22);
   const lines=wrap(value,valueFont,right-left-22);
   if(y+labelLines.length*15+22>bottom){newPage();heading(section.title+" · suite");}
   for(const s of labelLines){text(s,left+11,y,labelFont,rose);y+=15;}
   for(const s of lines){
    if(y+16>bottom){newPage();heading(section.title+" · suite");}
    text(s,left+11,y,valueFont);y+=16;
   }
   y+=9;
  }
  y+=8;
 }
 for(let i=0;i<pages.length;i++){
  ctx=pages[i].getContext("2d");
  line(left,795,right,795,"#c9d4c7");
  text("Document personnel  ·  contact@ombaliz.com",left,816,"10px Arial",muted);
  ctx.textAlign="right";text((i+1)+" / "+pages.length,right,816,"10px Arial",muted);
 }
 return encodeActPdf(pages,W,H);
}
function encodeActPdf(pages,width,height){
 const encoder=new TextEncoder(),parts=[],offsets=[0];
 let size=0;
 function write(value){const data=typeof value==="string"?encoder.encode(value):value;parts.push(data);size+=data.length;}
 function object(id,body,stream){
  offsets[id]=size;write(id+" 0 obj\n"+body);
  if(stream){write("\nstream\n");write(stream);write("\nendstream");}
  write("\nendobj\n");
 }
 write("%PDF-1.4\n%\u00e2\u00e3\u00cf\u00d3\n");
 object(1,"<< /Type /Catalog /Pages 2 0 R >>");
 object(2,"<< /Type /Pages /Count "+pages.length+" /Kids ["+pages.map((_,i)=>(3+i*3)+" 0 R").join(" ")+"] >>");
 pages.forEach((canvas,i)=>{
  const id=3+i*3;
  const jpeg=Uint8Array.from(atob(canvas.toDataURL("image/jpeg",.92).split(",")[1]),c=>c.charCodeAt(0));
  const commands=encoder.encode("q "+width+" 0 0 "+height+" 0 0 cm /Im0 Do Q");
  object(id,"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 "+width+" "+height+"] /Resources << /XObject << /Im0 "+(id+1)+" 0 R >> >> /Contents "+(id+2)+" 0 R >>");
  object(id+1,"<< /Type /XObject /Subtype /Image /Width "+canvas.width+" /Height "+canvas.height+" /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length "+jpeg.length+" >>",jpeg);
  object(id+2,"<< /Length "+commands.length+" >>",commands);
 });
 const xref=size;
 write("xref\n0 "+offsets.length+"\n0000000000 65535 f \n");
 for(const offset of offsets.slice(1))write(String(offset).padStart(10,"0")+" 00000 n \n");
 write("trailer\n<< /Size "+offsets.length+" /Root 1 0 R >>\nstartxref\n"+xref+"\n%%EOF\n");
 return new Blob(parts,{type:"application/pdf"});
}
