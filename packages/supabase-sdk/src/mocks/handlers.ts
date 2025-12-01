import { HttpResponse, http } from 'msw';
import type { Category, Menu, Plato } from '../types.js';

// TODO: Cambiar la URL segun el proyecto
const SUPABASE_URL = process.env.SUPABASE_URL;

// Mock Data
const mockCategories: Category[] = [
	{ id: 1, created_at: '2023-01-01T00:00:00Z', name: 'Bebidas', slug: 'bebidas', active: true },
	{ id: 2, created_at: '2023-01-01T00:00:00Z', name: 'Entrantes', slug: 'entrantes', active: true },
	{
		id: 3,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Platos Principales',
		slug: 'platos-principales',
		active: true,
	},
	{ id: 4, created_at: '2023-01-01T00:00:00Z', name: 'Postres', slug: 'postres', active: true },
	{
		id: 5,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Menú Infantil',
		slug: 'menu-infantil',
		active: true,
	},
	{
		id: 6,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Especialidades',
		slug: 'especialidades',
		active: true,
	},
];

const mockMenu: Menu[] = [
	{
		id: 1,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Menú del Día',
		active: true,
		start_date: null,
		end_date: null,
	},
	{
		id: 2,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Menú Fin de Semana',
		active: true,
		start_date: null,
		end_date: null,
	},
	{
		id: 3,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Carta de Vinos',
		active: true,
		start_date: null,
		end_date: null,
	},
];

const mockPlatos: Plato[] = [
	// Bebidas
	{
		id: 1,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Coca Cola',
		description: 'Refresco de cola',
		price: 2.5,
		image_url: null,
		category_id: 1,
		active: true,
		allergens: null,
	},
	{
		id: 2,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Fanta Naranja',
		description: 'Refresco de naranja',
		price: 2.5,
		image_url: null,
		category_id: 1,
		active: true,
		allergens: null,
	},
	{
		id: 3,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Agua Mineral',
		description: 'Botella de 50cl',
		price: 1.5,
		image_url: null,
		category_id: 1,
		active: true,
		allergens: null,
	},
	{
		id: 4,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Cerveza Caña',
		description: 'Cerveza de barril',
		price: 2.0,
		image_url: null,
		category_id: 1,
		active: true,
		allergens: { gluten: true },
	},
	{
		id: 5,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Vino Tinto Rioja',
		description: 'Copa de vino tinto',
		price: 3.5,
		image_url: null,
		category_id: 1,
		active: true,
		allergens: { sulfitos: true },
	},

	// Entrantes
	{
		id: 6,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Patatas Bravas',
		description: 'Patatas con salsa brava casera',
		price: 5.5,
		image_url: null,
		category_id: 2,
		active: true,
		allergens: { gluten: true },
	},
	{
		id: 7,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Calamares a la Romana',
		description: 'Anillas de calamar rebozadas',
		price: 8.0,
		image_url: null,
		category_id: 2,
		active: true,
		allergens: { gluten: true, moluscos: true },
	},
	{
		id: 8,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Croquetas de Jamón',
		description: '6 unidades caseras',
		price: 6.5,
		image_url: null,
		category_id: 2,
		active: true,
		allergens: { gluten: true, lacteos: true },
	},
	{
		id: 9,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Ensalada Mixta',
		description: 'Lechuga, tomate, cebolla, atún y huevo',
		price: 7.0,
		image_url: null,
		category_id: 2,
		active: true,
		allergens: { pescado: true, huevo: true },
	},
	{
		id: 10,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Gazpacho Andaluz',
		description: 'Sopa fría de tomate y hortalizas',
		price: 5.0,
		image_url: null,
		category_id: 2,
		active: true,
		allergens: { gluten: true },
	},

	// Platos Principales
	{
		id: 11,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Paella Valenciana',
		description: 'Arroz con pollo y conejo',
		price: 12.0,
		image_url: null,
		category_id: 3,
		active: true,
		allergens: null,
	},
	{
		id: 12,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Hamburguesa Completa',
		description: 'Carne de vacuno, queso, bacon y huevo',
		price: 9.5,
		image_url: null,
		category_id: 3,
		active: true,
		allergens: { gluten: true, lacteos: true, huevo: true },
	},
	{
		id: 13,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Entrecot a la Pimienta',
		description: 'Carne de ternera con salsa',
		price: 16.0,
		image_url: null,
		category_id: 3,
		active: true,
		allergens: { lacteos: true },
	},
	{
		id: 14,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Salmón a la Plancha',
		description: 'Con guarnición de verduras',
		price: 14.0,
		image_url: null,
		category_id: 3,
		active: true,
		allergens: { pescado: true },
	},
	{
		id: 15,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Pizza Margarita',
		description: 'Tomate, mozzarella y orégano',
		price: 8.5,
		image_url: null,
		category_id: 3,
		active: true,
		allergens: { gluten: true, lacteos: true },
	},

	// Postres
	{
		id: 16,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Tarta de Queso',
		description: 'Casera con mermelada de arándanos',
		price: 5.0,
		image_url: null,
		category_id: 4,
		active: true,
		allergens: { gluten: true, lacteos: true, huevo: true },
	},
	{
		id: 17,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Helado Variado',
		description: 'Dos bolas a elegir',
		price: 3.5,
		image_url: null,
		category_id: 4,
		active: true,
		allergens: { lacteos: true },
	},
	{
		id: 18,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Fruta del Tiempo',
		description: 'Pieza de fruta de temporada',
		price: 2.0,
		image_url: null,
		category_id: 4,
		active: true,
		allergens: null,
	},
	{
		id: 19,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Brownie con Helado',
		description: 'Bizcocho de chocolate y nueces',
		price: 5.5,
		image_url: null,
		category_id: 4,
		active: true,
		allergens: { gluten: true, lacteos: true, huevo: true, frutos_secos: true },
	},

	// Menú Infantil
	{
		id: 20,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Macarrones con Tomate',
		description: 'Pasta con salsa de tomate y queso',
		price: 6.0,
		image_url: null,
		category_id: 5,
		active: true,
		allergens: { gluten: true, lacteos: true },
	},
	{
		id: 21,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Nuggets de Pollo',
		description: 'Con patatas fritas',
		price: 6.5,
		image_url: null,
		category_id: 5,
		active: true,
		allergens: { gluten: true },
	},

	// Especialidades
	{
		id: 22,
		created_at: '2023-01-01T00:00:00Z',
		name: 'Solomillo al Whisky',
		description: 'Especialidad de la casa',
		price: 15.0,
		image_url: null,
		category_id: 6,
		active: true,
		allergens: { gluten: true },
	},
];

export const handlers = [
	// Categories
	http.get(`${SUPABASE_URL}/rest/v1/categories*`, () => {
		return HttpResponse.json(mockCategories);
	}),

	// Menu
	http.get(`${SUPABASE_URL}/rest/v1/menu*`, () => {
		return HttpResponse.json(mockMenu);
	}),

	// Platos
	http.get(`${SUPABASE_URL}/rest/v1/platos*`, () => {
		return HttpResponse.json(mockPlatos);
	}),
];
