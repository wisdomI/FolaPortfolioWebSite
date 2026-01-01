import React from 'react';
import { 
  FaBriefcase, 
  FaMicrophone, 
  FaUsers, 
  FaStar, 
  FaGift, 
  FaBullseye, 
  FaLightbulb, 
  FaHandshake, 
  FaEnvelope, 
  FaBookOpen, 
  FaChartBar, 
  FaClipboard, 
  FaRocket, 
  FaMagic, 
  FaCheckCircle, 
  FaCode,
  FaLinkedin, 
  FaGithub 
} from 'react-icons/fa';

// Helper to wrap icons with consistent styling if needed, 
// though passing className directly to react-icons works well.

export const BriefcaseIcon = ({ className }: { className?: string }) => <FaBriefcase className={className} />;
export const MicrophoneIcon = ({ className }: { className?: string }) => <FaMicrophone className={className} />;
export const UsersIcon = ({ className }: { className?: string }) => <FaUsers className={className} />;
export const StarIcon = ({ className }: { className?: string }) => <FaStar className={className} />;
export const GiftIcon = ({ className }: { className?: string }) => <FaGift className={className} />;
export const TargetIcon = ({ className }: { className?: string }) => <FaBullseye className={className} />;
export const LightBulbIcon = ({ className }: { className?: string }) => <FaLightbulb className={className} />;
export const HandshakeIcon = ({ className }: { className?: string }) => <FaHandshake className={className} />;
export const EnvelopeIcon = ({ className }: { className?: string }) => <FaEnvelope className={className} />;
export const BookOpenIcon = ({ className }: { className?: string }) => <FaBookOpen className={className} />;
export const ChartBarIcon = ({ className }: { className?: string }) => <FaChartBar className={className} />;
export const ClipboardIcon = ({ className }: { className?: string }) => <FaClipboard className={className} />;
export const RocketIcon = ({ className }: { className?: string }) => <FaRocket className={className} />;
export const SparklesIcon = ({ className }: { className?: string }) => <FaMagic className={className} />; // Magic wand for sparkles
export const CheckCircleIcon = ({ className }: { className?: string }) => <FaCheckCircle className={className} />;
export const CodeIcon = ({ className }: { className?: string }) => <FaCode className={className} />;

// Social Media Icons
export const LinkedinIcon = ({ className }: { className?: string }) => <FaLinkedin className={className} />;
export const GithubIcon = ({ className }: { className?: string }) => <FaGithub className={className} />;
