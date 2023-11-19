import AnalyticsSection from "@/components/analytics-section/analytics-section";
import TransactionsSection from "@/components/transactions-section/transactions-section";

const PageTemplate: React.FC = () => {
  return (
    <>
      <AnalyticsSection />
      <TransactionsSection />
    </>
  );
};

export default PageTemplate;
