"use client";

import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { LikeState, setLikedAction } from './action';
import DebugTable from './DebugTable';
import ToggleButton from './ToggleButton';
import { useOptimisticAction } from './useOptimisticAction';

type Props = {
  className?: string;
};

export default function FavoriteButton({
  className,
}: Props) {
  const [isToggled, setIsToggled] = useState(false);  
  const initLikeState: LikeState = { liked: false, bubble: false };
  const handleLike = () => {
    if (isPending) return; // debounce
    updateOptiState({ liked: !state.liked }); // Update optimistic state immediately
    setState({liked: !state.liked, error: isToggled && 'Simulated Error'}); //TODO: remove after testing
    !state.liked && setTimeout(() => updateOptiState({ liked: true }), 600); // bubble animation duration
  };
  const handleOptimisticLike = (curr: LikeState, opti: LikeState): LikeState => ({
    liked: opti.liked,
    bubble: !curr.liked && opti.liked,
    error: isToggled ? 'Simulated Error' : undefined
  });

  const { 
    onAction,
    state, 
    setState, 
    optiState,
    updateOptiState, 
    isPending, 
  } = useOptimisticAction(
      handleLike,
      setLikedAction, 
      handleOptimisticLike, 
      initLikeState
  );
  const isLiked = (
    optiState.liked || 
    optiState.bubble || 
    (!isPending && state.liked)
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="relative inline-block">
        <button
          aria-label={optiState.liked ? 'Unlike' : 'Like'}
          onClick={onAction}
          className="focus:outline-none"
          type="button"
        >
          <FavoriteIcon
            className={`transition-colors duration-300 ease-in-out w-7 h-7 ${isLiked ? 'text-red-500' : 'text-gray-400'} ${className}`}
          />
        </button>
        {optiState.bubble && (
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <FavoriteIcon className="text-red-500 w-7 h-7 animate-heart-bubble" />
          </span>
        )}
      </span>
      
      <div className="flex flex-row gap-2 mt-8">
        <ToggleButton isToggled={isToggled} setIsToggled={setIsToggled} 
          onLabel="Simulated Error" offLabel="Normal Mode" />
      </div>
      {/* TODO: remove this after testing */}
      <DebugTable 
        state={state} 
        optiState={optiState} 
        isPending={isPending} 
      />
    </div>
  );
} 