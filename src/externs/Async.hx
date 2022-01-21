package externs;

import externs.Fetch.FetchOptions;
import js.Function;
import js.Syntax;
import js.lib.Promise;

class Async {
	// public static inline function await<M, T:Promise<M>>(t:T):T {
	// 	return untyped __js__("await {0}", t);
	// }
	public static inline function async(f:Void->Void) {
		return untyped __js__("async ({0})", f)();
	}

	public static inline function asyncAwait<M>(func:Void->Promise<M>) {
		untyped __js__("async function f(){
			\tvar vtest = await {0}();
			\tconsole.dir(vtest);
			\tconsole.log('Here');
		\t}
		\tf();", func);
	}

	public static inline function asyncFetch<M>(url:String, headers:FetchOptions):Promise<M> {
		return untyped __js__("(async function f(){
			\t\tvar get = await fetch({0}, {1});
			return get;
		\t})();", url, headers);
	}

	public static inline function asyncFetchJson<M:Dynamic>(url:String, ?headers:FetchOptions):M {
		return untyped __js__("(async function f(){
			\t\tvar get = await fetch({0}, {1});
			\t\tvar json = await get.json();
			return json;
		\t})();", url, headers);
	}
}