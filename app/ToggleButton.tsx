"use client";

export default function ToggleButton({ isToggled, setIsToggled, onLabel, offLabel, className }: { isToggled: boolean, setIsToggled: (toggled: boolean) => void, onLabel?: string, offLabel?: string, className?: string }) {


  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => setIsToggled(!isToggled)}
        className={`
          relative inline-flex items-center border border-gray-300
          rounded-full h-[22px] w-10 px-[3px] transition-colors duration-300 ease-in-out
          ${isToggled ? 'bg-green-100' : 'bg-gray-200'}
        `}
        aria-pressed={isToggled}
        type="button"
      >
        <span className="sr-only">Toggle Debug Mode</span>
        <span
          className={`
            absolute inline-block h-4 w-4 transform rounded-full shadow transition-transform duration-300 ease-in-out
            ${isToggled ? 'translate-x-4 bg-green-600' : 'translate-x-0 bg-gray-400'}
          `}
        />
      </button>
      <span className="text-sm font-medium text-gray-700">
        {isToggled ? onLabel || 'ON' : offLabel || 'OFF'}
      </span>
    </div>
  );
} 