// Maps string icon names used in data files to lucide-react components.
import {
  Database, Mail, MailCheck, ShieldCheck, BadgeCheck, Sparkles, Target, Filter,
  RefreshCw, Search, Layers, Globe, CalendarDays, CalendarCheck, Ticket, Users,
  UserCheck, Building2, Briefcase, MapPin, Megaphone, Send, Rocket, Headphones,
  TrendingUp, LineChart, BarChart3, PieChart, Gauge, CheckCircle2, Zap, Boxes,
  Network, Handshake, Phone, FileCheck2, Clock, Award, Star, Presentation,
} from 'lucide-react'

export const icons = {
  Database, Mail, MailCheck, ShieldCheck, BadgeCheck, Sparkles, Target, Filter,
  RefreshCw, Search, Layers, Globe, CalendarDays, CalendarCheck, Ticket, Users,
  UserCheck, Building2, Briefcase, MapPin, Megaphone, Send, Rocket, Headphones,
  TrendingUp, LineChart, BarChart3, PieChart, Gauge, CheckCircle2, Zap, Boxes,
  Network, Handshake, Phone, FileCheck2, Clock, Award, Star, Presentation,
}

export function getIcon(name) {
  return icons[name] || Sparkles
}

export default getIcon
