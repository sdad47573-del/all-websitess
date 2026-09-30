(() => {
	window.__plog = [];
	const record = (text) => {
		try {
			if (typeof text === 'string' && text.includes('googleusercontent')) window.__plog.push(text);
		} catch {}
	};
	const origFetch = window.fetch;
	window.fetch = function (...args) {
		const p = origFetch.apply(this, args);
		p.then((res) => {
			try {
				if (/maps\/(preview|vt)/.test(res.url || '')) res.clone().text().then(record).catch(() => {});
			} catch {}
		}).catch(() => {});
		return p;
	};
	const open = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function (method, url, ...rest) {
		this.__probeUrl = url;
		return open.call(this, method, url, ...rest);
	};
	const send = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.send = function (...args) {
		this.addEventListener('load', () => {
			try {
				if (/maps\/(preview|vt)/.test(String(this.__probeUrl || ''))) record(this.responseText);
			} catch {}
		});
		return send.apply(this, args);
	};
})();
