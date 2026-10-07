// Reusable FeatureCard Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-card-white p-6 rounded-2xl border border-black/5 flex flex-col items-start gap-3">
    <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green">
      {icon}
    </div>
    <h3 className="font-bold text-lg text-text-dark">{title}</h3>
    <p className="text-sm text-text-dark/70 leading-relaxed">{description}</p>
    <div className="w-full h-[1px] bg-text-dark/10 mt-2" />
  </div>
);

export default FeatureCard;
