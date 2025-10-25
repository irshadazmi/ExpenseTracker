from sqlalchemy import select
from app.models.expense_model import ExpenseModel
from app.schemas.expense_schema import ExpenseCreateSchema, ExpenseUpdateSchema
from app.utils.exceptions import (
    FailedToCreateException,
    FailedToDeleteException,
    FailedToUpdateException,
    RecordNotFoundException,
)


class ExpenseRepository:
    def __init__(self, db):
        self.db = db

    async def get_all_expenses(self, skip: int = 0, limit: int = 10):
        result = await self.db.execute(select(ExpenseModel).offset(skip).limit(limit))
        if not result:
            raise RecordNotFoundException("No expense records found")
        return result.scalars().all()

    async def get_expense_by_id(self, expense_id: int):
        result = await self.db.execute(
            select(ExpenseModel).where(ExpenseModel.id == expense_id)
        )
        expense = result.scalars().first()
        if not expense:
            raise RecordNotFoundException("Expense not found")
        return expense

    async def create_expense(self, expense: ExpenseCreateSchema) -> ExpenseModel:
        db_expense = ExpenseModel(**expense.dict(exclude_unset=True))

        try:
            self.db.add(db_expense)
            await self.db.commit()
            await self.db.refresh(db_expense)
            return db_expense
        except Exception as e:
            await self.db.rollback()
            raise FailedToCreateException(detail=str(e))

    async def update_expense(self, expense_id: int, expense_data: ExpenseUpdateSchema) -> ExpenseModel:
        result = await self.db.execute(
            select(ExpenseModel).where(ExpenseModel.id == expense_id)
        )
        expense = result.scalars().first()

        if not expense:
            raise RecordNotFoundException("Expense not found")

        update_data = expense_data.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(expense, key, value)

        try:
            self.db.add(expense)
            await self.db.commit()
            await self.db.refresh(expense)
            return expense
        except Exception as e:
            await self.db.rollback()
            raise FailedToUpdateException(detail=str(e))


    async def delete_expense(self, expense_id: int):
        result = await self.db.execute(
            select(ExpenseModel).where(ExpenseModel.id == expense_id)
        )
        expense = result.scalars().first()
        if not expense:
            raise RecordNotFoundException("Expense not found")

        try:
            await self.db.delete(expense)
            await self.db.commit()
        except Exception as e:
            await self.db.rollback()
            raise FailedToDeleteException(detail=str(e))
