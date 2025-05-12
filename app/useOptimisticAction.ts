"use client";

import { startTransition, useActionState, useOptimistic } from 'react';

export const useOptimisticAction = <T extends object>(
    handleFn: () => void,
    actionFn: (state: Awaited<T>, payload: T) => Promise<T> | T, 
    optimisticFn: (curr: T, opti: T) => T,
    initState: Awaited<T>) => {
        // Server action function to update state
        const [state, setState, isPending] = useActionState(actionFn, initState);
  
        // Optimistic state to immediately update UI before server responds
        const [optiState, updateOptiState] = useOptimistic(initState, optimisticFn);
        
        // Action handler
        const onAction = () => startTransition(handleFn);

        return { state, setState, onAction, optiState, updateOptiState, isPending };
};