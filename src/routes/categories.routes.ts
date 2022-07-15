import { Router } from "express" //router cria as rotas
import { CategoriesRepository } from "../cars/modules/repositories/CategoriesRepository"
import { createCategoryController } from "../cars/modules/useCases/createCategory";

const categoriesRoutes = Router() //esse Router() infere o tipo do request e response automaticamente, por isso a tipagem nao foi feita logo abaixo

categoriesRoutes.post("/", (request, response) => createCategoryController.handle(request, response))

export { categoriesRoutes }

//repositiorios: classe responsável por fazer a manipulação de dados da aplicação (acesso ao banco de dados, insert, select)