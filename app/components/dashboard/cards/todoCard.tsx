// components/cards/AdminTodoCard.tsx
import Card from '../../common/Card';
import { FileText } from 'lucide-react';

interface TodoItem {
  id: string;
  name: string;
  dueDate: string;
}

export default function AdminTodoCard() {
  const todos: TodoItem[] = [
    {
      id: 'TD-2024-001',
      name: 'Update University Records',
      dueDate: '2024-11-20',
    },
    {
      id: 'TD-2024-002',
      name: 'Review New Applications',
      dueDate: '2024-11-22',
    },
    {
      id: 'TD-2024-003',
      name: 'Schedule Staff Meeting',
      dueDate: '2024-11-25',
    },
  ];

  return (
    <Card className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">To-Do List</h3>
        <button
          type="button"
          className="bg-[#094E85] rounded-lg text-white font-semibold px-4 py-2 hover:bg-[#0a5d9b] transition-colors"
        >
          Add To-Do
        </button>
      </div>

      {/* To-Do List */}
      <ul className="mt-4 space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-200"
          >
            <div className="bg-blue-100 rounded-lg p-2 flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#094E85]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-medium">{todo.name}</span>
              <span className="text-sm text-gray-500">
                Due: {new Date(todo.dueDate).toLocaleDateString()}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
