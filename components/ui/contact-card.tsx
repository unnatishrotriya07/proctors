import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';

export type ContactInfoItem = {
	icon: LucideIcon;
	label: string;
	value: string;
	className?: string;
};

export type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	eyebrow?: string;
	title?: string;
	description?: string;
	contactInfo?: ContactInfoItem[];
	formSectionClassName?: string;
};

export function ContactCard({
	eyebrow,
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'relative grid h-full w-full rounded-2xl md:grid-cols-12',
				className,
			)}
			{...props}
		>
			{/* Corner Crosshair Plus Marks */}
			<PlusIcon className="hidden sm:block absolute -top-2.5 -left-2.5 h-5 w-5 text-sky-500/70 z-10 select-none pointer-events-none" />
			<PlusIcon className="hidden sm:block absolute -top-2.5 -right-2.5 h-5 w-5 text-sky-500/70 z-10 select-none pointer-events-none" />
			<PlusIcon className="hidden sm:block absolute -bottom-2.5 -left-2.5 h-5 w-5 text-sky-500/70 z-10 select-none pointer-events-none" />
			<PlusIcon className="hidden sm:block absolute -right-2.5 -bottom-2.5 h-5 w-5 text-sky-500/70 z-10 select-none pointer-events-none" />

			{/* Left Content / Info Section */}
			<div className="flex flex-col justify-center md:col-span-7 p-4 sm:p-7 lg:p-9">
				<div className="relative space-y-3 sm:space-y-4">
					{eyebrow && (
						<span className="inline-block font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-sky-600">
							{eyebrow}
						</span>
					)}
					<h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
						{title}
					</h2>
					<p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
						{description}
					</p>

					{contactInfo && contactInfo.length > 0 && (
						<div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
							{contactInfo.map((info, index) => (
								<ContactInfo key={index} {...info} />
							))}
						</div>
					)}
				</div>
			</div>

			{/* Right Form Section */}
			<div
				className={cn(
					'flex h-full w-full items-center p-4 sm:p-6 md:col-span-5 border-t md:border-t-0 md:border-l border-white/60',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

export function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoItem & React.ComponentProps<'div'>) {
	return (
		<div className={cn('flex items-center gap-3 py-2', className)} {...props}>
			<div className="bg-sky-500/10 text-sky-600 rounded-xl p-3 shadow-sm border border-sky-500/20 flex-shrink-0">
				<Icon className="h-5 w-5" />
			</div>
			<div>
				<p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
				<p className="text-sm font-semibold text-slate-800">{value}</p>
			</div>
		</div>
	);
}
