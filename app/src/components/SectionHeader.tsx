interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16 md:mb-20">
      <h2 className="font-serif text-4xl md:text-5xl font-medium gradient-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="h-px w-16 mx-auto mt-6 bg-gradient-to-r from-transparent via-violet/50 to-transparent" />
    </div>
  );
};

export default SectionHeader;
