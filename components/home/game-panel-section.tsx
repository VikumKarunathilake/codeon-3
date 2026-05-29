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

          {/* Mock Panel Content */}
          <div className="p-6 min-h-[300px] bg-gradient-to-br from-background to-secondary/20">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Server Status */}
              <div className="bg-secondary/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Server Online</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Players</span>
                    <span className="text-foreground">12/50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">RAM</span>
                    <span className="text-foreground">3.2/4 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CPU</span>
                    <span className="text-foreground">45%</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-secondary/30 rounded-xl p-4">
                <span className="text-sm font-medium text-foreground mb-4 block">Quick Actions</span>
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-green-500/20 text-green-400 text-xs py-2 px-3 rounded-lg hover:bg-green-500/30 transition-colors">
                    Start
                  </button>
                  <button className="bg-red-500/20 text-red-400 text-xs py-2 px-3 rounded-lg hover:bg-red-500/30 transition-colors">
                    Stop
                  </button>
                  <button className="bg-yellow-500/20 text-yellow-400 text-xs py-2 px-3 rounded-lg hover:bg-yellow-500/30 transition-colors">
                    Restart
                  </button>
                  <button className="bg-blue-500/20 text-blue-400 text-xs py-2 px-3 rounded-lg hover:bg-blue-500/30 transition-colors">
                    Backup
                  </button>
                </div>
              </div>

              {/* Console Preview */}
              <div className="bg-black/50 rounded-xl p-4 font-mono text-xs">
                <div className="text-green-400">[INFO] Server started</div>
                <div className="text-muted-foreground">[INFO] Loading world...</div>
                <div className="text-muted-foreground">[INFO] Preparing spawn</div>
                <div className="text-primary">[INFO] Player joined: Steve</div>
                <div className="text-primary">[INFO] Player joined: Alex</div>
                <div className="text-green-400 animate-pulse">_</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
