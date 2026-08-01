import { Sparkles } from 'lucide-react';

const PageHeader = ({ icon: Icon = Sparkles, title, subtitle, gradient = true }) => {
  return (
    <header className="page-header-animated">
      <div className="page-header-icon-ring">
        <Icon size={22} className="page-header-icon" />
      </div>
      <h1 className={gradient ? 'text-gradient text-3d' : 'text-3d'}>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
};

export default PageHeader;
