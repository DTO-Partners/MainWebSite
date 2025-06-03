export function ValuesBackground() {
  return (
    <>
      {/* Static background elements - performance optimized */}
      <div className="absolute inset-0 opacity-30">
        {/* Primary gradient orb */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-[#daa520]/20 to-transparent rounded-full blur-3xl" />
        
        {/* Secondary gradient orb */}
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-[#fff7d4]/15 to-transparent rounded-full blur-2xl" />
        
        {/* Tertiary gradient orb */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-radial from-[#daa520]/10 to-transparent rounded-full blur-xl" />
      </div>
      
      {/* Static grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #daa520 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Static decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-[#daa520]/20 rounded-full" />
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-[#daa520]/15 rounded-full" />
        <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-[#fff7d4]/20 rounded-full" />
      </div>
    </>
  );
}