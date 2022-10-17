import { CreateCategoryController } from '@modules/category/useCases/createCategory/CreateCategoryController';
import { ImportCategoriesController } from '@modules/category/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '@modules/category/useCases/listCategories/ListCategoriesController';
import { Router } from 'express';
import multer from 'multer';

const categoriesRoutes = Router();

const upĺoad = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoriesController = new ImportCategoriesController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upĺoad.single('file'), (request, response) => {
  return importCategoriesController.handle(request, response);
});
export { categoriesRoutes };
