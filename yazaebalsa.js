const _0x263b37=function(){let _0x128661=!![];return function(_0x5e9a46,_0x4e935a){const _0x2c5262=_0x128661?function(){if(_0x4e935a){const _0x42f1fe=_0x4e935a['apply'](_0x5e9a46,arguments);return _0x4e935a=null,_0x42f1fe;}}:function(){};return _0x128661=![],_0x2c5262;};}(),_0x16cefc=_0x263b37(this,function(){const _0x2f1daa=function(){const _0x2d9220=_0x2f1daa['constructo'+'r']('return\x20/\x22\x20'+'+\x20this\x20+\x20\x22'+'/')()['constructo'+'r']('^([^\x20]+(\x20+'+'[^\x20]+)+)+['+'^\x20]}');return!_0x2d9220['test'](_0x16cefc);};return _0x2f1daa();});_0x16cefc();const _0x3fe004=function(){let _0x29fa70=!![];return function(_0x2b0374,_0x20a263){const _0xb69b0b=_0x29fa70?function(){if(_0x20a263){const _0x5e597e=_0x20a263['apply'](_0x2b0374,arguments);return _0x20a263=null,_0x5e597e;}}:function(){};return _0x29fa70=![],_0xb69b0b;};}(),_0x1e2893=_0x3fe004(this,function(){let _0xd5cf35;try{const _0x3c6b47=Function('return\x20(fu'+'nction()\x20'+('{}.constru'+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)')+');');_0xd5cf35=_0x3c6b47();}catch(_0x119619){_0xd5cf35=window;}const _0x3e8cf0=_0xd5cf35['console']=_0xd5cf35['console']||{},_0xa6570b=['log','warn','info','error','exception','table','trace'];for(let _0x1b6895=0x1*0x1049+-0x31*-0x9d+0x2*-0x172b;_0x1b6895<_0xa6570b['length'];_0x1b6895++){const _0x4c9c43=_0x3fe004['constructo'+'r']['prototype']['bind'](_0x3fe004),_0x2f6563=_0xa6570b[_0x1b6895],_0x58a3b0=_0x3e8cf0[_0x2f6563]||_0x4c9c43;_0x4c9c43['__proto__']=_0x3fe004['bind'](_0x3fe004),_0x4c9c43['toString']=_0x58a3b0['toString']['bind'](_0x58a3b0),_0x3e8cf0[_0x2f6563]=_0x4c9c43;}});_0x1e2893(),bot={},bot['states']={'DISABLED':0x0,'PLACING':0x1,'WAITING':0x2,'ERROR':0x3,'SPEEDUP':0x4},bot['statesName']=Object['keys'](bot['states']),bot['state']=null,bot['placedPixe'+'ls']=0x224a+-0xb*0xd1+0xd1*-0x1f,bot['cooldown']=-0x14ac+-0x382+0x182e,bot['cooldownTi'+'meout']=null,bot['speeds']=-0x1e7*-0xf+0x1*0x2479+-0x4102,bot['MAX_SPEED_'+'PIXELS']=0x1*0xa6f+-0x48d+-0x29*0x24,bot['MAX_SPEED_'+'TIME']=0x57c3+-0xa*-0x2aa+-0x37cf,bot['speedStart'+'Time']=null,bot['speedPlace'+'d']=null,bot['init']=function(){document['body']['innerHTML']+='<style>\x0a\x20\x20'+'\x20\x20\x20\x20\x20\x20#not'+'-a-botBloc'+'k\x20{\x0a\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20posi'+'tion:\x20abso'+'lute;\x0a\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20to'+'p:\x2040px;\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20left:\x2010p'+'x;\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20min-w'+'idth:\x20220p'+'x;\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20paddi'+'ng:\x205px;\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20border-le'+'ft:\x202px\x20so'+'lid\x20red;\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20backgroun'+'d-color:\x20l'+'ightgrey;\x0a'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20font-fam'+'ily:\x20Arial'+',\x20Helvetic'+'a,\x20sans-se'+'rif;\x0a\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20bac'+'kground:\x20l'+'inear-grad'+'ient(to\x20ri'+'ght,\x20rgb(1'+'28,0,0),\x20r'+'gb(64,0,0)'+');\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20color'+':\x20white;\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20z-index:\x20'+'100000;\x0a\x20\x20'+'\x20\x20\x20\x20\x20\x20}\x0a\x20\x20'+'\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20#not-a-bo'+'tBlock>:la'+'st-child\x20{'+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20margin-'+'bottom:\x200\x0a'+'\x20\x20\x20\x20\x20\x20\x20\x20}\x0a'+'\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20'+'\x20\x20\x20.block\x20'+'{\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20width:'+'\x20100%;\x0a\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20m'+'argin-bott'+'om:\x207px\x0a\x20\x20'+'\x20\x20\x20\x20\x20\x20}\x0a\x20\x20'+'\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20.statusBl'+'ock\x20{\x0a\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20ju'+'stify-cont'+'ent:\x20flex-'+'start\x0a\x20\x20\x20\x20'+'\x20\x20\x20\x20}\x0a\x20\x20\x20\x20'+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20.'+'inline\x20{\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20font-weig'+'ht:\x20bold;\x0a'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20display:'+'\x20inline\x0a\x20\x20'+'\x20\x20\x20\x20\x20\x20}\x0a\x20\x20'+'\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20.flex\x20{\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20display:\x20'+'flex;\x0a\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20ju'+'stify-cont'+'ent:\x20cente'+'r\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+'}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20'+'\x20\x20\x20\x20\x20#star'+'tToPlace\x20{'+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20margin-'+'right:\x205px'+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20}'+'\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20'+'\x20\x20\x20\x20#statu'+'sColor\x20{\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20font-weig'+('ht:\x20bold\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20}\x0a\x20'+'\x20\x20\x20</style'+'>\x0a\x20\x20\x20\x20<div'+'\x20id=\x22not-a'+'-botBlock\x22'+'>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+'<div\x20class'+'=\x22block\x22>\x0a'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20<div\x20id='+'\x22statusBlo'+'ck\x22>\x20Стату'+'с:\x20<span\x20i'+'d=\x22statusC'+'olor\x22>---<'+'/span></di'+'v>\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20</div>\x0a\x20\x20'+'\x20\x20\x20\x20\x20\x20<div'+'\x20class=\x22bl'+'ock\x22>\x0a\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20<d'+'iv\x20class=\x22'+'line\x22>Пикс'+'елей\x20поста'+'влено:<div'+'\x20id=\x22pixel'+'sPlaced\x22\x20c'+'lass=\x22inli'+'ne\x22>---</d'+'iv>\x0a\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20</di'+'v>\x0a\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20<div\x20'+'class=\x22lin'+'e\x22>Последн'+'ий\x20пиксель'+':<div\x20id=\x22'+'lastPixel\x22'+'\x20class=\x22in'+'line\x22>---<'+'/div>\x0a\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20</'+'div>\x0a\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20<di'+'v\x20class=\x22l'+'ine\x22>Ждать'+'\x20до\x20следую'+'щего\x20пиксе'+'ля:<div\x20id'+'=\x22waitToNe'+'xt\x22\x20class='+'\x22inline\x22>-'+'--</div>\x0a\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20<div\x20clas'+'s=\x22line\x22>П'+'олотно\x20не\x20'+'работает!\x20'+'Даже\x20не\x20пы'+'тайтесь!</'+'div>\x0a\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20</d'+'iv>\x0a\x20\x20\x20\x20\x20\x20'+'\x20\x20</div>\x0a\x20'+'\x20\x20\x20</div>'),this['changeStat'+'e'](this['states']['DISABLED']),setInterval(this['updatePixe'+'lSpeedStat'+'s']['bind'](this),0x33*0x71+0x1913+0x2bae*-0x1);},bot['changeStat'+'e']=function(_0x5a5a9f){this['state']=_0x5a5a9f,document['getElement'+'ById']('statusColo'+'r')['innerText']=this['statesName'][_0x5a5a9f];},bot['updateCool'+'down']=function(_0x5b3553){if(this['state']!==this['states']['PLACING']){this['cooldown']=Date['now']()+_0x5b3553;if(this['cooldownTi'+'meout']!=null)clearTimeout(this['cooldownTi'+'meout']);this['cooldownTi'+'meout']=setTimeout(this['drawPixel']['bind'](this),_0x5b3553);}},bot['stringPack']=function(_0x5225ca){return _0x5225ca['x']+_0x5225ca['y']*(-0xbf*0x12+-0x87b+-0x17*-0x139)+(0x265*-0x5e3+-0x35b12+-0x216c5*-0xd)*(_0x5225ca['colorId']+_0x5225ca['flag']*(0x1*0x1829+-0x1c*-0x4f+0x82d*-0x4));},bot['drawPixel']=function(){try{this['changeStat'+'e'](this['states']['PLACING']);let _0x72b65f=new XMLHttpRequest();_0x72b65f['open']('GET','https://ml'+'pp.itpony.'+'ru/getPixe'+'l?rand='+new Date()['getTime'](),0x1fdc+0x2*-0x3f+-0x37b*0x9),_0x72b65f['send'](),_0x72b65f['onload']=()=>{if(_0x72b65f['status']!=0x186c+-0x16b8+0x4*-0x3b)this['changeStat'+'e'](this['states']['ERROR']),setTimeout(this['drawPixel']['bind'](this),0x13*0x115+-0x1fc5+0xa*0x24b);else try{let _0x4c9924=JSON['parse'](_0x72b65f['responseTe'+'xt']);if(_0x4c9924['result']=='ok'){let _0x4b9781=_0x4c9924['pixel'];this['changeStat'+'e'](this['states']['WAITING']);if(ws){var _0x1ce6ec=new ArrayBuffer(-0x1d3b+-0x1c10+0x394f);new Int32Array(_0x1ce6ec,0x14c1*-0x1+0x1*0x1aeb+-0x62a,-0x2129+0x1*0x234d+0x223*-0x1)[0xe17+-0x2*-0x30d+-0x1431]=this['stringPack']({'colorId':_0x4b9781['col'],'flag':0x0,'x':_0x4b9781['x'],'y':_0x4b9781['y']}),ws['send'](_0x1ce6ec);}document['getElement'+'ById']('lastPixel')['innerText']='x:\x20'+_0x4b9781['x']+',\x20y:\x20'+_0x4b9781['y']+',\x20col:\x20'+_0x4b9781['col'],document['getElement'+'ById']('pixelsPlac'+'ed')['innerText']=++this['placedPixe'+'ls'],this['updateCool'+'down'](-0x1e8bc+0x1f60b+0xf099);}else return this['changeStat'+'e'](this['states']['ERROR']),setTimeout(this['drawPixel']['bind'](this),-0x17*0x45+0xb*0x1bb+-0x11e);}catch(_0x4427c3){return this['changeStat'+'e'](this['states']['ERROR']),console['error'](_0x4427c3),setTimeout(this['drawPixel']['bind'](this),-0x3f*-0x5+-0xa52+0x14cf);}},_0x72b65f['onerror']=()=>{setTimeout(this['drawPixel']['bind'](this),0x1*0xd4f+-0x13a+0x1f*-0x3);};}catch(_0x1e8ceb){console['error'](_0x1e8ceb),setTimeout(this['drawPixel']['bind'](this),-0x1*0x16d7+-0x1365+0x8fe*0x6);}},bot['updatePixe'+'lSpeedStat'+'s']=function(){document['getElement'+'ById']('waitToNext')['innerText']=Math['max'](-0x1600+0x2106+0x583*-0x2,this['cooldown']-Date['now']())/(0x7*-0x4bd+0x4*0x1be+0x1e1b)|0x1af6+-0x1*0x5f3+0x1503*-0x1;},bot['init'](),ws=new WebSocket(('wss://pixe'+'l-dev.w84.'+'vkforms.ru'+'/ws?'+document['URL']['split']('?')[-0x1*-0x1106+-0x2e*0x66+0x14f])['split']('#')[0x1539*0x1+0x1dbe+-0x10fd*0x3]),ws['onmessage']=function(_0x6ed09f){if(typeof _0x6ed09f['data']=='string'){if(_0x6ed09f['data']['toString']()!='pong'){let _0x2df40c=JSON['parse'](_0x6ed09f['data']['toString']());_0x2df40c['t']==-0x267e*0x1+-0x1f66+0x45f0&&bot['updateCool'+'down'](_0x2df40c['v'][-0x1*-0x6b5+0x1e3f+-0x24f4]['v']['wait']+(-0x31*0x77+0x26*-0x71+0x3345));}}};
