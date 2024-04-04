const Select = (props: { title: string }) => {
	return (
		<div className="border-spacing-0">
			<label className="block text-gray-900 text-left">{props.title}</label>
			<select
				name="HeadlineAct"
				id="HeadlineAct"
				className="mt-1.5 w-full text-gray-700"
			>
				<option value="">Please select</option>
				<option value="JM">John Mayer</option>
				<option value="SRV">Stevie Ray Vaughn</option>
			</select>
		</div>
	);
};

export default Select;
