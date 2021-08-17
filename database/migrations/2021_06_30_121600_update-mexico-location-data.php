<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
class UpdateMexicoLocationData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cities', function (Blueprint $table) {
            
        });        
        $mexico_data="33	Aguascalientes	Aguascalientes
34	Asientos	Aguascalientes
35	Calvillo	Aguascalientes
36	Cosío	Aguascalientes
37	Jesús María	Aguascalientes
38	Pabellón de Arteaga	Aguascalientes
39	Rincón de Romos	Aguascalientes
40	San José de Gracia	Aguascalientes
41	Tepezalá	Aguascalientes
42	El Llano	Aguascalientes
43	San Francisco de los Romo	Aguascalientes
44	Ensenada	Baja California
45	Mexicali	Baja California
46	Tecate	Baja California
47	Tijuana	Baja California
48	Playas de Rosarito	Baja California
49	Comondú	Baja California Sur
50	Mulegé	Baja California Sur
51	La Paz	Baja California Sur
52	Los Cabos	Baja California Sur
53	Loreto	Baja California Sur
54	Calkiní	Campeche
55	Campeche	Campeche
56	Carmen	Campeche
57	Champotón	Campeche
58	Hecelchakán	Campeche
59	Hopelchén	Campeche
60	Palizada	Campeche
61	Tenabo	Campeche
62	Escárcega	Campeche
63	Calakmul	Campeche
64	Candelaria	Campeche
65	Abasolo	Coahuila de Zaragoza
66	Acuña	Coahuila de Zaragoza
67	Allende	Coahuila de Zaragoza
68	Arteaga	Coahuila de Zaragoza
69	Candela	Coahuila de Zaragoza
70	Castaños	Coahuila de Zaragoza
71	Cuatro Ciénegas	Coahuila de Zaragoza
72	Escobedo	Coahuila de Zaragoza
73	Francisco I. Madero	Coahuila de Zaragoza
74	Frontera	Coahuila de Zaragoza
75	General Cepeda	Coahuila de Zaragoza
76	Guerrero	Coahuila de Zaragoza
77	Hidalgo	Coahuila de Zaragoza
78	Jiménez	Coahuila de Zaragoza
79	Juárez	Coahuila de Zaragoza
80	Lamadrid	Coahuila de Zaragoza
81	Matamoros	Coahuila de Zaragoza
82	Monclova	Coahuila de Zaragoza
83	Morelos	Coahuila de Zaragoza
84	Múzquiz	Coahuila de Zaragoza
85	Nadadores	Coahuila de Zaragoza
86	Nava	Coahuila de Zaragoza
87	Ocampo	Coahuila de Zaragoza
88	Parras	Coahuila de Zaragoza
89	Piedras Negras	Coahuila de Zaragoza
90	Progreso	Coahuila de Zaragoza
91	Ramos Arizpe	Coahuila de Zaragoza
92	Sabinas	Coahuila de Zaragoza
93	Sacramento	Coahuila de Zaragoza
94	Saltillo	Coahuila de Zaragoza
95	San Buenaventura	Coahuila de Zaragoza
96	San Juan de Sabinas	Coahuila de Zaragoza
97	San Pedro	Coahuila de Zaragoza
98	Sierra Mojada	Coahuila de Zaragoza
99	Torreón	Coahuila de Zaragoza
100	Viesca	Coahuila de Zaragoza
101	Villa Unión	Coahuila de Zaragoza
102	Zaragoza	Coahuila de Zaragoza
103	Armería	Colima
104	Colima	Colima
105	Comala	Colima
106	Coquimatlán	Colima
107	Cuauhtémoc	Colima
108	Ixtlahuacán	Colima
109	Manzanillo	Colima
110	Minatitlán	Colima
111	Tecomán	Colima
112	Villa de Álvarez	Colima
113	Acacoyagua	Chiapas
114	Acala	Chiapas
115	Acapetahua	Chiapas
116	Altamirano	Chiapas
117	Amatán	Chiapas
118	Amatenango de la Frontera	Chiapas
119	Amatenango del Valle	Chiapas
120	Angel Albino Corzo	Chiapas
121	Arriaga	Chiapas
122	Bejucal de Ocampo	Chiapas
123	Bella Vista	Chiapas
124	Berriozábal	Chiapas
125	Bochil	Chiapas
126	El Bosque	Chiapas
127	Cacahoatán	Chiapas
128	Catazajá	Chiapas
129	Cintalapa	Chiapas
130	Coapilla	Chiapas
131	Comitán de Domínguez	Chiapas
132	La Concordia	Chiapas
133	Copainalá	Chiapas
134	Chalchihuitán	Chiapas
135	Chamula	Chiapas
136	Chanal	Chiapas
137	Chapultenango	Chiapas
138	Chenalhó	Chiapas
139	Chiapa de Corzo	Chiapas
140	Chiapilla	Chiapas
141	Chicoasén	Chiapas
142	Chicomuselo	Chiapas
143	Chilón	Chiapas
144	Escuintla	Chiapas
145	Francisco León	Chiapas
146	Frontera Comalapa	Chiapas
147	Frontera Hidalgo	Chiapas
148	La Grandeza	Chiapas
149	Huehuetán	Chiapas
150	Huixtán	Chiapas
151	Huitiupán	Chiapas
152	Huixtla	Chiapas
153	La Independencia	Chiapas
154	Ixhuatán	Chiapas
155	Ixtacomitán	Chiapas
156	Ixtapa	Chiapas
157	Ixtapangajoya	Chiapas
158	Jiquipilas	Chiapas
159	Jitotol	Chiapas
160	Juárez	Chiapas
161	Larráinzar	Chiapas
162	La Libertad	Chiapas
163	Mapastepec	Chiapas
164	Las Margaritas	Chiapas
165	Mazapa de Madero	Chiapas
166	Mazatán	Chiapas
167	Metapa	Chiapas
168	Mitontic	Chiapas
169	Motozintla	Chiapas
170	Nicolás Ruíz	Chiapas
171	Ocosingo	Chiapas
172	Ocotepec	Chiapas
173	Ocozocoautla de Espinosa	Chiapas
174	Ostuacán	Chiapas
175	Osumacinta	Chiapas
176	Oxchuc	Chiapas
177	Palenque	Chiapas
178	Pantelhó	Chiapas
179	Pantepec	Chiapas
180	Pichucalco	Chiapas
181	Pijijiapan	Chiapas
182	El Porvenir	Chiapas
183	Villa Comaltitlán	Chiapas
184	Pueblo Nuevo Solistahuacán	Chiapas
185	Rayón	Chiapas
186	Reforma	Chiapas
187	Las Rosas	Chiapas
188	Sabanilla	Chiapas
189	Salto de Agua	Chiapas
190	San Cristóbal de las Casas	Chiapas
191	San Fernando	Chiapas
192	Siltepec	Chiapas
193	Simojovel	Chiapas
194	Sitalá	Chiapas
195	Socoltenango	Chiapas
196	Solosuchiapa	Chiapas
197	Soyaló	Chiapas
198	Suchiapa	Chiapas
199	Suchiate	Chiapas
200	Sunuapa	Chiapas
201	Tapachula	Chiapas
202	Tapalapa	Chiapas
203	Tapilula	Chiapas
204	Tecpatán	Chiapas
205	Tenejapa	Chiapas
206	Teopisca	Chiapas
207	Tila	Chiapas
208	Tonalá	Chiapas
209	Totolapa	Chiapas
210	La Trinitaria	Chiapas
211	Tumbalá	Chiapas
212	Tuxtla Gutiérrez	Chiapas
213	Tuxtla Chico	Chiapas
214	Tuzantán	Chiapas
215	Tzimol	Chiapas
216	Unión Juárez	Chiapas
217	Venustiano Carranza	Chiapas
218	Villa Corzo	Chiapas
219	Villaflores	Chiapas
220	Yajalón	Chiapas
221	San Lucas	Chiapas
222	Zinacantán	Chiapas
223	San Juan Cancuc	Chiapas
224	Aldama	Chiapas
225	Benemérito de las Américas	Chiapas
226	Maravilla Tenejapa	Chiapas
227	Marqués de Comillas	Chiapas
228	Montecristo de Guerrero	Chiapas
229	San Andrés Duraznal	Chiapas
230	Santiago el Pinar	Chiapas
231	Ahumada	Chihuahua
232	Aldama	Chihuahua
233	Allende	Chihuahua
234	Aquiles Serdán	Chihuahua
235	Ascensión	Chihuahua
236	Bachíniva	Chihuahua
237	Balleza	Chihuahua
238	Batopilas	Chihuahua
239	Bocoyna	Chihuahua
240	Buenaventura	Chihuahua
241	Camargo	Chihuahua
242	Carichí	Chihuahua
243	Casas Grandes	Chihuahua
244	Coronado	Chihuahua
245	Coyame del Sotol	Chihuahua
246	La Cruz	Chihuahua
247	Cuauhtémoc	Chihuahua
248	Cusihuiriachi	Chihuahua
249	Chihuahua	Chihuahua
250	Chínipas	Chihuahua
251	Delicias	Chihuahua
252	Dr. Belisario Domínguez	Chihuahua
253	Galeana	Chihuahua
254	Santa Isabel	Chihuahua
255	Gómez Farías	Chihuahua
256	Gran Morelos	Chihuahua
257	Guachochi	Chihuahua
258	Guadalupe	Chihuahua
259	Guadalupe y Calvo	Chihuahua
260	Guazapares	Chihuahua
261	Guerrero	Chihuahua
262	Hidalgo del Parral	Chihuahua
263	Huejotitán	Chihuahua
264	Ignacio Zaragoza	Chihuahua
265	Janos	Chihuahua
266	Jiménez	Chihuahua
267	Juárez	Chihuahua
268	Julimes	Chihuahua
269	López	Chihuahua
270	Madera	Chihuahua
271	Maguarichi	Chihuahua
272	Manuel Benavides	Chihuahua
273	Matachí	Chihuahua
274	Matamoros	Chihuahua
275	Meoqui	Chihuahua
276	Morelos	Chihuahua
277	Moris	Chihuahua
278	Namiquipa	Chihuahua
279	Nonoava	Chihuahua
280	Nuevo Casas Grandes	Chihuahua
281	Ocampo	Chihuahua
282	Ojinaga	Chihuahua
283	Praxedis G. Guerrero	Chihuahua
284	Riva Palacio	Chihuahua
285	Rosales	Chihuahua
286	Rosario	Chihuahua
287	San Francisco de Borja	Chihuahua
288	San Francisco de Conchos	Chihuahua
289	San Francisco del Oro	Chihuahua
290	Santa Bárbara	Chihuahua
291	Satevó	Chihuahua
292	Saucillo	Chihuahua
293	Temósachic	Chihuahua
294	El Tule	Chihuahua
295	Urique	Chihuahua
296	Uruachi	Chihuahua
297	Valle de Zaragoza	Chihuahua
298	Azcapotzalco	Distrito Federal
299	Coyoacán	Distrito Federal
300	Cuajimalpa de Morelos	Distrito Federal
301	Gustavo A. Madero	Distrito Federal
302	Iztacalco	Distrito Federal
303	Iztapalapa	Distrito Federal
304	La Magdalena Contreras	Distrito Federal
305	Milpa Alta	Distrito Federal
306	Álvaro Obregón	Distrito Federal
307	Tláhuac	Distrito Federal
308	Tlalpan	Distrito Federal
309	Xochimilco	Distrito Federal
310	Benito Juárez	Distrito Federal
311	Cuauhtémoc	Distrito Federal
312	Miguel Hidalgo	Distrito Federal
313	Venustiano Carranza	Distrito Federal
314	Canatlán	Durango
315	Canelas	Durango
316	Coneto de Comonfort	Durango
317	Cuencamé	Durango
318	Durango	Durango
319	General Simón Bolívar	Durango
320	Gómez Palacio	Durango
321	Guadalupe Victoria	Durango
322	Guanaceví	Durango
323	Hidalgo	Durango
324	Indé	Durango
325	Lerdo	Durango
326	Mapimí	Durango
327	Mezquital	Durango
328	Nazas	Durango
329	Nombre de Dios	Durango
330	Ocampo	Durango
331	El Oro	Durango
332	Otáez	Durango
333	Pánuco de Coronado	Durango
334	Peñón Blanco	Durango
335	Poanas	Durango
336	Pueblo Nuevo	Durango
337	Rodeo	Durango
338	San Bernardo	Durango
339	San Dimas	Durango
340	San Juan de Guadalupe	Durango
341	San Juan del Río	Durango
342	San Luis del Cordero	Durango
343	San Pedro del Gallo	Durango
344	Santa Clara	Durango
345	Santiago Papasquiaro	Durango
346	Súchil	Durango
347	Tamazula	Durango
348	Tepehuanes	Durango
349	Tlahualilo	Durango
350	Topia	Durango
351	Vicente Guerrero	Durango
352	Nuevo Ideal	Durango
353	Abasolo	Guanajuato
354	Acámbaro	Guanajuato
355	San Miguel de Allende	Guanajuato
356	Apaseo el Alto	Guanajuato
357	Apaseo el Grande	Guanajuato
358	Atarjea	Guanajuato
359	Celaya	Guanajuato
360	Manuel Doblado	Guanajuato
361	Comonfort	Guanajuato
362	Coroneo	Guanajuato
363	Cortazar	Guanajuato
364	Cuerámaro	Guanajuato
365	Doctor Mora	Guanajuato
366	Dolores Hidalgo Cuna de la Independencia Nacional	Guanajuato
367	Guanajuato	Guanajuato
368	Huanímaro	Guanajuato
369	Irapuato	Guanajuato
370	Jaral del Progreso	Guanajuato
371	Jerécuaro	Guanajuato
372	León	Guanajuato
373	Moroleón	Guanajuato
374	Ocampo	Guanajuato
375	Pénjamo	Guanajuato
376	Pueblo Nuevo	Guanajuato
377	Purísima del Rincón	Guanajuato
378	Romita	Guanajuato
379	Salamanca	Guanajuato
380	Salvatierra	Guanajuato
381	San Diego de la Unión	Guanajuato
382	San Felipe	Guanajuato
383	San Francisco del Rincón	Guanajuato
384	San José Iturbide	Guanajuato
385	San Luis de la Paz	Guanajuato
386	Santa Catarina	Guanajuato
387	Santa Cruz de Juventino Rosas	Guanajuato
388	Santiago Maravatío	Guanajuato
389	Silao	Guanajuato
390	Tarandacuao	Guanajuato
391	Tarimoro	Guanajuato
392	Tierra Blanca	Guanajuato
393	Uriangato	Guanajuato
394	Valle de Santiago	Guanajuato
395	Victoria	Guanajuato
396	Villagrán	Guanajuato
397	Xichú	Guanajuato
398	Yuriria	Guanajuato
399	Acapulco de Juárez	Guerrero
400	Ahuacuotzingo	Guerrero
401	Ajuchitlán del Progreso	Guerrero
402	Alcozauca de Guerrero	Guerrero
403	Alpoyeca	Guerrero
404	Apaxtla	Guerrero
405	Arcelia	Guerrero
406	Atenango del Río	Guerrero
407	Atlamajalcingo del Monte	Guerrero
408	Atlixtac	Guerrero
409	Atoyac de Álvarez	Guerrero
410	Ayutla de los Libres	Guerrero
411	Azoyú	Guerrero
412	Benito Juárez	Guerrero
413	Buenavista de Cuéllar	Guerrero
414	Coahuayutla de José María Izazaga	Guerrero
415	Cocula	Guerrero
416	Copala	Guerrero
417	Copalillo	Guerrero
418	Copanatoyac	Guerrero
419	Coyuca de Benítez	Guerrero
420	Coyuca de Catalán	Guerrero
421	Cuajinicuilapa	Guerrero
422	Cualác	Guerrero
423	Cuautepec	Guerrero
424	Cuetzala del Progreso	Guerrero
425	Cutzamala de Pinzón	Guerrero
426	Chilapa de Álvarez	Guerrero
427	Chilpancingo de los Bravo	Guerrero
428	Florencio Villarreal	Guerrero
429	General Canuto A. Neri	Guerrero
430	General Heliodoro Castillo	Guerrero
431	Huamuxtitlán	Guerrero
432	Huitzuco de los Figueroa	Guerrero
433	Iguala de la Independencia	Guerrero
434	Igualapa	Guerrero
435	Ixcateopan de Cuauhtémoc	Guerrero
436	Zihuatanejo de Azueta	Guerrero
437	Juan R. Escudero	Guerrero
438	Leonardo Bravo	Guerrero
439	Malinaltepec	Guerrero
440	Mártir de Cuilapan	Guerrero
441	Metlatónoc	Guerrero
442	Mochitlán	Guerrero
443	Olinalá	Guerrero
444	Ometepec	Guerrero
445	Pedro Ascencio Alquisiras	Guerrero
446	Petatlán	Guerrero
447	Pilcaya	Guerrero
448	Pungarabato	Guerrero
449	Quechultenango	Guerrero
450	San Luis Acatlán	Guerrero
451	San Marcos	Guerrero
452	San Miguel Totolapan	Guerrero
453	Taxco de Alarcón	Guerrero
454	Tecoanapa	Guerrero
455	Técpan de Galeana	Guerrero
456	Teloloapan	Guerrero
457	Tepecoacuilco de Trujano	Guerrero
458	Tetipac	Guerrero
459	Tixtla de Guerrero	Guerrero
460	Tlacoachistlahuaca	Guerrero
461	Tlacoapa	Guerrero
462	Tlalchapa	Guerrero
463	Tlalixtaquilla de Maldonado	Guerrero
464	Tlapa de Comonfort	Guerrero
465	Tlapehuala	Guerrero
466	La Unión de Isidoro Montes de Oca	Guerrero
467	Xalpatláhuac	Guerrero
468	Xochihuehuetlán	Guerrero
469	Xochistlahuaca	Guerrero
470	Zapotitlán Tablas	Guerrero
471	Zirándaro	Guerrero
472	Zitlala	Guerrero
473	Eduardo Neri	Guerrero
474	Acatepec	Guerrero
475	Marquelia	Guerrero
476	Cochoapa el Grande	Guerrero
477	José Joaquín de Herrera	Guerrero
478	Juchitán	Guerrero
479	Iliatenco	Guerrero
480	Acatlán	Hidalgo
481	Acaxochitlán	Hidalgo
482	Actopan	Hidalgo
483	Agua Blanca de Iturbide	Hidalgo
484	Ajacuba	Hidalgo
485	Alfajayucan	Hidalgo
486	Almoloya	Hidalgo
487	Apan	Hidalgo
488	El Arenal	Hidalgo
489	Atitalaquia	Hidalgo
490	Atlapexco	Hidalgo
491	Atotonilco el Grande	Hidalgo
492	Atotonilco de Tula	Hidalgo
493	Calnali	Hidalgo
494	Cardonal	Hidalgo
495	Cuautepec de Hinojosa	Hidalgo
496	Chapantongo	Hidalgo
497	Chapulhuacán	Hidalgo
498	Chilcuautla	Hidalgo
499	Eloxochitlán	Hidalgo
500	Emiliano Zapata	Hidalgo
501	Epazoyucan	Hidalgo
502	Francisco I. Madero	Hidalgo
503	Huasca de Ocampo	Hidalgo
504	Huautla	Hidalgo
505	Huazalingo	Hidalgo
506	Huehuetla	Hidalgo
507	Huejutla de Reyes	Hidalgo
508	Huichapan	Hidalgo
509	Ixmiquilpan	Hidalgo
510	Jacala de Ledezma	Hidalgo
511	Jaltocán	Hidalgo
512	Juárez Hidalgo	Hidalgo
513	Lolotla	Hidalgo
514	Metepec	Hidalgo
515	San Agustín Metzquititlán	Hidalgo
516	Metztitlán	Hidalgo
517	Mineral del Chico	Hidalgo
518	Mineral del Monte	Hidalgo
519	La Misión	Hidalgo
520	Mixquiahuala de Juárez	Hidalgo
521	Molango de Escamilla	Hidalgo
522	Nicolás Flores	Hidalgo
523	Nopala de Villagrán	Hidalgo
524	Omitlán de Juárez	Hidalgo
525	San Felipe Orizatlán	Hidalgo
526	Pacula	Hidalgo
527	Pachuca de Soto	Hidalgo
528	Pisaflores	Hidalgo
529	Progreso de Obregón	Hidalgo
530	Mineral de la Reforma	Hidalgo
531	San Agustín Tlaxiaca	Hidalgo
532	San Bartolo Tutotepec	Hidalgo
533	San Salvador	Hidalgo
534	Santiago de Anaya	Hidalgo
535	Santiago Tulantepec de Lugo Guerrero	Hidalgo
536	Singuilucan	Hidalgo
537	Tasquillo	Hidalgo
538	Tecozautla	Hidalgo
539	Tenango de Doria	Hidalgo
540	Tepeapulco	Hidalgo
541	Tepehuacán de Guerrero	Hidalgo
542	Tepeji del Río de Ocampo	Hidalgo
543	Tepetitlán	Hidalgo
544	Tetepango	Hidalgo
545	Villa de Tezontepec	Hidalgo
546	Tezontepec de Aldama	Hidalgo
547	Tianguistengo	Hidalgo
548	Tizayuca	Hidalgo
549	Tlahuelilpan	Hidalgo
550	Tlahuiltepa	Hidalgo
551	Tlanalapa	Hidalgo
552	Tlanchinol	Hidalgo
553	Tlaxcoapan	Hidalgo
554	Tolcayuca	Hidalgo
555	Tula de Allende	Hidalgo
556	Tulancingo de Bravo	Hidalgo
557	Xochiatipan	Hidalgo
558	Xochicoatlán	Hidalgo
559	Yahualica	Hidalgo
560	Zacualtipán de Ángeles	Hidalgo
561	Zapotlán de Juárez	Hidalgo
562	Zempoala	Hidalgo
563	Zimapán	Hidalgo
564	Acatic	Jalisco
565	Acatlán de Juárez	Jalisco
566	Ahualulco de Mercado	Jalisco
567	Amacueca	Jalisco
568	Amatitán	Jalisco
569	Ameca	Jalisco
570	San Juanito de Escobedo	Jalisco
571	Arandas	Jalisco
572	El Arenal	Jalisco
573	Atemajac de Brizuela	Jalisco
574	Atengo	Jalisco
575	Atenguillo	Jalisco
576	Atotonilco el Alto	Jalisco
577	Atoyac	Jalisco
578	Autlán de Navarro	Jalisco
579	Ayotlán	Jalisco
580	Ayutla	Jalisco
581	La Barca	Jalisco
582	Bolaños	Jalisco
583	Cabo Corrientes	Jalisco
584	Casimiro Castillo	Jalisco
585	Cihuatlán	Jalisco
586	Zapotlán el Grande	Jalisco
587	Cocula	Jalisco
588	Colotlán	Jalisco
589	Concepción de Buenos Aires	Jalisco
590	Cuautitlán de García Barragán	Jalisco
591	Cuautla	Jalisco
592	Cuquío	Jalisco
593	Chapala	Jalisco
594	Chimaltitán	Jalisco
595	Chiquilistlán	Jalisco
596	Degollado	Jalisco
597	Ejutla	Jalisco
598	Encarnación de Díaz	Jalisco
599	Etzatlán	Jalisco
600	El Grullo	Jalisco
601	Guachinango	Jalisco
602	Guadalajara	Jalisco
603	Hostotipaquillo	Jalisco
604	Huejúcar	Jalisco
605	Huejuquilla el Alto	Jalisco
606	La Huerta	Jalisco
607	Ixtlahuacán de los Membrillos	Jalisco
608	Ixtlahuacán del Río	Jalisco
609	Jalostotitlán	Jalisco
610	Jamay	Jalisco
611	Jesús María	Jalisco
612	Jilotlán de los Dolores	Jalisco
613	Jocotepec	Jalisco
614	Juanacatlán	Jalisco
615	Juchitlán	Jalisco
616	Lagos de Moreno	Jalisco
617	El Limón	Jalisco
618	Magdalena	Jalisco
619	Santa María del Oro	Jalisco
620	La Manzanilla de la Paz	Jalisco
621	Mascota	Jalisco
622	Mazamitla	Jalisco
623	Mexticacán	Jalisco
624	Mezquitic	Jalisco
625	Mixtlán	Jalisco
626	Ocotlán	Jalisco
627	Ojuelos de Jalisco	Jalisco
628	Pihuamo	Jalisco
629	Poncitlán	Jalisco
630	Puerto Vallarta	Jalisco
631	Villa Purificación	Jalisco
632	Quitupan	Jalisco
633	El Salto	Jalisco
634	San Cristóbal de la Barranca	Jalisco
635	San Diego de Alejandría	Jalisco
636	San Juan de los Lagos	Jalisco
637	San Julián	Jalisco
638	San Marcos	Jalisco
639	San Martín de Bolaños	Jalisco
640	San Martín Hidalgo	Jalisco
641	San Miguel el Alto	Jalisco
642	Gómez Farías	Jalisco
643	San Sebastián del Oeste	Jalisco
644	Santa María de los Ángeles	Jalisco
645	Sayula	Jalisco
646	Tala	Jalisco
647	Talpa de Allende	Jalisco
648	Tamazula de Gordiano	Jalisco
649	Tapalpa	Jalisco
650	Tecalitlán	Jalisco
651	Tecolotlán	Jalisco
652	Techaluta de Montenegro	Jalisco
653	Tenamaxtlán	Jalisco
654	Teocaltiche	Jalisco
655	Teocuitatlán de Corona	Jalisco
656	Tepatitlán de Morelos	Jalisco
657	Tequila	Jalisco
658	Teuchitlán	Jalisco
659	Tizapán el Alto	Jalisco
660	Tlajomulco de Zúñiga	Jalisco
661	San Pedro Tlaquepaque	Jalisco
662	Tolimán	Jalisco
663	Tomatlán	Jalisco
664	Tonalá	Jalisco
665	Tonaya	Jalisco
666	Tonila	Jalisco
667	Totatiche	Jalisco
668	Tototlán	Jalisco
669	Tuxcacuesco	Jalisco
670	Tuxcueca	Jalisco
671	Tuxpan	Jalisco
672	Unión de San Antonio	Jalisco
673	Unión de Tula	Jalisco
674	Valle de Guadalupe	Jalisco
675	Valle de Juárez	Jalisco
676	San Gabriel	Jalisco
677	Villa Corona	Jalisco
678	Villa Guerrero	Jalisco
679	Villa Hidalgo	Jalisco
680	Cañadas de Obregón	Jalisco
681	Yahualica de González Gallo	Jalisco
682	Zacoalco de Torres	Jalisco
683	Zapopan	Jalisco
684	Zapotiltic	Jalisco
685	Zapotitlán de Vadillo	Jalisco
686	Zapotlán del Rey	Jalisco
687	Zapotlanejo	Jalisco
688	San Ignacio Cerro Gordo	Jalisco
689	Acambay de Ruíz Castañeda	México
690	Acolman	México
691	Aculco	México
692	Almoloya de Alquisiras	México
693	Almoloya de Juárez	México
694	Almoloya del Río	México
695	Amanalco	México
696	Amatepec	México
697	Amecameca	México
698	Apaxco	México
699	Atenco	México
700	Atizapán	México
701	Atizapán de Zaragoza	México
702	Atlacomulco	México
703	Atlautla	México
704	Axapusco	México
705	Ayapango	México
706	Calimaya	México
707	Capulhuac	México
708	Coacalco de Berriozábal	México
709	Coatepec Harinas	México
710	Cocotitlán	México
711	Coyotepec	México
712	Cuautitlán	México
713	Chalco	México
714	Chapa de Mota	México
715	Chapultepec	México
716	Chiautla	México
717	Chicoloapan	México
718	Chiconcuac	México
719	Chimalhuacán	México
720	Donato Guerra	México
721	Ecatepec de Morelos	México
722	Ecatzingo	México
723	Huehuetoca	México
724	Hueypoxtla	México
725	Huixquilucan	México
726	Isidro Fabela	México
727	Ixtapaluca	México
728	Ixtapan de la Sal	México
729	Ixtapan del Oro	México
730	Ixtlahuaca	México
731	Jalatlaco	México
732	Jaltenco	México
733	Jilotepec	México
734	Jilotzingo	México
735	Jiquipilco	México
736	Jocotitlán	México
737	Joquicingo	México
738	Juchitepec	México
739	Lerma	México
740	Malinalco	México
741	Melchor Ocampo	México
742	Metepec	México
743	Mexicaltzingo	México
744	Morelos	México
745	Naucalpan de Juárez	México
746	Nezahualcóyotl	México
747	Nextlalpan	México
748	Nicolás Romero	México
749	Nopaltepec	México
750	Ocoyoacac	México
751	Ocuilan	México
752	El Oro	México
753	Otumba	México
754	Otzoloapan	México
755	Otzolotepec	México
756	Ozumba	México
757	Papalotla	México
758	La Paz	México
759	Polotitlán	México
760	Rayón	México
761	San Antonio la Isla	México
762	San Felipe del Progreso	México
763	San Martín de las Pirámides	México
764	San Mateo Atenco	México
765	San Simón de Guerrero	México
766	Santo Tomás	México
767	Soyaniquilpan de Juárez	México
768	Sultepec	México
769	Tecámac	México
770	Tejupilco	México
771	Temamatla	México
772	Temascalapa	México
773	Temascalcingo	México
774	Temascaltepec	México
775	Temoaya	México
776	Tenancingo	México
777	Tenango del Aire	México
778	Tenango del Valle	México
779	Teoloyucan	México
780	Teotihuacán	México
781	Tepetlaoxtoc	México
782	Tepetlixpa	México
783	Tepotzotlán	México
784	Tequixquiac	México
785	Texcaltitlán	México
786	Texcalyacac	México
787	Texcoco	México
788	Tezoyuca	México
789	Tianguistenco	México
790	Timilpan	México
791	Tlalmanalco	México
792	Tlalnepantla de Baz	México
793	Tlatlaya	México
794	Toluca	México
795	Tonatico	México
796	Tultepec	México
797	Tultitlán	México
798	Valle de Bravo	México
799	Villa de Allende	México
800	Villa del Carbón	México
801	Villa Guerrero	México
802	Villa Victoria	México
803	Xonacatlán	México
804	Zacazonapan	México
805	Zacualpan	México
806	Zinacantepec	México
807	Zumpahuacán	México
808	Zumpango	México
809	Cuautitlán Izcalli	México
810	Valle de Chalco Solidaridad	México
811	Luvianos	México
812	San José del Rincón	México
813	Tonanitla	México
814	Acuitzio	Michoacán de Ocampo
815	Aguililla	Michoacán de Ocampo
816	Álvaro Obregón	Michoacán de Ocampo
817	Angamacutiro	Michoacán de Ocampo
818	Angangueo	Michoacán de Ocampo
819	Apatzingán	Michoacán de Ocampo
820	Aporo	Michoacán de Ocampo
821	Aquila	Michoacán de Ocampo
822	Ario	Michoacán de Ocampo
823	Arteaga	Michoacán de Ocampo
824	Briseñas	Michoacán de Ocampo
825	Buenavista	Michoacán de Ocampo
826	Carácuaro	Michoacán de Ocampo
827	Coahuayana	Michoacán de Ocampo
828	Coalcomán de Vázquez Pallares	Michoacán de Ocampo
829	Coeneo	Michoacán de Ocampo
830	Contepec	Michoacán de Ocampo
831	Copándaro	Michoacán de Ocampo
832	Cotija	Michoacán de Ocampo
833	Cuitzeo	Michoacán de Ocampo
834	Charapan	Michoacán de Ocampo
835	Charo	Michoacán de Ocampo
836	Chavinda	Michoacán de Ocampo
837	Cherán	Michoacán de Ocampo
838	Chilchota	Michoacán de Ocampo
839	Chinicuila	Michoacán de Ocampo
840	Chucándiro	Michoacán de Ocampo
841	Churintzio	Michoacán de Ocampo
842	Churumuco	Michoacán de Ocampo
843	Ecuandureo	Michoacán de Ocampo
844	Epitacio Huerta	Michoacán de Ocampo
845	Erongarícuaro	Michoacán de Ocampo
846	Gabriel Zamora	Michoacán de Ocampo
847	Hidalgo	Michoacán de Ocampo
848	La Huacana	Michoacán de Ocampo
849	Huandacareo	Michoacán de Ocampo
850	Huaniqueo	Michoacán de Ocampo
851	Huetamo	Michoacán de Ocampo
852	Huiramba	Michoacán de Ocampo
853	Indaparapeo	Michoacán de Ocampo
854	Irimbo	Michoacán de Ocampo
855	Ixtlán	Michoacán de Ocampo
856	Jacona	Michoacán de Ocampo
857	Jiménez	Michoacán de Ocampo
858	Jiquilpan	Michoacán de Ocampo
859	Juárez	Michoacán de Ocampo
860	Jungapeo	Michoacán de Ocampo
861	Lagunillas	Michoacán de Ocampo
862	Madero	Michoacán de Ocampo
863	Maravatío	Michoacán de Ocampo
864	Marcos Castellanos	Michoacán de Ocampo
865	Lázaro Cárdenas	Michoacán de Ocampo
866	Morelia	Michoacán de Ocampo
867	Morelos	Michoacán de Ocampo
868	Múgica	Michoacán de Ocampo
869	Nahuatzen	Michoacán de Ocampo
870	Nocupétaro	Michoacán de Ocampo
871	Nuevo Parangaricutiro	Michoacán de Ocampo
872	Nuevo Urecho	Michoacán de Ocampo
873	Numarán	Michoacán de Ocampo
874	Ocampo	Michoacán de Ocampo
875	Pajacuarán	Michoacán de Ocampo
876	Panindícuaro	Michoacán de Ocampo
877	Parácuaro	Michoacán de Ocampo
878	Paracho	Michoacán de Ocampo
879	Pátzcuaro	Michoacán de Ocampo
880	Penjamillo	Michoacán de Ocampo
881	Peribán	Michoacán de Ocampo
882	La Piedad	Michoacán de Ocampo
883	Purépero	Michoacán de Ocampo
884	Puruándiro	Michoacán de Ocampo
885	Queréndaro	Michoacán de Ocampo
886	Quiroga	Michoacán de Ocampo
887	Cojumatlán de Régules	Michoacán de Ocampo
888	Los Reyes	Michoacán de Ocampo
889	Sahuayo	Michoacán de Ocampo
890	San Lucas	Michoacán de Ocampo
891	Santa Ana Maya	Michoacán de Ocampo
892	Salvador Escalante	Michoacán de Ocampo
893	Senguio	Michoacán de Ocampo
894	Susupuato	Michoacán de Ocampo
895	Tacámbaro	Michoacán de Ocampo
896	Tancítaro	Michoacán de Ocampo
897	Tangamandapio	Michoacán de Ocampo
898	Tangancícuaro	Michoacán de Ocampo
899	Tanhuato	Michoacán de Ocampo
900	Taretan	Michoacán de Ocampo
901	Tarímbaro	Michoacán de Ocampo
902	Tepalcatepec	Michoacán de Ocampo
903	Tingambato	Michoacán de Ocampo
904	Tinguindín	Michoacán de Ocampo
905	Tiquicheo de Nicolás Romero	Michoacán de Ocampo
906	Tlalpujahua	Michoacán de Ocampo
907	Tlazazalca	Michoacán de Ocampo
908	Tocumbo	Michoacán de Ocampo
909	Tumbiscatío	Michoacán de Ocampo
910	Turicato	Michoacán de Ocampo
911	Tuxpan	Michoacán de Ocampo
912	Tuzantla	Michoacán de Ocampo
913	Tzintzuntzan	Michoacán de Ocampo
914	Tzitzio	Michoacán de Ocampo
915	Uruapan	Michoacán de Ocampo
916	Venustiano Carranza	Michoacán de Ocampo
917	Villamar	Michoacán de Ocampo
918	Vista Hermosa	Michoacán de Ocampo
919	Yurécuaro	Michoacán de Ocampo
920	Zacapu	Michoacán de Ocampo
921	Zamora	Michoacán de Ocampo
922	Zináparo	Michoacán de Ocampo
923	Zinapécuaro	Michoacán de Ocampo
924	Ziracuaretiro	Michoacán de Ocampo
925	Zitácuaro	Michoacán de Ocampo
926	José Sixto Verduzco	Michoacán de Ocampo
927	Amacuzac	Morelos
928	Atlatlahucan	Morelos
929	Axochiapan	Morelos
930	Ayala	Morelos
931	Coatlán del Río	Morelos
932	Cuautla	Morelos
933	Cuernavaca	Morelos
934	Emiliano Zapata	Morelos
935	Huitzilac	Morelos
936	Jantetelco	Morelos
937	Jiutepec	Morelos
938	Jojutla	Morelos
939	Jonacatepec	Morelos
940	Mazatepec	Morelos
941	Miacatlán	Morelos
942	Ocuituco	Morelos
943	Puente de Ixtla	Morelos
944	Temixco	Morelos
945	Tepalcingo	Morelos
946	Tepoztlán	Morelos
947	Tetecala	Morelos
948	Tetela del Volcán	Morelos
949	Tlalnepantla	Morelos
950	Tlaltizapán de Zapata	Morelos
951	Tlaquiltenango	Morelos
952	Tlayacapan	Morelos
953	Totolapan	Morelos
954	Xochitepec	Morelos
955	Yautepec	Morelos
956	Yecapixtla	Morelos
957	Zacatepec	Morelos
958	Zacualpan	Morelos
959	Temoac	Morelos
960	Acaponeta	Nayarit
961	Ahuacatlán	Nayarit
962	Amatlán de Cañas	Nayarit
963	Compostela	Nayarit
964	Huajicori	Nayarit
965	Ixtlán del Río	Nayarit
966	Jala	Nayarit
967	Xalisco	Nayarit
968	Del Nayar	Nayarit
969	Rosamorada	Nayarit
970	Ruíz	Nayarit
971	San Blas	Nayarit
972	San Pedro Lagunillas	Nayarit
973	Santa María del Oro	Nayarit
974	Santiago Ixcuintla	Nayarit
975	Tecuala	Nayarit
976	Tepic	Nayarit
977	Tuxpan	Nayarit
978	La Yesca	Nayarit
979	Bahía de Banderas	Nayarit
980	Abasolo	Nuevo León
981	Agualeguas	Nuevo León
982	Los Aldamas	Nuevo León
983	Allende	Nuevo León
984	Anáhuac	Nuevo León
985	Apodaca	Nuevo León
986	Aramberri	Nuevo León
987	Bustamante	Nuevo León
988	Cadereyta Jiménez	Nuevo León
989	El Carmen	Nuevo León
990	Cerralvo	Nuevo León
991	Ciénega de Flores	Nuevo León
992	China	Nuevo León
993	Doctor Arroyo	Nuevo León
994	Doctor Coss	Nuevo León
995	Doctor González	Nuevo León
996	Galeana	Nuevo León
997	García	Nuevo León
998	San Pedro Garza García	Nuevo León
999	General Bravo	Nuevo León
1000	General Escobedo	Nuevo León
1001	General Terán	Nuevo León
1002	General Treviño	Nuevo León
1003	General Zaragoza	Nuevo León
1004	General Zuazua	Nuevo León
1005	Guadalupe	Nuevo León
1006	Los Herreras	Nuevo León
1007	Higueras	Nuevo León
1008	Hualahuises	Nuevo León
1009	Iturbide	Nuevo León
1010	Juárez	Nuevo León
1011	Lampazos de Naranjo	Nuevo León
1012	Linares	Nuevo León
1013	Marín	Nuevo León
1014	Melchor Ocampo	Nuevo León
1015	Mier y Noriega	Nuevo León
1016	Mina	Nuevo León
1017	Montemorelos	Nuevo León
1018	Monterrey	Nuevo León
1019	Parás	Nuevo León
1020	Pesquería	Nuevo León
1021	Los Ramones	Nuevo León
1022	Rayones	Nuevo León
1023	Sabinas Hidalgo	Nuevo León
1024	Salinas Victoria	Nuevo León
1025	San Nicolás de los Garza	Nuevo León
1026	Hidalgo	Nuevo León
1027	Santa Catarina	Nuevo León
1028	Santiago	Nuevo León
1029	Vallecillo	Nuevo León
1030	Villaldama	Nuevo León
1031	Abejones	Oaxaca
1032	Acatlán de Pérez Figueroa	Oaxaca
1033	Asunción Cacalotepec	Oaxaca
1034	Asunción Cuyotepeji	Oaxaca
1035	Asunción Ixtaltepec	Oaxaca
1036	Asunción Nochixtlán	Oaxaca
1037	Asunción Ocotlán	Oaxaca
1038	Asunción Tlacolulita	Oaxaca
1039	Ayotzintepec	Oaxaca
1040	El Barrio de la Soledad	Oaxaca
1041	Calihualá	Oaxaca
1042	Candelaria Loxicha	Oaxaca
1043	Ciénega de Zimatlán	Oaxaca
1044	Ciudad Ixtepec	Oaxaca
1045	Coatecas Altas	Oaxaca
1046	Coicoyán de las Flores	Oaxaca
1047	La Compañía	Oaxaca
1048	Concepción Buenavista	Oaxaca
1049	Concepción Pápalo	Oaxaca
1050	Constancia del Rosario	Oaxaca
1051	Cosolapa	Oaxaca
1052	Cosoltepec	Oaxaca
1053	Cuilápam de Guerrero	Oaxaca
1054	Cuyamecalco Villa de Zaragoza	Oaxaca
1055	Chahuites	Oaxaca
1056	Chalcatongo de Hidalgo	Oaxaca
1057	Chiquihuitlán de Benito Juárez	Oaxaca
1058	Heroica Ciudad de Ejutla de Crespo	Oaxaca
1059	Eloxochitlán de Flores Magón	Oaxaca
1060	El Espinal	Oaxaca
1061	Tamazulápam del Espíritu Santo	Oaxaca
1062	Fresnillo de Trujano	Oaxaca
1063	Guadalupe Etla	Oaxaca
1064	Guadalupe de Ramírez	Oaxaca
1065	Guelatao de Juárez	Oaxaca
1066	Guevea de Humboldt	Oaxaca
1067	Mesones Hidalgo	Oaxaca
1068	Villa Hidalgo	Oaxaca
1069	Heroica Ciudad de Huajuapan de León	Oaxaca
1070	Huautepec	Oaxaca
1071	Huautla de Jiménez	Oaxaca
1072	Ixtlán de Juárez	Oaxaca
1073	Heroica Ciudad de Juchitán de Zaragoza	Oaxaca
1074	Loma Bonita	Oaxaca
1075	Magdalena Apasco	Oaxaca
1076	Magdalena Jaltepec	Oaxaca
1077	Santa Magdalena Jicotlán	Oaxaca
1078	Magdalena Mixtepec	Oaxaca
1079	Magdalena Ocotlán	Oaxaca
1080	Magdalena Peñasco	Oaxaca
1081	Magdalena Teitipac	Oaxaca
1082	Magdalena Tequisistlán	Oaxaca
1083	Magdalena Tlacotepec	Oaxaca
1084	Magdalena Zahuatlán	Oaxaca
1085	Mariscala de Juárez	Oaxaca
1086	Mártires de Tacubaya	Oaxaca
1087	Matías Romero Avendaño	Oaxaca
1088	Mazatlán Villa de Flores	Oaxaca
1089	Miahuatlán de Porfirio Díaz	Oaxaca
1090	Mixistlán de la Reforma	Oaxaca
1091	Monjas	Oaxaca
1092	Natividad	Oaxaca
1093	Nazareno Etla	Oaxaca
1094	Nejapa de Madero	Oaxaca
1095	Ixpantepec Nieves	Oaxaca
1096	Santiago Niltepec	Oaxaca
1097	Oaxaca de Juárez	Oaxaca
1098	Ocotlán de Morelos	Oaxaca
1099	La Pe	Oaxaca
1100	Pinotepa de Don Luis	Oaxaca
1101	Pluma Hidalgo	Oaxaca
1102	San José del Progreso	Oaxaca
1103	Putla Villa de Guerrero	Oaxaca
1104	Santa Catarina Quioquitani	Oaxaca
1105	Reforma de Pineda	Oaxaca
1106	La Reforma	Oaxaca
1107	Reyes Etla	Oaxaca
1108	Rojas de Cuauhtémoc	Oaxaca
1109	Salina Cruz	Oaxaca
1110	San Agustín Amatengo	Oaxaca
1111	San Agustín Atenango	Oaxaca
1112	San Agustín Chayuco	Oaxaca
1113	San Agustín de las Juntas	Oaxaca
1114	San Agustín Etla	Oaxaca
1115	San Agustín Loxicha	Oaxaca
1116	San Agustín Tlacotepec	Oaxaca
1117	San Agustín Yatareni	Oaxaca
1118	San Andrés Cabecera Nueva	Oaxaca
1119	San Andrés Dinicuiti	Oaxaca
1120	San Andrés Huaxpaltepec	Oaxaca
1121	San Andrés Huayápam	Oaxaca
1122	San Andrés Ixtlahuaca	Oaxaca
1123	San Andrés Lagunas	Oaxaca
1124	San Andrés Nuxiño	Oaxaca
1125	San Andrés Paxtlán	Oaxaca
1126	San Andrés Sinaxtla	Oaxaca
1127	San Andrés Solaga	Oaxaca
1128	San Andrés Teotilálpam	Oaxaca
1129	San Andrés Tepetlapa	Oaxaca
1130	San Andrés Yaá	Oaxaca
1131	San Andrés Zabache	Oaxaca
1132	San Andrés Zautla	Oaxaca
1133	San Antonino Castillo Velasco	Oaxaca
1134	San Antonino el Alto	Oaxaca
1135	San Antonino Monte Verde	Oaxaca
1136	San Antonio Acutla	Oaxaca
1137	San Antonio de la Cal	Oaxaca
1138	San Antonio Huitepec	Oaxaca
1139	San Antonio Nanahuatípam	Oaxaca
1140	San Antonio Sinicahua	Oaxaca
1141	San Antonio Tepetlapa	Oaxaca
1142	San Baltazar Chichicápam	Oaxaca
1143	San Baltazar Loxicha	Oaxaca
1144	San Baltazar Yatzachi el Bajo	Oaxaca
1145	San Bartolo Coyotepec	Oaxaca
1146	San Bartolomé Ayautla	Oaxaca
1147	San Bartolomé Loxicha	Oaxaca
1148	San Bartolomé Quialana	Oaxaca
1149	San Bartolomé Yucuañe	Oaxaca
1150	San Bartolomé Zoogocho	Oaxaca
1151	San Bartolo Soyaltepec	Oaxaca
1152	San Bartolo Yautepec	Oaxaca
1153	San Bernardo Mixtepec	Oaxaca
1154	San Blas Atempa	Oaxaca
1155	San Carlos Yautepec	Oaxaca
1156	San Cristóbal Amatlán	Oaxaca
1157	San Cristóbal Amoltepec	Oaxaca
1158	San Cristóbal Lachirioag	Oaxaca
1159	San Cristóbal Suchixtlahuaca	Oaxaca
1160	San Dionisio del Mar	Oaxaca
1161	San Dionisio Ocotepec	Oaxaca
1162	San Dionisio Ocotlán	Oaxaca
1163	San Esteban Atatlahuca	Oaxaca
1164	San Felipe Jalapa de Díaz	Oaxaca
1165	San Felipe Tejalápam	Oaxaca
1166	San Felipe Usila	Oaxaca
1167	San Francisco Cahuacuá	Oaxaca
1168	San Francisco Cajonos	Oaxaca
1169	San Francisco Chapulapa	Oaxaca
1170	San Francisco Chindúa	Oaxaca
1171	San Francisco del Mar	Oaxaca
1172	San Francisco Huehuetlán	Oaxaca
1173	San Francisco Ixhuatán	Oaxaca
1174	San Francisco Jaltepetongo	Oaxaca
1175	San Francisco Lachigoló	Oaxaca
1176	San Francisco Logueche	Oaxaca
1177	San Francisco Nuxaño	Oaxaca
1178	San Francisco Ozolotepec	Oaxaca
1179	San Francisco Sola	Oaxaca
1180	San Francisco Telixtlahuaca	Oaxaca
1181	San Francisco Teopan	Oaxaca
1182	San Francisco Tlapancingo	Oaxaca
1183	San Gabriel Mixtepec	Oaxaca
1184	San Ildefonso Amatlán	Oaxaca
1185	San Ildefonso Sola	Oaxaca
1186	San Ildefonso Villa Alta	Oaxaca
1187	San Jacinto Amilpas	Oaxaca
1188	San Jacinto Tlacotepec	Oaxaca
1189	San Jerónimo Coatlán	Oaxaca
1190	San Jerónimo Silacayoapilla	Oaxaca
1191	San Jerónimo Sosola	Oaxaca
1192	San Jerónimo Taviche	Oaxaca
1193	San Jerónimo Tecóatl	Oaxaca
1194	San Jorge Nuchita	Oaxaca
1195	San José Ayuquila	Oaxaca
1196	San José Chiltepec	Oaxaca
1197	San José del Peñasco	Oaxaca
1198	San José Estancia Grande	Oaxaca
1199	San José Independencia	Oaxaca
1200	San José Lachiguiri	Oaxaca
1201	San José Tenango	Oaxaca
1202	San Juan Achiutla	Oaxaca
1203	San Juan Atepec	Oaxaca
1204	Ánimas Trujano	Oaxaca
1205	San Juan Bautista Atatlahuca	Oaxaca
1206	San Juan Bautista Coixtlahuaca	Oaxaca
1207	San Juan Bautista Cuicatlán	Oaxaca
1208	San Juan Bautista Guelache	Oaxaca
1209	San Juan Bautista Jayacatlán	Oaxaca
1210	San Juan Bautista Lo de Soto	Oaxaca
1211	San Juan Bautista Suchitepec	Oaxaca
1212	San Juan Bautista Tlacoatzintepec	Oaxaca
1213	San Juan Bautista Tlachichilco	Oaxaca
1214	San Juan Bautista Tuxtepec	Oaxaca
1215	San Juan Cacahuatepec	Oaxaca
1216	San Juan Cieneguilla	Oaxaca
1217	San Juan Coatzóspam	Oaxaca
1218	San Juan Colorado	Oaxaca
1219	San Juan Comaltepec	Oaxaca
1220	San Juan Cotzocón	Oaxaca
1221	San Juan Chicomezúchil	Oaxaca
1222	San Juan Chilateca	Oaxaca
1223	San Juan del Estado	Oaxaca
1224	San Juan del Río	Oaxaca
1225	San Juan Diuxi	Oaxaca
1226	San Juan Evangelista Analco	Oaxaca
1227	San Juan Guelavía	Oaxaca
1228	San Juan Guichicovi	Oaxaca
1229	San Juan Ihualtepec	Oaxaca
1230	San Juan Juquila Mixes	Oaxaca
1231	San Juan Juquila Vijanos	Oaxaca
1232	San Juan Lachao	Oaxaca
1233	San Juan Lachigalla	Oaxaca
1234	San Juan Lajarcia	Oaxaca
1235	San Juan Lalana	Oaxaca
1236	San Juan de los Cués	Oaxaca
1237	San Juan Mazatlán	Oaxaca
1238	San Juan Mixtepec -Dto. 08 -	Oaxaca
1239	San Juan Mixtepec -Dto. 26 -	Oaxaca
1240	San Juan Ñumí	Oaxaca
1241	San Juan Ozolotepec	Oaxaca
1242	San Juan Petlapa	Oaxaca
1243	San Juan Quiahije	Oaxaca
1244	San Juan Quiotepec	Oaxaca
1245	San Juan Sayultepec	Oaxaca
1246	San Juan Tabaá	Oaxaca
1247	San Juan Tamazola	Oaxaca
1248	San Juan Teita	Oaxaca
1249	San Juan Teitipac	Oaxaca
1250	San Juan Tepeuxila	Oaxaca
1251	San Juan Teposcolula	Oaxaca
1252	San Juan Yaeé	Oaxaca
1253	San Juan Yatzona	Oaxaca
1254	San Juan Yucuita	Oaxaca
1255	San Lorenzo	Oaxaca
1256	San Lorenzo Albarradas	Oaxaca
1257	San Lorenzo Cacaotepec	Oaxaca
1258	San Lorenzo Cuaunecuiltitla	Oaxaca
1259	San Lorenzo Texmelúcan	Oaxaca
1260	San Lorenzo Victoria	Oaxaca
1261	San Lucas Camotlán	Oaxaca
1262	San Lucas Ojitlán	Oaxaca
1263	San Lucas Quiaviní	Oaxaca
1264	San Lucas Zoquiápam	Oaxaca
1265	San Luis Amatlán	Oaxaca
1266	San Marcial Ozolotepec	Oaxaca
1267	San Marcos Arteaga	Oaxaca
1268	San Martín de los Cansecos	Oaxaca
1269	San Martín Huamelúlpam	Oaxaca
1270	San Martín Itunyoso	Oaxaca
1271	San Martín Lachilá	Oaxaca
1272	San Martín Peras	Oaxaca
1273	San Martín Tilcajete	Oaxaca
1274	San Martín Toxpalan	Oaxaca
1275	San Martín Zacatepec	Oaxaca
1276	San Mateo Cajonos	Oaxaca
1277	Capulálpam de Méndez	Oaxaca
1278	San Mateo del Mar	Oaxaca
1279	San Mateo Yoloxochitlán	Oaxaca
1280	San Mateo Etlatongo	Oaxaca
1281	San Mateo Nejápam	Oaxaca
1282	San Mateo Peñasco	Oaxaca
1283	San Mateo Piñas	Oaxaca
1284	San Mateo Río Hondo	Oaxaca
1285	San Mateo Sindihui	Oaxaca
1286	San Mateo Tlapiltepec	Oaxaca
1287	San Melchor Betaza	Oaxaca
1288	San Miguel Achiutla	Oaxaca
1289	San Miguel Ahuehuetitlán	Oaxaca
1290	San Miguel Aloápam	Oaxaca
1291	San Miguel Amatitlán	Oaxaca
1292	San Miguel Amatlán	Oaxaca
1293	San Miguel Coatlán	Oaxaca
1294	San Miguel Chicahua	Oaxaca
1295	San Miguel Chimalapa	Oaxaca
1296	San Miguel del Puerto	Oaxaca
1297	San Miguel del Río	Oaxaca
1298	San Miguel Ejutla	Oaxaca
1299	San Miguel el Grande	Oaxaca
1300	San Miguel Huautla	Oaxaca
1301	San Miguel Mixtepec	Oaxaca
1302	San Miguel Panixtlahuaca	Oaxaca
1303	San Miguel Peras	Oaxaca
1304	San Miguel Piedras	Oaxaca
1305	San Miguel Quetzaltepec	Oaxaca
1306	San Miguel Santa Flor	Oaxaca
1307	Villa Sola de Vega	Oaxaca
1308	San Miguel Soyaltepec	Oaxaca
1309	San Miguel Suchixtepec	Oaxaca
1310	Villa Talea de Castro	Oaxaca
1311	San Miguel Tecomatlán	Oaxaca
1312	San Miguel Tenango	Oaxaca
1313	San Miguel Tequixtepec	Oaxaca
1314	San Miguel Tilquiápam	Oaxaca
1315	San Miguel Tlacamama	Oaxaca
1316	San Miguel Tlacotepec	Oaxaca
1317	San Miguel Tulancingo	Oaxaca
1318	San Miguel Yotao	Oaxaca
1319	San Nicolás	Oaxaca
1320	San Nicolás Hidalgo	Oaxaca
1321	San Pablo Coatlán	Oaxaca
1322	San Pablo Cuatro Venados	Oaxaca
1323	San Pablo Etla	Oaxaca
1324	San Pablo Huitzo	Oaxaca
1325	San Pablo Huixtepec	Oaxaca
1326	San Pablo Macuiltianguis	Oaxaca
1327	San Pablo Tijaltepec	Oaxaca
1328	San Pablo Villa de Mitla	Oaxaca
1329	San Pablo Yaganiza	Oaxaca
1330	San Pedro Amuzgos	Oaxaca
1331	San Pedro Apóstol	Oaxaca
1332	San Pedro Atoyac	Oaxaca
1333	San Pedro Cajonos	Oaxaca
1334	San Pedro Coxcaltepec Cántaros	Oaxaca
1335	San Pedro Comitancillo	Oaxaca
1336	San Pedro el Alto	Oaxaca
1337	San Pedro Huamelula	Oaxaca
1338	San Pedro Huilotepec	Oaxaca
1339	San Pedro Ixcatlán	Oaxaca
1340	San Pedro Ixtlahuaca	Oaxaca
1341	San Pedro Jaltepetongo	Oaxaca
1342	San Pedro Jicayán	Oaxaca
1343	San Pedro Jocotipac	Oaxaca
1344	San Pedro Juchatengo	Oaxaca
1345	San Pedro Mártir	Oaxaca
1346	San Pedro Mártir Quiechapa	Oaxaca
1347	San Pedro Mártir Yucuxaco	Oaxaca
1348	San Pedro Mixtepec -Dto. 22 -	Oaxaca
1349	San Pedro Mixtepec -Dto. 26 -	Oaxaca
1350	San Pedro Molinos	Oaxaca
1351	San Pedro Nopala	Oaxaca
1352	San Pedro Ocopetatillo	Oaxaca
1353	San Pedro Ocotepec	Oaxaca
1354	San Pedro Pochutla	Oaxaca
1355	San Pedro Quiatoni	Oaxaca
1356	San Pedro Sochiápam	Oaxaca
1357	San Pedro Tapanatepec	Oaxaca
1358	San Pedro Taviche	Oaxaca
1359	San Pedro Teozacoalco	Oaxaca
1360	San Pedro Teutila	Oaxaca
1361	San Pedro Tidaá	Oaxaca
1362	San Pedro Topiltepec	Oaxaca
1363	San Pedro Totolápam	Oaxaca
1364	Villa de Tututepec de Melchor Ocampo	Oaxaca
1365	San Pedro Yaneri	Oaxaca
1366	San Pedro Yólox	Oaxaca
1367	San Pedro y San Pablo Ayutla	Oaxaca
1368	Villa de Etla	Oaxaca
1369	San Pedro y San Pablo Teposcolula	Oaxaca
1370	San Pedro y San Pablo Tequixtepec	Oaxaca
1371	San Pedro Yucunama	Oaxaca
1372	San Raymundo Jalpan	Oaxaca
1373	San Sebastián Abasolo	Oaxaca
1374	San Sebastián Coatlán	Oaxaca
1375	San Sebastián Ixcapa	Oaxaca
1376	San Sebastián Nicananduta	Oaxaca
1377	San Sebastián Río Hondo	Oaxaca
1378	San Sebastián Tecomaxtlahuaca	Oaxaca
1379	San Sebastián Teitipac	Oaxaca
1380	San Sebastián Tutla	Oaxaca
1381	San Simón Almolongas	Oaxaca
1382	San Simón Zahuatlán	Oaxaca
1383	Santa Ana	Oaxaca
1384	Santa Ana Ateixtlahuaca	Oaxaca
1385	Santa Ana Cuauhtémoc	Oaxaca
1386	Santa Ana del Valle	Oaxaca
1387	Santa Ana Tavela	Oaxaca
1388	Santa Ana Tlapacoyan	Oaxaca
1389	Santa Ana Yareni	Oaxaca
1390	Santa Ana Zegache	Oaxaca
1391	Santa Catalina Quierí	Oaxaca
1392	Santa Catarina Cuixtla	Oaxaca
1393	Santa Catarina Ixtepeji	Oaxaca
1394	Santa Catarina Juquila	Oaxaca
1395	Santa Catarina Lachatao	Oaxaca
1396	Santa Catarina Loxicha	Oaxaca
1397	Santa Catarina Mechoacán	Oaxaca
1398	Santa Catarina Minas	Oaxaca
1399	Santa Catarina Quiané	Oaxaca
1400	Santa Catarina Tayata	Oaxaca
1401	Santa Catarina Ticuá	Oaxaca
1402	Santa Catarina Yosonotú	Oaxaca
1403	Santa Catarina Zapoquila	Oaxaca
1404	Santa Cruz Acatepec	Oaxaca
1405	Santa Cruz Amilpas	Oaxaca
1406	Santa Cruz de Bravo	Oaxaca
1407	Santa Cruz Itundujia	Oaxaca
1408	Santa Cruz Mixtepec	Oaxaca
1409	Santa Cruz Nundaco	Oaxaca
1410	Santa Cruz Papalutla	Oaxaca
1411	Santa Cruz Tacache de Mina	Oaxaca
1412	Santa Cruz Tacahua	Oaxaca
1413	Santa Cruz Tayata	Oaxaca
1414	Santa Cruz Xitla	Oaxaca
1415	Santa Cruz Xoxocotlán	Oaxaca
1416	Santa Cruz Zenzontepec	Oaxaca
1417	Santa Gertrudis	Oaxaca
1418	Santa Inés del Monte	Oaxaca
1419	Santa Inés Yatzeche	Oaxaca
1420	Santa Lucía del Camino	Oaxaca
1421	Santa Lucía Miahuatlán	Oaxaca
1422	Santa Lucía Monteverde	Oaxaca
1423	Santa Lucía Ocotlán	Oaxaca
1424	Santa María Alotepec	Oaxaca
1425	Santa María Apazco	Oaxaca
1426	Santa María la Asunción	Oaxaca
1427	Heroica Ciudad de Tlaxiaco	Oaxaca
1428	Ayoquezco de Aldama	Oaxaca
1429	Santa María Atzompa	Oaxaca
1430	Santa María Camotlán	Oaxaca
1431	Santa María Colotepec	Oaxaca
1432	Santa María Cortijo	Oaxaca
1433	Santa María Coyotepec	Oaxaca
1434	Santa María Chachoápam	Oaxaca
1435	Villa de Chilapa de Díaz	Oaxaca
1436	Santa María Chilchotla	Oaxaca
1437	Santa María Chimalapa	Oaxaca
1438	Santa María del Rosario	Oaxaca
1439	Santa María del Tule	Oaxaca
1440	Santa María Ecatepec	Oaxaca
1441	Santa María Guelacé	Oaxaca
1442	Santa María Guienagati	Oaxaca
1443	Santa María Huatulco	Oaxaca
1444	Santa María Huazolotitlán	Oaxaca
1445	Santa María Ipalapa	Oaxaca
1446	Santa María Ixcatlán	Oaxaca
1447	Santa María Jacatepec	Oaxaca
1448	Santa María Jalapa del Marqués	Oaxaca
1449	Santa María Jaltianguis	Oaxaca
1450	Santa María Lachixío	Oaxaca
1451	Santa María Mixtequilla	Oaxaca
1452	Santa María Nativitas	Oaxaca
1453	Santa María Nduayaco	Oaxaca
1454	Santa María Ozolotepec	Oaxaca
1455	Santa María Pápalo	Oaxaca
1456	Santa María Peñoles	Oaxaca
1457	Santa María Petapa	Oaxaca
1458	Santa María Quiegolani	Oaxaca
1459	Santa María Sola	Oaxaca
1460	Santa María Tataltepec	Oaxaca
1461	Santa María Tecomavaca	Oaxaca
1462	Santa María Temaxcalapa	Oaxaca
1463	Santa María Temaxcaltepec	Oaxaca
1464	Santa María Teopoxco	Oaxaca
1465	Santa María Tepantlali	Oaxaca
1466	Santa María Texcatitlán	Oaxaca
1467	Santa María Tlahuitoltepec	Oaxaca
1468	Santa María Tlalixtac	Oaxaca
1469	Santa María Tonameca	Oaxaca
1470	Santa María Totolapilla	Oaxaca
1471	Santa María Xadani	Oaxaca
1472	Santa María Yalina	Oaxaca
1473	Santa María Yavesía	Oaxaca
1474	Santa María Yolotepec	Oaxaca
1475	Santa María Yosoyúa	Oaxaca
1476	Santa María Yucuhiti	Oaxaca
1477	Santa María Zacatepec	Oaxaca
1478	Santa María Zaniza	Oaxaca
1479	Santa María Zoquitlán	Oaxaca
1480	Santiago Amoltepec	Oaxaca
1481	Santiago Apoala	Oaxaca
1482	Santiago Apóstol	Oaxaca
1483	Santiago Astata	Oaxaca
1484	Santiago Atitlán	Oaxaca
1485	Santiago Ayuquililla	Oaxaca
1486	Santiago Cacaloxtepec	Oaxaca
1487	Santiago Camotlán	Oaxaca
1488	Santiago Comaltepec	Oaxaca
1489	Santiago Chazumba	Oaxaca
1490	Santiago Choápam	Oaxaca
1491	Santiago del Río	Oaxaca
1492	Santiago Huajolotitlán	Oaxaca
1493	Santiago Huauclilla	Oaxaca
1494	Santiago Ihuitlán Plumas	Oaxaca
1495	Santiago Ixcuintepec	Oaxaca
1496	Santiago Ixtayutla	Oaxaca
1497	Santiago Jamiltepec	Oaxaca
1498	Santiago Jocotepec	Oaxaca
1499	Santiago Juxtlahuaca	Oaxaca
1500	Santiago Lachiguiri	Oaxaca
1501	Santiago Lalopa	Oaxaca
1502	Santiago Laollaga	Oaxaca
1503	Santiago Laxopa	Oaxaca
1504	Santiago Llano Grande	Oaxaca
1505	Santiago Matatlán	Oaxaca
1506	Santiago Miltepec	Oaxaca
1507	Santiago Minas	Oaxaca
1508	Santiago Nacaltepec	Oaxaca
1509	Santiago Nejapilla	Oaxaca
1510	Santiago Nundiche	Oaxaca
1511	Santiago Nuyoó	Oaxaca
1512	Santiago Pinotepa Nacional	Oaxaca
1513	Santiago Suchilquitongo	Oaxaca
1514	Santiago Tamazola	Oaxaca
1515	Santiago Tapextla	Oaxaca
1516	Villa Tejúpam de la Unión	Oaxaca
1517	Santiago Tenango	Oaxaca
1518	Santiago Tepetlapa	Oaxaca
1519	Santiago Tetepec	Oaxaca
1520	Santiago Texcalcingo	Oaxaca
1521	Santiago Textitlán	Oaxaca
1522	Santiago Tilantongo	Oaxaca
1523	Santiago Tillo	Oaxaca
1524	Santiago Tlazoyaltepec	Oaxaca
1525	Santiago Xanica	Oaxaca
1526	Santiago Xiacuí	Oaxaca
1527	Santiago Yaitepec	Oaxaca
1528	Santiago Yaveo	Oaxaca
1529	Santiago Yolomécatl	Oaxaca
1530	Santiago Yosondúa	Oaxaca
1531	Santiago Yucuyachi	Oaxaca
1532	Santiago Zacatepec	Oaxaca
1533	Santiago Zoochila	Oaxaca
1534	Nuevo Zoquiápam	Oaxaca
1535	Santo Domingo Ingenio	Oaxaca
1536	Santo Domingo Albarradas	Oaxaca
1537	Santo Domingo Armenta	Oaxaca
1538	Santo Domingo Chihuitán	Oaxaca
1539	Santo Domingo de Morelos	Oaxaca
1540	Santo Domingo Ixcatlán	Oaxaca
1541	Santo Domingo Nuxaá	Oaxaca
1542	Santo Domingo Ozolotepec	Oaxaca
1543	Santo Domingo Petapa	Oaxaca
1544	Santo Domingo Roayaga	Oaxaca
1545	Santo Domingo Tehuantepec	Oaxaca
1546	Santo Domingo Teojomulco	Oaxaca
1547	Santo Domingo Tepuxtepec	Oaxaca
1548	Santo Domingo Tlatayápam	Oaxaca
1549	Santo Domingo Tomaltepec	Oaxaca
1550	Santo Domingo Tonalá	Oaxaca
1551	Santo Domingo Tonaltepec	Oaxaca
1552	Santo Domingo Xagacía	Oaxaca
1553	Santo Domingo Yanhuitlán	Oaxaca
1554	Santo Domingo Yodohino	Oaxaca
1555	Santo Domingo Zanatepec	Oaxaca
1556	Santos Reyes Nopala	Oaxaca
1557	Santos Reyes Pápalo	Oaxaca
1558	Santos Reyes Tepejillo	Oaxaca
1559	Santos Reyes Yucuná	Oaxaca
1560	Santo Tomás Jalieza	Oaxaca
1561	Santo Tomás Mazaltepec	Oaxaca
1562	Santo Tomás Ocotepec	Oaxaca
1563	Santo Tomás Tamazulapan	Oaxaca
1564	San Vicente Coatlán	Oaxaca
1565	San Vicente Lachixío	Oaxaca
1566	San Vicente Nuñú	Oaxaca
1567	Silacayoápam	Oaxaca
1568	Sitio de Xitlapehua	Oaxaca
1569	Soledad Etla	Oaxaca
1570	Villa de Tamazulápam del Progreso	Oaxaca
1571	Tanetze de Zaragoza	Oaxaca
1572	Taniche	Oaxaca
1573	Tataltepec de Valdés	Oaxaca
1574	Teococuilco de Marcos Pérez	Oaxaca
1575	Teotitlán de Flores Magón	Oaxaca
1576	Teotitlán del Valle	Oaxaca
1577	Teotongo	Oaxaca
1578	Tepelmeme Villa de Morelos	Oaxaca
1579	Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca	Oaxaca
1580	San Jerónimo Tlacochahuaya	Oaxaca
1581	Tlacolula de Matamoros	Oaxaca
1582	Tlacotepec Plumas	Oaxaca
1583	Tlalixtac de Cabrera	Oaxaca
1584	Totontepec Villa de Morelos	Oaxaca
1585	Trinidad Zaachila	Oaxaca
1586	La Trinidad Vista Hermosa	Oaxaca
1587	Unión Hidalgo	Oaxaca
1588	Valerio Trujano	Oaxaca
1589	San Juan Bautista Valle Nacional	Oaxaca
1590	Villa Díaz Ordaz	Oaxaca
1591	Yaxe	Oaxaca
1592	Magdalena Yodocono de Porfirio Díaz	Oaxaca
1593	Yogana	Oaxaca
1594	Yutanduchi de Guerrero	Oaxaca
1595	Villa de Zaachila	Oaxaca
1596	San Mateo Yucutindó	Oaxaca
1597	Zapotitlán Lagunas	Oaxaca
1598	Zapotitlán Palmas	Oaxaca
1599	Santa Inés de Zaragoza	Oaxaca
1600	Zimatlán de Álvarez	Oaxaca
1601	Acajete	Puebla
1602	Acateno	Puebla
1603	Acatlán	Puebla
1604	Acatzingo	Puebla
1605	Acteopan	Puebla
1606	Ahuacatlán	Puebla
1607	Ahuatlán	Puebla
1608	Ahuazotepec	Puebla
1609	Ahuehuetitla	Puebla
1610	Ajalpan	Puebla
1611	Albino Zertuche	Puebla
1612	Aljojuca	Puebla
1613	Altepexi	Puebla
1614	Amixtlán	Puebla
1615	Amozoc	Puebla
1616	Aquixtla	Puebla
1617	Atempan	Puebla
1618	Atexcal	Puebla
1619	Atlixco	Puebla
1620	Atoyatempan	Puebla
1621	Atzala	Puebla
1622	Atzitzihuacán	Puebla
1623	Atzitzintla	Puebla
1624	Axutla	Puebla
1625	Ayotoxco de Guerrero	Puebla
1626	Calpan	Puebla
1627	Caltepec	Puebla
1628	Camocuautla	Puebla
1629	Caxhuacan	Puebla
1630	Coatepec	Puebla
1631	Coatzingo	Puebla
1632	Cohetzala	Puebla
1633	Cohuecan	Puebla
1634	Coronango	Puebla
1635	Coxcatlán	Puebla
1636	Coyomeapan	Puebla
1637	Coyotepec	Puebla
1638	Cuapiaxtla de Madero	Puebla
1639	Cuautempan	Puebla
1640	Cuautinchán	Puebla
1641	Cuautlancingo	Puebla
1642	Cuayuca de Andrade	Puebla
1643	Cuetzalan del Progreso	Puebla
1644	Cuyoaco	Puebla
1645	Chalchicomula de Sesma	Puebla
1646	Chapulco	Puebla
1647	Chiautla	Puebla
1648	Chiautzingo	Puebla
1649	Chiconcuautla	Puebla
1650	Chichiquila	Puebla
1651	Chietla	Puebla
1652	Chigmecatitlán	Puebla
1653	Chignahuapan	Puebla
1654	Chignautla	Puebla
1655	Chila	Puebla
1656	Chila de la Sal	Puebla
1657	Honey	Puebla
1658	Chilchotla	Puebla
1659	Chinantla	Puebla
1660	Domingo Arenas	Puebla
1661	Eloxochitlán	Puebla
1662	Epatlán	Puebla
1663	Esperanza	Puebla
1664	Francisco Z. Mena	Puebla
1665	General Felipe Ángeles	Puebla
1666	Guadalupe	Puebla
1667	Guadalupe Victoria	Puebla
1668	Hermenegildo Galeana	Puebla
1669	Huaquechula	Puebla
1670	Huatlatlauca	Puebla
1671	Huauchinango	Puebla
1672	Huehuetla	Puebla
1673	Huehuetlán el Chico	Puebla
1674	Huejotzingo	Puebla
1675	Hueyapan	Puebla
1676	Hueytamalco	Puebla
1677	Hueytlalpan	Puebla
1678	Huitzilan de Serdán	Puebla
1679	Huitziltepec	Puebla
1680	Atlequizayan	Puebla
1681	Ixcamilpa de Guerrero	Puebla
1682	Ixcaquixtla	Puebla
1683	Ixtacamaxtitlán	Puebla
1684	Ixtepec	Puebla
1685	Izúcar de Matamoros	Puebla
1686	Jalpan	Puebla
1687	Jolalpan	Puebla
1688	Jonotla	Puebla
1689	Jopala	Puebla
1690	Juan C. Bonilla	Puebla
1691	Juan Galindo	Puebla
1692	Juan N. Méndez	Puebla
1693	Lafragua	Puebla
1694	Libres	Puebla
1695	La Magdalena Tlatlauquitepec	Puebla
1696	Mazapiltepec de Juárez	Puebla
1697	Mixtla	Puebla
1698	Molcaxac	Puebla
1699	Cañada Morelos	Puebla
1700	Naupan	Puebla
1701	Nauzontla	Puebla
1702	Nealtican	Puebla
1703	Nicolás Bravo	Puebla
1704	Nopalucan	Puebla
1705	Ocotepec	Puebla
1706	Ocoyucan	Puebla
1707	Olintla	Puebla
1708	Oriental	Puebla
1709	Pahuatlán	Puebla
1710	Palmar de Bravo	Puebla
1711	Pantepec	Puebla
1712	Petlalcingo	Puebla
1713	Piaxtla	Puebla
1714	Puebla	Puebla
1715	Quecholac	Puebla
1716	Quimixtlán	Puebla
1717	Rafael Lara Grajales	Puebla
1718	Los Reyes de Juárez	Puebla
1719	San Andrés Cholula	Puebla
1720	San Antonio Cañada	Puebla
1721	San Diego la Mesa Tochimiltzingo	Puebla
1722	San Felipe Teotlalcingo	Puebla
1723	San Felipe Tepatlán	Puebla
1724	San Gabriel Chilac	Puebla
1725	San Gregorio Atzompa	Puebla
1726	San Jerónimo Tecuanipan	Puebla
1727	San Jerónimo Xayacatlán	Puebla
1728	San José Chiapa	Puebla
1729	San José Miahuatlán	Puebla
1730	San Juan Atenco	Puebla
1731	San Juan Atzompa	Puebla
1732	San Martín Texmelucan	Puebla
1733	San Martín Totoltepec	Puebla
1734	San Matías Tlalancaleca	Puebla
1735	San Miguel Ixitlán	Puebla
1736	San Miguel Xoxtla	Puebla
1737	San Nicolás Buenos Aires	Puebla
1738	San Nicolás de los Ranchos	Puebla
1739	San Pablo Anicano	Puebla
1740	San Pedro Cholula	Puebla
1741	San Pedro Yeloixtlahuaca	Puebla
1742	San Salvador el Seco	Puebla
1743	San Salvador el Verde	Puebla
1744	San Salvador Huixcolotla	Puebla
1745	San Sebastián Tlacotepec	Puebla
1746	Santa Catarina Tlaltempan	Puebla
1747	Santa Inés Ahuatempan	Puebla
1748	Santa Isabel Cholula	Puebla
1749	Santiago Miahuatlán	Puebla
1750	Huehuetlán el Grande	Puebla
1751	Santo Tomás Hueyotlipan	Puebla
1752	Soltepec	Puebla
1753	Tecali de Herrera	Puebla
1754	Tecamachalco	Puebla
1755	Tecomatlán	Puebla
1756	Tehuacán	Puebla
1757	Tehuitzingo	Puebla
1758	Tenampulco	Puebla
1759	Teopantlán	Puebla
1760	Teotlalco	Puebla
1761	Tepanco de López	Puebla
1762	Tepango de Rodríguez	Puebla
1763	Tepatlaxco de Hidalgo	Puebla
1764	Tepeaca	Puebla
1765	Tepemaxalco	Puebla
1766	Tepeojuma	Puebla
1767	Tepetzintla	Puebla
1768	Tepexco	Puebla
1769	Tepexi de Rodríguez	Puebla
1770	Tepeyahualco	Puebla
1771	Tepeyahualco de Cuauhtémoc	Puebla
1772	Tetela de Ocampo	Puebla
1773	Teteles de Avila Castillo	Puebla
1774	Teziutlán	Puebla
1775	Tianguismanalco	Puebla
1776	Tilapa	Puebla
1777	Tlacotepec de Benito Juárez	Puebla
1778	Tlacuilotepec	Puebla
1779	Tlachichuca	Puebla
1780	Tlahuapan	Puebla
1781	Tlaltenango	Puebla
1782	Tlanepantla	Puebla
1783	Tlaola	Puebla
1784	Tlapacoya	Puebla
1785	Tlapanalá	Puebla
1786	Tlatlauquitepec	Puebla
1787	Tlaxco	Puebla
1788	Tochimilco	Puebla
1789	Tochtepec	Puebla
1790	Totoltepec de Guerrero	Puebla
1791	Tulcingo	Puebla
1792	Tuzamapan de Galeana	Puebla
1793	Tzicatlacoyan	Puebla
1794	Venustiano Carranza	Puebla
1795	Vicente Guerrero	Puebla
1796	Xayacatlán de Bravo	Puebla
1797	Xicotepec	Puebla
1798	Xicotlán	Puebla
1799	Xiutetelco	Puebla
1800	Xochiapulco	Puebla
1801	Xochiltepec	Puebla
1802	Xochitlán de Vicente Suárez	Puebla
1803	Xochitlán Todos Santos	Puebla
1804	Yaonáhuac	Puebla
1805	Yehualtepec	Puebla
1806	Zacapala	Puebla
1807	Zacapoaxtla	Puebla
1808	Zacatlán	Puebla
1809	Zapotitlán	Puebla
1810	Zapotitlán de Méndez	Puebla
1811	Zaragoza	Puebla
1812	Zautla	Puebla
1813	Zihuateutla	Puebla
1814	Zinacatepec	Puebla
1815	Zongozotla	Puebla
1816	Zoquiapan	Puebla
1817	Zoquitlán	Puebla
1818	Amealco de Bonfil	Querétaro
1819	Pinal de Amoles	Querétaro
1820	Arroyo Seco	Querétaro
1821	Cadereyta de Montes	Querétaro
1822	Colón	Querétaro
1823	Corregidora	Querétaro
1824	Ezequiel Montes	Querétaro
1825	Huimilpan	Querétaro
1826	Jalpan de Serra	Querétaro
1827	Landa de Matamoros	Querétaro
1828	El Marqués	Querétaro
1829	Pedro Escobedo	Querétaro
1830	Peñamiller	Querétaro
1831	Querétaro	Querétaro
1832	San Joaquín	Querétaro
1833	San Juan del Río	Querétaro
1834	Tequisquiapan	Querétaro
1835	Tolimán	Querétaro
1836	Cozumel	Quintana Roo
1837	Felipe Carrillo Puerto	Quintana Roo
1838	Isla Mujeres	Quintana Roo
1839	Othón P. Blanco	Quintana Roo
1840	Benito Juárez	Quintana Roo
1841	José María Morelos	Quintana Roo
1842	Lázaro Cárdenas	Quintana Roo
1843	Solidaridad	Quintana Roo
1844	Tulum	Quintana Roo
1845	Bacalar	Quintana Roo
1846	Ahualulco	San Luis Potosí
1847	Alaquines	San Luis Potosí
1848	Aquismón	San Luis Potosí
1849	Armadillo de los Infante	San Luis Potosí
1850	Cárdenas	San Luis Potosí
1851	Catorce	San Luis Potosí
1852	Cedral	San Luis Potosí
1853	Cerritos	San Luis Potosí
1854	Cerro de San Pedro	San Luis Potosí
1855	Ciudad del Maíz	San Luis Potosí
1856	Ciudad Fernández	San Luis Potosí
1857	Tancanhuitz	San Luis Potosí
1858	Ciudad Valles	San Luis Potosí
1859	Coxcatlán	San Luis Potosí
1860	Charcas	San Luis Potosí
1861	Ebano	San Luis Potosí
1862	Guadalcázar	San Luis Potosí
1863	Huehuetlán	San Luis Potosí
1864	Lagunillas	San Luis Potosí
1865	Matehuala	San Luis Potosí
1866	Mexquitic de Carmona	San Luis Potosí
1867	Moctezuma	San Luis Potosí
1868	Rayón	San Luis Potosí
1869	Rioverde	San Luis Potosí
1870	Salinas	San Luis Potosí
1871	San Antonio	San Luis Potosí
1872	San Ciro de Acosta	San Luis Potosí
1873	San Luis Potosí	San Luis Potosí
1874	San Martín Chalchicuautla	San Luis Potosí
1875	San Nicolás Tolentino	San Luis Potosí
1876	Santa Catarina	San Luis Potosí
1877	Santa María del Río	San Luis Potosí
1878	Santo Domingo	San Luis Potosí
1879	San Vicente Tancuayalab	San Luis Potosí
1880	Soledad de Graciano Sánchez	San Luis Potosí
1881	Tamasopo	San Luis Potosí
1882	Tamazunchale	San Luis Potosí
1883	Tampacán	San Luis Potosí
1884	Tampamolón Corona	San Luis Potosí
1885	Tamuín	San Luis Potosí
1886	Tanlajás	San Luis Potosí
1887	Tanquián de Escobedo	San Luis Potosí
1888	Tierra Nueva	San Luis Potosí
1889	Vanegas	San Luis Potosí
1890	Venado	San Luis Potosí
1891	Villa de Arriaga	San Luis Potosí
1892	Villa de Guadalupe	San Luis Potosí
1893	Villa de la Paz	San Luis Potosí
1894	Villa de Ramos	San Luis Potosí
1895	Villa de Reyes	San Luis Potosí
1896	Villa Hidalgo	San Luis Potosí
1897	Villa Juárez	San Luis Potosí
1898	Axtla de Terrazas	San Luis Potosí
1899	Xilitla	San Luis Potosí
1900	Zaragoza	San Luis Potosí
1901	Villa de Arista	San Luis Potosí
1902	Matlapa	San Luis Potosí
1903	El Naranjo	San Luis Potosí
1904	Ahome	Sinaloa
1905	Angostura	Sinaloa
1906	Badiraguato	Sinaloa
1907	Concordia	Sinaloa
1908	Cosalá	Sinaloa
1909	Culiacán	Sinaloa
1910	Choix	Sinaloa
1911	Elota	Sinaloa
1912	Escuinapa	Sinaloa
1913	El Fuerte	Sinaloa
1914	Guasave	Sinaloa
1915	Mazatlán	Sinaloa
1916	Mocorito	Sinaloa
1917	Rosario	Sinaloa
1918	Salvador Alvarado	Sinaloa
1919	San Ignacio	Sinaloa
1920	Sinaloa	Sinaloa
1921	Navolato	Sinaloa
1922	Aconchi	Sonora
1923	Agua Prieta	Sonora
1924	Alamos	Sonora
1925	Altar	Sonora
1926	Arivechi	Sonora
1927	Arizpe	Sonora
1928	Atil	Sonora
1929	Bacadéhuachi	Sonora
1930	Bacanora	Sonora
1931	Bacerac	Sonora
1932	Bacoachi	Sonora
1933	Bácum	Sonora
1934	Banámichi	Sonora
1935	Baviácora	Sonora
1936	Bavispe	Sonora
1937	Benjamín Hill	Sonora
1938	Caborca	Sonora
1939	Cajeme	Sonora
1940	Cananea	Sonora
1941	Carbó	Sonora
1942	La Colorada	Sonora
1943	Cucurpe	Sonora
1944	Cumpas	Sonora
1945	Divisaderos	Sonora
1946	Empalme	Sonora
1947	Etchojoa	Sonora
1948	Fronteras	Sonora
1949	Granados	Sonora
1950	Guaymas	Sonora
1951	Hermosillo	Sonora
1952	Huachinera	Sonora
1953	Huásabas	Sonora
1954	Huatabampo	Sonora
1955	Huépac	Sonora
1956	Imuris	Sonora
1957	Magdalena	Sonora
1958	Mazatán	Sonora
1959	Moctezuma	Sonora
1960	Naco	Sonora
1961	Nácori Chico	Sonora
1962	Nacozari de García	Sonora
1963	Navojoa	Sonora
1964	Nogales	Sonora
1965	Onavas	Sonora
1966	Opodepe	Sonora
1967	Oquitoa	Sonora
1968	Pitiquito	Sonora
1969	Puerto Peñasco	Sonora
1970	Quiriego	Sonora
1971	Rayón	Sonora
1972	Rosario	Sonora
1973	Sahuaripa	Sonora
1974	San Felipe de Jesús	Sonora
1975	San Javier	Sonora
1976	San Luis Río Colorado	Sonora
1977	San Miguel de Horcasitas	Sonora
1978	San Pedro de la Cueva	Sonora
1979	Santa Ana	Sonora
1980	Santa Cruz	Sonora
1981	Sáric	Sonora
1982	Soyopa	Sonora
1983	Suaqui Grande	Sonora
1984	Tepache	Sonora
1985	Trincheras	Sonora
1986	Tubutama	Sonora
1987	Ures	Sonora
1988	Villa Hidalgo	Sonora
1989	Villa Pesqueira	Sonora
1990	Yécora	Sonora
1991	General Plutarco Elías Calles	Sonora
1992	Benito Juárez	Sonora
1993	San Ignacio Río Muerto	Sonora
1994	Balancán	Tabasco
1995	Cárdenas	Tabasco
1996	Centla	Tabasco
1997	Centro	Tabasco
1998	Comalcalco	Tabasco
1999	Cunduacán	Tabasco
2000	Emiliano Zapata	Tabasco
2001	Huimanguillo	Tabasco
2002	Jalapa	Tabasco
2003	Jalpa de Méndez	Tabasco
2004	Jonuta	Tabasco
2005	Macuspana	Tabasco
2006	Nacajuca	Tabasco
2007	Paraíso	Tabasco
2008	Tacotalpa	Tabasco
2009	Teapa	Tabasco
2010	Tenosique	Tabasco
2011	Abasolo	Tamaulipas
2012	Aldama	Tamaulipas
2013	Altamira	Tamaulipas
2014	Antiguo Morelos	Tamaulipas
2015	Burgos	Tamaulipas
2016	Bustamante	Tamaulipas
2017	Camargo	Tamaulipas
2018	Casas	Tamaulipas
2019	Ciudad Madero	Tamaulipas
2020	Cruillas	Tamaulipas
2021	Gómez Farías	Tamaulipas
2022	González	Tamaulipas
2023	Güémez	Tamaulipas
2024	Guerrero	Tamaulipas
2025	Gustavo Díaz Ordaz	Tamaulipas
2026	Hidalgo	Tamaulipas
2027	Jaumave	Tamaulipas
2028	Jiménez	Tamaulipas
2029	Llera	Tamaulipas
2030	Mainero	Tamaulipas
2031	El Mante	Tamaulipas
2032	Matamoros	Tamaulipas
2033	Méndez	Tamaulipas
2034	Mier	Tamaulipas
2035	Miguel Alemán	Tamaulipas
2036	Miquihuana	Tamaulipas
2037	Nuevo Laredo	Tamaulipas
2038	Nuevo Morelos	Tamaulipas
2039	Ocampo	Tamaulipas
2040	Padilla	Tamaulipas
2041	Palmillas	Tamaulipas
2042	Reynosa	Tamaulipas
2043	Río Bravo	Tamaulipas
2044	San Carlos	Tamaulipas
2045	San Fernando	Tamaulipas
2046	San Nicolás	Tamaulipas
2047	Soto la Marina	Tamaulipas
2048	Tampico	Tamaulipas
2049	Tula	Tamaulipas
2050	Valle Hermoso	Tamaulipas
2051	Victoria	Tamaulipas
2052	Villagrán	Tamaulipas
2053	Xicoténcatl	Tamaulipas
2054	Amaxac de Guerrero	Tlaxcala
2055	Apetatitlán de Antonio Carvajal	Tlaxcala
2056	Atlangatepec	Tlaxcala
2057	Altzayanca	Tlaxcala
2058	Apizaco	Tlaxcala
2059	Calpulalpan	Tlaxcala
2060	El Carmen Tequexquitla	Tlaxcala
2061	Cuapiaxtla	Tlaxcala
2062	Cuaxomulco	Tlaxcala
2063	Chiautempan	Tlaxcala
2064	Muñoz de Domingo Arenas	Tlaxcala
2065	Españita	Tlaxcala
2066	Huamantla	Tlaxcala
2067	Hueyotlipan	Tlaxcala
2068	Ixtacuixtla de Mariano Matamoros	Tlaxcala
2069	Ixtenco	Tlaxcala
2070	Mazatecochco de José María Morelos	Tlaxcala
2071	Contla de Juan Cuamatzi	Tlaxcala
2072	Tepetitla de Lardizábal	Tlaxcala
2073	Sanctórum de Lázaro Cárdenas	Tlaxcala
2074	Nanacamilpa de Mariano Arista	Tlaxcala
2075	Acuamanala de Miguel Hidalgo	Tlaxcala
2076	Natívitas	Tlaxcala
2077	Panotla	Tlaxcala
2078	San Pablo del Monte	Tlaxcala
2079	Santa Cruz Tlaxcala	Tlaxcala
2080	Tenancingo	Tlaxcala
2081	Teolocholco	Tlaxcala
2082	Tepeyanco	Tlaxcala
2083	Terrenate	Tlaxcala
2084	Tetla de la Solidaridad	Tlaxcala
2085	Tetlatlahuca	Tlaxcala
2086	Tlaxcala	Tlaxcala
2087	Tlaxco	Tlaxcala
2088	Tocatlán	Tlaxcala
2089	Totolac	Tlaxcala
2090	Ziltlaltépec de Trinidad Sánchez Santos	Tlaxcala
2091	Tzompantepec	Tlaxcala
2092	Xaloztoc	Tlaxcala
2093	Xaltocan	Tlaxcala
2094	Papalotla de Xicohténcatl	Tlaxcala
2095	Xicohtzinco	Tlaxcala
2096	Yauhquemehcan	Tlaxcala
2097	Zacatelco	Tlaxcala
2098	Benito Juárez	Tlaxcala
2099	Emiliano Zapata	Tlaxcala
2100	Lázaro Cárdenas	Tlaxcala
2101	La Magdalena Tlaltelulco	Tlaxcala
2102	San Damián Texóloc	Tlaxcala
2103	San Francisco Tetlanohcan	Tlaxcala
2104	San Jerónimo Zacualpan	Tlaxcala
2105	San José Teacalco	Tlaxcala
2106	San Juan Huactzinco	Tlaxcala
2107	San Lorenzo Axocomanitla	Tlaxcala
2108	San Lucas Tecopilco	Tlaxcala
2109	Santa Ana Nopalucan	Tlaxcala
2110	Santa Apolonia Teacalco	Tlaxcala
2111	Santa Catarina Ayometla	Tlaxcala
2112	Santa Cruz Quilehtla	Tlaxcala
2113	Santa Isabel Xiloxoxtla	Tlaxcala
2114	Acajete	Veracruz de Ignacio de la Llave
2115	Acatlán	Veracruz de Ignacio de la Llave
2116	Acayucan	Veracruz de Ignacio de la Llave
2117	Actopan	Veracruz de Ignacio de la Llave
2118	Acula	Veracruz de Ignacio de la Llave
2119	Acultzingo	Veracruz de Ignacio de la Llave
2120	Camarón de Tejeda	Veracruz de Ignacio de la Llave
2121	Alpatláhuac	Veracruz de Ignacio de la Llave
2122	Alto Lucero de Gutiérrez Barrios	Veracruz de Ignacio de la Llave
2123	Altotonga	Veracruz de Ignacio de la Llave
2124	Alvarado	Veracruz de Ignacio de la Llave
2125	Amatitlán	Veracruz de Ignacio de la Llave
2126	Naranjos Amatlán	Veracruz de Ignacio de la Llave
2127	Amatlán de los Reyes	Veracruz de Ignacio de la Llave
2128	Angel R. Cabada	Veracruz de Ignacio de la Llave
2129	La Antigua	Veracruz de Ignacio de la Llave
2130	Apazapan	Veracruz de Ignacio de la Llave
2131	Aquila	Veracruz de Ignacio de la Llave
2132	Astacinga	Veracruz de Ignacio de la Llave
2133	Atlahuilco	Veracruz de Ignacio de la Llave
2134	Atoyac	Veracruz de Ignacio de la Llave
2135	Atzacan	Veracruz de Ignacio de la Llave
2136	Atzalan	Veracruz de Ignacio de la Llave
2137	Tlaltetela	Veracruz de Ignacio de la Llave
2138	Ayahualulco	Veracruz de Ignacio de la Llave
2139	Banderilla	Veracruz de Ignacio de la Llave
2140	Benito Juárez	Veracruz de Ignacio de la Llave
2141	Boca del Río	Veracruz de Ignacio de la Llave
2142	Calcahualco	Veracruz de Ignacio de la Llave
2143	Camerino Z. Mendoza	Veracruz de Ignacio de la Llave
2144	Carrillo Puerto	Veracruz de Ignacio de la Llave
2145	Catemaco	Veracruz de Ignacio de la Llave
2146	Cazones de Herrera	Veracruz de Ignacio de la Llave
2147	Cerro Azul	Veracruz de Ignacio de la Llave
2148	Citlaltépetl	Veracruz de Ignacio de la Llave
2149	Coacoatzintla	Veracruz de Ignacio de la Llave
2150	Coahuitlán	Veracruz de Ignacio de la Llave
2151	Coatepec	Veracruz de Ignacio de la Llave
2152	Coatzacoalcos	Veracruz de Ignacio de la Llave
2153	Coatzintla	Veracruz de Ignacio de la Llave
2154	Coetzala	Veracruz de Ignacio de la Llave
2155	Colipa	Veracruz de Ignacio de la Llave
2156	Comapa	Veracruz de Ignacio de la Llave
2157	Córdoba	Veracruz de Ignacio de la Llave
2158	Cosamaloapan de Carpio	Veracruz de Ignacio de la Llave
2159	Cosautlán de Carvajal	Veracruz de Ignacio de la Llave
2160	Coscomatepec	Veracruz de Ignacio de la Llave
2161	Cosoleacaque	Veracruz de Ignacio de la Llave
2162	Cotaxtla	Veracruz de Ignacio de la Llave
2163	Coxquihui	Veracruz de Ignacio de la Llave
2164	Coyutla	Veracruz de Ignacio de la Llave
2165	Cuichapa	Veracruz de Ignacio de la Llave
2166	Cuitláhuac	Veracruz de Ignacio de la Llave
2167	Chacaltianguis	Veracruz de Ignacio de la Llave
2168	Chalma	Veracruz de Ignacio de la Llave
2169	Chiconamel	Veracruz de Ignacio de la Llave
2170	Chiconquiaco	Veracruz de Ignacio de la Llave
2171	Chicontepec	Veracruz de Ignacio de la Llave
2172	Chinameca	Veracruz de Ignacio de la Llave
2173	Chinampa de Gorostiza	Veracruz de Ignacio de la Llave
2174	Las Choapas	Veracruz de Ignacio de la Llave
2175	Chocamán	Veracruz de Ignacio de la Llave
2176	Chontla	Veracruz de Ignacio de la Llave
2177	Chumatlán	Veracruz de Ignacio de la Llave
2178	Emiliano Zapata	Veracruz de Ignacio de la Llave
2179	Espinal	Veracruz de Ignacio de la Llave
2180	Filomeno Mata	Veracruz de Ignacio de la Llave
2181	Fortín	Veracruz de Ignacio de la Llave
2182	Gutiérrez Zamora	Veracruz de Ignacio de la Llave
2183	Hidalgotitlán	Veracruz de Ignacio de la Llave
2184	Huatusco	Veracruz de Ignacio de la Llave
2185	Huayacocotla	Veracruz de Ignacio de la Llave
2186	Hueyapan de Ocampo	Veracruz de Ignacio de la Llave
2187	Huiloapan de Cuauhtémoc	Veracruz de Ignacio de la Llave
2188	Ignacio de la Llave	Veracruz de Ignacio de la Llave
2189	Ilamatlán	Veracruz de Ignacio de la Llave
2190	Isla	Veracruz de Ignacio de la Llave
2191	Ixcatepec	Veracruz de Ignacio de la Llave
2192	Ixhuacán de los Reyes	Veracruz de Ignacio de la Llave
2193	Ixhuatlán del Café	Veracruz de Ignacio de la Llave
2194	Ixhuatlancillo	Veracruz de Ignacio de la Llave
2195	Ixhuatlán del Sureste	Veracruz de Ignacio de la Llave
2196	Ixhuatlán de Madero	Veracruz de Ignacio de la Llave
2197	Ixmatlahuacan	Veracruz de Ignacio de la Llave
2198	Ixtaczoquitlán	Veracruz de Ignacio de la Llave
2199	Jalacingo	Veracruz de Ignacio de la Llave
2200	Xalapa	Veracruz de Ignacio de la Llave
2201	Jalcomulco	Veracruz de Ignacio de la Llave
2202	Jáltipan	Veracruz de Ignacio de la Llave
2203	Jamapa	Veracruz de Ignacio de la Llave
2204	Jesús Carranza	Veracruz de Ignacio de la Llave
2205	Xico	Veracruz de Ignacio de la Llave
2206	Jilotepec	Veracruz de Ignacio de la Llave
2207	Juan Rodríguez Clara	Veracruz de Ignacio de la Llave
2208	Juchique de Ferrer	Veracruz de Ignacio de la Llave
2209	Landero y Coss	Veracruz de Ignacio de la Llave
2210	Lerdo de Tejada	Veracruz de Ignacio de la Llave
2211	Magdalena	Veracruz de Ignacio de la Llave
2212	Maltrata	Veracruz de Ignacio de la Llave
2213	Manlio Fabio Altamirano	Veracruz de Ignacio de la Llave
2214	Mariano Escobedo	Veracruz de Ignacio de la Llave
2215	Martínez de la Torre	Veracruz de Ignacio de la Llave
2216	Mecatlán	Veracruz de Ignacio de la Llave
2217	Mecayapan	Veracruz de Ignacio de la Llave
2218	Medellín	Veracruz de Ignacio de la Llave
2219	Miahuatlán	Veracruz de Ignacio de la Llave
2220	Las Minas	Veracruz de Ignacio de la Llave
2221	Minatitlán	Veracruz de Ignacio de la Llave
2222	Misantla	Veracruz de Ignacio de la Llave
2223	Mixtla de Altamirano	Veracruz de Ignacio de la Llave
2224	Moloacán	Veracruz de Ignacio de la Llave
2225	Naolinco	Veracruz de Ignacio de la Llave
2226	Naranjal	Veracruz de Ignacio de la Llave
2227	Nautla	Veracruz de Ignacio de la Llave
2228	Nogales	Veracruz de Ignacio de la Llave
2229	Oluta	Veracruz de Ignacio de la Llave
2230	Omealca	Veracruz de Ignacio de la Llave
2231	Orizaba	Veracruz de Ignacio de la Llave
2232	Otatitlán	Veracruz de Ignacio de la Llave
2233	Oteapan	Veracruz de Ignacio de la Llave
2234	Ozuluama de Mascareñas	Veracruz de Ignacio de la Llave
2235	Pajapan	Veracruz de Ignacio de la Llave
2236	Pánuco	Veracruz de Ignacio de la Llave
2237	Papantla	Veracruz de Ignacio de la Llave
2238	Paso del Macho	Veracruz de Ignacio de la Llave
2239	Paso de Ovejas	Veracruz de Ignacio de la Llave
2240	La Perla	Veracruz de Ignacio de la Llave
2241	Perote	Veracruz de Ignacio de la Llave
2242	Platón Sánchez	Veracruz de Ignacio de la Llave
2243	Playa Vicente	Veracruz de Ignacio de la Llave
2244	Poza Rica de Hidalgo	Veracruz de Ignacio de la Llave
2245	Las Vigas de Ramírez	Veracruz de Ignacio de la Llave
2246	Pueblo Viejo	Veracruz de Ignacio de la Llave
2247	Puente Nacional	Veracruz de Ignacio de la Llave
2248	Rafael Delgado	Veracruz de Ignacio de la Llave
2249	Rafael Lucio	Veracruz de Ignacio de la Llave
2250	Los Reyes	Veracruz de Ignacio de la Llave
2251	Río Blanco	Veracruz de Ignacio de la Llave
2252	Saltabarranca	Veracruz de Ignacio de la Llave
2253	San Andrés Tenejapan	Veracruz de Ignacio de la Llave
2254	San Andrés Tuxtla	Veracruz de Ignacio de la Llave
2255	San Juan Evangelista	Veracruz de Ignacio de la Llave
2256	Santiago Tuxtla	Veracruz de Ignacio de la Llave
2257	Sayula de Alemán	Veracruz de Ignacio de la Llave
2258	Soconusco	Veracruz de Ignacio de la Llave
2259	Sochiapa	Veracruz de Ignacio de la Llave
2260	Soledad Atzompa	Veracruz de Ignacio de la Llave
2261	Soledad de Doblado	Veracruz de Ignacio de la Llave
2262	Soteapan	Veracruz de Ignacio de la Llave
2263	Tamalín	Veracruz de Ignacio de la Llave
2264	Tamiahua	Veracruz de Ignacio de la Llave
2265	Tampico Alto	Veracruz de Ignacio de la Llave
2266	Tancoco	Veracruz de Ignacio de la Llave
2267	Tantima	Veracruz de Ignacio de la Llave
2268	Tantoyuca	Veracruz de Ignacio de la Llave
2269	Tatatila	Veracruz de Ignacio de la Llave
2270	Castillo de Teayo	Veracruz de Ignacio de la Llave
2271	Tecolutla	Veracruz de Ignacio de la Llave
2272	Tehuipango	Veracruz de Ignacio de la Llave
2273	Álamo Temapache	Veracruz de Ignacio de la Llave
2274	Tempoal	Veracruz de Ignacio de la Llave
2275	Tenampa	Veracruz de Ignacio de la Llave
2276	Tenochtitlán	Veracruz de Ignacio de la Llave
2277	Teocelo	Veracruz de Ignacio de la Llave
2278	Tepatlaxco	Veracruz de Ignacio de la Llave
2279	Tepetlán	Veracruz de Ignacio de la Llave
2280	Tepetzintla	Veracruz de Ignacio de la Llave
2281	Tequila	Veracruz de Ignacio de la Llave
2282	José Azueta	Veracruz de Ignacio de la Llave
2283	Texcatepec	Veracruz de Ignacio de la Llave
2284	Texhuacán	Veracruz de Ignacio de la Llave
2285	Texistepec	Veracruz de Ignacio de la Llave
2286	Tezonapa	Veracruz de Ignacio de la Llave
2287	Tierra Blanca	Veracruz de Ignacio de la Llave
2288	Tihuatlán	Veracruz de Ignacio de la Llave
2289	Tlacojalpan	Veracruz de Ignacio de la Llave
2290	Tlacolulan	Veracruz de Ignacio de la Llave
2291	Tlacotalpan	Veracruz de Ignacio de la Llave
2292	Tlacotepec de Mejía	Veracruz de Ignacio de la Llave
2293	Tlachichilco	Veracruz de Ignacio de la Llave
2294	Tlalixcoyan	Veracruz de Ignacio de la Llave
2295	Tlalnelhuayocan	Veracruz de Ignacio de la Llave
2296	Tlapacoyan	Veracruz de Ignacio de la Llave
2297	Tlaquilpa	Veracruz de Ignacio de la Llave
2298	Tlilapan	Veracruz de Ignacio de la Llave
2299	Tomatlán	Veracruz de Ignacio de la Llave
2300	Tonayán	Veracruz de Ignacio de la Llave
2301	Totutla	Veracruz de Ignacio de la Llave
2302	Tuxpan	Veracruz de Ignacio de la Llave
2303	Tuxtilla	Veracruz de Ignacio de la Llave
2304	Ursulo Galván	Veracruz de Ignacio de la Llave
2305	Vega de Alatorre	Veracruz de Ignacio de la Llave
2306	Veracruz	Veracruz de Ignacio de la Llave
2307	Villa Aldama	Veracruz de Ignacio de la Llave
2308	Xoxocotla	Veracruz de Ignacio de la Llave
2309	Yanga	Veracruz de Ignacio de la Llave
2310	Yecuatla	Veracruz de Ignacio de la Llave
2311	Zacualpan	Veracruz de Ignacio de la Llave
2312	Zaragoza	Veracruz de Ignacio de la Llave
2313	Zentla	Veracruz de Ignacio de la Llave
2314	Zongolica	Veracruz de Ignacio de la Llave
2315	Zontecomatlán de López y Fuentes	Veracruz de Ignacio de la Llave
2316	Zozocolco de Hidalgo	Veracruz de Ignacio de la Llave
2317	Agua Dulce	Veracruz de Ignacio de la Llave
2318	El Higo	Veracruz de Ignacio de la Llave
2319	Nanchital de Lázaro Cárdenas del Río	Veracruz de Ignacio de la Llave
2320	Tres Valles	Veracruz de Ignacio de la Llave
2321	Carlos A. Carrillo	Veracruz de Ignacio de la Llave
2322	Tatahuicapan de Juárez	Veracruz de Ignacio de la Llave
2323	Uxpanapa	Veracruz de Ignacio de la Llave
2324	San Rafael	Veracruz de Ignacio de la Llave
2325	Santiago Sochiapan	Veracruz de Ignacio de la Llave
2326	Abalá	Yucatán
2327	Acanceh	Yucatán
2328	Akil	Yucatán
2329	Baca	Yucatán
2330	Bokobá	Yucatán
2331	Buctzotz	Yucatán
2332	Cacalchén	Yucatán
2333	Calotmul	Yucatán
2334	Cansahcab	Yucatán
2335	Cantamayec	Yucatán
2336	Celestún	Yucatán
2337	Cenotillo	Yucatán
2338	Conkal	Yucatán
2339	Cuncunul	Yucatán
2340	Cuzamá	Yucatán
2341	Chacsinkín	Yucatán
2342	Chankom	Yucatán
2343	Chapab	Yucatán
2344	Chemax	Yucatán
2345	Chicxulub Pueblo	Yucatán
2346	Chichimilá	Yucatán
2347	Chikindzonot	Yucatán
2348	Chocholá	Yucatán
2349	Chumayel	Yucatán
2350	Dzán	Yucatán
2351	Dzemul	Yucatán
2352	Dzidzantún	Yucatán
2353	Dzilam de Bravo	Yucatán
2354	Dzilam González	Yucatán
2355	Dzitás	Yucatán
2356	Dzoncauich	Yucatán
2357	Espita	Yucatán
2358	Halachó	Yucatán
2359	Hocabá	Yucatán
2360	Hoctún	Yucatán
2361	Homún	Yucatán
2362	Huhí	Yucatán
2363	Hunucmá	Yucatán
2364	Ixil	Yucatán
2365	Izamal	Yucatán
2366	Kanasín	Yucatán
2367	Kantunil	Yucatán
2368	Kaua	Yucatán
2369	Kinchil	Yucatán
2370	Kopomá	Yucatán
2371	Mama	Yucatán
2372	Maní	Yucatán
2373	Maxcanú	Yucatán
2374	Mayapán	Yucatán
2375	Mérida	Yucatán
2376	Mocochá	Yucatán
2377	Motul	Yucatán
2378	Muna	Yucatán
2379	Muxupip	Yucatán
2380	Opichén	Yucatán
2381	Oxkutzcab	Yucatán
2382	Panabá	Yucatán
2383	Peto	Yucatán
2384	Progreso	Yucatán
2385	Quintana Roo	Yucatán
2386	Río Lagartos	Yucatán
2387	Sacalum	Yucatán
2388	Samahil	Yucatán
2389	Sanahcat	Yucatán
2390	San Felipe	Yucatán
2391	Santa Elena	Yucatán
2392	Seyé	Yucatán
2393	Sinanché	Yucatán
2394	Sotuta	Yucatán
2395	Sucilá	Yucatán
2396	Sudzal	Yucatán
2397	Suma	Yucatán
2398	Tahdziú	Yucatán
2399	Tahmek	Yucatán
2400	Teabo	Yucatán
2401	Tecoh	Yucatán
2402	Tekal de Venegas	Yucatán
2403	Tekantó	Yucatán
2404	Tekax	Yucatán
2405	Tekit	Yucatán
2406	Tekom	Yucatán
2407	Telchac Pueblo	Yucatán
2408	Telchac Puerto	Yucatán
2409	Temax	Yucatán
2410	Temozón	Yucatán
2411	Tepakán	Yucatán
2412	Tetiz	Yucatán
2413	Teya	Yucatán
2414	Ticul	Yucatán
2415	Timucuy	Yucatán
2416	Tinum	Yucatán
2417	Tixcacalcupul	Yucatán
2418	Tixkokob	Yucatán
2419	Tixmehuac	Yucatán
2420	Tixpéhual	Yucatán
2421	Tizimín	Yucatán
2422	Tunkás	Yucatán
2423	Tzucacab	Yucatán
2424	Uayma	Yucatán
2425	Ucú	Yucatán
2426	Umán	Yucatán
2427	Valladolid	Yucatán
2428	Xocchel	Yucatán
2429	Yaxcabá	Yucatán
2430	Yaxkukul	Yucatán
2431	Yobaín	Yucatán
2432	Apozol	Zacatecas
2433	Apulco	Zacatecas
2434	Atolinga	Zacatecas
2435	Benito Juárez	Zacatecas
2436	Calera	Zacatecas
2437	Cañitas de Felipe Pescador	Zacatecas
2438	Concepción del Oro	Zacatecas
2439	Cuauhtémoc	Zacatecas
2440	Chalchihuites	Zacatecas
2441	Fresnillo	Zacatecas
2442	Trinidad García de la Cadena	Zacatecas
2443	Genaro Codina	Zacatecas
2444	General Enrique Estrada	Zacatecas
2445	General Francisco R. Murguía	Zacatecas
2446	El Plateado de Joaquín Amaro	Zacatecas
2447	General Pánfilo Natera	Zacatecas
2448	Guadalupe	Zacatecas
2449	Huanusco	Zacatecas
2450	Jalpa	Zacatecas
2451	Jerez	Zacatecas
2452	Jiménez del Teul	Zacatecas
2453	Juan Aldama	Zacatecas
2454	Juchipila	Zacatecas
2455	Loreto	Zacatecas
2456	Luis Moya	Zacatecas
2457	Mazapil	Zacatecas
2458	Melchor Ocampo	Zacatecas
2459	Mezquital del Oro	Zacatecas
2460	Miguel Auza	Zacatecas
2461	Momax	Zacatecas
2462	Monte Escobedo	Zacatecas
2463	Morelos	Zacatecas
2464	Moyahua de Estrada	Zacatecas
2465	Nochistlán de Mejía	Zacatecas
2466	Noria de Ángeles	Zacatecas
2467	Ojocaliente	Zacatecas
2468	Pánuco	Zacatecas
2469	Pinos	Zacatecas
2470	Río Grande	Zacatecas
2471	Sain Alto	Zacatecas
2472	El Salvador	Zacatecas
2473	Sombrerete	Zacatecas
2474	Susticacán	Zacatecas
2475	Tabasco	Zacatecas
2476	Tepechitlán	Zacatecas
2477	Tepetongo	Zacatecas
2478	Teúl de González Ortega	Zacatecas
2479	Tlaltenango de Sánchez Román	Zacatecas
2480	Valparaíso	Zacatecas
2481	Vetagrande	Zacatecas
2482	Villa de Cos	Zacatecas
2483	Villa García	Zacatecas
2484	Villa González Ortega	Zacatecas
2485	Villa Hidalgo	Zacatecas
2486	Villanueva	Zacatecas
2487	Zacatecas	Zacatecas
2488	Trancoso	Zacatecas
2489	Santa María de la Paz	Zacatecas";
        $mx_country=Country::where('name','mexico');
        if($mx_country->count()){
            $mx_id=$mx_country->get()[0]->id;
            foreach(State::where('country_id',$mx_id)->get() as $state){
              City::where('state_id',$state->id)->delete();
            }
            State::where('country_id',$mx_id)->delete();

            $mexico_data=explode("\n",$mexico_data);
            $prev="";$state_id="";
            foreach($mexico_data as $row){
                $col=explode("\t",$row);
                //dd($col[0]."\t->\t".$col[1]."\t->\t".$col[2]."\n");
                if($col[2]!=$prev){
                    $prev=$col[2];
                    $state=State::firstOrCreate(array('country_id'=>$mx_id,'name'=>$col[2]));
                    $state_id=$state->id;
                }
                City::firstOrCreate(array('state_id'=>$state_id,'name'=>$col[1]));
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cities', function (Blueprint $table) {
            //
        });
    }
}
