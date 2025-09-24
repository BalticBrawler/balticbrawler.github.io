import RulesPackList from "../../components/RulesPackList";

function TournamentSchedule() {
    const saturday = [
        {
            header: "08:15 - 08:45",
            value: "Check In",
        },
        {
            header: "08:45 - 09:00",
            value: "Begrüßung",
        },
        {
            header: "09:00 - 12:15",
            value: "Spiel 1",
        },
        { header: "12:15 - 13:15", value: "Mittagspause" },
        {
            header: "13:15 - 16:30",
            value: "Spiel 2",
        },
        {
            header: "16:30 - 17:00",
            value: "Pause",
        },
        {
            header: "17:00 - 20:15",
            value: "Spiel 3",
        },
        {
            header: "20:30 - 20:45",
            value: "Siegerehrung",
        },
    ];

    return <RulesPackList tableContent={saturday}></RulesPackList>;
}

export default TournamentSchedule;
