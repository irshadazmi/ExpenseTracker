interface ExpenseType {
	id: number;
	description: string;
	amount: number;
	category_id: number;
	user_id: number;
	expense_date: Date;
}

export default ExpenseType