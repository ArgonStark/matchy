import { TopBar } from '@/components/layout/TopBar';
import { BottomNav } from '@/components/layout/BottomNav';
import { CategoryBubble } from '@/components/ui/CategoryBubble';
import { MatchCard } from '@/components/matches/MatchCard';
import { mockCategories, mockUsers, currentUser } from '@/lib/mockData';

export default function CategoriesPage() {
  // Filter out current user and get users with match counts
  const newMatches = mockUsers
    .filter(u => u.id !== currentUser.id)
    .slice(0, 6);

  return (
    <>
      <TopBar />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">My Categories</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {mockCategories.map(category => (
            <CategoryBubble key={category.id} category={category} />
          ))}
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">New Matches</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {newMatches.map(user => (
            <MatchCard key={user.id} user={user} showMatchCount />
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
}

