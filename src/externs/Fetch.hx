package externs;

import haxe.http.HttpMethod;
import js.lib.Promise;
using StringTools;

class Fetch {
	public static inline function fetch(url:String, ?options:FetchOptions):Promise<Dynamic> {
		return untyped __js__('fetch')(url);
	}
}

typedef FetchOptions = {
	@:optional var body:Dynamic;
	@:optional var method:HttpMethod;
	@:optional var headers:{};
	@:optional var compress:Bool;
}