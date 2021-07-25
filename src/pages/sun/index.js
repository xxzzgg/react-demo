

export default function Sun(props) {
	const { grandRef } = props;
	console.log(props,' props')
	function test() {
		console.log('test')
	}
	return (
		<div>
			<p ref={grandRef}>你想获取我？</p>
		</div>
	)
}