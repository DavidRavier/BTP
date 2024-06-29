import WhiteTruckCard from "./WhiteTruckCard";

const WhiteTruckList = () => {
    const cards = [];
    for (let i = 0; i < 9; i++) {
        cards.push(<WhiteTruckCard key={i} />);
    }

    return (
        <div className="white-truck-list">
            {cards}
        </div>
    );
};

export default WhiteTruckList