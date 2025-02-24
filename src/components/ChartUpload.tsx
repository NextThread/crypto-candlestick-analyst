
import { useState, useRef } from "react";
import { ChartCandlestick, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { analyzeCrypto } from "@/utils/cryptoAnalysis";

const ChartUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

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
    const file = e.dataTransfer.files[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const processImageFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleAnalyze = async () => {
    if (!previewUrl) {
      toast({
        title: "No chart uploaded",
        description: "Please upload a chart image first",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      // For demo purposes, we'll analyze Bitcoin. In a real app, you'd analyze the chart image
      const analysis = await analyzeCrypto("bitcoin");
      if (analysis) {
        toast({
          title: "Analysis Complete",
          description: "Check the results below",
        });
      }
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Unable to analyze the chart",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement("canvas");
      canvas.width = 640;
      canvas.height = 480;
      const context = canvas.getContext("2d");

      setTimeout(() => {
        context?.drawImage(video, 0, 0, canvas.width, canvas.height);
        setPreviewUrl(canvas.toDataURL("image/png"));
        stream.getTracks().forEach((track) => track.stop());
      }, 2000);
    } catch (err) {
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please use file upload instead.",
        variant: "destructive",
      });
    }
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
        {previewUrl ? (
          <div className="w-full max-w-md space-y-4">
            <img
              src={previewUrl}
              alt="Chart preview"
              className="w-full h-auto rounded-lg"
            />
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setPreviewUrl(null)}
                className="px-4 py-2 text-red-500 hover:text-red-400 transition-colors"
              >
                Remove Image
              </button>
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className={`px-6 py-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors ${
                  isAnalyzing ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Chart"}
              </button>
            </div>
          </div>
        ) : (
          <>
            <ChartCandlestick size={48} className="text-primary" />
            <div>
              <h3 className="text-xl font-medium mb-2">Upload Chart</h3>
              <p className="text-sm text-gray-400">
                Drag and drop your chart image here, or{" "}
                <button
                  className="text-primary hover:underline transition-all"
                  onClick={() => fileInputRef.current?.click()}
                >
                  browse
                </button>
              </p>
              <div className="mt-4 flex gap-4 justify-center">
                <button
                  onClick={handleCameraCapture}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <Camera size={20} />
                  Use Camera
                </button>
              </div>
            </div>
          </>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileInput}
        />
      </div>
    </div>
  );
};

export default ChartUpload;
