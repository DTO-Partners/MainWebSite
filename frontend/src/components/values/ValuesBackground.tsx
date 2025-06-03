import { motion } from 'framer-motion';

export function ValuesBackground() {
  return (
    <>
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-[#daa520]/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-[#fff7d4]/15 to-transparent rounded-full blur-2xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-radial from-[#daa520]/10 to-transparent rounded-full blur-xl"
          animate={{ 
            x: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>
      
      {/* Enhanced grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #daa520 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px', '0px 0px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#daa520]/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 10,
            }}
            animate={{
              y: -10,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    </>
  );
}