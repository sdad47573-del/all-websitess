// NO FUNCIONA AUN

#!/usr/bin/env tsx
/**
 * Script para aplicar migraciones de Supabase programáticamente
 *
 * Uso:
 *   1. Configurar variables de entorno:
 *      export SUPABASE_URL="https://tu-proyecto.supabase.co"
 *      export SUPABASE_SERVICE_ROLE_KEY="tu-service-role-key"
 *
 *   2. Ejecutar:
 *      npx tsx migrations/apply-migrations.ts
 */
import 'dotenv/config';

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SECRET_KEY;

console.error('SUPABASE_URL', SUPABASE_URL);
console.error('SUPABASE_SERVICE_ROLE_KEY', SUPABASE_SERVICE_ROLE_KEY);
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
	console.error('❌ Error: Faltan variables de entorno');
	console.error('   Configura SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY');
	process.exit(1);
}

// Crear cliente de Supabase con service role key
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
	auth: {
		autoRefreshToken: false,
		persistSession: false,
	},
});

// Lista de migraciones en orden
const migrations = [
	'001_initial_schema.sql',
	'002_seed_data.sql', // Opcional: comentar si no quieres datos de ejemplo
];

async function applyMigration(filename: string): Promise<boolean> {
	console.log(`\n📄 Aplicando migración: ${filename}`);

	try {
		// Leer archivo SQL
		const sqlPath = join(__dirname, filename);
		const sql = readFileSync(sqlPath, 'utf-8');

		console.log('🔄 Ejecutando SQL en Supabase...');

		// Ejecutar SQL usando la REST API de Supabase
		// Usamos el endpoint /query que está disponible con la service role key
		const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				apikey: SUPABASE_SERVICE_ROLE_KEY,
				Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
			},
			body: JSON.stringify({ query: sql }),
		});

		if (!response.ok) {
			// Si el endpoint RPC no existe, intentamos ejecutar usando pg_stat_statements
			// o directamente con el cliente de Supabase
			console.log('⚠️  Endpoint RPC no disponible, usando método alternativo...');

			// Dividir el SQL en statements individuales y ejecutarlos
			const statements = sql
				.split(';')
				.map((s) => s.trim())
				.filter((s) => s.length > 0 && !s.startsWith('--'));

			for (const statement of statements) {
				if (statement) {
					// Usar el cliente de Supabase para ejecutar queries individuales
					const { error } = await supabase.rpc('exec_sql', { sql: statement + ';' });
					if (error) {
						console.error('Error en statement:', statement.substring(0, 100) + '...');
						throw error;
					}
				}
			}
		}

		console.log(`✅ Migración ${filename} aplicada exitosamente`);
		return true;
	} catch (error) {
		console.error(`❌ Error aplicando ${filename}:`, error);
		return false;
	}
}

async function main() {
	console.log('🚀 Iniciando aplicación de migraciones...');
	console.log(`📍 URL: ${SUPABASE_URL}`);

	let success = true;

	for (const migration of migrations) {
		const result = await applyMigration(migration);
		if (!result) {
			success = false;
			break;
		}
	}

	if (success) {
		console.log('\n✨ Todas las migraciones se aplicaron exitosamente');
		console.log('\n📋 Próximos pasos:');
		console.log('   1. Verifica las tablas en Supabase Dashboard → Table Editor');
		console.log('   2. Revisa los datos en Supabase Dashboard → SQL Editor');
	} else {
		console.log('\n❌ Hubo errores al aplicar las migraciones');
		console.log('\n💡 Solución alternativa:');
		console.log('   1. Ve a Supabase Dashboard → SQL Editor');
		console.log('   2. Ejecuta primero esta función:');
		console.log('      CREATE OR REPLACE FUNCTION exec_sql(sql text)');
		console.log('      RETURNS void AS $$');
		console.log('      BEGIN EXECUTE sql; END;');
		console.log('      $$ LANGUAGE plpgsql SECURITY DEFINER;');
		console.log('   3. Vuelve a ejecutar este script');
		process.exit(1);
	}
}

main();
