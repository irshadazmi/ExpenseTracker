from typing import Optional
from pydantic import BaseModel, Field
from datetime import datetime

class ExpenseBaseSchema(BaseModel):
    description: str
    amount: int
    category_id: int
    user_id: int
    expense_date: datetime

    model_config = {
        "from_attributes": True,
        "json_schema_extra": {
            "example": {
                "description": "Weekly groceries from local store",
                "amount": 100,
                "category_id": 1,
                "user_id": 1,
                "expense_date": "2025-09-01",
            }
        }
    }

class ExpenseCreateSchema(ExpenseBaseSchema):
    created_at: Optional[datetime] = Field(default_factory=datetime.now)
    updated_at: Optional[datetime] = Field(default_factory=datetime.now)

    model_config = {
        "from_attributes": True,
        "json_schema_extra": {
            "example": {
                "created_at": "2025-09-01",
                "updated_at": "2025-09-01"
            }
        }
    }

class ExpenseUpdateSchema(ExpenseBaseSchema):
    updated_at: Optional[datetime] = Field(default_factory=datetime.now)

    model_config = {
        "from_attributes": True,
        "json_schema_extra": {
            "example": {
                "updated_at": "2025-09-01"
            }
        }
    }

class ExpenseResponseSchema(ExpenseBaseSchema):
    id: int
    created_at: datetime
    updated_at: Optional[datetime]

class CategoryExpenseSummary(BaseModel):
    category_id: int
    category_name: str
    total_amount: int
