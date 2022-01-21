package;

import pages.Overview;
import js.Browser;
import react.ReactComponent;
import react.ReactDOM;
import react.ReactMacro.jsx;

using Std;

class Main {
	static function main() {
		ReactDOM.render(jsx('<$App/>'), Browser.document.getElementById('root'));
	}
}

private typedef Props = {

}

private typedef State = {

}


@:expose('App')
class App extends ReactComponentOf<Props, State> {

	public function new(props) {
		super(props);

		state = {}
	}

	override function render() {
		return jsx('
			<Overview />
		');
	}
}
