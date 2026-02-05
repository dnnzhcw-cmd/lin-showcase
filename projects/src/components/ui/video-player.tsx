import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, AlertCircle } from 'lucide-react';

export interface VideoPlayerProps {
  src: string;
  webmSrc?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

export function VideoPlayer({ 
  src, 
  webmSrc, 
  poster, 
  autoPlay = false, 
  loop = false, 
  muted = false, 
  className = ""
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // 尝试播放，捕获可能的错误
        videoRef.current.play().catch((error) => {
          console.error('Video play error:', error);
          setHasError(true);
          setErrorMessage('无法自动播放视频，请点击播放按钮');
        });
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);
  
  const handleMuteToggle = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);
  
  const handleTimeUpdate = useCallback(() => {
    setIsControlsVisible(true);
    clearTimeout((window as any).controlsTimeout);
    (window as any).controlsTimeout = setTimeout(() => {
      setIsControlsVisible(false);
    }, 3000) as unknown as number;
  }, []);
  
  const handleLoadedData = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);
  
  const handleError = useCallback((event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video load error:', event);
    setIsLoading(false);
    setHasError(true);
    setErrorMessage('视频加载失败，请检查网络连接');
  }, []);
  
  const handleClick = useCallback(() => {
    // 点击视频区域时，确保控件可见
    setIsControlsVisible(true);
  }, []);
  
  return (
    <div className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      <div className="aspect-video bg-black p-4">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          onPlay={() => {
            setIsPlaying(true);
            setIsLoading(false);
          }}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedData={handleLoadedData}
          onError={handleError}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* 加载状态 */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
        
        {/* 错误状态 */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-8">
            <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
            <p className="text-white text-center mb-6">{errorMessage}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (videoRef.current) {
                  videoRef.current.play().catch((error) => {
                    console.error('Video play error:', error);
                    setErrorMessage('仍然无法播放，请刷新页面重试');
                  });
                  setIsPlaying(true);
                  setHasError(false);
                }
              }}
              className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
            >
              重试播放
            </button>
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {isControlsVisible && !hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col justify-end"
          >
            <div className="bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayPause();
                  }}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMuteToggle();
                  }}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
