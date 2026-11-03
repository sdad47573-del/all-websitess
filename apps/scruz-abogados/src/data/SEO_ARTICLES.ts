import type { SeoArticle } from './SEO_ARTICLE_TYPES';
import { SEO_ARTICLES_ECONOMIC } from './SEO_ARTICLES_ECONOMIC';
import { SEO_ARTICLES_EXTRA } from './SEO_ARTICLES_EXTRA';
import { SEO_ARTICLES_LEGAL } from './SEO_ARTICLES_LEGAL';
// Lotes más recientes (oct 2026), así que van primero: BLOG_POSTS hereda este
// orden y estas guías deben aparecer como las últimas publicadas.
import { SEO_ARTICLES_NEW } from './SEO_ARTICLES_NEW';
import { SEO_ARTICLES_OCT } from './SEO_ARTICLES_OCT';
import { SEO_ARTICLES_OCT2 } from './SEO_ARTICLES_OCT2';
import { SEO_ARTICLES_OCT3 } from './SEO_ARTICLES_OCT3';
import { SEO_ARTICLES_OCT4 } from './SEO_ARTICLES_OCT4';
import { SEO_ARTICLES_OCT5 } from './SEO_ARTICLES_OCT5';
import { SEO_ARTICLES_OCT6 } from './SEO_ARTICLES_OCT6';
import { SEO_ARTICLES_NOV } from './SEO_ARTICLES_NOV';
import { SEO_ARTICLES_NOV2 } from './SEO_ARTICLES_NOV2';
import { SEO_ARTICLES_NOV3 } from './SEO_ARTICLES_NOV3';
import { SEO_ARTICLES_NOV4 } from './SEO_ARTICLES_NOV4';
import { SEO_ARTICLES_OCT7 } from './SEO_ARTICLES_OCT7';
import { SEO_ARTICLES_SEO } from './SEO_ARTICLES_SEO';

export type { SeoArticle, SeoArticleFaq, SeoArticleSection, SeoArticleServiceLink } from './SEO_ARTICLE_TYPES';

export const SEO_ARTICLES: SeoArticle[] = [
	// Nov 2026: BLOG_POSTS hereda este orden y el índice del blog no reordena, así
	// que los lotes más recientes van primero para que sus guías salgan arriba.
	...SEO_ARTICLES_NOV4,
	...SEO_ARTICLES_NOV3,
	...SEO_ARTICLES_NOV2,
	...SEO_ARTICLES_NOV,
	...SEO_ARTICLES_NEW,
	// Van después del lote de SEO_ARTICLES_NEW para no alterar el orden ya
	// publicado del blog; se ordenan por fecha ('2026-10-06', la misma).
	...SEO_ARTICLES_SEO,
	...SEO_ARTICLES_OCT,
	...SEO_ARTICLES_OCT2,
	...SEO_ARTICLES_OCT3,
	...SEO_ARTICLES_OCT4,
	...SEO_ARTICLES_OCT5,
	...SEO_ARTICLES_OCT6,
	...SEO_ARTICLES_OCT7,
	...SEO_ARTICLES_LEGAL,
	...SEO_ARTICLES_ECONOMIC,
	...SEO_ARTICLES_EXTRA,
];
