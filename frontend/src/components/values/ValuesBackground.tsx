export function ValuesBackground() {
  return (
    <>
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-40">
        {/* Primary gradient orb - enhanced */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#daa520]/25 via-[#daa520]/10 to-transparent rounded-full blur-3xl" />
        
        {/* Secondary gradient orb - enhanced */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-[#fff7d4]/20 via-[#fff7d4]/5 to-transparent rounded-full blur-2xl" />
        
        {/* Tertiary gradient orb - enhanced */}
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-radial from-[#daa520]/15 to-transparent rounded-full blur-xl" />
        
        {/* Additional accent orbs */}
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-gradient-radial from-[#fff7d4]/15 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/2 w-48 h-48 bg-gradient-radial from-[#daa520]/20 to-transparent rounded-full blur-xl" />
      </div>
      
      {/* Enhanced grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #daa520 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Additional decorative pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(45deg, #daa520 1px, transparent 1px),
                           linear-gradient(-45deg, #fff7d4 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-[#daa520]/30 rotate-45" />
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-[#fff7d4]/25 rounded-full" />
        <div className="absolute bottom-1/4 right-1/5 w-4 h-1 bg-[#daa520]/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-1 h-4 bg-[#fff7d4]/20 rounded-full" />
        
        {/* Corner accents */}
        <div className="absolute top-8 right-8 w-12 h-12 border border-[#daa520]/15 rotate-45" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border border-[#fff7d4]/15 rounded-full" />
      </div>
    </>
  );
}