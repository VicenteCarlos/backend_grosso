import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgresCategoriesRepositories implements ICategoriesRepository {
    list(): void {
        console.log("Null")
    }
    create({name, description}: ICreateCategoryDTO): void {
        console.log(name, description)
    }
}

export { PostgresCategoriesRepositories }