import logoImg from '@assets/Recurso-2@0.5x.png';
import questionImg from '@assets/Recurso-3@0.5x-2-980x707.webp';
import { SERVICES } from './SERVICES';

export const DATA = {
	heroServices: [SERVICES[0], SERVICES[1], SERVICES[2], SERVICES[3]],
	SERVICES,
	NAVBAR: {
		logo: { src: '', alt: '' },
		menu: [
			// { label: "INICIO", href: "/" },
			// { label: "SERVICIOS", href: "/servicios" },
			// { label: "QUIENES SOMOS", href: "/quienes-somos" },
			{ label: 'Conócenos', href: '/quienes-somos' },
			{ label: 'Servicios', href: '/servicios' },
			{ label: '¿Eres empresa?', href: '/quienes-somos' },
		],
	},

	footer: {
		logo: {
			...logoImg,
			alt: 'Logo del Despacho de Abogados Sergio Cruz Chacón',
		},
		areas: [
			{ label: 'Derecho Familiar', href: '/' },
			{ label: 'Herencias y sucesiones', href: '/' },
			{ label: 'Derecho penal', href: '/' },
			{ label: 'Derecho laboral', href: '/' },
		],
		menu: [
			{ label: 'Inicio', href: '/' },
			{ label: 'Servicios', href: '/servicios' },
			{ label: 'Quiénes somos', href: '/quienes-somos' },
		],
		legal: [
			{ label: 'Aviso Legal', href: '/aviso-legal' },
			{ label: 'Privacidad', href: '/politica-de-privacidad' },
			{ label: 'Accesibilidad', href: '/declaracion-de-accesibilidad' },
		],
	},
	info: {
		phone1: '957 117 185',
		phone2: '666 329 155',
		address: 'Calle El Agua, 19, 1º Izq., 14900 Lucena.',
		email: '',
	},
	FAQ: {
		img: {
			...questionImg,
			alt: 'Representación de preguntas frecuentes sobre servicios legales',
		},
		questions: [
			{
				question: '¿Qué servicios ofrece Scruz Abogados en Lucena?',
				answer:
					'En nuestro despacho de abogados en Lucena, estamos especializados en Derecho Civil, Penal, Laboral, Mercantil, Familiar y Bancario. Ofrecemos asesoramiento integral tanto a particulares como a empresas.',
			},
			{
				question: '¿Cómo puede ayudarme un abogado penal en Lucena?',
				answer:
					'Nuestro equipo está capacitado para asistir en casos de denuncias, delitos leves, defensa y acusación particular, garantizando un enfoque personalizado y profesional.',
			},
			{
				question: '¿Atendéis a empresas que necesitan asesoramiento legal en Lucena?',
				answer:
					'Sí, somos especialistas en ofrecer soluciones legales a medianas empresas que necesitan apoyo continuo en temas como contratos, despidos y reestructuraciones.',
			},
			{
				question: '¿Para qué podría necesitar un abogado familiar en Lucena?',
				answer:
					'Un abogado familiar puede ayudarte en procesos como divorcios, modificación de medidas, incumplimientos de sentencias, incapacidades legales o cualquier situación relacionada con el ámbito familiar. En Scruz Abogados, ofrecemos un trato cercano y profesional para resolver estos casos en Lucena.',
			},
			{
				question: '¿Pueden gestionar herencias?',
				answer:
					'Sí, en Scruz Abogados contamos con amplia experiencia en la gestión de herencias, desde la redacción de testamentos hasta la tramitación de particiones hereditarias. Nos encargamos de todo el proceso legal para que sea lo más sencillo y claro para nuestros clientes.',
			},
			{
				question: '¿Cómo puede ayudarme un abogado laboral en Lucena?',
				answer:
					'Nuestros abogados laborales en Lucena están especializados en resolver conflictos como despidos, reclamaciones salariales, mediaciones y conciliaciones. Ofrecemos un asesoramiento integral tanto para empleados como para empleadores.',
			},
			{
				question: '¿Asesoran a empresas en Lucena en temas legales?',
				answer:
					'Sí, en Scruz Abogados ofrecemos servicios legales para empresas, incluyendo la redacción de contratos, reclamaciones de deudas, refinanciaciones y reestructuraciones. Nos adaptamos a las necesidades de medianas empresas que buscan un asesoramiento continuo y profesional.',
			},
			{
				question: '¿Cómo puedo contactar con Scruz Abogados?',
				answer:
					'Puedes visitarnos en Calle El Agua, 19, 1º Izq., Lucena, llamarnos al 957 118 195 o escribirnos a través de WhatsApp. Estamos aquí para ayudarte con tus necesidades legales.',
			},
		],
	},
};
