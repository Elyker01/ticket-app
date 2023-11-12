import PriorityDisplay from "./(components)/PriorityDisplay";
import ProgressDisplay from "./(components)/ProgressBar";
import StatusDisplay from "./(components)/StatusDisplay";
import TicketCard from "./(components)/TicketCard";
import DeleteBlock from "./(components)/deleteBlock";
const Dashboard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <TicketCard />
    </div>
  );
};

export default Dashboard;
