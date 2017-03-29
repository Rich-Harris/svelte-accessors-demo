export default function wrap ( component ) {
	const wrapper = {};
	const data = component.get();

	Object.keys( data ).forEach( key => {
		Object.defineProperty( wrapper, key, {
			get () {
				return component.get( key );
			},
			set ( value ) {
				const obj = {};
				obj[ key ] = value;
				component.set( obj );
			}
		})
	});

	return wrapper;
}