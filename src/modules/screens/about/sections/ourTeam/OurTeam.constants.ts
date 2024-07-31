export interface TeamProps {
    name: string;
    function: string;
    photo: string;
}

const list: TeamProps[] = [
    {
        name: 'Juan Gonzalez',
        function: 'CEO & Founder',
        photo: 'juan.png',
    },
    {
        name: 'Vitor Barros',
        function: 'CTO',
        photo: 'vitor.png',
    },
    {
        name: 'Claudia Gonzales',
        function: 'CMO',
        photo: 'claudia.jpg',
    },
    {
        name: 'Anna Carolina',
        function: 'CFO',
        photo: 'anna.jpeg',
    },
    {
        name: 'Alana Carvalho',
        function: 'CSO',
        photo: 'alana.png',
    },
    {
        name: 'Luis Moreno',
        function: 'Sales Specialist',
        photo: 'luis.jpg',
    },
    {
        name: 'Micaio Valente',
        function: 'Full-Stack',
        photo: 'micaio.png',
    },
    {
        name: 'Felipe Rocha',
        function: 'Front-End',
        photo: 'felipe.png',
    },
    {
        name: 'Jessica Lima',
        function: 'Researcher & Designer',
        photo: 'jessica.png',
    },
];

export { list };
