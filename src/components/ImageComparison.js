import { useState } from "react";
import { GripVertical } from "lucide-react";

function ImageComparison({ beforeImage, afterImage, beforeLabel, afterLabel }) {
  const [inset, setInset] = useState(50);
  const [onMouseDown, setOnMouseDown] = useState(false);

  const onMouseMove = (e) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if (e.clientX !== undefined) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none border border-purple-500/20 bg-black"
      onMouseMove={onMouseMove}
      onMouseUp={() => setOnMouseDown(false)}
      onTouchMove={onMouseMove}
      onTouchEnd={() => setOnMouseDown(false)}
    >
      {/* Slider Line */}
      <div
        className="bg-gradient-to-b from-purple-500 to-pink-500 h-full w-1 absolute z-20 top-0 -ml-1 select-none shadow-lg shadow-purple-500/50"
        style={{
          left: inset + "%",
        }}
      >
        {/* Slider Handle */}
        <button
          className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-full hover:scale-110 transition-all w-12 h-12 select-none -translate-y-1/2 absolute top-1/2 -ml-6 z-30 cursor-ew-resize flex justify-center items-center shadow-lg shadow-purple-500/50 border-2 border-white/20"
          onTouchStart={(e) => {
            setOnMouseDown(true);
            onMouseMove(e);
          }}
          onMouseDown={(e) => {
            setOnMouseDown(true);
            onMouseMove(e);
          }}
          onTouchEnd={() => setOnMouseDown(false)}
          onMouseUp={() => setOnMouseDown(false)}
        >
          <GripVertical className="h-5 w-5 select-none text-white" />
        </button>
      </div>

      {/* After Image (Right side) */}
      <div className="absolute left-0 top-0 w-full h-full">
        <img
          src={afterImage}
          alt={afterLabel || "After"}
          className="absolute left-0 top-0 z-10 w-full h-full object-cover rounded-2xl select-none"
          style={{
            clipPath: "inset(0 0 0 " + inset + "%)",
          }}
          draggable="false"
        />
        {/* After Label */}
        {afterLabel && (
          <div 
            className="absolute top-4 right-4 z-10 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-semibold font-orbitron shadow-lg"
            style={{
              opacity: inset < 90 ? 1 : 0,
              transition: 'opacity 0.2s'
            }}
          >
            {afterLabel}
          </div>
        )}
      </div>

      {/* Before Image (Left side) */}
      <div className="absolute left-0 top-0 w-full h-full">
        <img
          src={beforeImage}
          alt={beforeLabel || "Before"}
          className="absolute left-0 top-0 w-full h-full object-cover rounded-2xl select-none"
          draggable="false"
        />
        {/* Before Label */}
        {beforeLabel && (
          <div 
            className="absolute top-4 left-4 z-10 px-4 py-2 bg-gray-800/90 border border-purple-500/30 rounded-lg text-white text-sm font-semibold font-orbitron shadow-lg"
            style={{
              opacity: inset > 10 ? 1 : 0,
              transition: 'opacity 0.2s'
            }}
          >
            {beforeLabel}
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageComparison;
