import { Heart } from 'lucide-react';
import { Event } from '@/types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="aspect-square">
        <img src={event.thumbnail} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <h3 className="font-semibold">{event.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <Heart className="w-4 h-4 mr-1 text-red-400" />
          {event.matchCount} Matches
        </div>
      </div>
    </div>
  );
}

