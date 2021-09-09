import Todo from 'App/Models/Todo'
import Event from '@ioc:Adonis/Core/Event'

export default class TodosController {
  public async show({ view }) {
    return view.render('welcome')
  }

  public async getAll() {
    const todos = await Todo.query().paginate(1)

    return todos
  }

  public async create({ request }) {
    const todo = await Todo.create({
      todo: request.requestBody.todo,
      completed: request.requestBody.completed ?? false,
    })

    Event.emit('todo.created', todo)

    return todo
  }

  public async update({ params }) {
    const todo = await Todo.findOrFail(params.id)

    todo.todo = 'hello'
    todo.save()

    return todo
  }
}
