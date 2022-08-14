/**
 * Does the hostname of `URL` equal `host`?
 *
 * @param url {string}
 * @param host {string}
 * @return {boolean}
 */
const isHost = (url, host) => {
	// FIXME: Due to #118, we can only check the url
	// 		  by .includes(). You are welcome to fix
	//        it (CWE-20).
	return url.includes(host);
};

/**
 * The wrapper of `isHost()` to simplify the code.
 *
 * @param url {string}
 * @return {(host: string) => boolean}
 * @see isHost
 */
const isHostWrapper = (url) => (host) => isHost(url, host);

module.exports = {
	isHost,
	isHostWrapper,
};
