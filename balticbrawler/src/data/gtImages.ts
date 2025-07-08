import LocationImage from "./LocationImage";

const gtImages : LocationImage[] = [
    {
        title: "Möwenbräu (Baltic Festsaal)",
        description: "Der Saal bietet genügend Platz und eine Leinwand, um euch die Pairings und die verbleibende Rundenzeit anzuzeigen",
        images: [...Array(6).keys()].map(x => ({src: `/locationImages/Major/Saal${x+1}.jpg`, maxWidth:"100%"})) 
    },
    // {
    //     title: "Tageszentrum (Raum Schleswig-Holstein )", // RTT/Ironman
    //     description: "Der Saal bietet genügend Platz und eine Leinwand, um euch die Pairings und die verbleibende Rundenzeit anzuzeigen",
    //     images: [...Array(6).keys()].map(x => ({src: `/locationImages/Major/Saal${x+1}.jpg`, maxWidth:"100%"})) 
    // },
    {
        title: "Die Umgebung",
        description: "In den Pausen könnt ihr euch auf dem Gelände erholen und z.B. in der Beach Lounge chillen.",
        images: [...Array(2).keys()].map(x => ({src: `/locationImages/Major/Umgebung${x+1}.jpg`, maxWidth:"100%"})) 
    },
    {
        title: "Das Restaurant",
        description: "Das Mittagessen könnt ihr im Restaurant oder auch auf der Terasse zur euch nehmen.",
        images: [...Array(4).keys()].map(x => ({src: `/locationImages/Major/Restaurant${x+1}.jpg`, maxWidth:"100%"})) 
    },
];

export default gtImages;