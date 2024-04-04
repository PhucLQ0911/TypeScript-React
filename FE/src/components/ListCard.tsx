import Card from './Card';

function ListCard() {
	return (
		<section className="content my-5 mx-80">
			<h3 className="mt-12 mb-5 font-semibold text-2xl">
				Tuyến đường phổ biến
			</h3>
			<div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 md:gap-5 mt-5">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
}
export default ListCard;
