import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'TodosController.show')
Route.get('/testing', () => {
  return {
    name: 'krunal',
  }
})
Route.get('/todos', 'TodosController.getAll')
Route.post('/todos/create', 'TodosController.create')
Route.post('/todos/update/:id', 'TodosController.update')
