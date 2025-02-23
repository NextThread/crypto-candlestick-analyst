
import { useState } from "react";
import { ChartCandlestick } from "lucide-react";

const ChartUpload = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload here
  };

  return (
    <div
      className={`w-full max-w-2xl mx-auto mt-8 p-8 rounded-2xl transition-all duration-300 ${
        isDragging
          ? "bg-primary/10 border-primary/50"
          : "bg-white/5 border-gray-200/20"
      } border-2 border-dashed backdrop-blur-sm`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <ChartCandlestick size={48} className="text-primary" />
        <div>
          <h3 className="text-xl font-medium mb-2">Upload Chart</h3>
          <p className="text-sm text-gray-400">
            Drag and drop your chart image here, or{" "}
            <button className="text-primary hover:underline transition-all">
              browse
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartUpload;
