import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { NavItem } from '@/hooks/useNavbar';

interface NavbarMenuProps {
  navItems: NavItem[];
  isScrolled?: boolean;
  className?: string;
  onItemClick?: () => void;
}

export function NavbarMenu({ navItems, className = "", onItemClick }: NavbarMenuProps) {
  return (
    <motion.ul 
      className={`flex gap-1 text-sm font-medium tracking-wide ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
    >
      {navItems.map((link, index) => (
        <motion.li 
          key={link.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            to={link.id}
            smooth={true}
            duration={800}
            offset={-100}
            onClick={onItemClick}
            className="relative group px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer block"
          >
            {/* Text content */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#daa520] text-white/90 group-hover:text-white">
              {link.label}
            </span>
            
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#daa520]/10 via-[#daa520]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
            
            {/* Enhanced underline effect */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#daa520] to-transparent transition-all duration-400 rounded-full" />
            
            {/* Side accent */}
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-0 group-hover:w-1 h-0 group-hover:h-6 bg-gradient-to-b from-[#daa520] to-[#fff7d4] transition-all duration-300 rounded-full" />
            
            {/* Hover shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-xl" />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
