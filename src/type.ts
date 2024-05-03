export type MenuItem = {
	title: string;
	subtitle?: string,
	icon: string;
	alt: string;
	onClick?: (() => void);
};