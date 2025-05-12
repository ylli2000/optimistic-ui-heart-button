"use client";

import { LikeState } from "./action";

type DebugTableProps = {
  optiState: { liked: boolean; bubble?: boolean };
  state: LikeState;
  isPending: boolean;
};

type DebugRow = {
  label: string;
  isActive: boolean;
  borderBottom?: boolean;
};

export default function DebugTable({ optiState, state, isPending }: DebugTableProps) {
  // Define all status rows
  const statusRows: DebugRow[] = [
    { label: "Server Loading", isActive: isPending },
    { label: "Optimistic Liked", isActive: optiState.liked },
    { label: "Heart Bubbling", isActive: !!optiState.bubble },
    { label: "Confirm Liked", isActive: !isPending && state.liked }
  ];
  
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <h2 className="mb-2 text-lg font-semibold">Debug Information</h2>
      <table className="border-collapse border border-gray-300 w-64">
        <tbody>
          {statusRows.map((row, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="py-1 px-2 border-r border-gray-300 w-36">{row.label}:</td>
              <td className={`py-1 px-2 w-28 text-center font-bold ${row.isActive ? 'text-green-500' : 'text-gray-400'}`}>
                {row.isActive ? 'YES' : 'NO'}
              </td>
            </tr>
          ))}
          
          {state.error && (
            <tr>
              <td className="py-1 px-2 border-r border-gray-300 w-36">Optimistic Rollback:</td>
              <td className="py-1 px-2 w-28 text-center font-bold text-red-500">{state.error}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
} 