const modpacks = [
  "RLCraft", "SkyFactory 4", "Pixelmon", "All the Mods 9", 
  "Better MC", "Cobblemon", "Create: Above", "Valhelsia",
  "FTB Ultimate", "MC Eternal", "DarkRPG", "Crazy Craft",
];

export function ModpacksSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center mb-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          All your favorite modpacks
        </h2>
        <p className="text-muted-foreground">
          CodeOn supports over 15,000 different modpacks that you can install with just one click
        </p>
      </div>

      {/* Scrolling modpacks */}
      <div className="relative">
        <div className="flex gap-4 animate-marquee">
          {[...modpacks, ...modpacks].map((modpack, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-32 h-32 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary/50 transition-all group"
            >
              <div className="text-center p-2">
                <div className="w-12 h-12 bg-secondary rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-lg">📦</span>
                </div>
                <span className="text-xs text-muted-foreground line-clamp-2">{modpack}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
