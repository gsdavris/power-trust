import { FaCheck } from 'react-icons/fa6';
import ContactButton from '../contentUI/ContactButton';

export default function SinglePricingSection({ plan, mode = 'dark' }) {
	return (
		<section className='bg-gray-200 pb-24 sm:pb-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div
					className={`relative mx-auto -mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none ${
						mode === 'light' ? 'bg-gray-50' : 'bg-gray-900'
					}`}>
					<div className='p-8 sm:p-10 lg:flex-auto'>
						<h3
							className={`text-2xl font-bold tracking-tight ${
								mode === 'light' ? 'text-gray-900' : 'text-gray-100'
							}`}>
							{plan?.title}
						</h3>

						<div className='mt-6 justify-start flex text-start'>
							{plan?.planTypes?.nodes[0] && (
								<div
									className={`relative rounded-full px-3 bg-[${
										plan?.planTypes?.nodes[0]?.planTypeDetails.planTypeColor
									}] py-1 text-sm leading-6 text-primary ring-1 ${
										mode === 'light'
											? 'ring-gray-900/10 hover:ring-gray-900/20'
											: 'ring-gray-100/10 hover:ring-gray-100/20'
									}`}>
									{plan?.planTypes?.nodes[0]?.name}
								</div>
							)}
						</div>
						<div
							className={`mt-6 text-base leading-7 ${
								mode === 'light' ? 'text-gray-600' : 'text-gray-300'
							}`}
							dangerouslySetInnerHTML={{ __html: plan?.excerpt }}
						/>
						<div className='mt-10 flex items-center gap-x-4'>
							<h4
								className={`flex-none text-sm font-semibold leading-6 ${
									mode === 'light' ? 'text-indigo-600' : 'text-indigo-300'
								}`}>
								Τι κερδίζετε
							</h4>
							<div className='h-px flex-auto bg-gray-100' />
						</div>
						<ul
							role='list'
							className={`mt-8 grid grid-cols-1 gap-4 text-sm leading-6 ${
								mode === 'light' ? 'text-gray-600' : 'text-gray-300'
							} sm:grid-cols-2 sm:gap-6`}>
							{plan.features.nodes.map((feature) => (
								<li
									key={feature.id}
									className='flex gap-x-3'>
									<FaCheck
										className={`h-6 w-5 flex-none ${
											mode === 'light' ? 'text-indigo-600' : 'text-indigo-300'
										}`}
										aria-hidden='true'
									/>
									{feature.name}
								</li>
							))}
						</ul>
					</div>
					<div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
						<div className='rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:h-full lg:flex lg:flex-col lg:justify-center lg:py-16'>
							<div className='mx-auto max-w-xs px-8'>
								<p className='text-base font-semibold mb-4 text-gray-600'>
									Κερδίστε τώρα με τα προϊόντα της Elpedison!
								</p>
								<ContactButton
									full
									label='Ζητήστε προσφορά'
								/>
								<p className='mt-6 text-xs leading-5 text-gray-600'>
									Δείτε{' '}
									<a
										href={plan.planDetails.charges}
										target='_blank'
										className='cursor-pointer text-indigo-500 hover:text-indigo-700 font-semibold'>
										εδώ
									</a>{' '}
									τις ανακοινωμένες τιμές των προϊόντων
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
