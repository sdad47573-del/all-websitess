/** Copia de los tipos de `lib/sites.ts` para el cliente: ese módulo usa `node:fs`
 * y no puede entrar en el bundle del navegador. */
export const EDITABLE_FIELDS = [
	"name",
	"tagline",
	"phone",
	"street",
	"postalCode",
	"city",
	"siteUrl",
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
	category: string;
	summary: string;
	legalPending: boolean;
	photoCount: number;
	hasLegalPage: boolean;
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
