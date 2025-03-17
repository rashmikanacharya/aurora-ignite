
import React from 'react';

type AnimatedTextProps = {
  text: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  // Split the text by spaces to animate each word separately
  const words = text.split(' ');
  
  return (
    <div className="inline-block">
      {words.map((word, index) => (
        <span key={index} className="inline-block">
          <span 
            className={`inline-block text-shimmer fade-in`}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              animation: `fadeIn 0.8s forwards ${index * 0.1}s, textShimmer 6s infinite linear ${index * 0.1}s`
            }}
          >
            {word}
          </span>
          {index < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
