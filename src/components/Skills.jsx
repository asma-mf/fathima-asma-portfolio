import { Code2, Globe, Layers, Database, Wrench } from "lucide-react";
const skillGroups = [{
  title: "Programming Languages",
  icon: Code2,
  items: [{
    name: "Java",
    level: 90
  }, {
    name: "SQL",
    level: 85
  }, {
    name: "JavaScript",
    level: 70
  }, {
    name: "C",
    level: 65
  }]
}, {
  title: "Web Technologies",
  icon: Globe,
  items: [{
    name: "HTML5",
    level: 90
  }, {
    name: "CSS3",
    level: 85
  }, {
    name: "JSP",
    level: 85
  }, {
    name: "Servlets",
    level: 80
  }]
}, {
  title: "Frameworks",
  icon: Layers,
  items: [{
    name: "Spring MVC",
    level: 85
  }, {
    name: "Spring Boot",
    level: 65
  }, {
    name: "Hibernate / JPA",
    level: 70
  }]
}, {
  title: "Databases",
  icon: Database,
  items: [{
    name: "SQL Server",
    level: 85
  }, {
    name: "MySQL",
    level: 80
  }, {
    name: "JDBC",
    level: 80
  }]
}, {
  title: "Tools",
  icon: Wrench,
  items: [{
    name: "Git & GitHub",
    level: 80
  }, {
    name: "Maven",
    level: 75
  }, {
    name: "IntelliJ IDEA",
    level: 80
  }, {
    name: "Eclipse",
    level: 75
  }, {
    name: "Postman",
    level: 75
  }]
}];
export function Skills() {
  return <section id="skills" className="py-24 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Skills & Technologies
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            My technical toolkit
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            A snapshot of the languages, frameworks, and tools I use to build reliable
            backend systems and full-stack web applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(g => {
          const Icon = g.icon;
          return <div key={g.title} className="p-6 rounded-2xl border border-border bg-card transition-smooth hover:shadow-elegant hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold">{g.title}</h3>
                </div>
                <div className="space-y-3.5">
                  {g.items.map(i => <div key={i.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="font-medium">{i.name}</span>
                        <span className="text-muted-foreground">{i.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all" style={{
                    width: `${i.level}%`
                  }} />
                      </div>
                    </div>)}
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}