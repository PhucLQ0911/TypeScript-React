import { ITrip } from '../interface/ITrip';
import Detail from './Detail';
import SearchDetail from './SearchDetail';
import Sort from './Sort';

function ListDetail(props: {
	provinces: string[];
	onSearch: (query: string) => void;
	trips: ITrip[];
}) {
	return (
		<div>
			<div>
				<SearchDetail provinces={props.provinces} onSearch={props.onSearch} />
			</div>
			<div className="content mx-80 py-6 flex">
				<Sort />

				<div className="content-detail w-full">
					{props.trips?.map((trip, index) => (
						<div>
							<Detail key={index} trip={trip} />
							<div className="mt-3"></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
export default ListDetail;
