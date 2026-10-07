import { GlobeIcon, LightningIcon, ShieldIcon } from "../components/Icons";
import { FEATURES_DATA } from "../data/SiteData";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const getIcon = (type) => {
    switch (type) {
      case "lightning":
        return <LightningIcon />;
      case "shield":
        return <ShieldIcon />;
      case "globe":
        return <GlobeIcon />;
      default:
        return null;
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {FEATURES_DATA.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={getIcon(feature.iconType)}
        />
      ))}
    </section>
  );
}
