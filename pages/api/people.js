
const people = [
    {
        id: 1,
        slug: 'rudy-laguna',
        imagen: 'rudy-laguna-portada.jpg',
        nombre: 'Rudy',
        apellido: 'Laguna',
        cargoSpanish: 'Director General del CCD',
        cargoEnglish: 'General Director of CCD',
        fraseSpanish: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua."',
        fraseEnglish: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua."',
        parrafos: [
            {
                id: 1,
                es: 'Director del CCD y de Electro Sur Este. Ha sido presidente del Comité Pro Conectividad de Proinversión, consultor del Ministerio de Economía y Finanzas y co-líder en proyectos de investigación en tributación y política fiscal para países de América Latina por el Banco Interamericano de Desarrollo (BID).',
                en: 'Director of CCD and Electro Sur Este. He has been president of the Proinversion Connectivity Committee, consultant to the Ministry of Economy and Finance and co-leader in research projects on taxation and fiscal policy for countries in Latin America by the Inter-American Development Bank (BID).'
            },
            {
                id: 2,
                es: 'Ingeniero Economista por la Universidad Nacional de Ingeniería y ha realizado estudios de posgrado obteniendo el título de Máster en Tributación y Política Fiscal por la Universidad Autónoma de Madrid y la Universidad de Lima.',
                en: 'Economist Engineer by the National University of Engineering and has postgraduate studies obtaining the title of Master in Taxation and Fiscal Policy by the Autonomous University of Madrid and the University of Lima.'
            }
        ],
        celular: 927974418,
        email: 'forastero0225@gmail.com',
        linkedin: 'https://www.linkedin.com/in/rudy-laguna-0b0b4b1b/',
        facebook: 'https://www.facebook.com/rudy.laguna.7'
    }
]

const getPeopleHandler = async (req, res) => {
    res.status(200).json({ text: "Powered by Almeyda 🤨" });
}

export default getPeopleHandler;