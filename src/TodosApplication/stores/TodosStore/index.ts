import { observable, action } from 'mobx'

interface TodoItemTypes {
   id: string
   todoText: string
   isChecked: boolean
}
interface TodoStoreTypes {
   todosList: TodoItemTypes[]
}
// const Todo: TodoStoreTypes
class TodosStore {
   @observable todosList = [{ id: '', todoText: '', isChecked: false }]
   @observable userInput = ''
   @action.bound
   onDeleteTodo(todoId: string): void {
      const updatedList = this.todosList.filter(eachTodo => {
         eachTodo.id !== todoId
      })
      this.todosList = updatedList
      console.log(this.todosList)
   }

   @action.bound
   onAddTodo(todoItem: {
      id: string
      todoText: string
      isChecked: boolean
   }): void {
      this.todosList = [...this.todosList, todoItem]
      console.log(this.todosList)
   }
   @action.bound onChangeUserInput = (
      event: React.ChangeEvent<HTMLInputElement>
   ): void => {
      this.userInput = event.target.value
   }
   @action.bound setUserInputEmpty = (): void => {
      this.userInput = ''
   }
}

export default TodosStore
