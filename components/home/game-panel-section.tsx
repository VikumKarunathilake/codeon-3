import { 
  Settings, 
  Users, 
  Download, 
  Shield, 
  Database, 
  Terminal,
  Blocks,
  Puzzle
} from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Console",
    description: "Run any command",
  },
  {
    icon: Puzzle,
    title: "Any Jar & Plugin",
    description: "Install anything",
  },
  {
    icon: Download,
    title: "One-Click Installer",
    description: "Easy setup",
  },
  {
    icon: Users,
    title: "Live Player Manager",
    description: "Real-time control",
  },
  {
    icon: Database,
    title: "Backups",
    description: "Auto & manual",
  },
  {
    icon: Terminal,
    title: "24/7 Support",
    description: "Always here",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Stay secure",
  },
  {
    icon: Blocks,
    title: "20+ Versions",
    description: "All supported",
  },
];

export function GamePanelSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the CodeOn Game Panel
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Manage, edit and control everything about your Minecraft server.
          </p>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-2 bg-secondary/50 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground">{feature.title}</span>
              </div>
            );
          })}
        </div>

        {/* Panel Preview */}
        <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
          {/* Mock Panel Header */}
          <div className="bg-secondary/30 border-b border-border px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-sm text-muted-foreground">CodeOn Panel - My Server</span>
          </div>

          {/* Panel Preview Image */}
          <div className="relative bg-background">
            <img
              src="/dash.png"
              alt="CodeOn Game Panel Dashboard"
              className="w-full h-auto select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
