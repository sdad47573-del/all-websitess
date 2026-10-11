/**
 * Textos de la web, en español y en portugués de Portugal.
 *
 * Los dos idiomas comparten la misma forma: `es` y `pt` tienen exactamente las mismas claves, así que
 * una plantilla escrita una vez sirve para las dos versiones (`/` y `/pt/`). Los datos del negocio no
 * están aquí, sino en `site.ts`: este fichero solo tiene lo que se lee.
 *
 * El portugués es de Portugal (pt-PT): «casa de banho», «pequeno-almoço», «avaliações», «à
 * segunda-feira».
 */

import type { Idioma } from './site';

/** Un bloque de una sección legal: un epígrafe con sus párrafos o su lista. */
export type Parte = {
	h3: string;
	/** La lista del titular no se escribe aquí: la compone la plantilla con `LEGAL`. */
	titular?: boolean;
	p?: readonly string[];
	ul?: readonly string[];
};

export type Seccion = { titulo: string; id?: string; partes: readonly Parte[] };
export type Faq = { q: string; a: string };

/**
 * Forma de los textos. Los dos idiomas se anotan con este tipo, así que si a uno le falta una clave
 * o se llama distinto, `tsc` lo dice antes de compilar.
 */
export type Textos = {
	locale: string;
	etiqueta: string;
	otroIdioma: string;
	title: string;
	description: string;
	schemaDescription: string;
	cocina: string;
	ogAlt: string;
	/** Texto alternativo de cada foto de la galería. */
	altFoto: string;
	/** Pie visible de cada foto: la ficha sí atribuye autor a estas diez. */
	credito: string;
	/** Resumen del horario para la cabecera y la franja de datos. */
	horarioResumen: string;
	skipLink: string;
	brandSub: string;
	nav: readonly { href: string; label: string }[];
	navLabel: string;
	navCta: string;
	dias: Record<string, string>;
	cerrado: string;
	hero: {
		eyebrow: string;
		tituloA: string;
		tituloB: string;
		ledeA: string;
		ledeB: string;
		ctaPrimaria: string;
		ctaSecundaria: string;
		datos: { direccion: string; horario: string; telefono: string; valoracion: string };
	};
	banda: { resenas: string; telefono: string; plusCode: string };
	local: {
		kicker: string;
		tituloA: string;
		tituloB: string;
		p1: string;
		p2: string;
		p3: string;
	};
	fotos: {
		kicker: string;
		tituloA: string;
		tituloB: string;
		leadA: string;
		leadB: string;
		nota: string;
		notaTelefono: string;
		notaMaps: string;
	};
	horario: {
		kicker: string;
		tituloA: string;
		tituloB: string;
		caption: string;
		nota: string;
		accesibilidadTitulo: string;
		telefonoTitulo: string;
		acciones: { indicaciones: string; ficha: string };
		mapaTitulo: string;
	};
	faq: { kicker: string; tituloA: string; tituloB: string; items: readonly Faq[] };
	accesibilidad: Record<string, string>;
	footer: {
		navLabel: string;
		indicaciones: string;
		ficha: string;
		resenas: string;
		nota: string;
		notaFin: string;
		legal: { aviso: string; privacidad: string; cookies: string };
	};
	llamar: string;
	/** Lo que se puede decir en el hueco de las reseñas: la ficha no destaca ninguna. */
	sinResenas: string;
	legal: {
		title: string;
		description: string;
		h1: string;
		actualizado: string;
		volver: string;
		migas: string;
		pendienteTitulo: string;
		pendiente: string;
		titular: {
			denominacion: string;
			razonSocial: string;
			nif: string;
			domicilio: string;
			telefono: string;
			email: string;
			nota: string;
		};
		secciones: readonly Seccion[];
	};
};

export const textos: Record<Idioma, Textos> = {
	es: {
		locale: 'es_ES',
		/** Etiqueta del propio idioma, para el conmutador. */
		etiqueta: 'Español',
		otroIdioma: 'Ver en português',
		title: 'Alentejo · Restaurante portugués en Moreanes, Mértola',
		description:
			'Alentejo, restaurante portugués en Moreanes (Mértola, Portugal). 4,5 sobre 5 con 1.273 reseñas; abre de martes a sábado y cierra los lunes.',
		schemaDescription:
			'Restaurante portugués en Moreanes, Mértola (Portugal), con 4,5 sobre 5 con 1.273 reseñas; cierra los lunes.',
		cocina: 'Cocina portuguesa',
		ogAlt: 'Fotografía del restaurante Alentejo publicada en su ficha de Google Maps',
		altFoto:
			'Fotografía publicada por el propio restaurante en su ficha de Google Maps',
		credito: 'Fotografía del propio establecimiento',
		horarioResumen:
			'De martes a sábado, 11:30 – 2:00 · domingo hasta las 15:00 · lunes cerrado',
		skipLink: 'Saltar al contenido',
		brandSub: 'Moreanes · Mértola',
		nav: [
			{ href: '#local', label: 'El local' },
			{ href: '#fotos', label: 'Las fotos' },
			{ href: '#horario', label: 'Horario' },
			{ href: '#preguntas', label: 'Preguntas' },
		],
		navLabel: 'Navegación principal',
		navCta: 'Llamar',
		/** Nombres de los días, para la tabla de horario. */
		dias: {
			Monday: 'Lunes',
			Tuesday: 'Martes',
			Wednesday: 'Miércoles',
			Thursday: 'Jueves',
			Friday: 'Viernes',
			Saturday: 'Sábado',
			Sunday: 'Domingo',
		},
		cerrado: 'Cerrado',
		hero: {
			eyebrow: 'Moreanes · Mértola · Portugal',
			tituloA: 'Alentejo,',
			tituloB: 'cocina portuguesa de la sierra.',
			ledeA:
				'Alentejo está en Moreanes, en el municipio de Mértola (Portugal). Google lo clasifica como restaurante portugués y le da',
			ledeB:
				'sobre 5 con 1.273 reseñas. La ficha publica horario y teléfono, así que aquí están los dos, tal cual aparecen en ella.',
			ctaPrimaria: 'Cómo llegar',
			ctaSecundaria: 'Ver la ficha en Maps',
			datos: { direccion: 'Dirección', horario: 'Horario', telefono: 'Teléfono', valoracion: 'Valoración' },
		},
		banda: { resenas: 'reseñas', telefono: 'Teléfono', plusCode: 'Plus code' },
		local: {
			kicker: 'El local',
			tituloA: 'Un restaurante portugués',
			tituloB: 'en la aldea de Moreanes.',
			p1: 'Google lo clasifica como restaurante portugués y le da una valoración de 4,5 sobre 5 con 1.273 reseñas. La ficha lo sitúa en Moreanes, en el municipio de Mértola, sin calle ni código postal, y publica el plus code JCWQ+MH Mértola, Portugal.',
			p2: 'Es uno de los perfiles más completos del municipio en cuanto a accesibilidad: declara cuatro servicios adaptados para sillas de ruedas —acceso, aparcamiento, aseo y asientos— y los cuatro figuran como disponibles.',
			p3: 'Lo que no publica es igual de importante: no hay descripción escrita por el titular, ni carta, ni precios, ni web propia, ni un solo distintivo junto al nombre. Tampoco destaca ninguna reseña con texto. Por eso esta web no reproduce nada de eso: solo lo que la ficha dice, con su teléfono y su horario.',
		},
		fotos: {
			kicker: 'Las fotos',
			tituloA: 'El local',
			tituloB: 'por dentro.',
			leadA: 'Son las',
			leadB: 'fotografías que Alentejo publica en su ficha de Google Maps. La descarga no atribuye autor a ninguna de ellas, así que van sin pie; la ficha tampoco describe su contenido y aquí no se inventa ninguna descripción.',
			nota: 'La ficha no publica la carta ni los precios, así que esta web no los reproduce. Para saber qué hay hoy, lo más rápido es',
			notaTelefono: 'llamar al',
			notaMaps: 'o mirar las fotos y reseñas de la ficha en Google Maps',
		},
		horario: {
			kicker: 'Horario y ubicación',
			tituloA: 'Moreanes,',
			tituloB: 'Mértola (Portugal).',
			caption: 'Horario publicado en la ficha de Google Maps',
			nota: 'Es tal cual lo publica la ficha: de martes a sábado escribe «11:30 – 2:00», el domingo «11:30 – 15:00» y el lunes «Cerrado». No aclara si esas 2:00 son de la madrugada siguiente, así que la web lo reproduce sin interpretarlo. Conviene confirmarlo por teléfono antes de ir.',
			accesibilidadTitulo: 'Accesibilidad que publica la ficha:',
			telefonoTitulo: 'Teléfono publicado en la ficha',
			acciones: { indicaciones: 'Abrir indicaciones', ficha: 'Ver la ficha en Maps' },
			mapaTitulo: 'Cómo llegar',
		},
		faq: {
			kicker: 'Preguntas frecuentes',
			tituloA: 'Antes de',
			tituloB: 'ir.',
			items: [
				{
					q: '¿Dónde está Alentejo?',
					a: 'En Moreanes, en el municipio de Mértola (Portugal). La ficha no da calle ni código postal: publica la aldea, el municipio y el plus code JCWQ+MH Mértola, Portugal, además de las coordenadas 37.6466409, -7.5610064.',
				},
				{
					q: '¿Cuál es el horario de Alentejo?',
					a: 'La ficha publica esta tabla: de martes a sábado «11:30 – 2:00», el domingo «11:30 – 15:00» y el lunes «Cerrado». Google no aclara si las 2:00 son de la madrugada siguiente, así que conviene confirmarlo por teléfono en el 286 655 133 antes de ir.',
				},
				{
					q: '¿Hay que reservar?',
					a: 'La ficha no ofrece reserva en línea y esta web no permite reservar. El único canal de contacto que publica la ficha es el teléfono +351 286 655 133.',
				},
				{
					q: '¿Qué se puede comer?',
					a: 'La ficha solo declara la categoría «Restaurante portugués»: no publica carta, ni platos, ni precios, ni una descripción escrita por el titular. Esta web no inventa ninguno de esos datos.',
				},
				{
					q: '¿Es accesible para sillas de ruedas?',
					a: 'La ficha declara cuatro servicios para sillas de ruedas y los cuatro figuran como disponibles: acceso, aparcamiento, aseo y asientos adaptados.',
				},
				{
					q: '¿Cómo se llega hasta allí?',
					a: 'Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code JCWQ+MH Mértola, Portugal.',
				},
				{
					q: '¿De quién es esta web?',
					a: 'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 10 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
				},
			],
		},
		accesibilidad: {
			entrance: 'Acceso para sillas de ruedas',
			parking: 'Aparcamiento adaptado para sillas de ruedas',
			restroom: 'Aseo adaptado para sillas de ruedas',
			seating: 'Asientos adaptados sillas de ruedas',
		},
		footer: {
			navLabel: 'Ubicación y ficha del local',
			indicaciones: 'Cómo llegar',
			ficha: 'Ficha en Google Maps',
			resenas: 'Reseñas en Google Maps',
			nota: 'Web informativa elaborada con los datos y las fotografías que el local publica en su ficha de Google Maps, consultada el',
			notaFin:
				'No es su web oficial. El horario y el teléfono son los que publica la ficha: confírmalos antes de ir.',
			legal: { aviso: 'Aviso legal', privacidad: 'Privacidad', cookies: 'Cookies' },
		},
		llamar: 'Llamar al',
		sinResenas:
			'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 1.273 se pueden leer enteras en Google Maps.',
		legal: {
			title: 'Aviso legal y privacidad | Alentejo',
			description:
				'Aviso legal, política de privacidad y política de cookies de la web informativa del restaurante Alentejo, en Moreanes (Mértola, Portugal).',
			h1: 'Aviso legal y privacidad',
			actualizado: 'Última actualización:',
			volver: 'Volver a Alentejo',
			migas: 'Migas de pan',
			pendienteTitulo: 'Antes de publicar: completa estos datos',
			pendiente:
				'Faltan datos obligatorios de información e identificación del titular: la razón social, su NIF/CIF y un correo electrónico de contacto. El teléfono publicado en la ficha de Google Maps ya consta abajo. Sustituye los campos marcados como pendientes antes de poner la web en producción.',
			titular: {
				denominacion: 'Denominación',
				razonSocial: 'Razón social',
				nif: 'NIF/CIF',
				domicilio: 'Domicilio',
				telefono: 'Teléfono',
				email: 'Correo electrónico',
				nota: 'El teléfono que aparece arriba es el que publica la ficha de Google Maps del establecimiento. Este sitio no publica ningún otro dato de contacto porque la ficha no tiene web propia ni correo público: el correo que falta es el que tiene que facilitar el titular.',
			},
			secciones: [
				{
					titulo: 'Aviso legal',
					partes: [
						/* La lista del titular la compone la plantilla con los datos de `site.ts` y `LEGAL`. */
						{ h3: '1. Titular del sitio web', titular: true },
						{
							h3: '2. Objeto',
							p: [
								'Este sitio web es informativo: da a conocer el establecimiento, su ubicación, su horario y sus datos de contacto. No es la web oficial del local, no es un canal de contratación electrónica y no permite reservar mesa.',
							],
						},
						{
							h3: '3. Condiciones de uso',
							p: [
								'El acceso al sitio es libre y gratuito. La persona usuaria se compromete a usar los contenidos de forma diligente, correcta y lícita, y a no realizar actividades que puedan dañar la web, impedir su normal funcionamiento o vulnerar derechos de terceros.',
								'La información sobre horarios y disponibilidad es orientativa y puede cambiar. En caso de discrepancia prevalece siempre la información del propio establecimiento o la que facilite su titular por teléfono.',
							],
						},
						{
							h3: '4. Propiedad intelectual e imágenes',
							p: [
								'Los textos, el diseño y el logotipo del sitio están protegidos por la normativa de propiedad intelectual e industrial. Los datos del establecimiento y las fotografías proceden de la ficha pública del negocio en Google Maps y se muestran para ilustrar el propio negocio; se retirarán a petición de su titular. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa del titular.',
							],
						},
						{
							h3: '5. Enlaces y contenidos de terceros',
							p: [
								'El sitio incluye enlaces y contenidos incrustados de servicios de terceros (Google Maps y Google Fonts). El titular de esta web no responde de sus contenidos ni de sus políticas de privacidad, que se rigen por sus propias condiciones.',
							],
						},
						{
							h3: '6. Legislación aplicable',
							p: [
								'El establecimiento está en Portugal, así que estas condiciones se interpretan conforme a la normativa aplicable en el lugar donde se presta el servicio, sin perjuicio de las normas de consumo que protejan a la persona usuaria en su país de residencia. Para cualquier controversia, las partes se someten a los juzgados y tribunales competentes según esa normativa, salvo que una norma imperativa establezca otro fuero.',
							],
						},
					],
				},
				{
					id: 'privacidad',
					titulo: 'Política de privacidad',
					partes: [
						{
							h3: '1. Responsable del tratamiento',
							p: [
								'El responsable del tratamiento es el titular del establecimiento, cuyos datos de identificación están en el apartado 1 del aviso legal.',
							],
						},
						{
							h3: '2. Datos tratados',
							p: [
								'El sitio no tiene formularios de contacto, registro ni área de usuario, así que no se recogen datos personales a través de la web. Solo se tratan los datos identificativos y de contacto que facilites voluntariamente al llamar por teléfono.',
							],
						},
						{
							h3: '3. Finalidad, base jurídica y conservación',
							ul: [
								'Finalidad: atender tu consulta o tu petición de información sobre el local.',
								'Base jurídica: tu consentimiento y el interés legítimo en atender la relación con la clientela (art. 6.1.a y 6.1.f del RGPD).',
								'Conservación: el tiempo necesario para gestionar la consulta y, después, los plazos legalmente exigibles.',
							],
							p: ['No se elaboran perfiles ni se toman decisiones automatizadas.'],
						},
						{
							h3: '4. Destinatarios',
							p: [
								'No se ceden datos a terceros salvo obligación legal. Pueden acceder a ellos los proveedores tecnológicos que prestan servicio al sitio (alojamiento web y servicios de Google) como encargados del tratamiento.',
							],
						},
						{
							h3: '5. Tus derechos',
							p: [
								'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad a través del correo electrónico del apartado 1, y retirar tu consentimiento en cualquier momento. Si resides en España puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es) y si resides en Portugal, ante la Comissão Nacional de Proteção de Dados (www.cnpd.pt).',
							],
						},
						{
							h3: '6. Seguridad',
							p: [
								'El sitio se sirve por HTTPS y no guarda datos personales en sus servidores. Se aplican medidas técnicas y organizativas razonables para proteger la información que se trate por otras vías.',
							],
						},
					],
				},
				{
					id: 'cookies',
					titulo: 'Política de cookies',
					partes: [
						{
							h3: '1. Cookies propias',
							p: [
								'Esta web no usa cookies propias, ni de analítica, ni de publicidad, y no hace ningún seguimiento de la navegación.',
							],
						},
						{
							h3: '2. Contenidos de terceros',
							p: [
								'Al cargar el mapa incrustado de Google Maps, Google puede instalar sus propias cookies para mostrar el plano y registrar la sesión. Lo mismo ocurre con las tipografías que se sirven desde Google Fonts. Puedes bloquear o eliminar esas cookies desde la configuración de tu navegador; el mapa es la única parte de la web que dejaría de funcionar.',
							],
						},
					],
				},
			],
		},
	},
	pt: {
		locale: 'pt_PT',
		etiqueta: 'Português',
		otroIdioma: 'Ver en español',
		title: 'Alentejo · Restaurante português em Moreanes, Mértola',
		description:
			'Alentejo, restaurante português em Moreanes (Mértola, Portugal). 4,5 em 5 com 1.273 avaliações; abre de terça a sábado e fecha à segunda-feira.',
		schemaDescription:
			'Restaurante português em Moreanes, Mértola (Portugal), com 4,5 em 5 com 1.273 avaliações; fecha à segunda-feira.',
		cocina: 'Cozinha portuguesa',
		ogAlt: 'Fotografia do restaurante Alentejo publicada na sua ficha do Google Maps',
		altFoto:
			'Fotografia publicada pelo próprio restaurante na sua ficha do Google Maps',
		credito: 'Fotografia do próprio espaço',
		horarioResumen:
			'De terça a sábado, 11:30 – 2:00 · domingo até às 15:00 · segunda-feira fechado',
		skipLink: 'Saltar para o conteúdo',
		brandSub: 'Moreanes · Mértola',
		nav: [
			{ href: '#local', label: 'O espaço' },
			{ href: '#fotos', label: 'As fotografias' },
			{ href: '#horario', label: 'Horário' },
			{ href: '#preguntas', label: 'Perguntas' },
		],
		navLabel: 'Navegação principal',
		navCta: 'Telefonar',
		dias: {
			Monday: 'Segunda-feira',
			Tuesday: 'Terça-feira',
			Wednesday: 'Quarta-feira',
			Thursday: 'Quinta-feira',
			Friday: 'Sexta-feira',
			Saturday: 'Sábado',
			Sunday: 'Domingo',
		},
		cerrado: 'Fechado',
		hero: {
			eyebrow: 'Moreanes · Mértola · Portugal',
			tituloA: 'Alentejo,',
			tituloB: 'cozinha portuguesa da serra.',
			ledeA:
				'O Alentejo fica em Moreanes, no concelho de Mértola (Portugal). A Google classifica-o como restaurante português e atribui-lhe',
			ledeB:
				'em 5 com 1.273 avaliações. A ficha publica horário e telefone, por isso aqui estão os dois, tal como aparecem nela.',
			ctaPrimaria: 'Como chegar',
			ctaSecundaria: 'Ver a ficha no Maps',
			datos: { direccion: 'Endereço', horario: 'Horário', telefono: 'Telefone', valoracion: 'Avaliação' },
		},
		banda: { resenas: 'avaliações', telefono: 'Telefone', plusCode: 'Plus code' },
		local: {
			kicker: 'O espaço',
			tituloA: 'Um restaurante português',
			tituloB: 'na aldeia de Moreanes.',
			p1: 'A Google classifica-o como restaurante português e atribui-lhe 4,5 em 5 com 1.273 avaliações. A ficha situa-o em Moreanes, no concelho de Mértola, sem rua nem código postal, e publica o plus code JCWQ+MH Mértola, Portugal.',
			p2: 'É um dos perfis mais completos do concelho em acessibilidades: declara quatro serviços adaptados para cadeiras de rodas —acesso, estacionamento, casa de banho e lugares sentados— e os quatro figuram como disponíveis.',
			p3: 'O que não publica é igualmente importante: não tem descrição escrita pelo responsável, nem ementa, nem preços, nem site próprio, nem qualquer selo ao lado do nome. Também não destaca nenhuma avaliação com texto. Por isso este site não reproduz nada disso: apenas o que a ficha diz, com o seu telefone e o seu horário.',
		},
		fotos: {
			kicker: 'As fotografias',
			tituloA: 'O espaço',
			tituloB: 'por dentro.',
			leadA: 'São as',
			leadB: 'fotografias que o Alentejo publica na sua ficha do Google Maps. A descarga não atribui autor a nenhuma delas, por isso vão sem legenda; a ficha também não descreve o seu conteúdo e aqui não se inventa nenhuma descrição.',
			nota: 'A ficha não publica a ementa nem os preços, por isso este site não os reproduz. Para saber o que há hoje, o mais rápido é',
			notaTelefono: 'telefonar para',
			notaMaps: 'ou ver as fotografias e avaliações da ficha no Google Maps',
		},
		horario: {
			kicker: 'Horário e localização',
			tituloA: 'Moreanes,',
			tituloB: 'Mértola (Portugal).',
			caption: 'Horário publicado na ficha do Google Maps',
			nota: 'É tal como a ficha o publica: de terça a sábado escreve «11:30 – 2:00», ao domingo «11:30 – 15:00» e à segunda-feira «Fechado». Não esclarece se essas 2:00 são da madrugada seguinte, por isso o site reproduz o horário sem o interpretar. Convém confirmá-lo por telefone antes de ir.',
			accesibilidadTitulo: 'Acessibilidades que a ficha publica:',
			telefonoTitulo: 'Telefone publicado na ficha',
			acciones: { indicaciones: 'Abrir direções', ficha: 'Ver a ficha no Maps' },
			mapaTitulo: 'Como chegar',
		},
		faq: {
			kicker: 'Perguntas frequentes',
			tituloA: 'Antes de',
			tituloB: 'ir.',
			items: [
				{
					q: 'Onde fica o Alentejo?',
					a: 'Em Moreanes, no concelho de Mértola (Portugal). A ficha não indica rua nem código postal: publica a aldeia, o concelho e o plus code JCWQ+MH Mértola, Portugal, além das coordenadas 37.6466409, -7.5610064.',
				},
				{
					q: 'Qual é o horário do Alentejo?',
					a: 'A ficha publica esta tabela: de terça a sábado «11:30 – 2:00», ao domingo «11:30 – 15:00» e à segunda-feira «Fechado». A Google não esclarece se as 2:00 são da madrugada seguinte, por isso convém confirmá-lo por telefone, para o 286 655 133, antes de ir.',
				},
				{
					q: 'É preciso reservar?',
					a: 'A ficha não oferece reserva em linha e este site não permite reservar. O único canal de contacto que a ficha publica é o telefone +351 286 655 133.',
				},
				{
					q: 'O que se pode comer?',
					a: 'A ficha declara apenas a categoria «Restaurante português»: não publica ementa, nem pratos, nem preços, nem uma descrição escrita pelo responsável. Este site não inventa nenhum desses dados.',
				},
				{
					q: 'É acessível para cadeiras de rodas?',
					a: 'A ficha declara quatro serviços para cadeiras de rodas e os quatro figuram como disponíveis: acesso, estacionamento, casa de banho e lugares sentados adaptados.',
				},
				{
					q: 'Como se chega até lá?',
					a: 'Os botões deste site abrem as direções do Google Maps a partir do ponto onde estiver e o mapa em baixo assinala o local com o plus code JCWQ+MH Mértola, Portugal.',
				},
				{
					q: 'De quem é este site?',
					a: 'É um site informativo elaborado com os dados e as fotografias que o próprio espaço publica na sua ficha do Google Maps, consultada a 10 de outubro de 2026. Não é o seu site oficial e não vende nem reserva nada.',
				},
			],
		},
		accesibilidad: {
			entrance: 'Acesso para cadeiras de rodas',
			parking: 'Estacionamento adaptado para cadeiras de rodas',
			restroom: 'Casa de banho adaptada para cadeiras de rodas',
			seating: 'Lugares sentados adaptados para cadeiras de rodas',
		},
		footer: {
			navLabel: 'Localização e ficha do espaço',
			indicaciones: 'Como chegar',
			ficha: 'Ficha no Google Maps',
			resenas: 'Avaliações no Google Maps',
			nota: 'Site informativo elaborado com os dados e as fotografias que o espaço publica na sua ficha do Google Maps, consultada a',
			notaFin:
				'Não é o seu site oficial. O horário e o telefone são os que a ficha publica: confirme-os antes de ir.',
			legal: { aviso: 'Aviso legal', privacidad: 'Privacidade', cookies: 'Cookies' },
		},
		llamar: 'Telefonar para',
		sinResenas:
			'A ficha não destaca nenhuma avaliação com texto, por isso este site não cita nenhuma: as 1.273 podem ler-se por completo no Google Maps.',
		legal: {
			title: 'Aviso legal e privacidade | Alentejo',
			description:
				'Aviso legal, política de privacidade e política de cookies do site informativo do restaurante Alentejo, em Moreanes (Mértola, Portugal).',
			h1: 'Aviso legal e privacidade',
			actualizado: 'Última atualização:',
			volver: 'Voltar ao Alentejo',
			migas: 'Navegação estrutural',
			pendienteTitulo: 'Antes de publicar: complete estes dados',
			pendiente:
				'Faltam dados obrigatórios de informação e identificação do titular: a firma, o NIPC/NIF e um endereço de correio eletrónico de contacto. O telefone publicado na ficha do Google Maps já consta em baixo. Substitua os campos marcados como pendentes antes de publicar o site.',
			titular: {
				denominacion: 'Designação',
				razonSocial: 'Firma',
				nif: 'NIPC/NIF',
				domicilio: 'Domicílio',
				telefono: 'Telefone',
				email: 'Correio eletrónico',
				nota: 'O telefone indicado em cima é o que a ficha do Google Maps do espaço publica. Este site não publica qualquer outro dado de contacto porque a ficha não tem site próprio nem correio público: o correio em falta é o que o titular tem de fornecer.',
			},
			secciones: [
				{
					titulo: 'Aviso legal',
					partes: [
						/* A lista do titular é montada pela plantilla com os dados de `site.ts` e `LEGAL`. */
						{ h3: '1. Titular do site', titular: true },
						{
							h3: '2. Objeto',
							p: [
								'Este site é informativo: dá a conhecer o espaço, a sua localização, o seu horário e os seus contactos. Não é o site oficial do espaço, não é um canal de contratação eletrónica e não permite reservar mesa.',
							],
						},
						{
							h3: '3. Condições de utilização',
							p: [
								'O acesso ao site é livre e gratuito. A pessoa utilizadora compromete-se a usar os conteúdos de forma diligente, correta e lícita, e a não realizar atividades que possam danificar o site, impedir o seu normal funcionamento ou violar direitos de terceiros.',
								'A informação sobre horários e disponibilidade é indicativa e pode mudar. Em caso de divergência prevalece sempre a informação do próprio espaço ou a que o seu titular forneça por telefone.',
							],
						},
						{
							h3: '4. Propriedade intelectual e imagens',
							p: [
								'Os textos, o desenho e o logótipo do site estão protegidos pela legislação de propriedade intelectual e industrial. Os dados do espaço e as fotografias provêm da ficha pública do negócio no Google Maps e são mostrados para ilustrar o próprio negócio; serão retirados a pedido do seu titular. É proibida a sua reprodução, distribuição, comunicação pública ou transformação sem autorização expressa do titular.',
							],
						},
						{
							h3: '5. Ligações e conteúdos de terceiros',
							p: [
								'O site inclui ligações e conteúdos incorporados de serviços de terceiros (Google Maps e Google Fonts). O titular deste site não responde pelos seus conteúdos nem pelas suas políticas de privacidade, que se regem pelas suas próprias condições.',
							],
						},
						{
							h3: '6. Legislação aplicável',
							p: [
								'O espaço fica em Portugal, por isso estas condições interpretam-se em conformidade com a legislação aplicável no lugar onde o serviço é prestado, sem prejuízo das normas de consumo que protejam a pessoa utilizadora no seu país de residência. Para qualquer litígio, as partes submetem-se aos tribunais competentes segundo essa legislação, salvo se uma norma imperativa estabelecer outro foro.',
							],
						},
					],
				},
				{
					id: 'privacidad',
					titulo: 'Política de privacidade',
					partes: [
						{
							h3: '1. Responsável pelo tratamento',
							p: [
								'O responsável pelo tratamento é o titular do espaço, cujos dados de identificação estão no ponto 1 do aviso legal.',
							],
						},
						{
							h3: '2. Dados tratados',
							p: [
								'O site não tem formulários de contacto, registo nem área de utilizador, por isso não recolhe dados pessoais através do site. Só são tratados os dados identificativos e de contacto que forneça voluntariamente ao telefonar.',
							],
						},
						{
							h3: '3. Finalidade, base jurídica e conservação',
							ul: [
								'Finalidade: responder à sua consulta ou ao seu pedido de informação sobre o espaço.',
								'Base jurídica: o seu consentimento e o interesse legítimo em atender a relação com a clientela (art. 6.1.a e 6.1.f do RGPD).',
								'Conservação: o tempo necessário para tratar a consulta e, depois, os prazos legalmente exigíveis.',
							],
							p: ['Não são elaborados perfis nem tomadas decisões automatizadas.'],
						},
						{
							h3: '4. Destinatários',
							p: [
								'Não são cedidos dados a terceiros salvo obrigação legal. Podem aceder a eles os prestadores tecnológicos que servem o site (alojamento web e serviços da Google) enquanto subcontratantes do tratamento.',
							],
						},
						{
							h3: '5. Os seus direitos',
							p: [
								'Pode exercer os direitos de acesso, retificação, apagamento, oposição, limitação do tratamento e portabilidade através do correio eletrónico do ponto 1, e retirar o seu consentimento em qualquer momento. Se reside em Portugal pode reclamar junto da Comissão Nacional de Proteção de Dados (www.cnpd.pt) e se reside em Espanha, junto da Agencia Española de Protección de Datos (www.aepd.es).',
							],
						},
						{
							h3: '6. Segurança',
							p: [
								'O site é servido por HTTPS e não guarda dados pessoais nos seus servidores. Aplicam-se medidas técnicas e organizativas razoáveis para proteger a informação tratada por outras vias.',
							],
						},
					],
				},
				{
					id: 'cookies',
					titulo: 'Política de cookies',
					partes: [
						{
							h3: '1. Cookies próprios',
							p: [
								'Este site não usa cookies próprios, nem de analítica, nem de publicidade, e não faz qualquer seguimento da navegação.',
							],
						},
						{
							h3: '2. Conteúdos de terceiros',
							p: [
								'Ao carregar o mapa incorporado do Google Maps, a Google pode instalar cookies próprios para mostrar o mapa e registar a sessão. O mesmo acontece com os tipos de letra servidos pelo Google Fonts. Pode bloquear ou apagar essas cookies nas definições do seu navegador; o mapa é a única parte do site que deixaria de funcionar.',
							],
						},
					],
				},
			],
		},
	},
};
