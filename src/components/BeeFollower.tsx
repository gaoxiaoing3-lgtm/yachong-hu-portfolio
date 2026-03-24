import { useEffect, useRef, useState } from 'react';

interface BeePosition {
  x: number;
  y: number;
}

export function BeeFollower() {
  const beeRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<BeePosition>({ x: 100, y: 100 });
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<BeePosition>({ x: 100, y: 100 });
  const animationRef = useRef<number>();

  useEffect(() => {
    // 延迟显示蜜蜂，避免页面加载时的突兀
    const timer = setTimeout(() => setIsVisible(true), 1000);

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      setPosition(prev => {
        const dx = targetRef.current.x - prev.x;
        const dy = targetRef.current.y - prev.y;
        
        // 平滑跟随，使用缓动效果
        const ease = 0.08;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease
        };
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // 计算蜜蜂旋转角度
  const rotation = Math.atan2(
    targetRef.current.y - position.y,
    targetRef.current.x - position.x
  ) * (180 / Math.PI);

  if (!isVisible) return null;

  return (
    <div
      ref={beeRef}
      className="fixed pointer-events-none z-[9999] transition-opacity duration-500"
      style={{
        left: position.x - 20,
        top: position.y - 20,
        transform: `rotate(${rotation + 90}deg)`,
      }}
    >
      {/* 蜜蜂 SVG */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="animate-pulse"
      >
        {/* 翅膀 - 左 */}
        <ellipse
          cx="12"
          cy="15"
          rx="8"
          ry="12"
          fill="rgba(255, 255, 255, 0.8)"
          stroke="#ddd"
          strokeWidth="0.5"
          className="origin-center animate-[wing-flap_0.1s_ease-in-out_infinite]"
          style={{ transformOrigin: '12px 20px' }}
        />
        {/* 翅膀 - 右 */}
        <ellipse
          cx="28"
          cy="15"
          rx="8"
          ry="12"
          fill="rgba(255, 255, 255, 0.8)"
          stroke="#ddd"
          strokeWidth="0.5"
          className="origin-center animate-[wing-flap_0.1s_ease-in-out_infinite_reverse]"
          style={{ transformOrigin: '28px 20px' }}
        />
        
        {/* 身体 */}
        <ellipse
          cx="20"
          cy="22"
          rx="8"
          ry="12"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="1"
        />
        
        {/* 黑色条纹 */}
        <rect x="15" y="18" width="10" height="3" fill="#333" rx="1" />
        <rect x="16" y="23" width="8" height="3" fill="#333" rx="1" />
        
        {/* 眼睛 */}
        <circle cx="17" cy="16" r="2" fill="#333" />
        <circle cx="23" cy="16" r="2" fill="#333" />
        <circle cx="17.5" cy="15.5" r="0.8" fill="#fff" />
        <circle cx="23.5" cy="15.5" r="0.8" fill="#fff" />
        
        {/* 触角 */}
        <path
          d="M17 12 Q15 8 13 6"
          stroke="#333"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M23 12 Q25 8 27 6"
          stroke="#333"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* 尾刺 */}
        <path
          d="M20 34 L18 38 L22 38 Z"
          fill="#333"
        />
      </svg>
    </div>
  );
}
