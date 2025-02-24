
import { useState, useRef, useEffect } from "react";
import { ChartCandlestick, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ANALYSIS_LIMIT = 3;
const ANALYSIS_COUNT_KEY = "analysisCount";

const ChartUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analysisCount, setAnalysisCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const storedCount = localStorage.getItem(ANALYSIS_COUNT_KEY);
    if (storedCount) {
      setAnalysisCount(parseInt(storedCount));
    }
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (analysisCount >= ANALYSIS_LIMIT) return;
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (analysisCount >= ANALYSIS_LIMIT) {
      toast({
        title: "Analysis Limit Reached",
        description: "Please subscribe to analyze more charts",
        variant: "destructive",
      });
      return;
    }
    const file = e.dataTransfer.files[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (analysisCount >= ANALYSIS_LIMIT) {
      toast({
        title: "Analysis Limit Reached",
        description: "Please subscribe to analyze more charts",
        variant: "destructive",
      });
      return;
    }
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

  const handleCameraCapture = async () => {
    if (analysisCount >= ANALYSIS_LIMIT) {
      toast({
        title: "Analysis Limit Reached",
        description: "Please subscribe to analyze more charts",
        variant: "destructive",
      });
      return;
    }

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
      className={`w-full max-w-4xl mx-auto mt-8 p-8 rounded-2xl transition-all duration-300 ${
        isDragging
          ? "bg-primary/10 border-primary/50"
          : "bg-white/5 border-gray-200/20"
      } border-2 border-dashed backdrop-blur-sm ${
        analysisCount >= ANALYSIS_LIMIT ? "opacity-50 pointer-events-none" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {previewUrl ? (
        <div className="flex gap-8 items-center">
          <div className="flex-1">
            <img
              src={previewUrl}
              alt="Chart preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <button
            onClick={() => setPreviewUrl(null)}
            className="px-4 py-2 text-red-500 hover:text-red-400 transition-colors"
          >
            Remove Image
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-8">
          <div className="flex-1 flex items-center gap-4">
            <ChartCandlestick size={32} className="text-primary" />
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-1">Upload Chart</h3>
              <p className="text-sm text-gray-400">
                {analysisCount >= ANALYSIS_LIMIT ? (
                  "Analysis limit reached. Please subscribe to continue."
                ) : (
                  <>
                    Drag and drop your chart image here, or{" "}
                    <button
                      className="text-primary hover:underline transition-all"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      browse
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
          <button
            onClick={handleCameraCapture}
            disabled={analysisCount >= ANALYSIS_LIMIT}
            className={`flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors ${
              analysisCount >= ANALYSIS_LIMIT ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Camera size={20} />
            Use Camera
          </button>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileInput}
      />
    </div>
  );
};

export default ChartUpload;

