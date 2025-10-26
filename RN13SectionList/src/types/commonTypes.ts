type CategorySummary = {
	category_id: number;
	category_name: string;
	total_amount: number;
};

type SectionData = {
	title: string;
	data: { total_amount: number }[];
};

export type { CategorySummary, SectionData };