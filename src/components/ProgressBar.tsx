import React from 'react';

interface ProgressBarProps {
  progress?: number;
  milestones?: {
    label: string;
    position: number;
    color: string;
  }[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress = 65, 
  milestones = [
    { label: 'PRE SELL', position: 0, color: 'accent-cyan' },
    { label: 'SOFT CAP', position: 50, color: 'accent-orange' },
    { label: 'BONUS', position: 100, color: 'accent-green' }
  ]
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Milestone Labels */}
      <div className="relative">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2"
            style={{ left: `${milestone.position}%` }}
          >
            <div className={`text-sm font-bold text-${milestone.color} uppercase tracking-wider`}>
              {milestone.label}
            </div>
          </div>
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="relative mt-8">
        <div 
          className="progress-bar w-full"
          style={{ '--progress': `${progress}%` } as React.CSSProperties}
        >
          <div className="progress-indicator"></div>
        </div>
        
        {/* Milestone Markers */}
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 border-2 border-crypto-dark rounded-full"
            style={{ 
              left: `${milestone.position}%`,
              backgroundColor: `hsl(var(--accent-${milestone.color.split('-')[1]}))`
            }}
          />
        ))}
      </div>
      
      {/* Progress Text */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-text-primary font-bold">
          {progress}% TARGET RAISED
        </span>
        <span className="text-text-secondary">
          1 ETH = $1000 = 3177.38 CIC
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;