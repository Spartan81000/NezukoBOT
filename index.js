//////////////////////////Prefix (s! [Ignorar])
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

/////////////////////cmd aviso (ignorar)

client.on("ready", () => {
   console.log("Listo uwu :v");
});

////////////Comandos

client.on("message", (message) => {

/////////////////Bucle Infinito



/////////////Lista de comandos

if(message.content.startsWith(prefix + "help")) {
  message.channel.send("```Lista De Comandos``` Por ahora estos son los comandos ```s!meme``` Este comando te mostrara la plantilla de un meme a eleccion (para saber las plantillas utiliza          s!memehelp) ```Comandos de diversion``` `ping`, `sacar-arma`, `soy-joto?`, `ese compa ya esta muertooo` ```Comandos de interaccion``` `dance`, `run`, `lick`, `kill`, `angry`, `confused`, `disgust`, `bored`, `loved`, `boo`, `trick-or-treat`, `sing`, `sad`, `vomit` ```uwu``` **Esos son mis comandos por ahora Si quieres dejar una sugerencia o tienes alguna duda utiliza `s!support` para que entres a mi servidor de soporte**mman");

}

if(message.content.startsWith(prefix + "ping")) {
  message.channel.send(":ping_pong: pong! :ping_pong: ```GG ya te gane``` **Noob** *quieres intentar denuevo??*");

}

if(message.content.startsWith(prefix + "sacar-arma")) {
  message.channel.send("```Este men a sacado su arma :0 ¡¡MANOS ARRIBA!!``` https://images-ext-2.discordapp.net/external/RImX8za6b2LpyUKqmJjH_WXo9DXth3lCN79RVoRSH7c/https/cdn.weeb.sh/images/BkWIXNFo-.gif");

}

if(message.content.startsWith(prefix + "ese compa ya esta muertoo")) {
  message.channel.send("No mas no le han avisadooo!!");

}

if(message.content.startsWith(prefix + "kill")) {
  message.channel.send("```...```https://tenor.com/view/demon-slayer-anime-fight-kimetsu-no-yaiba-tanjiro-gif-14745105");

}

if(message.content.startsWith(prefix + "soy-joto?")) {
  message.channel.send("Eso es seguro :D");

}

if(message.content.startsWith(prefix + "lick")) {
  message.channel.send("```Ste men se puso a lamer gente misteriosamente O.o``` https://tenor.com/view/lickitoung-pink-pokemon-lick-lips-gif-13521003");

}

if(message.content.startsWith(prefix + "dance")) {
  message.channel.send("```Ste men se puso a bailar ¡Se acabo la fiesta! D:```https://media.discordapp.net/attachments/393262883221274624/569010607404351488/image0.gif");

}

if(message.content.startsWith(prefix + "run")) {
  message.channel.send("** ```Este men se hecho a correr``` ** https://tenor.com/view/kimetsu-no-yaiba-baby-nezuko-running-gif-14864027");

}

if(message.content.startsWith(prefix + "angry")) {
  message.channel.send("```Ste men se ha enfadado ¡¡CORRAN!!```https://tenor.com/view/pissed-fuck-rage-dbz-gohan-gif-5759989");

}

if(message.content.startsWith(prefix + "bored")) {
  message.channel.send("```ste men esta aburrido 😐```https://tenor.com/view/nezuko-kamado-tanjirou-kamado-bored-gif-14218837");

}

if(message.content.startsWith(prefix + "disgust")) {
  message.channel.send("```Este men se ha asqueado```https://tenor.com/view/demon-slayer-tanjiro-disgust-bad-gif-14888772");

}

if(message.content.startsWith(prefix + "loved")) {
  message.channel.send("```ayy el amor :3 ❤ ❤...```https://tenor.com/view/zenitsu-love-nezuko-gif-14757407");

}

if(message.content.startsWith(prefix + "confused")) {
  message.channel.send("```wath?```https://tenor.com/view/nezuko-kimetsu-no-yaiba-confused-where-am-i-gif-14995652");

}

if(message.content.startsWith(prefix + "boo")) {
  message.channel.send("```No hacia falta que hicieras eso solo tenias que mostrar tu pinche cara fea```https://cdn.discordapp.com/attachments/611641577143664662/633055102910988289/Boo.gif");

}

if(message.content.startsWith(prefix + "support")) {
  message.channel.send("Este es el link de mi servidor de soporte https://discord.gg/9twPbww");

}

if(message.content.startsWith(prefix + "trick-or-treat")) {
  message.channel.send("```Arriba las manos y entreguen los dulces >:v```https://cdn.discordapp.com/attachments/611641577143664662/633058316636913674/trick_or_treat.gif");

}

if(message.content.startsWith(prefix + "mencioname")) {
  message.channel.send("{user.mention}");

}

if(message.content.startsWith(prefix + "sing")) {
  message.channel.send("```Este men se ha puesto a cantar! Y lo han demandado por romper tímpanos```https://media.discordapp.net/attachments/611641577143664662/634198552616370176/Sing.gif");

}

if(message.content.startsWith(prefix + "sad")) {
  message.channel.send("```F, ¡¡ARRIBA EL CLOROX!!```https://media.tenor.com/images/b61ff3ab6e42110545d87eed65dd9fbc/tenor.gif");

}

if(message.content.startsWith(prefix + "vomit")) {
  message.channel.send("```Hay no, que asco D:```https://tenor.com/view/my-hero-academia-boku-no-gif-9960054");

}

////////////////////if(message.content.startsWith(prefix + "Example")) {
////////////////////  message.channel.send("Example");

////////////////////}

////////////////////////Comandos de memes

if(message.content.startsWith(prefix + "meme")) {
  message.channel.send("Consulta la lista con s!memehelp");

}

if(message.content.startsWith(prefix + "memehelp")) {
  message.channel.send("```Esta es la lista de comandos de memes``` *Para usar un comando utiliza* **s!meme (Nombre del meme en minusculas)** ```Bueno aqui va ``` `algo-anda-mal`, `uy-no-ya-valio-verga`, `F`, `eso-te-pasa-por-zorra`, `nieguenmelo`, `ese-compa-ya-esta-muerto`, `lo-voy-a-gozar-como-no-lo-puedes-imaginar`, `imposible`, `excuse-me-wath-the-fuck`, `maravillosa-jugada`, `monopoly-no`, `noda-risa`, `wonka-dijo-gozenlo`, `no-mergas-puta-pinches-mames`, `meme puta-estoy-comiendo`, `te-pasaste-de-verga`   ```quieres mas??``` **Pronto... mientras le puedes sugerir a mi creador Spartan81000#8145**");

}

if(message.content.startsWith(prefix + "meme algo-anda-mal")) {
  message.channel.send("https://cdn.discordapp.com/attachments/611641577143664662/614598688886620160/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.png");

}

if(message.content.startsWith(prefix + "meme uy-no-ya-valio-verga")) {
  message.channel.send("https://cdn.discordapp.com/attachments/611641577143664662/633056093559455785/uy_no_ya_valio_verga.jpg");

}

if(message.content.startsWith(prefix + "meme F")) {
  message.channel.send("https://tenor.com/view/press-f-pay-respect-gif-12855021");

}

if(message.content.startsWith(prefix + "meme f")) {
  message.channel.send("https://tenor.com/view/press-f-pay-respect-gif-12855021");

}

if(message.content.startsWith(prefix + "meme eso-te-pasa-por-zorra")) {
  message.channel.send("http://pm1.narvii.com/6852/9181182110d6f2ee2d5896cbf7482501f370f7e6v2_00.jpg");

}

if(message.content.startsWith(prefix + "meme nieguenmelo")) {
  message.channel.send("https://i.ytimg.com/vi/MHHfHjkECcA/hqdefault.jpg");

}

if(message.content.startsWith(prefix + "meme ese-compa-ya-esta-muerto")) {
  message.channel.send("https://i.pinimg.com/originals/fb/b3/b4/fbb3b4c07f8d27b19011a83ef576a1b9.jpg");

}

if(message.content.startsWith(prefix + "meme lo-voy-a-gozar-como-no-lo-puedes-imaginar")) {
  message.channel.send("https://plantillasdememes.com/img/plantillas/lo-voy-a-gozar-como-no-lo-puedes-imaginar31564966303.jpg");

}

if(message.content.startsWith(prefix + "meme imposible")) {
  message.channel.send("https://i.kym-cdn.com/photos/images/original/001/501/394/6f8.png");
  
}

if(message.content.startsWith(prefix + "meme excuse-me-wath-the-fuck")) {
  message.channel.send("https://i.ytimg.com/vi/s2HRCYvgIK0/maxresdefault.jpg");

}

if(message.content.startsWith(prefix + "meme maravillosa-jugada")) {
  message.channel.send("https://ep01.epimg.net/verne/imagenes/2019/05/20/articulo/1558347754_694065_1558348027_noticia_normal.jpg");

}

if(message.content.startsWith(prefix + "meme noda-risa")) {
  message.channel.send("https://i.pinimg.com/736x/49/85/a1/4985a1db7c346f4bdada40387f8c47a6.jpg");

}

if(message.content.startsWith(prefix + "meme monopoly-no")) {
  message.channel.send("https://i.imgur.com/3iXqdIx.jpg");

}

if(message.content.startsWith(prefix + "meme wonka-dijo-gozenlo")) {
  message.channel.send("https://i.ytimg.com/vi/9vCT4NMBlJk/hqdefault.jpg");

}

if(message.content.startsWith(prefix + "meme no-mergas-puta-pinches-mames")) {
  message.channel.send("https://i.pinimg.com/474x/e5/42/93/e542932df757c0c97b5a0e3e4be3cecf--memes-humor.jpg");

}

if(message.content.startsWith(prefix + "meme puta-estoy-comiendo")) {
  message.channel.send("https://i.pinimg.com/474x/5e/ff/55/5eff559e47a879b7a03b5d31c74e9871.jpg");

}

if(message.content.startsWith(prefix + "meme te-pasaste-de-verga")) {
  message.channel.send("https://i.pinimg.com/474x/17/29/95/172995cb3821209cbf34bd54afccb6d2--yo-meme.jpg");

}

//////////////////////////////Token (ignorar)

});

client.login(config.token);
