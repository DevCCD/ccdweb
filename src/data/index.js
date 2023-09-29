import FacebookIcon from "../components/Icons/FacebookIcon"
import GmailIcon from "../components/Icons/GmailIcon"
import PlayIcon from "../components/Icons/Interface/PlayIcon"
import LinkedinIcon from "../components/Icons/LinkedinIcon"
import WhatsAppIcon from "../components/Icons/WhatsAppIcon"
import YoutubeIcon from "../components/Icons/YoutubeIcon"
import TwitterIcon from "../components/Icons/TwitterIcon"
import InstagramIcon from "../components/Icons/InstragramIcon"
import PhoneIcon from "../components/Icons/PhoneIcon"

export const contactNumber = 922753771
export const emailUrl = 'melissa.sanchez@competitividadccd.com'
export const linkedinUrl = 'https://www.linkedin.com/company/ccdcompetitividad/'
export const facebookUrl = 'https://www.facebook.com/profile.php?id=100063956947676'
export const youtubeUrl = 'https://www.youtube.com/@ccdcompetitividad'
export const twitterUrl = 'https://twitter.com/ccd_lima'
export const instagramUrl = 'https://instagram.com/'
export const phoneUrl = 922753771

export const socials = [
    {
        id: 1,
        icon: <FacebookIcon />,
        url: facebookUrl,
        description: 'Facebook'
    },
    {
        id: 2,
        icon: <GmailIcon />,
        url: `mailto:${emailUrl}`,
        description: 'Gmail'
    },
    {
        id: 3,
        icon: <LinkedinIcon />,
        url: linkedinUrl,
        description: 'Linkedin'
    },
    {
        id: 4,
        icon: <WhatsAppIcon />,
        url: `https://wa.me/${contactNumber}`,
        description: 'WhatsApp'
    },
    {
        id: 5,
        icon: <PhoneIcon />,
        url: `tel:${phoneUrl}`,
        description: 'Phone'
    },
    {
        id: 6,
        icon: <YoutubeIcon />,
        url: youtubeUrl,
        description: 'YouTube'
    },
    {
        id: 7,
        icon: <TwitterIcon />,
        url: twitterUrl,
        description: 'Twitter'
    },
    {
        id: 8,
        icon: <InstagramIcon />,
        url: instagramUrl,
        description: 'Instagram'
    },
]

export const people = [
    {
        id: 1,
        slug: 'rudy-laguna',
        imagen: 'rudy-laguna-portada.png',
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
    },
    {
        id: 2,
        slug: 'viviana-sanchez',
        imagen: 'viviana-sanchez-portada.png',
        nombre: 'Viviana',
        apellido: 'Sanchez',
        cargoSpanish: 'Directora en CCD',
        cargoEnglish: 'Director in CCD',
        fraseSpanish: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua."',
        fraseEnglish: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua."',
        parrafos: [
            {
                id: 1,
                es: 'Experiencia laboral en la Oficina Jurídica del Ministerio de Economía y Finanzas. Sólida experiencia en la elaboración y análisis legal del marco regulatorio en materia de inversiones, asociaciones público privadas, iniciativas privadas, obras por impuestos y comercio exterior.',
                en: 'Work experience in the Legal Office of the Ministry of Economy and Finance. Solid experience in the preparation and legal analysis of the regulatory framework in the areas of investments, public-private partnerships, private initiatives, tax works and foreign trade.'
            },
            {
                id: 2,
                es: 'Abogada de la Pontificia Universidad Católica Del Perú (PUCP), con maestría (LLM) en Georgetown University (EEUU)  y Post Grados en la Universidad de Salamanca (España), Universidad Adolfo Ibáñez (Chile), UPC, ESAN y GERENS (Perú).',
                en: 'Lawyer of the Pontifical Catholic University of Peru (PUCP), with a master’s degree (LLM) in Georgetown University (USA) and Postgraduate in the University of Salamanca (Spain), Adolfo Ibáñez University (Chile), UPC, ESAN and GERENS (Peru).'
            }
        ],
        celular: 927974418,
        email: 'forastero0225@gmail.com',
        linkedin: 'https://www.linkedin.com/in/rudy-laguna-0b0b4b1b/',
        facebook: 'https://www.facebook.com/rudy.laguna.7'
    }
]