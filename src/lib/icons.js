// Maps string icon names (used inside data files) to lucide-react components,
// so content authored as plain data can reference icons without importing them.
import {
  Database, Mail, ShieldCheck, Sparkles, Target, TrendingUp, Users, Filter,
  RefreshCw, Search, Layers, Globe, BarChart3, Zap, CheckCircle2, Phone,
  Building2, Briefcase, HeartPulse, Landmark, Cpu, LineChart, Megaphone,
  CalendarClock, Workflow, UserCheck, MailCheck, FileCheck2, Gauge, Boxes,
  Network, Rocket, Headphones, PieChart, Stethoscope, Factory, ShoppingCart,
  Plane, GraduationCap, Banknote, Fuel, Home, Wrench, Wifi, Truck,
  // Event-domain icons
  Calendar, CalendarDays, Ticket, Mic, Presentation, MapPin, Tent, Award,
  Star, Handshake, UserPlus, Radio, Clock, Store, Camera, Compass, Send,
  Tag, BadgeCheck, Contact, Newspaper, MonitorPlay, PartyPopper, Building,
} from 'lucide-react'

export const icons = {
  Database, Mail, ShieldCheck, Sparkles, Target, TrendingUp, Users, Filter,
  RefreshCw, Search, Layers, Globe, BarChart3, Zap, CheckCircle2, Phone,
  Building2, Briefcase, HeartPulse, Landmark, Cpu, LineChart, Megaphone,
  CalendarClock, Workflow, UserCheck, MailCheck, FileCheck2, Gauge, Boxes,
  Network, Rocket, Headphones, PieChart, Stethoscope, Factory, ShoppingCart,
  Plane, GraduationCap, Banknote, Fuel, Home, Wrench, Wifi, Truck,
  Calendar, CalendarDays, Ticket, Mic, Presentation, MapPin, Tent, Award,
  Star, Handshake, UserPlus, Radio, Clock, Store, Camera, Compass, Send,
  Tag, BadgeCheck, Contact, Newspaper, MonitorPlay, PartyPopper, Building,
}

export function getIcon(name) {
  return icons[name] || Sparkles
}
