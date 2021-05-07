'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "26135e4be13343012ada35bf6692fcf3",
"index.html": "5c1e20fd0c8353a26698d73dacf39de2",
"/": "5c1e20fd0c8353a26698d73dacf39de2",
"main.dart.js": "8278d8c430882ef5562fecd437ba86de",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b6deb1f2deec82d4d0364c215bdff39",
".git/config": "802a56fe2f6b080a1b7d9ee3ec7f620a",
".git/objects/95/511480933d746f3224dc685fa47ee53ecbda6b": "46218221b84268f505fd691ba2beb50b",
".git/objects/92/60031755a1a9fc3b9cd2c50c7863a8ed0c8e26": "d11bba3ab07fcc91b9e6cf06834ebdf0",
".git/objects/66/05da5b77f8fbc9ee10479de6b6a7d027362e8b": "c074e36341a049ee3eb87ee259a28893",
".git/objects/3e/0cc721d9c0491e71d3c3def6b2ba1209c7e637": "e8d164bb872db8b8179643a575649580",
".git/objects/50/92bd0dfb2c66b8594e2217485ce06cbf4e25b7": "468d3325433490cb9039001398a445ac",
".git/objects/57/199a55dc2a4f094d2b0595e70b36a6e3f5381a": "921a72857715aef662a087cdac72a81f",
".git/objects/57/7138f7ccd10e800eccef81f96ed6b046a4d1c3": "34e10cdb0b7113d664fd6b36df1fac7a",
".git/objects/3b/cc3d5ec8c8d32438a52567b82317c7a03cff77": "0fad59f1bf771f0f7edf6a4b2e46b213",
".git/objects/6f/563d9060c3f38426adcce798b28bc68543eb35": "761e2d1a0b6789467f3732bf015bd129",
".git/objects/9e/e4d7db7169e1b28cac810216feee4108144bc2": "f5a33501b55cc6eb53c7af0cfb202eac",
".git/objects/32/97f0888384442a604e4af332dff93c9fa6a27a": "a6ec84985f8a5234a244670bedb18f09",
".git/objects/69/ef7a7afc9fe745bf5138facf08140f6ba4a5b6": "63c1c72498253c3d778a45879ca02890",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/60/aaddbbc86583e99b12e6a5e11407f8fcf85400": "49ab70044fce0ba81f0cf306b9f8f61c",
".git/objects/60/2735605f5658d4b0e92792c66e8fa2a2c329bd": "f18a831966322421bc66e159583ee664",
".git/objects/34/27cd92bded653d3593820a6538d8ec8c221b33": "0c4f71e57ca18bb576d3f24f222db133",
".git/objects/5a/92ee92c8767e10789e3277f1f46b33a806145f": "3d76faa3c42ba860e563628448286ffb",
".git/objects/33/f85d0bf03b19682e394fc423c58bcfcc92e1e6": "94a15e28deeea0d4116aebdef23f5faf",
".git/objects/05/537eab9233a174beaf362f852059e09260d8ee": "3f067d77f4bfa7fed2daf79854c2fc4b",
".git/objects/9d/a6d8d5391c05e6215f05c5e8d489e5d10d0d96": "14aad4eaa16aa4b015ddb535fc5c6ab6",
".git/objects/9c/65afc310914f929216c17dc341e044726b794c": "f59e35adabebfbd563c93a04b1d953de",
".git/objects/a4/5b945e03236427947fc26c765fecb5d2221fcd": "620f14d9b2dfcbca81ecc8aa954f8a60",
".git/objects/b5/323249cc289cb87bca34599d329bf12f4e839d": "d8555fda82e73674ca1f8828d2ba8d5e",
".git/objects/b2/6b59eb65ff9cb02d94462c47751b46070e5453": "d92673e708fc00a938b7f356b7f7fe0d",
".git/objects/ad/95752cec1cd0ac154b924c1ce4ee39fef3ff9d": "b9b72bae649968f38f9c2f2832e107e6",
".git/objects/d7/de9e07572678d8e0a8fdff5638d2c9223ef70f": "c9511d631b22eeb033a88ae9d1d45f7e",
".git/objects/d0/397e83fcf0c83bea12b8fcc3e559a7b4c5ebcb": "45176301a11a8368799c1a817d46550b",
".git/objects/be/5b93240efb00374c4a640d580277efa972f8bc": "11e1b0258666b593fd579e90a885b1f0",
".git/objects/a5/c55d2bf688021bcab8d63b3c0f2d660a1e1f77": "b0d15dc89ebc67c37f32d75fa9e732f8",
".git/objects/d1/32d7acc6e4a1361b70ba933c8950786e8e0e0a": "389286ac8fe6650b8c7327fa5a1e203b",
".git/objects/bc/54971ba46767768b5c0176a8f1b10eceaad6c7": "c3713852052a7c1fca25bc157114ffd5",
".git/objects/bc/b8bd325f7c28f86c2fde9ac4e88665ed20c960": "c9446ade1e3e955077287d30eedfe459",
".git/objects/ae/e4a6beaefa5399f432eddbb655b10a817642d7": "16e174dce3e72eda7d4a71a24b7327b1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/0a585234cec175a88e2d06d91a25fbcac3463c": "705caf58eb8fcef81e6cc0e0b1303de4",
".git/objects/eb/9022e18e4da380c4d8c767031e25522e915fe2": "c1875f70a9c6cdb82b8523afa8b7b899",
".git/objects/fd/e0de40bae2a1686c6e5957d8d14a09d1d3f17e": "423c32fdb0440e40ac1e7aba20514384",
".git/objects/f2/101ef8ede515448341f8c6b0dcd5c77c593fd4": "ca01b80f42d98b66487a62c27a148bb2",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/5e69ad2f1c27f174a8a2247f6744390e34583c": "5f286aefcae517542763d42ac456e4b6",
".git/objects/e4/fb26dc46f911c62a1313f0be54551a7f88fe0a": "b9b47aecce37e045bcd74e83bdc11a12",
".git/objects/fe/5fd40737c456dd025d1ffade3f5bed40150741": "2baba44ed0cd2f02eabd6980cff48a25",
".git/objects/c1/fb04e345c3b38452a0aac3bdb700f147798931": "4a43b3db02ac5ac52009ab912e08cf13",
".git/objects/ec/4602a4f34e8d07126a540c6117f414deecc497": "f8e6e77db49dd6e98565d75b2106964c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/13dc589677c1c0e23f907ea37d79b06b0db101": "1d7035ac9f07d4f587c9c83550cae2fb",
".git/objects/27/ad96e875ff9b22d54469fd783e01ae58a6a1a8": "e8ba2d240c21bdeda1daab45755c57f3",
".git/objects/4b/5ffd37396e44ceb630c1c51b04030ed075dfb4": "daaba5e5484d75926aed8dcdec2a4e9e",
".git/objects/16/87c258f8dde2cfaeaf0e20f83408665c4f2e26": "d7eba88d355e7f23a87f1a5524b1e11a",
".git/objects/16/6563298bdecdd71206392f756b6356f62d9b96": "42c7bea53cada9af1f7632ce901f05d1",
".git/objects/89/c89b7adb35921709ff373731421cd7697898c9": "417f8d544edf7d89ba60b2624dc65acd",
".git/objects/1f/6bddbdb1dd9dbba6b98402e665726da6522fa0": "acd9ad7335beed41b66a564f3c183c1b",
".git/objects/87/b07e28fcd7e4d7179af216b08cf0e0655d117c": "9f8607b23586fdf8ab3bd827ffeedbe3",
".git/objects/1a/c42f348b8635427720ad66c486150c19047f87": "018f67be9d8084a4c9c5e4b6f15db90e",
".git/objects/8f/171d93771b3902f7a4ad46d8cf2e556eca061d": "0867b2b76ad26f384977009013405e78",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/c757fdcb03ffc5ce788854295c7316d34f9641": "69d470fb15d82080db6cd69e3783e24b",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/26/55c7bf6160db562166f0d01e3996d1e414fb3c": "cee289567b9e3c6858ed4df2be5c4567",
".git/objects/21/151f4ff79740424db2e9aed9d541b2313a62ba": "d205249b50ce92c692426b04e78d7aaf",
".git/objects/21/b65eb55ecfdce60caea522461160c8b0e5eb2e": "f0b46d7f68d8f0817ba6cebb14d27f5f",
".git/objects/21/0594921c1ba39d8a7eb0b4570dd373770aeae9": "3b45bd1dbdeb7d59c76bf50177c91ae2",
".git/objects/4d/ef476eba96a70b78e6f5e41539bb58346883d8": "c63b2d824be78d33ecf464228673a485",
".git/objects/4d/6530cd331359071f40a627e9f032a8c046baa1": "7a338f6c2af0f2422aab71195ff295cd",
".git/objects/75/8044c10b83f878f4e42dd804a5cbd08f9fdc05": "56600e582daae830e006150519127a61",
".git/objects/81/1e66b969dab3b83c12c281aa2d70e75d6897d9": "1a506255aeacec007bfc355b2bfda5b7",
".git/objects/44/b3628b89c50e2708d8096a8cdf04105f736cda": "b738a2c915631f5e54e1444d80f92a7c",
".git/objects/2f/d8b92a4c1fdc33e762e3c55f2c18ef3ae9e0d5": "7db816279b5803ac1bcc0ee4e39a59d7",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/88/843369569e88383de001384a6d69e5350cd0f4": "8b517190e699f8c0445ad9e3af6f3fa6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/675050a843bf970b44cf33327f54c39a7d71eb": "c7c3455590c8c58bfaaaf710f29b2ac6",
".git/objects/07/23bd358c9052d4af2c01fd172efc8a635cd753": "a81d0f0317eeaffb145e2bbc1f2cbf60",
".git/objects/00/3a92b9ca531acde577ba1e1581ef3f2d41b28d": "917c2a5a440e2102c089fdec82c5c531",
".git/objects/00/3d53e7c8ae96de34575223ac1588132b1ca1da": "f2bdb6e07553570d2c26b5c7a1b240cc",
".git/objects/5c/8991039547e348b98171455aeedea3afcee4d2": "104f7dfb8af0bb791eba6a1a5507e8c3",
".git/objects/5d/9407cb4033cebe6fad891e061633d793deb601": "4c89362d4bfd8a6ce4e94f7d441802af",
".git/objects/96/33308a4a8cb3d5ef85c8fcd6893010449b28fa": "e17e573c0a7e6d6713bc2725845c8fc6",
".git/objects/98/d06bdeb9362065ba6a432f43d6ab1ca9f62d02": "d4268aa73d5caf1507ca15afd1d1f4dd",
".git/objects/98/a5a64b545130f7ea01362d52ae5720ceb89d89": "4b92b76842e74682dde91cd40d660acb",
".git/objects/53/82fccf7fa5ea632471345da9261b3571f9a123": "3d4316be81f826c2fc56152f31638474",
".git/objects/30/86c5b9896bdaf4f9c8b0362831d1521d9a9514": "7f69454f2d9183f1345fd5d2107e4426",
".git/objects/5e/7163bf32451cd1a32ada64206537a9a0bda6cc": "812d2f64b4fb24861dee0701fec57719",
".git/objects/08/db8968ce21cf5a8c6218a88ba1e46d336f092c": "8e16ddef1c492c82e3e1dc2d662bade5",
".git/objects/08/be37ed1541b943eba241a9865d1dc5a1bd8fbf": "4527e261a9efd3680976f8c5d0ddc32a",
".git/objects/6c/39fab01b454826cc8b9b717cf4feafa7bba4d8": "9c6c1f66a0d0b3472bc8414c6dfc0fbf",
".git/objects/52/bfa55815489dd3e92acfbb5b9059be414447cb": "210ce312feeaabd158bb889fb268b3ac",
".git/objects/52/94302e28b254ee462a427d3b404774c64dafa4": "0d90bab1092f175025fdbacc5fa427c6",
".git/objects/97/415c5e317599a86f5690896ff0d4d0fe46accc": "eb5ee0e74156b72b299a580be2ee6456",
".git/objects/bf/5b888ed1443eab4815bc578e3acfd15dd65927": "74c86339a06cbb6bb04cd7ebc311bf1f",
".git/objects/d4/be0e118e3414e2313e690e0069760a37410b98": "73ac12814ebca27d6b6ac93250f8e262",
".git/objects/ba/87d2985b21c6088f97df40aa1c6c712e1df5f3": "2d12c3e226bd6ce8cea01f52fad11a0c",
".git/objects/ba/df0c22082999091b6c7602c3133d278cd0ee73": "27de626bf07469196a58c63433f48312",
".git/objects/ba/b1aae8855a09c15006db862bee04356b6c05c2": "10acae33f9aacee58ed47c1470609886",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/dd/3fb1736f1ad2419f253692ef664bf5b36fb423": "e07d9bf782e4882d8cced32ecf3e2e45",
".git/objects/b6/e4c4fb340825b7568bdb8e1d0904c047b2c944": "9485b1b9a42d143cd9f847784c77cda3",
".git/objects/aa/1a5e2cda631deec7e1319ac5efddf09848993b": "ffd112582494da15d0645ca12c66eb0d",
".git/objects/af/a56ebf54fe4e9ae694f1b841aae2c401585629": "a4cc18b1af90719a634a968558c960b1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/8846e5ea62c977e138833899fc7e1c3bcc521c": "8441b10f6192485912f5173b6725c2f6",
".git/objects/db/46c621f8a579a75e84846e2094eec94b632f4b": "8b5033ee3b927d72c2ee7f98404e5402",
".git/objects/a8/c20a21d364143c54b1e5544d664d504f3fff94": "215df460314a1695edfb61d9bb36ce91",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/c9e465a6998426c59c4ae9b4c842ca8eeb47cf": "986d4593904929ad4d1f6e3ba542f508",
".git/objects/ef/5341a37f507b47439bd6bff64dad9c58910835": "0cd74107ca1c80a54c0bf41a479f8cb4",
".git/objects/ea/b2c04424e241a896093c83ab1ade71652b4bf1": "963982551225dad23aa978a4ac6dc528",
".git/objects/e1/92ffaf6c8917a2148c842df3dad7d1fc661132": "44a4e27fa7afcaae84e5a6becd531f53",
".git/objects/e1/dfc26535e279e516fe3b9b4a92c6b11a7947df": "2ab2b7dd4965639f63d0df1900ab73d8",
".git/objects/f9/7c11f5575ab441d72e828298aec6c586579885": "2646130c503c62863baf42afa4d40c39",
".git/objects/fa/d199c9399c723c4936fb730214e20d87e4a65f": "1fd52e0777e67a95113239fb9f1edf1b",
".git/objects/c5/5d9f333ff71133e165c3e6d4dcc19c974f5525": "8f2b8987020f7c155af2e1689ac3c802",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c2/b9a33f188b158fe543d4e1bcb88b4d3a137843": "514a7c1995437ca5ce80e9f5b6559640",
".git/objects/f6/e105c07f995990643294d32b53723618431c1f": "9321a8c697e20d2be5e632d3d3ef975f",
".git/objects/e9/e775248e46977a8684f85a3b85a4a9e879ebb2": "6d04fdc5a2a47498a7d04ce8ecd96299",
".git/objects/f1/c760f4d85a4ce418be1c29f4e05e0e1a7544fd": "56f3a92cb42ddeacc4e9888abd7463b3",
".git/objects/f1/763c7eabd360d474583d8d68144074b16efc7b": "0e941b1b64e643162e612e9ac03373ba",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/cb/df1484f676325e2b5bf8235e006ef4f8b5185e": "9676ebea5f98d5242795f31f6c4d4c6b",
".git/objects/f8/78429c18b2e7a8ba9e3aacd2b4257af685b69d": "fb58c168670462ef2f50a122ff4940ff",
".git/objects/ce/4af99c6fb828a64fcef7b033f7bb63724da572": "fe16b14e2315483dea5351a71a68d2f8",
".git/objects/ce/29e9dbdbdf17270f902aaee8642d17d9d88dc9": "fc00c3ec1ac9cf467e77760b160746b7",
".git/objects/ce/1f79b9b6fd90eefb0559bd47fea2c98bf0946e": "e693df887e5e8b00a2ad7380b8713531",
".git/objects/e0/d77fccffc9a648e1bf9de7d931c8f2b1a2a3c3": "846c2623e9efee47a6d067359e92a031",
".git/objects/2c/456541351df4c59fb8d0e00644886b3a3debc0": "36dce85363af1a59d096aeb8528388d0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/0984cfa2319cbad8a187ee192e90cc5c169e32": "e07564988a69aa5485b09b0408ccf5aa",
".git/objects/83/2c8962947b5a17a1a9dec2631c8a3343d3ce14": "a0c7a3926e40ea515275c64fe60e1fc8",
".git/objects/1b/8bd9b02b5ee6d6bb5f16409485c80d3d5e29de": "b2ee1fb505db1fc869ca90a32c63378d",
".git/objects/48/d218d22d4e8aab340fe33fc98667b84bfe9923": "7f7c59a57a4725fb4247b54dc40598b1",
".git/objects/70/50401ebec723a165a4a773c3499160b559c38e": "03c3cd6670151dc0fc6b4a36d3afc30c",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac": "a13eb0abef82677d326e8bf6c57bbbfe",
".git/objects/1d/cdb11d9b19d4be816fcced3f7dbceefe031e8f": "60c90241b65d33e1008d98f6f8c91af6",
".git/objects/76/2198590f04a6102c23d8a861845e120539cab7": "3873448f5ccad0fc7035eceb8ffb4687",
".git/objects/76/cfb46700e40bab992e5e8d63899e7fd2a75ffb": "6ed92351d01548c9859a5ada733008e2",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/2b/82beb69616d1cd542905b350664c83ab6c264a": "22e4af309486f8a4312c2223ce79fea6",
".git/objects/2b/08f6e89af54a73e13ded99a2dcb6d626844fde": "8e9523a6d2730569e6ba33581eb4a720",
".git/objects/2b/46b4bce0216eb8f3b6f887011e7018cecf0cb5": "1efb10a03d7cfb55ebea4f44735c8fd5",
".git/objects/8b/d43003e1906ab581fb598da84065b983e4d2ba": "242e4447a07924f77d67116fd3bcefcd",
".git/objects/25/1df319839e9eb1344f77917a81d2201c7e5752": "8c93d5b829ef9b570af68313c7d80dcc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "010f1689f28fab0fabe51e9a9f5c9689",
".git/logs/refs/heads/master": "010f1689f28fab0fabe51e9a9f5c9689",
".git/logs/refs/remotes/origin/master": "74dcdcd1494b7923712abbd38a6bc0eb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "6c03cf472ffa5b749b16d238a9e3cb87",
".git/refs/remotes/origin/master": "6c03cf472ffa5b749b16d238a9e3cb87",
".git/index": "f59631427557fed9aa60a659249d7862",
".git/COMMIT_EDITMSG": "07930f6fcc8ce0129ba7076216f11940",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "1aa72c508f6f726c85133f5f01d503a3",
"assets/NOTICES": "e6e457eae96c1cd1fee7f897bf48cbef",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/restaurant/restaurant2.JPG": "808b73ce7438f42310efb53e5f0430f1",
"assets/assets/images/restaurant/restaurant.JPG": "715715b94b87f443c49d50dec76bba67",
"assets/assets/images/flag.png": "9a23e5b3b6ddaf04c815cc4fbb30e5d1",
"assets/assets/images/ecommerce/ecommerce1.JPG": "27326cd0131b750726a3a198928397cc",
"assets/assets/images/ecommerce/ecommerce2.JPG": "eb10cddd5341cda9331d8e0fc4a5385a",
"assets/assets/images/chat/chat.JPG": "8f4f19cdc47ecc843bff1e1d134e16db",
"assets/assets/images/avatar_default.png": "6d7a8d509be59100ec749b9ea8ab81e7",
"assets/assets/images/flutter.png": "f08366dbc56b3de3e9e27cd1d0410f82",
"assets/assets/images/health/health1.JPG": "62bda6ee25c2aa49a00b85d7b093a2c1",
"assets/assets/images/health/health2.JPG": "586a422f1e88acc4b9fcc1b17d71d399",
"assets/assets/images/firebase.png": "29db1d8211f1d8fe5fa9f92911f46246",
"assets/assets/images/java.png": "cf0a494ffa573603b51b134d37c76797",
"assets/assets/images/church/church2.JPG": "3a8d42592348e3eec35103fc7076203b",
"assets/assets/images/church/church1.JPG": "dae431c09b82935aeaa945b1f9b4641f",
"assets/assets/images/map/map1.JPG": "5fdb44ccca007ac4f9cc4b22c8c6b7f2",
"assets/assets/images/map/map2.JPG": "8b1d948973d65807b2487bf1a10bfe07",
"assets/assets/images/pos/pos1.JPG": "d2fcb6473d203ba2b646dd10506347a6",
"assets/assets/images/pos/pos2.JPG": "c2b7a1fd2fc3eb611cdcb641243cbce7",
"assets/assets/images/mysql.png": "f39756caea89a333159924544ad3d880",
"assets/assets/images/ndmu.png": "b4ae3f741a4da9d8348c861f6744475d",
"assets/assets/images/inventory/INVENTORY1.png": "fb7a76cc89f0c3a8356e72da9065cc11",
"assets/assets/images/inventory/inventory2.png": "f1ee4f8b8f30b47225544d565790094e",
"assets/assets/images/profile.jpg": "3bca2aaf43b43d72378dc38623df7a99",
"assets/assets/images/visit_koronadal/visit_koronadal2.jpg": "746d9bbcf147d2f07b58db24198b15dc",
"assets/assets/images/visit_koronadal/visit_koronadal1.jpg": "43e02166191f5ae71a5a6cbf88d24909",
"assets/assets/images/leadership/leadership4.png": "0ab39d09933c99f2fc9dec0dbdefdfe4",
"assets/assets/images/leadership/leadership2.png": "81a5be52968bc5edfc8dfc4c7cfad7db",
"assets/assets/images/leadership/leadership3.png": "f4ff845645abde815b9aa78d53870357",
"assets/assets/images/leadership/leadership1.png": "67188c689d372a27eb4efefc12e7cae7",
"assets/assets/images/clinic/clinic2.JPG": "47465750d6c7c2c5ab6ef4e918b30818",
"assets/assets/images/clinic/clinic1.JPG": "9a5363fe20f9c81d589b54bcef35c94f",
"assets/assets/images/instagram/instagram2.JPG": "532ebd75eeb66d236bfc7e4de032849f",
"assets/assets/images/instagram/instagram1.JPG": "bb1c38c1fcd12641825bf2f4511fca67",
"assets/assets/images/image2.jpg": "319249e756f3a470d45841baea9d1132",
"assets/assets/images/ns.png": "b705ae33ba07a9c9ed65e585a902ae0b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
