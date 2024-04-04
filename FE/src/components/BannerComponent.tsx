import { Link } from 'react-router-dom';
import Select from './Select';

const Banner = () => {
	return (
		<>
			<section className="relative bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat">
				<div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l rounded-md" />
				<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8  ">
					<div className="w-full text-center">
						<h2 className="text-white text-2xl">
							Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
						</h2>

						<div className="bg-white p-4 rounded-md mt-5">
							<div className="flex justify-center items-center mb-2">
								<div className="flex items-center px-6 py-4 gap-2">
									<img src="../../images/XeKhach.svg" />
									<span className="text-[#474747]">Xe khách</span>
								</div>
								<div className="flex items-center px-6 py-4 gap-2">
									<img src="../../images/MayBay.svg" />
									<span className="text-[#474747]">Máy bay</span>
								</div>
								<div className="flex items-center px-6 py-4 gap-2">
									<img src="../../images/TauHoa.svg" />
									<span className="text-[#474747]">Tàu hỏa</span>
								</div>
								<div className="flex items-center px-6 py-4 gap-2">
									<img src="../../images/ThueXe.svg" />
									<span className="text-[#474747]">Thuê xe</span>
								</div>
							</div>
							<hr />

							<form className="grid lg:grid-cols-12 md:grid-cols-1 items-center my-4">
								<div className="col-span-10 border-collapse border-2 border-[#F2F2F2] grid lg:grid-cols-4 md:grid-cols-2 px-5 me-5">
									<span className="lg:border-r-2 p-2 flex items-center gap-5">
										<img width={24} src="../../images/pickup.svg" />
										<Select title="Nơi xuất phát" />
									</span>
									<span className="lg:border-r-2 p-2 flex items-center gap-5 lg:ps-5">
										<img width={24} src="../../images/dropoff.svg" />
										<Select title="Nơi đến" />
									</span>
									<span className="lg:border-r-2 p-2 flex items-center gap-5 lg:ps-5">
										<img width={24} src="../../images/event.svg" />
										<Select title="Ngày đi" />
									</span>
									<span className="p-2 flex items-center gap-5 lg:ps-5">
										<img width={24} src="../../images/event.svg" />
										<Select title="Thêm ngày về" />
									</span>
								</div>
								<div className="col-span-2 ms-2">
									<Link
										to="/about"
										className="rounded-md bg-[#FFD333] px-16 py-6 text-sm font-medium text-black"
									>
										Tìm kiếm
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
