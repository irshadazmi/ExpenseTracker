from sqlalchemy import Integer, String, DateTime, func
from sqlalchemy.orm import declarative_base, Mapped, mapped_column, relationship
from app.models.category_model import CategoryModel

Base = declarative_base()
class ExpenseModel(Base):
    __tablename__ = "expenses"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    description: Mapped[str] = mapped_column(String(255), nullable=False)
    amount: Mapped[int] = mapped_column(Integer, nullable=False)
    category_id: Mapped[int] = mapped_column(Integer, nullable=False)
    user_id: Mapped[int] = mapped_column(Integer, nullable=False)
    expense_date: Mapped[DateTime] = mapped_column(DateTime(timezone=True), nullable=False)
    created_at: Mapped[DateTime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[DateTime] = mapped_column(DateTime(timezone=True), onupdate=func.now())

    category = relationship(CategoryModel, back_populates="expenses")
