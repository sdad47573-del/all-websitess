/** Copia de los tipos de `lib/` para el cliente: esos módulos usan `node:fs`
 * y no pueden entrar en el bundle del navegador. */
export const EDITABLE_FIELDS = [
	"name",
	"tagline",
	"phone",
	"street",
	"postalCode",
	"city",
	"siteUrl",
	"lat",
	"lng",
] as const;

export type EditableField = (typeof EDITABLE_FIELDS)[number];

export interface Site {
	slug: string;
	name: string;
	tagline: string;
	city: string;
	street: string;
	postalCode: string;
	phone: string;
	siteUrl: string;
	lat: string;
	lng: string;
	category: string;
	summary: string;
	legalPending: boolean;
	photoCount: number;
	hasLegalPage: boolean;
	/** Solo lo envía la ficha: existe `dist/index.html` para la vista previa. */
	hasBuild?: boolean;
	/** Solo lo envía la ficha: la web ya tiene alguna imagen OG. */
	hasOg?: boolean;
	/** Solo lo envía la ficha: la web tiene `src/data/secciones.json`. */
	hasSections?: boolean;
	updatedAt: number;
	editable: Record<EditableField, boolean>;
}

export interface FieldDefinition {
	field: EditableField;
	label: string;
	hint?: string;
	type?: string;
}

export const FIELD_FORM: FieldDefinition[] = [
	{ field: "name", label: "Nombre comercial" },
	{ field: "tagline", label: "Lema", hint: "Frase corta que acompaña al nombre" },
	{ field: "phone", label: "Teléfono", type: "tel" },
	{ field: "street", label: "Calle y número" },
	{ field: "postalCode", label: "Código postal" },
	{ field: "city", label: "Ciudad" },
	{ field: "siteUrl", label: "URL canónica", type: "url" },
];

export const GEO_FORM: FieldDefinition[] = [
	{ field: "lat", label: "Latitud", hint: "Decimal, por ejemplo 36.7213", type: "number" },
	{ field: "lng", label: "Longitud", hint: "Decimal, por ejemplo -4.4214", type: "number" },
];

export type SeoStatus = "ok" | "warn" | "error" | "info";

export interface SeoCheck {
	id: string;
	label: string;
	status: SeoStatus;
	detail: string;
}

export interface SeoAudit {
	hasBuild: boolean;
	title: string;
	description: string;
	canonical: string;
	siteUrl: string;
	hasOg: boolean;
	checks: SeoCheck[];
}

export interface MediaItem {
	name: string;
	size: number;
	referencedIn: string[];
}

export interface SourceFile {
	path: string;
	size: number;
}

export const ROLES = ["admin", "editor"] as const;
export type Role = (typeof ROLES)[number];

export type Capability = "read" | "editContent" | "editCode" | "manageUsers";

export const ROLE_LABELS: Record<Role, string> = {
	admin: "Administrador",
	editor: "Editor",
};

export interface AuthUser {
	id: string;
	username: string;
	name: string;
	role: Role;
	createdAt: number;
	capabilities: Capability[];
}

export type UserSummary = Omit<AuthUser, "capabilities">;

export function hasCapability(
	user: Pick<AuthUser, "capabilities"> | null | undefined,
	capability: Capability,
): boolean {
	return user?.capabilities.includes(capability) ?? false;
}

export type SectionType =
	| "hero"
	| "about"
	| "destacados"
	| "galeria"
	| "visita"
	| "faq"
	| "texto"
	| "cta";

export interface SectionLink {
	texto: string;
	href: string;
	externo?: boolean;
	primario?: boolean;
}

export interface Section {
	id: string;
	tipo: SectionType;
	visible: boolean;
	etiqueta?: string;
	titulo: string;
	texto?: string;
	nota?: string;
	notaHorario?: string;
	pieFoto?: string;
	distintivo?: string;
	mapaEtiqueta?: string;
	imagen?: string;
	imagenAlt?: string;
	boton?: SectionLink;
	botonSecundario?: SectionLink;
	enlaceGaleria?: SectionLink;
	datos?: { etiqueta: string; html: string }[];
	parrafos?: string[];
	enlaces?: SectionLink[];
	items?: { titulo: string; texto: string }[];
	fotos?: { imagen: string; alt: string }[];
	preguntas?: { pregunta: string; respuesta: string }[];
}

export interface SectionFile {
	version: number;
	secciones: Section[];
}

export const SECTION_LABELS: Record<SectionType, string> = {
	hero: "Portada",
	about: "La casa",
	destacados: "Destacados",
	galeria: "Galería",
	visita: "Visítanos",
	faq: "Preguntas frecuentes",
	texto: "Texto libre",
	cta: "Llamada a la acción",
};

/** Tipos que el panel puede añadir a una página ya montada. */
export const SECTION_CATALOG: Array<{
	tipo: SectionType;
	label: string;
	descripcion: string;
}> = [
	{ tipo: "texto", label: "Texto", descripcion: "Título y párrafos" },
	{ tipo: "destacados", label: "Destacados", descripcion: "Puntos con título y texto" },
	{ tipo: "faq", label: "Preguntas", descripcion: "Preguntas y respuestas" },
	{ tipo: "cta", label: "Llamada a la acción", descripcion: "Texto y botón" },
];

export interface ShopProduct {
	id: string;
	nombre: string;
	descripcion: string;
	precio: number;
	imagen: string;
	stock: number;
	visible: boolean;
}

export interface Shop {
	activa: boolean;
	titulo: string;
	moneda: string;
	recogida: string;
	nota: string;
	whatsapp: string;
	productos: ShopProduct[];
}

export const DEFAULT_SHOP: Shop = {
	activa: true,
	titulo: "Tienda",
	moneda: "EUR",
	recogida: "",
	nota: "",
	whatsapp: "",
	productos: [],
};
