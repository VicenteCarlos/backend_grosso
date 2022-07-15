import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    list(): void;
    create({name, description}: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO }