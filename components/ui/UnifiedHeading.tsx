"use client"
import React, { useMemo } from 'react';
import { motion } from "framer-motion"
import { Sparkles, Star, Zap, Crown } from 'lucide-react';

interface UnifiedHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  variant?: 'hero' | 'section' | 'discover' | 'properties' | 'cities';
  className?: string;
  icon?: boolean;
  animated?: boolean;
  gradient?: string;
  align?: 'left' | 'center' | 'right';
}

const VARIANTS = {
  hero: {
    title: "text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white",
    subtitle: "text-lg md:text-xl lg:text-2xl font-light text-gray-100",
    icon: Crown
  },
  section: {
    title: "text-4xl md:text-5xl font-black leading-tight text-gray-900",
    subtitle: "text-base md:text-lg lg:text-xl font-light text-gray-600",
    icon: Star
  },
  discover: {
    title: "text-3xl md:text-4xl font-black tracking-tight text-gray-900",
    subtitle: "text-base md:text-lg font-light text-gray-600",
    icon: Sparkles
  },
  properties: {
    title: "text-3xl md:text-4xl font-black text-gray-[#38264a] tracking-tight",
    subtitle: "text-base md:text-lg font-light text-gray-600",
    icon: Zap
  },
  cities: {
    title: "text-3xl md:text-4xl font-black tracking-tight text-gray-900",
    subtitle: "text-base md:text-lg font-light text-gray-600",
    icon: Sparkles
  }
} as const;

const TitleRenderer = ({ title, gradient, animated }: { title: string; gradient: string; animated: boolean }) => {
  const parts = useMemo(() => title.split(/(\*\*.*?\*\*|~.*?~)/), [title]);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const text = part.slice(2, -2);
          return (
            <motion.span
              key={index}
              className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent relative inline-block`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {text}
              {animated && (
                <motion.div
                  className={`absolute w-[110px] -bottom-2 md:-bottom-3 start-0   h-1.5 md:h-2 bg-gradient-to-r ${gradient} rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                />
              )}
            </motion.span>
          );
        }

        if (part.startsWith('~') && part.endsWith('~')) {
          const text = part.slice(1, -1);
          return (
            <motion.span
              key={index}
              className="italic relative inline-block"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {text}
            </motion.span>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

const Badge = ({ badge, variant }: { badge: string; variant: string }) => {
  if (variant === 'properties') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative group w-fit"
      >
        <motion.div
          className="absolute -inset-2 bg-gold-gradient rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"
          animate={{ rotate: [0, 1, -1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="relative px-4 md:px-6 py-2 md:py-2.5 bg-gold-gradient text-white text-xs md:text-sm font-black rounded-xl flex items-center gap-2 shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
            initial={{ y: "100%" }}
            whileHover={{ y: "-100%" }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative z-10"
          >
            <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </motion.div>
          <span className="relative z-10 uppercase tracking-wide">{badge}</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="inline-flex items-center gap-2 bg-purple-50 px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-purple-100 shadow-sm"
    >
      <div className="w-1.5 h-1.5 bg-[#38264a] rounded-full animate-ping"></div>
      <span className="text-[#38264a] text-xs md:text-sm font-black uppercase tracking-widest">{badge}</span>
    </motion.div>
  );
};

const IconDecoration = ({ variant, icon, IconComponent }: { variant: string; icon: boolean; IconComponent: any }) => {
  if (!icon) return null;

  return (
    <motion.div
      initial={{ rotate: 0, scale: 0 }}
      whileInView={{ rotate: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
      whileHover={{ rotate: 5, scale: 1.05 }}
      className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#38264a] to-[#4a3359] rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/20"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </motion.div>
    </motion.div>
  );
};

const UnifiedHeading = ({
  title,
  subtitle,
  badge,
  variant = 'section',
  className = '',
  icon = true,
  animated = true,
  gradient = 'from-[#38264a] to-[#4a3359]',
  align = 'center'
}: UnifiedHeadingProps) => {
  const config = VARIANTS[variant];
  const IconComponent = config.icon;

  const alignmentClasses = {
    left: '  items-start',
    center: ' items-start',
    right: '  items-end'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`flex flex-col ${alignmentClasses[align]} gap-4 md:gap-5  ${className}`}
    >
      {/* Badge */}
      {badge && (
        <Badge badge={badge} variant={variant} />
      )}

      {/* Title with Icon */}
      <div className={`flex ${align === 'center' ? 'flex-col' : 'flex-row'}   gap-4 md:gap-5 w-full`}>
        {icon && align !== 'center' && (
          <IconDecoration variant={variant} icon={icon} IconComponent={IconComponent} />
        )}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className={`${config.title} text-start `}
        >
          <TitleRenderer title={title} gradient={gradient} animated={animated} />
        </motion.h2>

      </div>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
          className={`${config.subtitle}  text-start`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default UnifiedHeading;