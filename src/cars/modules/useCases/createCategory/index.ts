import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
//para receber o controller nas rotas, pode-se fazer dentro do useCase que tem esse controller a ser recebido, um arquivo pra instanciar tudo o que se precisa, como o repositorio e o useCase pra usar dentro das rotas
