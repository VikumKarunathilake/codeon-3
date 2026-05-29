import { 
  Puzzle, 
  RefreshCw, 
  BookOpen, 
  Package, 
  HardDrive, 
  Layers, 
  ArrowRightLeft, 
  Wrench 
} from "lucide-react";

const features = [
  { icon: Puzzle, title: "Plugins", description: "Over 15,000 plugins to run your Minecraft server." },
  { icon: RefreshCw, title: "Automations", description: "Setup automations for backups and other server features." },
  { icon: BookOpen, title: "Knowledgebase", description: "Learn from 300+ articles written by Minecraft professionals." },
  { icon: Package, title: "Modpacks", description: "10,000+ modpacks from Modrinth & Curseforge." },
  { icon: HardDrive, title: "Backups", description: "Automated server backups to keep your world safe." },
  { icon: Layers, title: "Instances", description: "Save your progress and switch between multiple server setups." },
  { icon: ArrowRightLeft, title: "Version Changer", description: "Switch between server versions and types any time." },
  { icon: Wrench, title: "Minecraft Tools", description: "Use built-in quality-of-life features like MOTD Editor and more." },
];

export function ServerManagerSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Your ultimate server manager
        </h2>
        <p className="text-muted-foreground">
          Advanced tools to manage, customize, and create your server
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all group"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <feature.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
