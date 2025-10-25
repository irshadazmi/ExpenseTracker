from app.repositories.user_repository import UserRepository
from app.models.user_model import UserModel
from app.core.security import get_password_hash
from app.schemas.user_schema import UserCreateSchema, UserUpdateSchema, UserResponseSchema
from app.utils.exceptions import (
    EmailOrPhoneAlreadyExistsException,
    RecordNotFoundException,
    RecordAlreadyExistsException,
    FailedToUpdateException,
)

class UserService:
    def __init__(self, user_repository: UserRepository):
        self.user_repository = user_repository

    async def find_user_by_email(self, email: str):
        try:
            return await self.user_repository.get_user_by_email(email)
        except RecordNotFoundException as e:
            raise e
        except Exception as e:
            raise RecordNotFoundException(detail=str(e))
    
    async def find_user_by_phone(self, phone: str):
        try:
            return await self.user_repository.get_user_by_phone(phone)
        except RecordNotFoundException as e:
            raise e
        except Exception as e:
            raise RecordNotFoundException(detail=str(e))

    async def create_user(self, user: UserCreateSchema):
        # Check if email exists
        existing_email = await self.user_repository.get_user_by_email(user.email)
        if existing_email:
            raise RecordAlreadyExistsException("Email already exists")

        # Check if phone exists
        existing_phone = await self.user_repository.get_user_by_phone(user.phone)
        if existing_phone:
            raise RecordAlreadyExistsException("Phone number already exists")

        user_dict = user.dict(exclude={'confirm_password'})
        user_dict["password"] = get_password_hash(user_dict["password"])
        try:
            return await self.user_repository.create_user(user_dict)
        except RecordAlreadyExistsException as e:
            raise e
        except Exception as e:
            raise FailedToUpdateException(detail=str(e))

    async def get_user_by_id(self, user_id: int):
        try:
            return await self.user_repository.get_user_by_id(user_id)
        except RecordNotFoundException as e:
            raise e
        except Exception as e:
            raise RecordNotFoundException(detail=str(e))

    async def get_all_users(self, skip: int = 0, limit: int = 10):
        return await self.user_repository.get_all_users(skip, limit)

    async def update_user(self, user_id: int, user_data: dict):
        # Ensure user exists
        existing_user = await self.user_repository.get_user_by_id(user_id)
        if not existing_user:
            raise RecordNotFoundException("User not found")

        # Check for duplicate email or phone
        duplicate_user = await self.user_repository.get_user_by_email_or_phone(
            email=user_data.get("email"),
            phone=user_data.get("phone"),
            exclude_id=user_id
        )
        if duplicate_user:
            raise EmailOrPhoneAlreadyExistsException("Email or phone already exists. Please use a different email or phone")

        # user_data = user_data(exclude={'confirm_password'})
        user_data["password"] = get_password_hash(user_data["password"])

        # Perform update
        updated_user = await self.user_repository.update_user(user_id, user_data)
        if not updated_user:
            raise FailedToUpdateException("Failed to update user")
        return updated_user

    async def delete_user(self, user_id: int):
        try:
            return await self.user_repository.delete_user(user_id)
        except RecordNotFoundException as e:
            raise e
        except Exception as e:
            raise RecordNotFoundException(detail=str(e))