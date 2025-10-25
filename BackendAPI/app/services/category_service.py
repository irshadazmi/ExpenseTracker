from app.schemas.category_schema import CategoryCreateSchema, CategoryUpdateSchema
from app.utils.exceptions import FailedToUpdateException, RecordNotFoundException


class CategoryService:
    def __init__(self, category_repository):
        self.category_repository = category_repository

    async def get_all_categories(self, skip: int = 0, limit: int = 10):
        return await self.category_repository.get_all_categories(skip, limit)
    
    async def get_category_by_id(self, category_id: int):
        try:
            return await self.user_repository.get_category_by_id(category_id)
        except RecordNotFoundException as e:
            raise e
        except Exception as e:
            raise RecordNotFoundException(detail=str(e))
    
    async def create_category(self, category: CategoryCreateSchema):
        category_dict = category.dict()
        try:
            return await self.category_repository.create_category(category_dict)
        except RecordNotFoundException as e:
            raise e
        except Exception as e:
            raise RecordNotFoundException(detail=str(e))
    
    async def update_category(self, category_id: int, category: CategoryUpdateSchema):
        existing_category = await self.category_repository.get_category_by_id(category_id)
        if not existing_category:
            raise RecordNotFoundException("Category not found")
        
        category_dict = category.dict(exclude_unset=True)
        updated_category = self.category_repository.update_category(category_id, category_dict)
        if not updated_category:
            raise FailedToUpdateException("Failed to update category")
        
        return updated_category
    
    async def delete_category(self, category_id: int):
        try:
            return await self.category_repository.delete_category(category_id)
        except RecordNotFoundException as e:
            raise e
        except Exception as e:
            raise RecordNotFoundException(detail=str(e))