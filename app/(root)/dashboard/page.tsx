import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";

const Home = () => {
  const loggedIn = { firstName: "Declan", lastName: "Jasmin", email: "jasdeclan@typebank.io" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions in one dashboard efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={3540.65}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSideBar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50}]}
      />
    </section>
  );
};

export default Home;
