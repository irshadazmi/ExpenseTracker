from fastapi import FastAPI
from app.middlewares import auth_middleware
from app.middlewares.cors_middleware import add_cors_middleware
from app.routers.user_router import user_router
from app.routers.category_router import category_router
from app.routers.expense_router import expense_router


app = FastAPI()

# Add CORS middleware
add_cors_middleware(app)

# Add authentication middleware
# app.add_middleware(auth_middleware.AuthMiddleware)

# Include routers
app.include_router(user_router, prefix="/api/users", tags=["User"])
app.include_router(category_router, prefix="/api/categories", tags=["Category"])
app.include_router(expense_router, prefix="/api/expenses", tags=["Expense"])