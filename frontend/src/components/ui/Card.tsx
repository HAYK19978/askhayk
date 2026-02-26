type Props = {
    title: string;
    description: string;
  };
  
  export default function Card({ title, description }: Props) {
    return (
      <div className="group p-8 rounded-xl transition duration-300
        bg-[rgb(var(--color-surface))]
        border border-[rgb(var(--color-border))]
        hover:-translate-y-1 transform
        hover:border-black/30 dark:hover:border-white/30
        hover:shadow-sm
      ">
        <h3 className="text-xl font-medium mb-3">{title}</h3>
  
        <p className="text-sm text-[rgb(var(--color-text-muted))] leading-relaxed">
          {description}
        </p>
      </div>
    );
  }