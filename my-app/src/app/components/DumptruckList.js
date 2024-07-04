import DumptruckCard from "./DumptruckCard";

const DumptruckList = () => {
    const cards = [];
    for (let i = 0; i < 5; i++) {
        cards.push(<DumptruckCard key={i} />);
    }

    return (
        <div className="flex-col">
            {cards}
        </div>
    );
};

export default DumptruckList