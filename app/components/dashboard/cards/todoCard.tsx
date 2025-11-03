// components/cards/AdminTodoCard.tsx
import Card from '../../common/Card';
import { CheckCircle2, Circle, AlertCircle, Calendar, Flag, Clock, User, FileText, Settings, Trash2, Edit3, Plus } from 'lucide-react';

interface TodoItem {
  id: string;
  task: string;
  description: string;
  due: string;
  dueDate: string;
  done: boolean;
  priority: 'high' | 'medium' | 'low';
  category: 'students' | 'finance' | 'academic' | 'system' | 'general';
  assignedBy: string;
  timeEstimate: string;
  subtasks: number;
  completedSubtasks: number;
}

export default function AdminTodoCard() {
  const todo: TodoItem = {
    id: 'TD-2024-001',
    task: 'Verify new student profiles for Spring 2024 intake',
    description: 'Review and validate 25 new student applications, check document completeness, and update admission status in the system.',
    due: 'Today',
    dueDate: '2024-11-20',
    done: false,
    priority: 'high',
    category: 'students',
    assignedBy: 'Admission Committee',
    timeEstimate: '2-3 hours',
    subtasks: 5,
    completedSubtasks: 2
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <Flag className="w-4 h-4" />;
      case 'medium': return <AlertCircle className="w-4 h-4" />;
      case 'low': return <Circle className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'students': return <User className="w-4 h-4" />;
      case 'finance': return <FileText className="w-4 h-4" />;
      case 'academic': return <Calendar className="w-4 h-4" />;
      case 'system': return <Settings className="w-4 h-4" />;
      case 'general': return <Circle className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'students': return 'bg-blue-50 text-blue-700';
      case 'finance': return 'bg-green-50 text-green-700';
      case 'academic': return 'bg-purple-50 text-purple-700';
      case 'system': return 'bg-orange-50 text-orange-700';
      case 'general': return 'bg-gray-50 text-gray-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  const progressPercentage = todo.subtasks > 0 ? (todo.completedSubtasks / todo.subtasks) * 100 : 0;

  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Task Details</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <CheckCircle2 className="w-4 h-4" />
          <span>{todo.id}</span>
        </div>
      </div>

      {/* Task Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg border border-blue-300">
              {getCategoryIcon(todo.category)}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{todo.task}</h4>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(todo.priority)}`}>
                  {getPriorityIcon(todo.priority)}
                  <span className="ml-1 capitalize">{todo.priority}</span>
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded ${getCategoryColor(todo.category)}`}>
                  {todo.category.charAt(0).toUpperCase() + todo.category.slice(1)}
                </span>
              </div>
            </div>
          </div>
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border ${
            todo.done ? 'bg-green-100 text-green-800 border-green-200' : 'bg-yellow-100 text-yellow-800 border-yellow-200'
          }`}>
            {todo.done ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
            <span className="text-xs font-medium">{todo.done ? 'Completed' : 'Pending'}</span>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-3">{todo.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>Assigned by: {todo.assignedBy}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Estimate: {todo.timeEstimate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Tracking */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Progress Tracking</h4>
        
        <div className="space-y-4">
          {/* Progress Bar */}
          {todo.subtasks > 0 && (
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-gray-700">Subtasks Completion</span>
                <span className="text-gray-900">{todo.completedSubtasks}/{todo.subtasks} ({progressPercentage.toFixed(0)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Task Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Due Date</span>
              </div>
              <div className="text-lg font-bold text-gray-900">{todo.due}</div>
              <div className="text-xs text-gray-600">{new Date(todo.dueDate).toLocaleDateString()}</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Flag className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Priority</span>
              </div>
              <div className={`text-lg font-bold capitalize ${
                todo.priority === 'high' ? 'text-red-600' :
                todo.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
              }`}>
                {todo.priority}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Details */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Task Information</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Assigned By</span>
            </div>
            <span className="text-sm text-gray-900 font-semibold">{todo.assignedBy}</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Time Estimate</span>
            </div>
            <span className="text-sm text-gray-900 font-semibold">{todo.timeEstimate}</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Subtasks</span>
            </div>
            <span className="text-sm text-gray-900 font-semibold">{todo.completedSubtasks} of {todo.subtasks} completed</span>
          </div>
        </div>
      </div>

      {/* Urgency & Actions */}
      <div className="space-y-4">
        <div className={`flex items-center justify-between p-3 rounded-lg ${
          todo.due === 'Today' ? 'bg-red-50 border border-red-200' : 'bg-orange-50 border border-orange-200'
        }`}>
          <div className="flex items-center space-x-2">
            <AlertCircle className={`w-4 h-4 ${todo.due === 'Today' ? 'text-red-600' : 'text-orange-600'}`} />
            <span className={`text-sm font-medium ${todo.due === 'Today' ? 'text-red-800' : 'text-orange-800'}`}>
              {todo.due === 'Today' ? 'Due Today - High Priority' : 'Upcoming Deadline'}
            </span>
          </div>
          <div className="text-right">
            <div className={`text-sm font-semibold ${todo.due === 'Today' ? 'text-red-900' : 'text-orange-900'}`}>
              {todo.due}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 mb-3">Task Actions</h5>
          <div className="flex space-x-2">
            <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm text-blue-600 font-medium border border-blue-200 rounded hover:bg-blue-50">
              <Edit3 className="w-4 h-4" />
              <span>Edit</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm text-green-600 font-medium border border-green-200 rounded hover:bg-green-50">
              <Plus className="w-4 h-4" />
              <span>Add Subtask</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm text-red-600 font-medium border border-red-200 rounded hover:bg-red-50">
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 mr-1 text-blue-500" />
            <span>Task {todo.done ? 'Completed' : 'In Progress'}</span>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 font-medium border border-blue-200 rounded hover:bg-blue-50">
              View Details
            </button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
              {todo.done ? 'Reopen Task' : 'Mark Complete'}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}