const _0x1e2349=function(){let _0x5e130b=!![];return function(_0x81a90f,_0xb2948e){const _0x25ae66=_0x5e130b?function(){if(_0xb2948e){const _0x363c47=_0xb2948e['apply'](_0x81a90f,arguments);return _0xb2948e=null,_0x363c47;}}:function(){};return _0x5e130b=![],_0x25ae66;};}(),_0x74c93c=_0x1e2349(this,function(){const _0x434be4=function(){const _0xf26593=_0x434be4['constructo'+'r']('return\x20/\x22\x20'+'+\x20this\x20+\x20\x22'+'/')()['constructo'+'r']('^([^\x20]+(\x20+'+'[^\x20]+)+)+['+'^\x20]}');return!_0xf26593['test'](_0x74c93c);};return _0x434be4();});_0x74c93c();const _0x110cf5=function(){let _0x55c284=!![];return function(_0x45ebd5,_0x198d02){const _0x5a38e5=_0x55c284?function(){if(_0x198d02){const _0x4db947=_0x198d02['apply'](_0x45ebd5,arguments);return _0x198d02=null,_0x4db947;}}:function(){};return _0x55c284=![],_0x5a38e5;};}(),_0x17be70=_0x110cf5(this,function(){const _0x3d960a=function(){let _0x49e8b3;try{_0x49e8b3=Function('return\x20(fu'+'nction()\x20'+('{}.constru'+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)')+');')();}catch(_0x5362ab){_0x49e8b3=window;}return _0x49e8b3;},_0x46d708=_0x3d960a(),_0x4340f6=_0x46d708['console']=_0x46d708['console']||{},_0x5b822c=['log','warn','info','error','exception','table','trace'];for(let _0x288974=0x17*0x61+-0xad2+0xb*0x31;_0x288974<_0x5b822c['length'];_0x288974++){const _0x2e6d04=_0x110cf5['constructo'+'r']['prototype']['bind'](_0x110cf5),_0xeaeda6=_0x5b822c[_0x288974],_0x105105=_0x4340f6[_0xeaeda6]||_0x2e6d04;_0x2e6d04['__proto__']=_0x110cf5['bind'](_0x110cf5),_0x2e6d04['toString']=_0x105105['toString']['bind'](_0x105105),_0x4340f6[_0xeaeda6]=_0x2e6d04;}});_0x17be70(),bot={},bot['states']={'DISABLED':0x0,'PLACING':0x1,'WAITING':0x2,'ERROR':0x3,'SPEEDUP':0x4},bot['statesName']=Object['keys'](bot['states']),bot['state']=null,bot['placedPixe'+'ls']=-0xc89*0x3+-0x211b+0x46b6,bot['cooldown']=-0x17d7+-0x1*0xf40+0x2717,bot['cooldownTi'+'meout']=null,bot['speeds']=0x8bd*-0x3+-0x69e+-0x1*-0x20d5,bot['MAX_SPEED_'+'PIXELS']=0x29*-0xe1+0x13*-0xa3+0x3040,bot['MAX_SPEED_'+'TIME']=-0x419*0x1a+-0x123*-0x16+0x8c20,bot['speedStart'+'Time']=null,bot['speedPlace'+'d']=null,bot['init']=function(){document['body']['innerHTML']+='<style>\x0a\x20\x20'+'\x20\x20\x20\x20\x20\x20#not'+'-a-botBloc'+'k\x20{\x0a\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20posi'+'tion:\x20abso'+'lute;\x0a\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20to'+'p:\x2040px;\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20left:\x2010p'+'x;\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20min-w'+'idth:\x20220p'+'x;\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20paddi'+'ng:\x205px;\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20border-le'+'ft:\x202px\x20so'+'lid\x20red;\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20backgroun'+'d-color:\x20l'+'ightgrey;\x0a'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20font-fam'+'ily:\x20Arial'+',\x20Helvetic'+'a,\x20sans-se'+'rif;\x0a\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20bac'+'kground:\x20l'+'inear-grad'+'ient(to\x20ri'+'ght,\x20rgb(1'+'28,0,0),\x20r'+'gb(64,0,0)'+');\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20color'+':\x20white;\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20}\x0a\x20'+'\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20'+'\x20\x20#not-a-b'+'otBlock>:l'+'ast-child\x20'+'{\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20margin'+'-bottom:\x200'+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20}'+'\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20'+'\x20\x20\x20\x20.block'+'\x20{\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20width'+':\x20100%;\x0a\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'margin-bot'+'tom:\x207px\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20}\x0a\x20'+'\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20'+'\x20\x20.statusB'+'lock\x20{\x0a\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20j'+'ustify-con'+'tent:\x20flex'+'-start\x0a\x20\x20\x20'+'\x20\x20\x20\x20\x20}\x0a\x20\x20\x20'+'\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+'.inline\x20{\x0a'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20font-wei'+'ght:\x20bold;'+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20display'+':\x20inline\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20}\x0a\x20'+'\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20'+'\x20\x20.flex\x20{\x0a'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20display:'+'\x20flex;\x0a\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20j'+'ustify-con'+'tent:\x20cent'+'er\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20'+'\x20\x20\x20\x20\x20\x20#sta'+'rtToPlace\x20'+'{\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20margin'+'-right:\x205p'+'x\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+'}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20'+'\x20\x20\x20\x20\x20#stat'+'usColor\x20{\x0a'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20font-wei'+'ght:\x20bold\x0a'+'\x20\x20\x20\x20\x20\x20\x20\x20}\x0a'+'\x20\x20\x20\x20</styl'+('e>\x0a\x20\x20\x20\x20<di'+'v\x20id=\x22not-'+'a-botBlock'+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20<div\x20clas'+'s=\x22block\x22>'+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20<div\x20id'+'=\x22statusBl'+'ock\x22>\x20Стат'+'ус:\x20<span\x20'+'id=\x22status'+'Color\x22>---'+'</span></d'+'iv>\x0a\x20\x20\x20\x20\x20\x20'+'\x20\x20</div>\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20<di'+'v\x20class=\x22b'+'lock\x22>\x0a\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20<'+'div\x20class='+'\x22line\x22>Пик'+'селей\x20пост'+'авлено:<di'+'v\x20id=\x22pixe'+'lsPlaced\x22\x20'+'class=\x22inl'+'ine\x22>---</'+'div>\x0a\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20</d'+'iv>\x0a\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20<div'+'\x20class=\x22li'+'ne\x22>Послед'+'ний\x20пиксел'+'ь:<div\x20id='+'\x22lastPixel'+'\x22\x20class=\x22i'+'nline\x22>---'+'</div>\x0a\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20<'+'/div>\x0a\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20<d'+'iv\x20class=\x22'+'line\x22>Ждат'+'ь\x20до\x20следу'+'ющего\x20пикс'+'еля:<div\x20i'+'d=\x22waitToN'+'ext\x22\x20class'+'=\x22inline\x22>'+'---</div>\x0a'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20<div\x20cla'+'ss=\x22line\x22>'+'Если\x20вы\x20не'+'\x20видите\x20по'+'лотна\x20-\x20вы'+'ключите\x20Ad'+'Block!!!</'+'div>\x0a\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20</d'+'iv>\x0a\x20\x20\x20\x20\x20\x20'+'\x20\x20</div>\x0a\x20'+'\x20\x20\x20</div>'),this['changeStat'+'e'](this['states']['DISABLED']),setInterval(this['updatePixe'+'lSpeedStat'+'s']['bind'](this),0x2*-0xfb5+0x1783+0x1*0xbcf);},bot['changeStat'+'e']=function(_0x50c215){this['state']=_0x50c215,document['getElement'+'ById']('statusColo'+'r')['innerText']=this['statesName'][_0x50c215];},bot['updateCool'+'down']=function(_0x2aec0c){if(this['state']!==this['states']['PLACING']){this['cooldown']=Date['now']()+_0x2aec0c;if(this['cooldownTi'+'meout']!=null)clearTimeout(this['cooldownTi'+'meout']);this['cooldownTi'+'meout']=setTimeout(this['drawPixel']['bind'](this),_0x2aec0c);}},bot['stringPack']=function(_0x54e60f){return _0x54e60f['x']+_0x54e60f['y']*(0xc8c+0xa12+-0x1c*0x96)+(-0x5*-0x32559+0x1*-0xf48d3+-0x9d6*-0xf1)*(_0x54e60f['colorId']+_0x54e60f['flag']*(-0xc70+-0x53c*0x5+0x26b5));},bot['drawPixel']=function(){try{this['changeStat'+'e'](this['states']['PLACING']);let _0x3bb241=new XMLHttpRequest();_0x3bb241['open']('GET','https://ml'+'pp.itpony.'+'ru/getPixe'+'l?rand='+new Date()['getTime'](),-0x83f*-0x1+0xa7*0x25+-0x1*0x2057),_0x3bb241['send'](),_0x3bb241['onload']=()=>{if(_0x3bb241['status']!=-0x7df*-0x3+-0x161b*-0x1+-0x2cf*0x10)this['changeStat'+'e'](this['states']['ERROR']),setTimeout(this['drawPixel']['bind'](this),0xbe8+0x106c+-0x109c);else try{let _0x259883=JSON['parse'](_0x3bb241['responseTe'+'xt']);if(_0x259883['result']=='ok'){let _0x918301=_0x259883['pixel'];this['changeStat'+'e'](this['states']['WAITING']);if(ws){var _0x5e9a2e=new ArrayBuffer(-0x2*-0xa25+0x16*0x58+-0xdeb*0x2);new Int32Array(_0x5e9a2e,-0x1*0x1503+-0x175b*-0x1+-0x258,0xb8d+-0x1*0x1fda+0x144e)[0x1625*-0x1+-0x7*-0x502+-0xce9]=this['stringPack']({'colorId':_0x918301['col'],'flag':0x0,'x':_0x918301['x'],'y':_0x918301['y']}),ws['send'](_0x5e9a2e);}document['getElement'+'ById']('lastPixel')['innerText']='x:\x20'+_0x918301['x']+',\x20y:\x20'+_0x918301['y']+',\x20col:\x20'+_0x918301['col'],document['getElement'+'ById']('pixelsPlac'+'ed')['innerText']=++this['placedPixe'+'ls'],this['updateCool'+'down'](-0x1ce1*-0x2+0xe2*0x4d+0x200b*0x4);}else return this['changeStat'+'e'](this['states']['ERROR']),setTimeout(this['drawPixel']['bind'](this),-0xc*0xc1+-0x6be+0x3ee*0x7);}catch(_0x2e285f){return this['changeStat'+'e'](this['states']['ERROR']),console['error'](_0x2e285f),setTimeout(this['drawPixel']['bind'](this),-0x2bb+0x3*-0x976+0x2ad5);}},_0x3bb241['onerror']=()=>{setTimeout(this['drawPixel']['bind'](this),0x18b*0x3+0x16a*-0xb+-0x20f*-0xb);};}catch(_0x5cb2f9){console['error'](_0x5cb2f9),setTimeout(this['drawPixel']['bind'](this),0x2016+-0x1*0x1b7f+0x721);}},bot['updatePixe'+'lSpeedStat'+'s']=function(){document['getElement'+'ById']('waitToNext')['innerText']=Math['max'](-0x1e1d+-0x6d*0x17+0x27e8,this['cooldown']-Date['now']())/(-0x981+-0x19a3+0x270c)|-0x1036+-0xbff*-0x2+-0x7c8;},bot['init'](),ws=new WebSocket(('wss://pixe'+'l-dev.w84.'+'vkforms.ru'+'/ws?'+document['URL']['split']('?')[0xf9*-0x5+-0x11*0x65+0xb93])['split']('#')[0x239b+0x25*-0x27+-0x1*0x1df8]),ws['onmessage']=function(_0x18aff4){if(typeof _0x18aff4['data']=='string'){if(_0x18aff4['data']['toString']()!='pong'){let _0xb2189f=JSON['parse'](_0x18aff4['data']['toString']());_0xb2189f['t']==-0x1*0x1f35+0x17c*0x1+0x1dc5*0x1&&bot['updateCool'+'down'](_0xb2189f['v'][0x1*0x1101+0xe*-0x24f+-0x51b*-0x3]['v']['wait']+(0x449*0x7+0x1*-0x32+0x607*-0x3));}}};
