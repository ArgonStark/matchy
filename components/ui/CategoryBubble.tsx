import * as Icons from 'lucide-react';
import { Category } from '@/types';

interface CategoryBubbleProps {
  category: Category;
}

export function CategoryBubble({ category }: CategoryBubbleProps) {
  const Icon = (Icons as any)[category.icon] || Icons.Tag;
  
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl border border-gray-200 bg-white">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
        <Icon className="w-6 h-6 text-gray-600" />
      </div>
      <span className="font-medium">{category.name}</span>
    </div>
  );
}

