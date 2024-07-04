import WhiteTruckCard from "./WhiteTruckCard";

const WhiteTruckList = () => {
    const cards = [];
    for (let i = 0; i < 9; i++) {
        cards.push(<WhiteTruckCard key={i} />);
    }

    return (
        <div className="grid grid-cols-3 gap-12 my-12">
            {cards}
        </div>
    );
};

export default WhiteTruckList